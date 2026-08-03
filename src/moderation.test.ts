import { describe, it, expect } from 'vitest';
import { containsHardWord, formatRemaining, parseVerdict } from './moderation.js';

describe('containsHardWord', () => {
  it('flags plain occurrences of both slurs', () => {
    expect(containsHardWord('you are a retard')).toBe(true);
    expect(containsHardWord('nigger')).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(containsHardWord('RETARD')).toBe(true);
    expect(containsHardWord('NiGGeR')).toBe(true);
  });

  it('catches leetspeak substitutions', () => {
    expect(containsHardWord('r3tard')).toBe(true);
    expect(containsHardWord('ret4rd')).toBe(true);
    expect(containsHardWord('n1gger')).toBe(true);
    expect(containsHardWord('n1gg3r')).toBe(true);
  });

  it('catches separator evasions', () => {
    expect(containsHardWord('n i g g e r')).toBe(true);
    expect(containsHardWord('re-tard')).toBe(true);
    expect(containsHardWord('r.e.t.a.r.d')).toBe(true);
    expect(containsHardWord('n*i*g*g*e*r')).toBe(true);
  });

  it('does not flag benign words that merely contain fragments', () => {
    expect(containsHardWord('therapist')).toBe(false);
    expect(containsHardWord('scunthorpe')).toBe(false);
    expect(containsHardWord('trigger')).toBe(false);
    expect(containsHardWord('How do I add a trigger area in HPL2?')).toBe(false);
  });

  it('returns false for empty input', () => {
    expect(containsHardWord('')).toBe(false);
  });
});

describe('formatRemaining', () => {
  it('rounds up to whole minutes', () => {
    expect(formatRemaining(90_000)).toBe('2 minutes');
    expect(formatRemaining(60_001)).toBe('2 minutes');
  });

  it('reports a single minute in the singular', () => {
    expect(formatRemaining(60_000)).toBe('1 minute');
  });

  it('reports less than a minute for small and zero values', () => {
    expect(formatRemaining(30_000)).toBe('less than a minute');
    expect(formatRemaining(0)).toBe('less than a minute');
    expect(formatRemaining(-5)).toBe('less than a minute');
  });
});

describe('parseVerdict', () => {
  it('parses a ```json fenced object', () => {
    const raw = '```json\n{\n  "penalty": true,\n  "category": "inappropriate",\n  "reason": "x"\n}\n```';
    expect(parseVerdict(raw)).toEqual({ penalty: true, category: 'inappropriate', reason: 'x' });
  });

  it('parses a bare ``` fenced object', () => {
    expect(parseVerdict('```\n{"penalty":false,"category":"none","reason":""}\n```')).toEqual({
      penalty: false, category: 'none', reason: '',
    });
  });

  it('parses JSON surrounded by prose', () => {
    expect(parseVerdict('Here is the verdict: {"penalty":true,"category":"tampering","reason":"nope"} done.')).toEqual({
      penalty: true, category: 'tampering', reason: 'nope',
    });
  });

  it('parses already-clean JSON', () => {
    expect(parseVerdict('{"penalty":true,"category":"off-topic","reason":"y"}')).toEqual({
      penalty: true, category: 'off-topic', reason: 'y',
    });
  });

  it('defaults missing category/reason when JSON omits them', () => {
    expect(parseVerdict('{"penalty":false}')).toEqual({ penalty: false, category: 'none', reason: '' });
  });

  it('tolerates enum-slug variants (underscore) in category', () => {
    expect(parseVerdict('{"penalty":true,"category":"malicious_attachment","reason":"unrelated image"}')).toEqual({
      penalty: true, category: 'malicious_attachment', reason: 'unrelated image',
    });
  });

  it('parses a null reason as an empty string', () => {
    expect(parseVerdict('{"penalty":false,"category":"none","reason":null}')).toEqual({
      penalty: false, category: 'none', reason: '',
    });
  });

  it('falls back to key=value prose when the deployment ignores JSON mode', () => {
    const raw =
      'penalty=false, category="none"\n\nThe image shows an HPL engine editor thumbnail. Do you have a question?';
    expect(parseVerdict(raw)).toEqual({ penalty: false, category: 'none', reason: '' });
  });

  it('extracts a penalty verdict from key=value prose with a reason', () => {
    const raw = 'penalty=true, category=inappropriate, reason="Off-topic request."';
    expect(parseVerdict(raw)).toEqual({ penalty: true, category: 'inappropriate', reason: 'Off-topic request.' });
  });

  it('returns null when no verdict can be found', () => {
    expect(parseVerdict('I cannot help with that.')).toBeNull();
    expect(parseVerdict('')).toBeNull();
  });
});
