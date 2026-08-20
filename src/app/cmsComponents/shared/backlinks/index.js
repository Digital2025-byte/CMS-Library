export {
  buildAccordionItemLinkParts,
  buildLinkedTextParts,
  countPhraseOccurrences,
  emptyBacklink,
  findNextPhraseIndex,
  getMatchCheckboxOptions,
  getMatchCheckboxOptionsByCount,
  getOccurrenceOptions,
  getSelectedMatchIndexes,
  getWordSuggestionsFromText,
  normalizeBacklinks,
  normalizeOccurrence,
  normalizeParagraphLinks,
  occurrenceIncludes,
  serializeOccurrence,
  toEditorBacklinks,
} from "./helpers";
export {
  BACKLINK_STYLE_RESET_KEYS,
  DEFAULT_BACKLINK_STYLE,
  LINK_UNDERLINE_OPTIONS,
  resolveBacklinkUnderline,
} from "./style";
export { default as LinkedText } from "./LinkedText";
export { default as BacklinksEditor } from "./BacklinksEditor";
export { default as BacklinksStyleSection } from "./BacklinksStyleSection";
