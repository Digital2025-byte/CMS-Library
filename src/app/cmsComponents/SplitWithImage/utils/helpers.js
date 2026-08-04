export function getSplitWithImageContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      backgroundImageUrl: "",
      imageUrl: "",
      imageAlt: "",
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
  const title = content?.title || "";
  const description = content?.description || "";
  const backgroundImageUrl =
    content?.backgroundImage?.fileUrl ||
    content?.backgroundImage?.url ||
    content?.backgroundImage?.src ||
    "";
  const image = content?.image || {};
  const imageUrl = image?.fileUrl || image?.url || image?.src || "";
  const imageAlt = image?.alt || title || "Aircraft";

  return {
    title,
    description,
    backgroundImageUrl,
    imageUrl,
    imageAlt,
    hasContent: Boolean(title || description || imageUrl || backgroundImageUrl),
  };
}
