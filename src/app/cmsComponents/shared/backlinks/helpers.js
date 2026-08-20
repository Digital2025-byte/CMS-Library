import { isExternalHref, INTERNAL_PAGES } from "@/components/inspector";

const DEFAULT_INTERNAL_HREF = INTERNAL_PAGES[0]?.href || "/gb/en";

/**
 * Build autocomplete candidates (words + short phrases) from source copy.
 */
export function getWordSuggestionsFromText(text = "", { maxPhraseWords = 4 } = {}) {
  const source = String(text || "");
  if (!source.trim()) return [];

  const words = Array.from(source.matchAll(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu)).map(
    (match) => match[0]
  );

  if (!words.length) return [];

  const seen = new Set();
  const suggestions = [];

  const pushUnique = (value) => {
    const key = value.toLowerCase();
    if (!value || seen.has(key)) return;
    seen.add(key);
    suggestions.push(value);
  };

  for (const word of words) {
    pushUnique(word);
  }

  const phraseLimit = Math.max(2, maxPhraseWords);
  for (let size = 2; size <= phraseLimit; size += 1) {
    for (let index = 0; index <= words.length - size; index += 1) {
      pushUnique(words.slice(index, index + size).join(" "));
    }
  }

  return suggestions;
}

export function normalizeOccurrence(value) {
  if (value === "all") return "all";

  if (Array.isArray(value)) {
    const indexes = [
      ...new Set(
        value
          .map((entry) => Number(entry))
          .filter((index) => Number.isFinite(index) && index >= 1)
          .map((index) => Math.floor(index))
      ),
    ].sort((a, b) => a - b);
    return indexes.length ? indexes : [1];
  }

  if (value === "first" || value === undefined || value === null || value === "") {
    return [1];
  }

  const index = Number(value);
  if (Number.isFinite(index) && index >= 1) return [Math.floor(index)];
  return [1];
}

export function occurrenceIncludes(occurrence, seenIndex) {
  if (occurrence === "all") return true;
  if (Array.isArray(occurrence)) return occurrence.includes(seenIndex);
  return seenIndex === occurrence;
}

/**
 * Selected 1-based match indexes for the editor UI.
 */
export function getSelectedMatchIndexes(occurrence, matchCount = 0) {
  const normalized = normalizeOccurrence(occurrence);
  if (normalized === "all") {
    return Array.from({ length: Math.max(0, matchCount) }, (_, index) => index + 1);
  }
  return normalized.filter((index) => index <= matchCount);
}

/**
 * Persist occurrence from selected match checkboxes.
 */
export function serializeOccurrence(selectedIndexes = [], matchCount = 0) {
  const unique = [
    ...new Set(
      selectedIndexes
        .map((entry) => Number(entry))
        .filter((index) => Number.isFinite(index) && index >= 1 && index <= matchCount)
        .map((index) => Math.floor(index))
    ),
  ].sort((a, b) => a - b);

  if (!unique.length) return "first";
  if (matchCount > 0 && unique.length === matchCount) return "all";
  if (unique.length === 1 && unique[0] === 1) return "first";
  if (unique.length === 1) return String(unique[0]);
  return unique;
}

export function countPhraseOccurrences(text = "", phrase = "") {
  const source = String(text || "");
  const needle = String(phrase || "");
  if (!source || !needle) return 0;

  let count = 0;
  let cursor = 0;
  let matchIndex = findNextPhraseIndex(source, needle, cursor);

  while (matchIndex >= 0) {
    count += 1;
    cursor = matchIndex + needle.length;
    matchIndex = findNextPhraseIndex(source, needle, cursor);
  }

  return count;
}

function ordinalLabel(index) {
  const remainder10 = index % 10;
  const remainder100 = index % 100;
  if (remainder10 === 1 && remainder100 !== 11) return `${index}st`;
  if (remainder10 === 2 && remainder100 !== 12) return `${index}nd`;
  if (remainder10 === 3 && remainder100 !== 13) return `${index}rd`;
  return `${index}th`;
}

export function getMatchCheckboxOptions(description = "", phrase = "") {
  const count = countPhraseOccurrences(description, phrase);
  return getMatchCheckboxOptionsByCount(count);
}

export function getMatchCheckboxOptionsByCount(count = 0) {
  return Array.from({ length: Math.max(0, count) }, (_, index) => {
    const value = index + 1;
    return {
      value,
      label: `${ordinalLabel(value)} match`,
    };
  });
}

/** @deprecated Prefer getMatchCheckboxOptions for multi-select */
export function getOccurrenceOptions(description = "", phrase = "") {
  const count = countPhraseOccurrences(description, phrase);
  const options = [
    {
      value: "first",
      label: "First only",
    },
    {
      value: "all",
      label: count > 1 ? `All matches (${count})` : "All matches",
    },
  ];

  for (let index = 2; index <= count; index += 1) {
    options.push({
      value: String(index),
      label: `${ordinalLabel(index)} match`,
    });
  }

  return options;
}

export function normalizeBacklinks(links = []) {
  if (!Array.isArray(links)) return [];

  return links
    .map((link) => {
      const normalizedOccurrence = normalizeOccurrence(link?.occurrence);
      const occurrenceRaw =
        normalizedOccurrence === "all"
          ? "all"
          : Array.isArray(normalizedOccurrence) && normalizedOccurrence.length === 1
            ? normalizedOccurrence[0] === 1
              ? "first"
              : String(normalizedOccurrence[0])
            : normalizedOccurrence;

      const type =
        link?.type === "external" || isExternalHref(link?.href)
          ? "external"
          : "internal";
      const href = String(link?.href || "").trim();

      return {
        text: String(link?.text || "").trim(),
        // Page select can show "Home" while href is still empty — default it
        href: href || (type === "internal" ? DEFAULT_INTERNAL_HREF : ""),
        type,
        occurrence: occurrenceRaw,
      };
    })
    .filter((link) => link.text && link.href);
}

/** @deprecated Prefer normalizeBacklinks */
export const normalizeParagraphLinks = normalizeBacklinks;

function linkStateKey(link) {
  const occurrence = normalizeOccurrence(link.occurrence);
  const occurrenceKey = Array.isArray(occurrence)
    ? occurrence.join(",")
    : String(occurrence);
  return `${link.text}\0${link.href}\0${occurrenceKey}\0${link.type}`;
}

/**
 * Escape a string for safe use inside a RegExp.
 */
function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Find the next whole-phrase match (word-boundary aware).
 * "available" will not match inside "availability".
 */
export function findNextPhraseIndex(source = "", phrase = "", fromIndex = 0) {
  const text = String(source || "");
  const needle = String(phrase || "");
  if (!text || !needle || fromIndex >= text.length) return -1;

  try {
    const pattern = new RegExp(
      `(?<![\\p{L}\\p{N}])${escapeRegExp(needle)}(?![\\p{L}\\p{N}])`,
      "gu"
    );
    pattern.lastIndex = Math.max(0, fromIndex);
    const match = pattern.exec(text);
    return match ? match.index : -1;
  } catch {
    // Fallback for runtimes without unicode property escapes
    return text.indexOf(needle, fromIndex);
  }
}

/**
 * Apply one link across already-split parts, optionally using shared occurrence state.
 */
function applyLinkToParts(parts, link, state) {
  const occurrence = normalizeOccurrence(link.occurrence);
  const key = linkStateKey(link);
  let seen = state?.get(key) || 0;
  const next = [];

  for (const part of parts) {
    if (part.type !== "text") {
      next.push(part);
      continue;
    }

    const value = part.value;
    let cursor = 0;
    let matchIndex = findNextPhraseIndex(value, link.text, cursor);

    if (matchIndex < 0) {
      next.push(part);
      continue;
    }

    while (matchIndex >= 0) {
      if (matchIndex > cursor) {
        next.push({ type: "text", value: value.slice(cursor, matchIndex) });
      }

      seen += 1;
      const shouldLink = occurrenceIncludes(occurrence, seen);

      if (shouldLink) {
        next.push({
          type: "link",
          value: link.text,
          href: link.href,
          linkType: link.type,
        });
      } else {
        next.push({ type: "text", value: link.text });
      }

      cursor = matchIndex + link.text.length;
      matchIndex = findNextPhraseIndex(value, link.text, cursor);
    }

    if (cursor < value.length) {
      next.push({ type: "text", value: value.slice(cursor) });
    }
  }

  state?.set(key, seen);
  return next;
}

/**
 * Split plain text into text/link segments for chosen phrases.
 * Longer phrases win first so "Fly Cham" beats "Fly".
 * Pass the same `state` Map across multiple calls to count occurrences globally.
 */
export function buildLinkedTextParts(text, links = [], { state } = {}) {
  const source = String(text || "");
  const entries = normalizeBacklinks(links).sort(
    (a, b) => b.text.length - a.text.length
  );

  if (!source || !entries.length) {
    return source ? [{ type: "text", value: source }] : [];
  }

  let parts = [{ type: "text", value: source }];
  const localState = state || new Map();

  for (const link of entries) {
    parts = applyLinkToParts(parts, link, localState);
  }

  return parts;
}

/**
 * Apply shared section links across accordion items (title + body) with one
 * global occurrence counter, then apply each item's own links locally.
 */
export function buildAccordionItemLinkParts(items = [], sectionLinks = []) {
  const sharedState = new Map();
  const shared = normalizeBacklinks(sectionLinks);

  return items.map((item) => {
    const title = item?.title || "";
    const body = item?.description || item?.content || "";
    const localLinks = normalizeBacklinks(item?.links);

    const titleParts = buildLinkedTextParts(title, shared, {
      state: sharedState,
    });
    let bodyParts = buildLinkedTextParts(body, shared, { state: sharedState });

    // Item-only links count within that item body
    if (localLinks.length) {
      bodyParts = localLinks
        .sort((a, b) => b.text.length - a.text.length)
        .reduce(
          (parts, link) => applyLinkToParts(parts, link, new Map()),
          bodyParts
        );
    }

    return { titleParts, bodyParts };
  });
}

export function emptyBacklink() {
  return {
    text: "",
    type: "internal",
    href: DEFAULT_INTERNAL_HREF,
    occurrence: "all",
  };
}

export function toEditorBacklinks(links = []) {
  return normalizeBacklinks(links).map((link) => ({
    text: link.text || "",
    type: link.type || "internal",
    href: link.href || "",
    occurrence: link.occurrence || "first",
  }));
}
