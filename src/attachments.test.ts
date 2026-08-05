import { describe, it, expect, afterEach, vi } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import {
  ATTACHMENTS_BASE,
  attachmentNote,
  attachmentsRootFor,
  classifyAttachment,
  cleanupAttachments,
  dedupeName,
  fetchWithRetry,
  listAttachmentsDir,
  persistTextAttachment,
  sanitizeAttachmentFilename,
  TEXT_MAX_BYTES,
} from './attachments.js';

describe('fetchWithRetry', () => {
  afterEach(() => vi.restoreAllMocks());

  it('retries a transient ECONNRESET and succeeds', async () => {
    const econnreset = Object.assign(new Error('fetch failed'), {
      cause: Object.assign(new Error('read ECONNRESET'), { code: 'ECONNRESET' }),
    });
    const ok = { ok: true } as Response;
    const fetchMock = vi.fn()
      .mockRejectedValueOnce(econnreset)
      .mockResolvedValueOnce(ok);
    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchWithRetry('https://cdn/x.png', 3)).resolves.toBe(ok);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('gives up after exhausting retries on persistent transient failure', async () => {
    const econnreset = Object.assign(new Error('fetch failed'), {
      cause: Object.assign(new Error('read ECONNRESET'), { code: 'ECONNRESET' }),
    });
    const fetchMock = vi.fn().mockRejectedValue(econnreset);
    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchWithRetry('https://cdn/x.png', 2)).rejects.toThrow('fetch failed');
    expect(fetchMock).toHaveBeenCalledTimes(3); // initial + 2 retries
  });

  it('does not retry a non-transient error', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('403 Forbidden'));
    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchWithRetry('https://cdn/x.png', 3)).rejects.toThrow('403 Forbidden');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

describe('sanitizeAttachmentFilename', () => {
  it('keeps a normal filename intact', () => {
    expect(sanitizeAttachmentFilename('player.hps')).toBe('player.hps');
  });

  it('strips path segments to a basename', () => {
    expect(sanitizeAttachmentFilename('../../etc/passwd')).toBe('passwd');
    expect(sanitizeAttachmentFilename('sub/dir/map.hps')).toBe('map.hps');
    expect(sanitizeAttachmentFilename('C:\\Users\\me\\evil.hps')).toBe('evil.hps');
  });

  it('removes leading dots so it cannot be hidden or relative', () => {
    expect(sanitizeAttachmentFilename('...hidden.hps')).toBe('hidden.hps');
    expect(sanitizeAttachmentFilename('..')).toBe('attachment');
  });

  it('replaces illegal characters with underscore and collapses runs', () => {
    expect(sanitizeAttachmentFilename('my file (1)!.hps')).toBe('my_file_1_.hps');
  });

  it('caps length while preserving the extension', () => {
    const long = 'a'.repeat(200) + '.hps';
    const out = sanitizeAttachmentFilename(long);
    expect(out.length).toBeLessThanOrEqual(120);
    expect(out.endsWith('.hps')).toBe(true);
  });

  it('falls back to "attachment" for empty/nullish names', () => {
    expect(sanitizeAttachmentFilename('')).toBe('attachment');
    expect(sanitizeAttachmentFilename(null)).toBe('attachment');
    expect(sanitizeAttachmentFilename(undefined)).toBe('attachment');
  });
});

describe('dedupeName', () => {
  it('returns the name unchanged when unused', () => {
    const used = new Set<string>();
    expect(dedupeName('a.hps', used)).toBe('a.hps');
    expect(used.has('a.hps')).toBe(true);
  });

  it('suffixes a counter before the extension on collision', () => {
    const used = new Set<string>(['a.hps']);
    expect(dedupeName('a.hps', used)).toBe('a (2).hps');
    expect(dedupeName('a.hps', used)).toBe('a (3).hps');
  });
});

describe('attachmentNote', () => {
  it('formats a compact reference note with thousands separators', () => {
    const note = attachmentNote({
      savedName: 'player.hps',
      originalName: 'player.hps',
      lineCount: 16234,
      byteSize: 512 * 1024,
    });
    expect(note).toContain('"player.hps"');
    expect(note).toContain('16,234 lines');
    expect(note).toContain('512 KB');
    expect(note).toContain('search_attachments');
    expect(note).toContain('read_attachment');
  });
});

describe('attachmentsRootFor', () => {
  it('is a per-thread directory under the shared base', () => {
    expect(attachmentsRootFor('thread-1')).toBe(join(ATTACHMENTS_BASE, 'thread-1'));
  });
});

describe('classifyAttachment', () => {
  it('detects images by content type', () => {
    expect(classifyAttachment({ name: 'a.png', contentType: 'image/png', size: 10 }).isImage).toBe(true);
  });

  it('detects text by content type and .hps extension', () => {
    expect(classifyAttachment({ name: 'a.txt', contentType: 'text/plain', size: 10 }).isText).toBe(true);
    // Discord often reports .hps as application/octet-stream — extension wins.
    expect(classifyAttachment({ name: 'a.hps', contentType: 'application/octet-stream', size: 10 }).isText).toBe(true);
  });

  it('marks unknown binary types as neither', () => {
    const meta = classifyAttachment({ name: 'a.zip', contentType: 'application/zip', size: 10 });
    expect(meta.isImage).toBe(false);
    expect(meta.isText).toBe(false);
  });
});

describe('persistTextAttachment', () => {
  const threadId = 'attachments-test-thread';

  afterEach(() => {
    vi.restoreAllMocks();
    cleanupAttachments(threadId);
  });

  function mockFetchText(body: string): void {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ text: async () => body }));
  }

  it('writes the file to the workspace and returns a reference note', async () => {
    mockFetchText('line1\nline2\nline3');
    const note = await persistTextAttachment(
      threadId,
      { name: 'script.hps', url: 'https://cdn/script.hps', contentType: 'text/plain', size: 18 },
      new Set(),
    );

    const saved = join(attachmentsRootFor(threadId), 'script.hps');
    expect(existsSync(saved)).toBe(true);
    expect(readFileSync(saved, 'utf-8')).toBe('line1\nline2\nline3');
    expect(note).toContain('"script.hps"');
    expect(note).toContain('3 lines');
  });

  it('skips a file over the size cap and returns null', async () => {
    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);
    const note = await persistTextAttachment(
      threadId,
      { name: 'huge.hps', url: 'https://cdn/huge.hps', contentType: 'text/plain', size: TEXT_MAX_BYTES + 1 },
      new Set(),
    );
    expect(note).toBeNull();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('dedupes a re-uploaded filename instead of overwriting', async () => {
    const used = new Set<string>();
    mockFetchText('first');
    await persistTextAttachment(
      threadId,
      { name: 'dup.hps', url: 'https://cdn/dup.hps', contentType: 'text/plain', size: 5 },
      used,
    );
    mockFetchText('second');
    const note = await persistTextAttachment(
      threadId,
      { name: 'dup.hps', url: 'https://cdn/dup.hps', contentType: 'text/plain', size: 6 },
      used,
    );
    expect(note).toContain('dup (2).hps');
    expect(existsSync(join(attachmentsRootFor(threadId), 'dup.hps'))).toBe(true);
    expect(existsSync(join(attachmentsRootFor(threadId), 'dup (2).hps'))).toBe(true);
  });

  it('returns null on a fetch failure without throwing', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network')));
    const note = await persistTextAttachment(
      threadId,
      { name: 'x.hps', url: 'https://cdn/x.hps', contentType: 'text/plain', size: 5 },
      new Set(),
    );
    expect(note).toBeNull();
  });
});

describe('listAttachmentsDir', () => {
  const threadId = 'list-test-thread';

  afterEach(() => {
    vi.restoreAllMocks();
    cleanupAttachments(threadId);
  });

  it('reports a friendly message when the workspace does not exist', () => {
    expect(listAttachmentsDir(attachmentsRootFor('never-created'))).toContain('No attachments');
  });

  it('lists saved files by relative path', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ text: async () => 'x' }));
    const used = new Set<string>();
    await persistTextAttachment(
      threadId,
      { name: 'a.hps', url: 'https://cdn/a.hps', contentType: 'text/plain', size: 1 },
      used,
    );
    await persistTextAttachment(
      threadId,
      { name: 'b.hps', url: 'https://cdn/b.hps', contentType: 'text/plain', size: 1 },
      used,
    );
    const out = listAttachmentsDir(attachmentsRootFor(threadId));
    expect(out).toContain('a.hps');
    expect(out).toContain('b.hps');
  });
});

describe('cleanupAttachments', () => {
  it('removes the workspace and does not throw when absent', async () => {
    const threadId = 'cleanup-test-thread';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ text: async () => 'x' }));
    await persistTextAttachment(
      threadId,
      { name: 'a.hps', url: 'https://cdn/a.hps', contentType: 'text/plain', size: 1 },
      new Set(),
    );
    vi.restoreAllMocks();
    expect(existsSync(attachmentsRootFor(threadId))).toBe(true);
    cleanupAttachments(threadId);
    expect(existsSync(attachmentsRootFor(threadId))).toBe(false);
    expect(() => cleanupAttachments(threadId)).not.toThrow();
  });
});
