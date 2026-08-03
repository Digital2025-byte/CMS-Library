/**
 * Escapes spaces and parentheses so a URL is safe inside CSS url().
 */
export function toCssUrl(url = "") {
  return String(url)
    .replace(/\s/g, "%20")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
}

export function getSplitTextOnlyContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations) ? data.translations : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      backgroundImage: "",
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
  const description = content?.description || content?.subtitle || "";
  const backgroundImageRaw = content?.backgroundImage?.fileUrl || "";
  const backgroundImage =
    typeof backgroundImageRaw === "string"
      ? toCssUrl(backgroundImageRaw)
      : backgroundImageRaw;

  return {
    title,
    description,
    backgroundImage,
    hasContent: Boolean(title || description || backgroundImage),
  };
}
