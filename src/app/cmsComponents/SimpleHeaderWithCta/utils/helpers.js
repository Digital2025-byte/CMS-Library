function getFileUrl(image) {
  if (!image) {
    return "";
  }
  if (typeof image === "string") {
    return image;
  }
  return image.fileUrl || image.url || image.src || "";
}

export function getSimpleHeaderWithCtaContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      subtitle: "",
      description: "",
      buttonText: "",
      ctaHref: "",
      backgroundImage: "",
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
  const style = data?.style || {};

  const title = content?.title || "";
  const subtitle = content?.subtitle || content?.kicker || "";
  const description = content?.description || "";
  const buttonText =
    content?.buttonText ||
    content?.ctaButton?.content ||
    content?.ctaButton?.label ||
    content?.button ||
    "";

  const ctaSlug =
    style?.ctaButton?.slug ||
    content?.ctaButton?.slug ||
    content?.ctaHref ||
    content?.slug ||
    "";

  const backgroundImage = getFileUrl(content?.backgroundImage);

  return {
    title,
    subtitle,
    description,
    buttonText,
    ctaHref: ctaSlug,
    backgroundImage,
    hasContent: Boolean(title || description || backgroundImage),
  };
}
