import { describe, expect, it } from 'vitest';
import { findMalformedHpsStatements, findUnsupportedCodeIdentifiers } from './grounding.js';

const known = ['cScrMap', 'iScrMap', 'OnStart', 'Entity_SetActive'];

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

  it('allows identifiers supplied by the user', () => {
    const answer = '`cScrMap_Custom`';
    expect(findUnsupportedCodeIdentifiers(answer, known, 'My class is cScrMap_Custom')).toEqual([]);
  });
});

describe('findMalformedHpsStatements', () => {
  it('rejects a return type combined with call arguments', () => {
    const answer = `\`\`\`cpp\nvoid Entity_SetActive("Door_01", true)\n\`\`\``;
    expect(findMalformedHpsStatements(answer, known)).toEqual([
      'declaration/call mixture: void Entity_SetActive("Door_01", true)',
    ]);
  });

  it('rejects a standalone call without a semicolon', () => {
    const answer = `\`\`\`cpp\nEntity_SetActive("Door_01", true)\n\`\`\``;
    expect(findMalformedHpsStatements(answer, known)).toEqual([
      'standalone call missing semicolon: Entity_SetActive("Door_01", true)',
    ]);
  });

  it('accepts a declaration signature and a terminated call', () => {
    const answer = `\`\`\`cpp\nvoid OnStart()\nEntity_SetActive("Door_01", true);\n\`\`\``;
    expect(findMalformedHpsStatements(answer, known)).toEqual([]);
  });
});
