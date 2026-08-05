# Workflow — Localization (`.lang`)

For: localization, `.lang` entries, translation, `HplLangTool`.

## Ground first
- Real lang files: `config/lang_main/english.lang`, `config/base_english.lang`.
- Language config wiki: follow the "Language Configuration" link from `wiki/HPL3/SOMA/Modding.md`.
- Category/entry usage appears wherever scripts pull translated text (descriptions, hints, subjects).

## Steps
1. Open a real `.lang` file (`config/lang_main/english.lang`) and read its actual structure — categories and entries — before describing the format.
2. For adding text, show the exact category/entry shape the file uses; match an existing entry.
3. For how the mod loads a lang file, cite the Language Configuration wiki page.
4. When a script references translated text, confirm the category+entry name it expects, then confirm that entry exists in the `.lang`.

## Verify before answering
- The `.lang` structure and any category/entry names are quoted from a real file, not memory.
- The lang-loading config follows the wiki page.
- If the target language file or mod layout is unknown and matters, ask.
