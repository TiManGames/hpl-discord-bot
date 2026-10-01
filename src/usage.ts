import { createRequire } from 'module';
import { stat } from 'fs/promises';
import type { RequestUsageSnapshot } from './agent.js';
import { estimateRequestCost } from './pricing.js';

export const MICROEUROS_PER_EURO = 1_000_000;
export const USAGE_UNAVAILABLE_RESPONSE =
  'Usage tracking is temporarily unavailable. Please try again later.';

export class UsageTrackingError extends Error {
  constructor(cause?: unknown) {
    super('Usage tracking is unavailable', { cause });
    this.name = 'UsageTrackingError';
  }
}

export interface UsageRequest {
  requestId: string;
  userId: string;
  month: string;
  startedAt: number;
}

export interface UsageRecord extends Omit<UsageRequest, 'requestId'> {
  _id: string; // Discord message ID: one durable receipt per request.
  userMonthKey: string;
  threadId?: string;
  modelId: string;
  inputTokens: number;
  uncachedInputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  unknownUsageCalls: number;
  estimatedMicroeuros: number;
  status: RequestUsageSnapshot['status'] | 'interrupted';
  partial: boolean;
  updatedAt: number;
}

interface UsageDatastore {
  loadDatabaseAsync(): Promise<void>;
  ensureIndexAsync(options: { fieldName: string; unique?: boolean }): Promise<void>;
  findAsync(query: Partial<UsageRecord>): Promise<UsageRecord[]>;
  findOneAsync(query: Partial<UsageRecord>): Promise<UsageRecord | null>;
  insertAsync(record: UsageRecord): Promise<UsageRecord>;
  updateAsync(query: Partial<UsageRecord>, update: unknown, options?: { multi?: boolean }): Promise<{ numAffected: number }>;
}

const Datastore = createRequire(import.meta.url)('@seald-io/nedb') as {
  new(options: { filename?: string; inMemoryOnly?: boolean }): UsageDatastore;
};
let db: UsageDatastore | undefined;
let healthy = false;
let limitMicroeuros = 50 * MICROEUROS_PER_EURO;
const userQueues = new Map<string, Promise<unknown>>();

export function eurosToMicroeuros(euros: number): number {
  const amount = Math.round(euros * MICROEUROS_PER_EURO);
  if (!Number.isFinite(euros) || euros < 0 || !Number.isSafeInteger(amount)) {
    throw new Error('EUR amount must be finite, nonnegative, and within the supported range');
  }
  return amount;
}

export function readMonthlyLimit(env: { USER_MONTHLY_LIMIT_EUR?: string } = process.env): number {
  const setting = env.USER_MONTHLY_LIMIT_EUR ?? '50';
  const amount = eurosToMicroeuros(Number(setting));
  if (setting.trim() === '' || amount <= 0) {
    throw new Error('USER_MONTHLY_LIMIT_EUR must be a finite positive EUR amount');
  }
  return amount;
}

/** Validate the same pricing used by the active agent before Discord login. */
export function validateUsageConfiguration(env: NodeJS.ProcessEnv = process.env): number {
  const limit = readMonthlyLimit(env);
  const modelId = env.AICORE_MODEL ?? 'anthropic--claude-4.6-sonnet';
  const estimate = estimateRequestCost(modelId, { uncachedInputTokens: 0, outputTokens: 0 }, env);
  if (!estimate.available) throw new Error(`Cannot enforce monthly usage for ${modelId}: ${estimate.reason}`);
  return limit;
}

async function loadStore(store: UsageDatastore, limit: number): Promise<void> {
  healthy = false;
  await store.loadDatabaseAsync();
  await store.ensureIndexAsync({ fieldName: '_id', unique: true });
  await store.ensureIndexAsync({ fieldName: 'userMonthKey' });
  // Retain settled checkpoints after an interrupted process, with an honest
  // warning that the in-flight provider call may have had unreported usage.
  await store.updateAsync({ status: 'running' }, {
    $set: { status: 'interrupted', partial: true, updatedAt: Date.now() },
  }, { multi: true });
  db = store;
  limitMicroeuros = limit;
  healthy = true;
}

export async function initUsageStore(
  dbPath = process.env.USAGE_DB_PATH ?? 'data/usage.db',
): Promise<void> {
  healthy = false;
  const limit = validateUsageConfiguration();
  if (dbPath.trim() === '') throw new Error('USAGE_DB_PATH must point to a persistent datastore file');
  // NeDB's Windows read stream can emit an unhandled error instead of rejecting
  // loadDatabaseAsync when given a directory. Reject it before invoking NeDB.
  try {
    if (!(await stat(dbPath)).isFile()) throw new Error('USAGE_DB_PATH must point to a regular file');
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== 'ENOENT') throw err;
  }
  await loadStore(new Datastore({ filename: dbPath }), limit);
}

export async function initInMemoryUsageStore(limitEuros = 50): Promise<void> {
  const limit = readMonthlyLimit({ USER_MONTHLY_LIMIT_EUR: String(limitEuros) });
  await loadStore(new Datastore({ inMemoryOnly: true }), limit);
}

export function usageStoreHealthy(): boolean {
  return healthy && db !== undefined;
}

async function accessStore<T>(operation: (store: UsageDatastore) => Promise<T>): Promise<T> {
  if (!usageStoreHealthy()) throw new UsageTrackingError();
  try {
    return await operation(db!);
  } catch (err) {
    // Do not allow any further paid work with an untrustworthy balance. A
    // restart reloads the datastore and is the explicit recovery boundary.
    healthy = false;
    throw new UsageTrackingError(err);
  }
}

export function utcMonth(now = Date.now()): string {
  return new Date(now).toISOString().slice(0, 7);
}

export function usageRequest(requestId: string, userId: string, now = Date.now()): UsageRequest {
  return { requestId, userId, month: utcMonth(now), startedAt: now };
}

export async function findUsageRequest(requestId: string): Promise<UsageRecord | null> {
  return accessStore((store) => store.findOneAsync({ _id: requestId }));
}

export async function beginUsageRequest(request: UsageRequest, threadId?: string): Promise<void> {
  if (!request.requestId || !request.userId) throw new UsageTrackingError('Missing Discord request/user ID');
  await accessStore((store) => store.insertAsync({
    _id: request.requestId,
    userId: request.userId,
    month: request.month,
    startedAt: request.startedAt,
    userMonthKey: `${request.userId}:${request.month}`,
    threadId,
    modelId: process.env.AICORE_MODEL ?? 'anthropic--claude-4.6-sonnet',
    inputTokens: 0, uncachedInputTokens: 0, outputTokens: 0,
    cacheReadTokens: 0, cacheWriteTokens: 0, unknownUsageCalls: 0,
    estimatedMicroeuros: 0, status: 'running', partial: false,
    updatedAt: Date.now(),
  }));
}

export async function saveUsageSnapshot(request: UsageRequest, snapshot: RequestUsageSnapshot): Promise<void> {
  await accessStore(async (store) => {
    if (!snapshot.estimate.available) throw new Error(snapshot.estimate.reason);
    const { numAffected } = await store.updateAsync({ _id: request.requestId }, { $set: {
      modelId: snapshot.modelId,
      inputTokens: snapshot.inputTokens,
      uncachedInputTokens: snapshot.uncachedInputTokens,
      outputTokens: snapshot.outputTokens,
      cacheReadTokens: snapshot.cacheReadTokens,
      cacheWriteTokens: snapshot.cacheWriteTokens,
      unknownUsageCalls: snapshot.unknownUsageCalls,
      estimatedMicroeuros: eurosToMicroeuros(snapshot.estimate.euros),
      status: snapshot.status,
      partial: snapshot.unknownUsageCalls > 0,
      updatedAt: Date.now(),
    } });
    if (numAffected !== 1) throw new Error('Missing usage request receipt');
  });
}

export interface MonthlyUsage {
  month: string;
  usedMicroeuros: number;
  limitMicroeuros: number;
  partial: boolean;
}

export async function getMonthlyUsage(userId: string, month = utcMonth()): Promise<MonthlyUsage> {
  return accessStore(async (store) => {
    const records = await store.findAsync({ userMonthKey: `${userId}:${month}` });
    const usedMicroeuros = records.reduce((total, record) => {
      if (!Number.isSafeInteger(record.estimatedMicroeuros) || record.estimatedMicroeuros < 0) {
        throw new Error('Invalid persisted usage amount');
      }
      return total + record.estimatedMicroeuros;
    }, 0);
    if (!Number.isSafeInteger(usedMicroeuros)) throw new Error('Monthly usage total exceeds the supported range');
    return { month, usedMicroeuros, limitMicroeuros, partial: records.some((record) => record.partial) };
  });
}

/** Keep a user's admission, inference, settlement and delivery in one queue. */
export async function queueUserRequest<T>(userId: string, operation: () => Promise<T>): Promise<T> {
  const previous = userQueues.get(userId) ?? Promise.resolve();
  const pending = previous.catch(() => {}).then(operation);
  userQueues.set(userId, pending);
  try {
    return await pending;
  } finally {
    if (userQueues.get(userId) === pending) userQueues.delete(userId);
  }
}

export function isMonthlyLimitReached(usage: MonthlyUsage): boolean {
  return usage.usedMicroeuros >= usage.limitMicroeuros;
}

function resetDate(month: string): string {
  const [year, monthNumber] = month.split('-').map(Number);
  const date = new Date(Date.UTC(year, monthNumber, 1));
  return `${date.getUTCDate()} ${date.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' })} ${date.getUTCFullYear()}, 00:00 UTC`;
}

export function formatMonthlyUsage(usage: MonthlyUsage): string {
  const [year, monthNumber] = usage.month.split('-').map(Number);
  const monthLabel = new Date(Date.UTC(year, monthNumber - 1, 1)).toLocaleString('en-GB', {
    month: 'long', year: 'numeric', timeZone: 'UTC',
  });
  const fraction = Math.min(1, Math.max(0, usage.usedMicroeuros / usage.limitMicroeuros));
  const filled = Math.floor(fraction * 20);
  const percent = Math.floor(fraction * 100);
  return [
    `Monthly usage — ${monthLabel}`,
    '```text',
    `[${'#'.repeat(filled)}${'-'.repeat(20 - filled)}] ${percent}%`,
    `Used:       ${percent}%`,
    `Remaining:  ${100 - percent}%`,
    `Resets:     ${resetDate(usage.month)}`,
    '```',
    'Usage is estimated.',
    ...(usage.partial ? ['Some usage could not be measured.'] : []),
  ].join('\n');
}

export function formatMonthlyLimitNotice(usage: MonthlyUsage): string {
  return 'You have used 100% of your monthly allowance. ' +
    `Your allowance resets on ${resetDate(usage.month)}. Tag me with \`!usage\` to see your usage.`;
}
