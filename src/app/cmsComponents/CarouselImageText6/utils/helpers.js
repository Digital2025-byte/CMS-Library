function normalizeItem(raw) {
  const item = raw?.item || raw || {};
  const image = item?.image || {};

  return {
    title: item?.title || "",
    description: item?.description || "",
    imageUrl: image?.fileUrl || image?.url || image?.src || "",
    imageAlt: image?.alt || item?.title || "Value image",
  };
}

export function getCarouselImageText6Content(data, lang = "en") {
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
    .filter((item) => item.title || item.imageUrl || item.description);

  return {
    title,
    items,
    hasContent: items.length > 0,
  };
}
