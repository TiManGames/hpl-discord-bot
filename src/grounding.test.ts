import { describe, expect, it } from 'vitest';
import { findUnsupportedCodeIdentifiers } from './grounding.js';

const known = [
  'cScrMap',
  'iScrMap',
  'OnStart',
  'Entity_SetActive',
  'cScript_GetGlobalVarBool',
  // Deliberately polluted to prove control flow cannot be treated as a call.
  'if',
];

describe('findUnsupportedCodeIdentifiers', () => {
  it('rejects an invented derivative of a documented map class', () => {
    const answer = `\`\`\`cpp\nclass cScrMap_YourMap : cScrMap\n{\n  void OnStart() {}\n}\n\`\`\``;
    expect(findUnsupportedCodeIdentifiers(answer, known)).toEqual(['cScrMap_YourMap']);
  });

  it('rejects an undocumented engine-looking function call', () => {
    const answer = `\`\`\`cpp\nvoid OnStart() { AddEntityCollideCallback("x"); }\n\`\`\``;
    expect(findUnsupportedCodeIdentifiers(answer, known)).toEqual(['AddEntityCollideCallback']);
  });

  it('allows documented symbols and locally declared user callbacks', () => {
    const answer = `\`\`\`cpp\nclass cScrMap : iScrMap\n{\n  void MyCallback() {}\n  void OnStart() { MyCallback(); Entity_SetActive("Door_01", true); }\n}\n\`\`\``;
    expect(findUnsupportedCodeIdentifiers(answer, known)).toEqual([]);
  });

  it('allows valid framework declarations with HPScript handle parameters', () => {
    const answer = `\`\`\`cpp
void SetupAfterLoad(cWorld @apWorld, cResourceVarsObject @apVars, cResourceVarsObject @apInstanceVars)
{
  OnStart();
}
\`\`\``;
    expect(findUnsupportedCodeIdentifiers(answer, known)).toEqual([]);
  });

  it('allows identifiers supplied by the user', () => {
    const answer = '`cScrMap_Custom`';
    expect(findUnsupportedCodeIdentifiers(answer, known, 'My class is cScrMap_Custom')).toEqual([]);
  });
});
