function normalizeItem(rawItem) {
  const item = rawItem?.item || rawItem || {};
  const image = item?.image || {};
  const cta = item?.ctaButton || item?.cta || {};

  return {
    title: item?.title || "",
    description: item?.description || "",
    imageUrl: image?.fileUrl || image?.url || image?.src || "",
    imageAlt: image?.alt || item?.title || "Section image",
    buttonText: cta?.label || cta?.content || item?.buttonText || "",
    ctaHref: cta?.href || cta?.slug || item?.ctaHref || "",
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
      exploreButtonLabel: "",
      exploreButtonHref: "",
      extraImageUrl: "",
      extraImageAlt: "",
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

  const exploreCta = content?.exploreButton || content?.ctaButton || {};
  const extraImage = content?.extraImage || {};

  return {
    items,
    exploreButtonLabel:
      exploreCta?.label || exploreCta?.content || "Explore more",
    exploreButtonHref: exploreCta?.href || exploreCta?.slug || "explore",
    extraImageUrl:
      extraImage?.fileUrl || extraImage?.url || extraImage?.src || "",
    extraImageAlt: extraImage?.alt || "",
    hasContent: items.length > 0,
  };
}
