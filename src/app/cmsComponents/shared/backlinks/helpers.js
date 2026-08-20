import { isExternalHref } from "@/components/inspector";

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
  if (value === "first" || value === undefined || value === null || value === "") {
    return 1;
  }
  const index = Number(value);
  if (Number.isFinite(index) && index >= 1) return Math.floor(index);
  return 1;
}

export function countPhraseOccurrences(text = "", phrase = "") {
  const source = String(text || "");
  const needle = String(phrase || "");
  if (!source || !needle) return 0;

  let count = 0;
  let cursor = 0;
  let matchIndex = source.indexOf(needle);

  while (matchIndex >= 0) {
    count += 1;
    cursor = matchIndex + needle.length;
    matchIndex = source.indexOf(needle, cursor);
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
      const occurrenceRaw =
        link?.occurrence === "all"
          ? "all"
          : link?.occurrence === "first" ||
              link?.occurrence === undefined ||
              link?.occurrence === null ||
              link?.occurrence === ""
            ? "first"
            : String(link.occurrence);

      return {
        text: String(link?.text || "").trim(),
        href: String(link?.href || "").trim(),
        type:
          link?.type === "external" || isExternalHref(link?.href)
            ? "external"
            : "internal",
        occurrence: occurrenceRaw,
      };
    })
    .filter((link) => link.text && link.href);
}

/** @deprecated Prefer normalizeBacklinks */
export const normalizeParagraphLinks = normalizeBacklinks;

/**
 * Split plain text into text/link segments for chosen phrases.
 * Longer phrases win first so "Fly Cham" beats "Fly".
 * Each link can target first, all, or a specific occurrence.
 */
export function buildLinkedTextParts(text, links = []) {
  const source = String(text || "");
  const entries = normalizeBacklinks(links).sort(
    (a, b) => b.text.length - a.text.length
  );

  if (!source || !entries.length) {
    return source ? [{ type: "text", value: source }] : [];
  }

  let parts = [{ type: "text", value: source }];

  for (const link of entries) {
    const occurrence = normalizeOccurrence(link.occurrence);
    let seen = 0;
    const next = [];

    for (const part of parts) {
      if (part.type !== "text") {
        next.push(part);
        continue;
      }

      const value = part.value;
      let cursor = 0;
      let matchIndex = value.indexOf(link.text);

      if (matchIndex < 0) {
        next.push(part);
        continue;
      }

      while (matchIndex >= 0) {
        if (matchIndex > cursor) {
          next.push({ type: "text", value: value.slice(cursor, matchIndex) });
        }

        seen += 1;
        const shouldLink = occurrence === "all" || seen === occurrence;

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
        matchIndex = value.indexOf(link.text, cursor);
      }

      if (cursor < value.length) {
        next.push({ type: "text", value: value.slice(cursor) });
      }
    }

    parts = next;
  }

  return parts;
}

export function emptyBacklink() {
  return {
    text: "",
    type: "internal",
    href: "/gb/en",
    occurrence: "first",
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
