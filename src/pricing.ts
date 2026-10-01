export interface ModelTokenRates {
  inputCuPerMillionTokens: number;
  outputCuPerMillionTokens: number;
}

export type CostEstimate =
  | { available: true; capacityUnits: number; euros: number }
  | { available: false; reason: string };

// Approximate linear rates derived from the operator's two SAP calculator
// samples, not a verified SAP tariff. Cached input is deliberately excluded.
const DEFAULT_MODEL_RATES: Record<string, ModelTokenRates> = {
  'gpt-5.6-sol': {
    inputCuPerMillionTokens: 6.8175,
    outputCuPerMillionTokens: 36.8325,
  },
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isNonnegativeNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

/** Estimate agent inference only; never prevent a reply over pricing config. */
export function estimateRequestCost(
  modelId: string,
  usage: { uncachedInputTokens: number; outputTokens: number },
  env: { AICORE_MODEL_CU_RATES?: string; AICORE_EUR_PER_CU?: string } = process.env,
): CostEstimate {
  let modelRates: unknown = DEFAULT_MODEL_RATES;
  if (env.AICORE_MODEL_CU_RATES !== undefined) {
    try {
      modelRates = JSON.parse(env.AICORE_MODEL_CU_RATES);
    } catch {
      return { available: false, reason: 'invalid AICORE_MODEL_CU_RATES JSON' };
    }
  }
  if (!isRecord(modelRates)) {
    return { available: false, reason: 'AICORE_MODEL_CU_RATES must be a model-rate object' };
  }
  if (!Object.hasOwn(modelRates, modelId)) {
    return { available: false, reason: 'no rates configured for this model' };
  }

  const rates = modelRates[modelId];
  if (
    !isRecord(rates) ||
    !isNonnegativeNumber(rates.inputCuPerMillionTokens) ||
    !isNonnegativeNumber(rates.outputCuPerMillionTokens)
  ) {
    return { available: false, reason: 'model CU rates must be finite nonnegative numbers' };
  }

  const euroSetting = env.AICORE_EUR_PER_CU;
  const eurosPerCu = euroSetting === undefined ? 0.45 : Number(euroSetting);
  if (euroSetting?.trim() === '' || !Number.isFinite(eurosPerCu) || eurosPerCu <= 0) {
    return { available: false, reason: 'AICORE_EUR_PER_CU must be a finite positive number' };
  }
  if (
    !isNonnegativeNumber(usage.uncachedInputTokens) ||
    !isNonnegativeNumber(usage.outputTokens)
  ) {
    return { available: false, reason: 'token usage must be finite and nonnegative' };
  }

  const capacityUnits =
    (usage.uncachedInputTokens / 1_000_000) * rates.inputCuPerMillionTokens +
    (usage.outputTokens / 1_000_000) * rates.outputCuPerMillionTokens;
  const euros = capacityUnits * eurosPerCu;
  if (!Number.isFinite(capacityUnits) || !Number.isFinite(euros)) {
    return { available: false, reason: 'calculated cost is outside the supported range' };
  }
  return { available: true, capacityUnits, euros };
}
