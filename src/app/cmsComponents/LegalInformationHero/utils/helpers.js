export function getLegalInformationHeroContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return { title: "", description: "", patternUrl: "", hasContent: false };
  }

  const normalized = String(lang || "").toLowerCase();
  const matched =
    translations.find(
      (item) => String(item?.languageCode || "").toLowerCase() === normalized
    ) || translations[0];

  const content = matched?.content || {};
  const title = content.title || "";
  const description = content.description || "";
  const patternUrl = content.patternUrl || content.pattern || "";

  return {
    title,
    description,
    patternUrl,
    hasContent: Boolean(title || description),
  };
}
