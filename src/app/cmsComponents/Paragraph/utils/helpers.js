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

export function normalizeParagraphLinks(links = []) {
  if (!Array.isArray(links)) return [];

  return links
    .map((link) => ({
      text: String(link?.text || "").trim(),
      href: String(link?.href || "").trim(),
      type:
        link?.type === "external" || isExternalHref(link?.href)
          ? "external"
          : "internal",
    }))
    .filter((link) => link.text && link.href);
}

/**
 * Split plain text into text/link segments for chosen phrases.
 * Longer phrases win first so "Fly Cham" beats "Fly".
 */
export function buildLinkedTextParts(text, links = []) {
  const source = String(text || "");
  const entries = normalizeParagraphLinks(links).sort(
    (a, b) => b.text.length - a.text.length
  );

  if (!source || !entries.length) {
    return source ? [{ type: "text", value: source }] : [];
  }

  let parts = [{ type: "text", value: source }];

  for (const link of entries) {
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

        next.push({
          type: "link",
          value: link.text,
          href: link.href,
          linkType: link.type,
        });

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

export function getParagraphContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations) ? data.translations : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      links: [],
      hasContent: false,
    };
  }

  const normalizedLang = String(lang || "").toLowerCase();
  const matchedTranslation =
    translations.find(
      (translation) =>
        translation?.languageCode?.toLowerCase() === normalizedLang
    ) || translations[0];

  const content = matchedTranslation?.content || {};
  const title = content?.title || "";
  const description = content?.description || content?.paragraph || "";
  const links = normalizeParagraphLinks(content?.links);

  return {
    title,
    description,
    links,
    hasContent: Boolean(title || description),
  };
}

export function getParagraphEditorContent(data, lang = "en") {
  const content = getParagraphContent(data, lang);

  return {
    title: content.title || "",
    description: content.description || "",
    links: content.links.map((link) => ({
      text: link.text || "",
      type: link.type || "internal",
      href: link.href || "",
    })),
  };
}

export function wrapParagraphContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          description: content.description || "",
          links: normalizeParagraphLinks(content.links),
        },
      },
    ],
  };
}
