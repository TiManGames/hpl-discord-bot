const CONTROL_WORDS = new Set([
  'if', 'for', 'while', 'switch', 'return', 'cast', 'array', 'dictionary',
]);

/**
 * Conservative post-generation check for code identifiers that look like
 * engine APIs/classes but are absent from both the active corpus and the user
 * input. It does not attempt semantic validation; it catches unsupported names
 * before they can be presented as compilable HPScript.
 */
export function findUnsupportedCodeIdentifiers(
  answer: string,
  knownIdentifiers: Iterable<string>,
  userText = '',
): string[] {
  const known = new Map<string, string>();
  for (const identifier of knownIdentifiers) {
    if (identifier) known.set(identifier.toLowerCase(), identifier);
  }
  const userIdentifiers = new Set(
    (userText.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) ?? [])
      .map((identifier) => identifier.toLowerCase()),
  );
  const code = extractCode(answer);
  if (!code.trim()) return [];
  const masked = maskCommentsAndStrings(code);
  const locallyDeclaredFunctions = new Set(
    [...masked.matchAll(
      /\b(?:void|bool|int|float|double|string|tString|tWString|auto|[A-Za-z_][A-Za-z0-9_]*(?:<[^>{};]+>)?[@&]?)\s+([A-Za-z_][A-Za-z0-9_]*)\s*\([^;{}]*\)\s*(?:const\s*)?\{/g,
    )].map((match) => match[1].toLowerCase()),
  );
  const unsupported = new Set<string>();

  for (const match of masked.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)) {
    const identifier = match[1];
    const lower = identifier.toLowerCase();
    if (
      CONTROL_WORDS.has(lower) ||
      known.has(lower) ||
      userIdentifiers.has(lower) ||
      locallyDeclaredFunctions.has(lower)
    ) continue;
    if (looksLikeEngineIdentifier(identifier)) unsupported.add(identifier);
  }

  for (const match of masked.matchAll(/\bclass\s+([A-Za-z_][A-Za-z0-9_]*)/g)) {
    const identifier = match[1];
    const lower = identifier.toLowerCase();
    if (known.has(lower) || userIdentifiers.has(lower)) continue;
    if (isUnsupportedDerivative(identifier, known.values())) unsupported.add(identifier);
  }

  // Inline identifiers may be claims even when no full code block is present.
  for (const match of answer.matchAll(/`([A-Za-z_][A-Za-z0-9_]*)`/g)) {
    const identifier = match[1];
    const lower = identifier.toLowerCase();
    if (known.has(lower) || userIdentifiers.has(lower)) continue;
    if (isUnsupportedDerivative(identifier, known.values())) unsupported.add(identifier);
  }

  return [...unsupported].sort();
}

/** Reject obvious declaration/invocation hybrids and unterminated standalone calls. */
export function findMalformedHpsStatements(
  answer: string,
  knownIdentifiers: Iterable<string>,
): string[] {
  const known = new Set(
    [...knownIdentifiers].filter(Boolean).map((identifier) => identifier.toLowerCase()),
  );
  const issues = new Set<string>();
  for (const block of [...answer.matchAll(/```[^\n]*\n([\s\S]*?)```/g)].map((match) => match[1])) {
    const masked = maskCommentsAndStringsPreservingLiterals(block);
    const originalLines = block.split('\n');
    const maskedLines = masked.split('\n');
    for (let index = 0; index < maskedLines.length; index++) {
      const line = maskedLines[index].trim();
      const original = originalLines[index]?.trim() ?? line;
      if (!line) continue;
      const typed = line.match(
        /^(?:void|bool|int|float|double|string|tString|tWString)\s+([A-Za-z_][A-Za-z0-9_]*)\s*\((.*)\)\s*;?$/,
      );
      if (typed && known.has(typed[1].toLowerCase()) && containsArgumentExpression(typed[2])) {
        issues.add(`declaration/call mixture: ${original}`);
        continue;
      }
      const call = line.match(
        /^(?:[A-Za-z_][A-Za-z0-9_]*\s*\.\s*)?([A-Za-z_][A-Za-z0-9_]*)\s*\(.*\)\s*$/,
      );
      if (call && known.has(call[1].toLowerCase()) && !line.endsWith(';')) {
        issues.add(`standalone call missing semicolon: ${original}`);
      }
    }
  }
  return [...issues];
}

function extractCode(answer: string): string {
  const fenced = [...answer.matchAll(/```[^\n]*\n([\s\S]*?)```/g)].map((match) => match[1]);
  const inline = [...answer.matchAll(/`([^`\n]+)`/g)].map((match) => match[1]);
  return [...fenced, ...inline].join('\n');
}

function looksLikeEngineIdentifier(identifier: string): boolean {
  return (
    /^[A-Z][a-z0-9]+(?:[A-Z][A-Za-z0-9]*)+$/.test(identifier) ||
    /^[A-Za-z][A-Za-z0-9]*_[A-Z][A-Za-z0-9_]*$/.test(identifier) ||
    /^(?:cLux|iLux|cScr|iScr|Entity|Agent|Area|Prop|Player|Map|Sound|Light|Particle|CharMover|ImGui)/.test(identifier)
  );
}

function isUnsupportedDerivative(identifier: string, knownIdentifiers: Iterable<string>): boolean {
  const lower = identifier.toLowerCase();
  for (const known of knownIdentifiers) {
    if (known.length < 5) continue;
    const knownLower = known.toLowerCase();
    if (
      lower.startsWith(`${knownLower}_`) ||
      (lower.startsWith(knownLower) && identifier.length > known.length && /[A-Z]/.test(identifier[known.length]))
    ) return true;
  }
  return false;
}

function maskCommentsAndStrings(value: string): string {
  return value
    .replace(/\/\*[\s\S]*?\*\//g, (match) => match.replace(/[^\n]/g, ' '))
    .replace(/\/\/[^\n]*/g, '')
    .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, ' ');
}

function maskCommentsAndStringsPreservingLiterals(value: string): string {
  return value
    .replace(/\/\*[\s\S]*?\*\//g, (match) => match.replace(/[^\n]/g, ' '))
    .replace(/\/\/[^\n]*/g, '')
    .replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, '"literal"');
}

function containsArgumentExpression(parameters: string): boolean {
  if (!parameters.trim()) return false;
  return splitTopLevel(parameters).some((parameter) => {
    const value = parameter.trim();
    return (
      /"literal"|\b(?:true|false|null)\b/.test(value) ||
      /^[-+]?\d/.test(value) ||
      !/^(?:const\s+)?[A-Za-z_][A-Za-z0-9_:]*(?:\s*<[^>]+>)?(?:\s*\[\s*\])?\s*[@&]?(?:in|out|inout)?\s+[A-Za-z_][A-Za-z0-9_]*(?:\s*=.*)?$/.test(value)
    );
  });
}

function splitTopLevel(value: string): string[] {
  const result: string[] = [];
  let start = 0;
  let depth = 0;
  for (let index = 0; index < value.length; index++) {
    if ('<([{'.includes(value[index])) depth++;
    else if ('>)]}'.includes(value[index])) depth = Math.max(0, depth - 1);
    else if (value[index] === ',' && depth === 0) {
      result.push(value.slice(start, index));
      start = index + 1;
    }
  }
  result.push(value.slice(start));
  return result;
}
