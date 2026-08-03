function normalizeImageItem(item) {
  if (!item) return null;

  const fileUrl = item.fileUrl || item.url || item.src || "";
  if (!fileUrl) return null;

  return {
    fileUrl,
    title: item.title || item.alt || "",
    alt: item.alt || item.title || "Destination image",
  };
}

function mapRowItems(items, nestedKey) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => normalizeImageItem(item?.[nestedKey] || item))
    .filter(Boolean);
}

export function getOppositeScrollCarouselContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      exploreLabel: "",
      exploreHref: "#",
      topRow: [],
      bottomRow: [],
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
  const title = content?.carouselTitle || content?.title || "";
  const description =
    content?.carouselDescription || content?.description || "";
  const exploreLabel = content?.exploreLabel || content?.ctaLabel || "Explore";
  const exploreHref =
    content?.exploreHref || content?.ctaHref || content?.exploreLink || "#";

  const topRow = mapRowItems(content?.itemsLeftToRight, "imagesLeftToRight");
  const bottomRow = mapRowItems(
    content?.itemsRightToLeft,
    "imagesRightToLeft"
  );

  return {
    title,
    description,
    exploreLabel,
    exploreHref,
    topRow,
    bottomRow,
    hasContent: Boolean(
      title || description || topRow.length || bottomRow.length
    ),
  };
}
