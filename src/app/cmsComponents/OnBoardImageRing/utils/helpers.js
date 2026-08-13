function resolveImageUrl(image) {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (typeof image.url === "string") return image.url;
  if (image.url?.src) return image.url.src;
  if (image.src) return image.src;
  if (image.fileUrl) return image.fileUrl;
  return "";
}

function pickTranslation(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];
  const normalized = String(lang || "").toLowerCase();
  return (
    translations.find(
      (item) =>
        String(item?.languageCode || "").toLowerCase() === normalized
    ) || translations[0]
  );
}

/**
 * Normalize CMS / demo payload for OnBoardImageRing.
 */
export function getOnBoardImageRingContent(data, lang = "en") {
  const content = pickTranslation(data, lang)?.content;

  if (!content) {
    return {
      title: "",
      description: "",
      images: [],
      captions: [],
      hasContent: false,
    };
  }

  const pages = Array.isArray(content.pages) ? content.pages : [];
  const images =
    pages.length > 0
      ? pages.map((page) => resolveImageUrl(page?.CardImage)).filter(Boolean)
      : (content.images || [])
          .map((img) => resolveImageUrl(img))
          .filter(Boolean);

  const captions =
    pages.length > 0
      ? pages.map((page) => page?.title || "")
      : Array.isArray(content.captions)
        ? content.captions
        : [];

  return {
    title: content.title || "",
    description: content.description || "",
    images,
    captions,
    hasContent: images.length > 0,
  };
}
