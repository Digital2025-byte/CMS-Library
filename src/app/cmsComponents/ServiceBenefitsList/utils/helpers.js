export function getServiceBenefitsContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      mainTitle: "",
      backgroundImage: "",
      benefits: [],
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
  const mainTitle = content?.mainTitle || "";
  const rawBackground =
    content?.backgroundImage?.fileUrl || content?.backgroundImage || "";
  const backgroundImage =
    typeof rawBackground === "string"
      ? rawBackground
      : typeof rawBackground?.src === "string"
        ? rawBackground.src
        : "";

  const benefits = Array.isArray(content?.benefits) ? content.benefits : [];

  return {
    mainTitle,
    backgroundImage,
    benefits,
    hasContent: Boolean(mainTitle || benefits.length || backgroundImage),
  };
}
