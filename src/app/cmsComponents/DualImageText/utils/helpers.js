function normalizeItem(rawItem) {
  const item = rawItem?.item || rawItem || {};
  const image = item?.image || {};

  return {
    title: item?.title || "",
    description: item?.description || "",
    imageUrl: image?.fileUrl || image?.url || image?.src || "",
    imageAlt: image?.alt || item?.title || "Section image",
  };
}

export function imageSrc(url) {
  if (!url) return "";
  return String(url).startsWith("http") ? encodeURI(url) : url;
}

export function getDualImageTextContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      items: [],
      hasContent: false,
    };
  }

  const normalizedLang = String(lang || "").toLowerCase();
  const matchedTranslation =
    translations.find(
      (translation) =>
        String(translation?.languageCode || "").toLowerCase() ===
        normalizedLang
    ) || translations[0];

  const content = matchedTranslation?.content || {};
  const rawItems = Array.isArray(content?.items) ? content.items : [];
  const items = rawItems
    .map(normalizeItem)
    .filter((item) => item.title || item.imageUrl || item.description);

  return {
    items,
    hasContent: items.length > 0,
  };
}
