import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { extname, join, relative, sep } from 'path';

// User-attached text/script files (e.g. .hps) can be many thousands of lines.
// Inlining them into the prompt exhausts the model context, so instead we
// persist them to a per-thread temp directory and let the agent retrieve only
// the relevant slices on demand through the attachment-scoped file tools.

export const ATTACHMENTS_BASE = join(tmpdir(), 'hpl-bot-attachments');
export const TEXT_MAX_BYTES = 128 * 1024; // 128 KB — bounds temp-disk usage per file
const SUPPORTED_IMAGE_TYPES = new Set(['image/png', 'image/jpeg', 'image/gif', 'image/webp']);
const MAX_FILENAME_LENGTH = 120;

function log(level: 'INFO' | 'WARN', msg: string, extra?: unknown): void {
  const line = `[${new Date().toISOString()}] [${level}] ${msg}`;
  if (extra !== undefined) console[level === 'WARN' ? 'warn' : 'log'](line, extra);
  else console[level === 'WARN' ? 'warn' : 'log'](line);
}

/** Absolute path of the per-thread attachments workspace. */
export function attachmentsRootFor(threadId: string): string {
  return join(ATTACHMENTS_BASE, threadId);
}

/**
 * Reduce a user-supplied attachment name to a safe basename for writing to
 * disk: strip any path segments, drive letters, and leading dots so the result
 * can never traverse outside the workspace or be a hidden/relative reference.
 */
export function sanitizeAttachmentFilename(name?: string | null): string {
  if (!name) return 'attachment';

  // Basename only — split on both separators and drop drive/colon parts.
  const base = name.split(/[\\/]/).pop() ?? '';
  let cleaned = base
    .replace(/^[A-Za-z]:/, '') // stray "C:" if it survived the split
    .replace(/[^A-Za-z0-9._-]/g, '_') // allow-list; everything else -> _
    .replace(/_{2,}/g, '_') // collapse runs
    .replace(/^\.+/, ''); // no leading dots (hidden / "..")

  if (cleaned.length > MAX_FILENAME_LENGTH) {
    const ext = extname(cleaned);
    const stem = cleaned.slice(0, cleaned.length - ext.length);
    cleaned = stem.slice(0, MAX_FILENAME_LENGTH - ext.length) + ext;
  }

  return cleaned.length > 0 ? cleaned : 'attachment';
}

/**
 * Ensure the name is unique within a thread's workspace. A re-upload of the
 * same filename must not silently overwrite the earlier file (which is still
 * referenced in the conversation), so we suffix " (2)", " (3)", … before the
 * extension. `used` tracks names claimed this turn before they hit disk.
 */
export function dedupeName(name: string, used: Set<string>, dir?: string): string {
  const taken = (candidate: string): boolean =>
    used.has(candidate) || (dir !== undefined && existsSync(join(dir, candidate)));

  if (!taken(name)) {
    used.add(name);
    return name;
  }

  const ext = extname(name);
  const stem = name.slice(0, name.length - ext.length);
  for (let i = 2; ; i++) {
    const candidate = `${stem} (${i})${ext}`;
    if (!taken(candidate)) {
      used.add(candidate);
      return candidate;
    }
  }
}

/** The compact reference note that replaces the inlined file body in context. */
export function attachmentNote(o: {
  savedName: string;
  originalName: string;
  lineCount: number;
  byteSize: number;
}): string {
  const kb = Math.max(1, Math.round(o.byteSize / 1024));
  const lines = o.lineCount.toLocaleString('en-US');
  return (
    `[User attached file "${o.originalName}" (${lines} lines, ${kb} KB) — saved to your ` +
    `attachments workspace as "${o.savedName}". Use search_attachments / read_attachment / ` +
    `list_attachments to inspect it; do not ask the user to paste it.]`
  );
}

export interface AttachmentMeta {
  name: string;
  contentType: string;
  size: number;
  isImage: boolean;
  isText: boolean;
}

/** Classify a Discord attachment by content-type / extension. */
export function classifyAttachment(att: {
  name?: string | null;
  contentType?: string | null;
  size?: number | null;
}): AttachmentMeta {
  const name = att.name ?? 'unknown';
  const contentType = att.contentType ?? '';
  const size = att.size ?? 0;
  const ct = contentType.split(';')[0].trim();
  const isImage = SUPPORTED_IMAGE_TYPES.has(ct);
  const isText = contentType.startsWith('text/') || name.toLowerCase().endsWith('.hps');
  return { name, contentType, size, isImage, isText };
}

export interface TextAttachmentDescriptor {
  name: string;
  url: string;
  contentType: string;
  size: number;
}

/**
 * Download a text/script attachment and write it into the thread's workspace,
 * returning the compact reference note to place in the conversation. Returns
 * null when the file is skipped (over the size cap) or the fetch fails, so the
 * caller can simply continue — mirroring the previous best-effort behaviour.
 */
export async function persistTextAttachment(
  threadId: string,
  att: TextAttachmentDescriptor,
  used: Set<string>,
): Promise<string | null> {
  if (att.size > TEXT_MAX_BYTES) {
    log(
      'WARN',
      `Attachment skipped: ${att.name} (${att.contentType}, ${Math.round(att.size / 1024)}KB) — exceeds 128KB text limit`,
    );
    return null;
  }

  try {
    const text = await fetch(att.url).then((r) => r.text());
    const root = attachmentsRootFor(threadId);
    mkdirSync(root, { recursive: true });

    const savedName = dedupeName(sanitizeAttachmentFilename(att.name), used, root);
    writeFileSync(join(root, savedName), text, 'utf-8');

    const lineCount = text.split('\n').length;
    log(
      'INFO',
      `Attachment: ${att.name} (${att.contentType}, ${Math.round(att.size / 1024)}KB, ${lineCount} lines) — saved to workspace as ${savedName}`,
    );
    return attachmentNote({ savedName, originalName: att.name, lineCount, byteSize: att.size });
  } catch (err) {
    log('WARN', `Attachment skipped: ${att.name} — fetch/write failed`, err);
    return null;
  }
}

/**
 * List the files in a thread's attachments workspace, one relative path per
 * line. The corpus tools are index-backed and cannot see this ad-hoc directory,
 * so the list_attachments tool uses this direct walk instead.
 */
export function listAttachmentsDir(root: string): string {
  let entries: string[];
  try {
    entries = walkFiles(root, root);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return 'No attachments in this conversation.';
    return `Error listing attachments: ${(err as Error).message}`;
  }
  if (entries.length === 0) return 'No attachments in this conversation.';
  return entries.sort((a, b) => a.localeCompare(b)).join('\n');
}

function walkFiles(dir: string, root: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full, root));
    else if (entry.isFile()) out.push(relative(root, full).split(sep).join('/'));
  }
  return out;
}

/** Best-effort removal of a thread's attachments workspace. */
export function cleanupAttachments(threadId: string): void {
  try {
    rmSync(attachmentsRootFor(threadId), { recursive: true, force: true });
  } catch (err) {
    log('WARN', `Failed to clean up attachments for thread ${threadId}`, err);
  }
}
