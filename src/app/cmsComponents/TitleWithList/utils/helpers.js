function normalizeItem(entry) {
  if (typeof entry === "string") {
    return entry;
  }
  if (typeof entry?.item === "string") {
    return entry.item;
  }
  if (typeof entry?.content === "string") {
    return entry.content;
  }
  if (typeof entry?.text === "string") {
    return entry.text;
  }
  return "";
}

export function getTitleWithListContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return { title: "", items: [], hasContent: false };
  }

  const normalizedLang = String(lang || "").toLowerCase();
  const matchedTranslation =
    translations.find(
      (translation) =>
        String(translation?.languageCode || "").toLowerCase() ===
        normalizedLang
    ) || translations[0];

  const content = matchedTranslation?.content || {};
  const title = content?.title || "";
  const items = (Array.isArray(content?.items) ? content.items : [])
    .map(normalizeItem)
    .filter(Boolean);

  return {
    title,
    items,
    hasContent: Boolean(title || items.length),
  };
}

export function getTitleWithListEditorContent(data, lang = "en") {
  const content = getTitleWithListContent(data, lang);

  return {
    title: content.title || "",
    items: content.items.map((text) => ({ text })),
  };
}

export function wrapTitleWithListContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          items: (Array.isArray(content.items) ? content.items : []).map(
            (item) => ({
              item: item?.text || item?.item || "",
            })
          ),
        },
      },
    ],
  };
}
