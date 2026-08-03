export function getSectionWithAnimatedImagesContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      preTitle: "",
      title: "",
      buttonText: "",
      buttonLink: "",
      iconType: "Instagram",
      images: [],
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
  const preTitle = content?.preTitle || content?.subtitle || "";
  const title = content?.title || "";
  const buttonText =
    content?.buttonText || content?.ctaButton?.content || content?.ctaButton?.label || "";
  const buttonLink =
    content?.buttonLink ||
    content?.ctaButton?.ctaButtonURL ||
    content?.ctaButton?.href ||
    "";
  const iconType =
    content?.iconType || content?.ctaButton?.icon || "Instagram";

  const images = Array.isArray(content?.Cards)
    ? content.Cards.map((item) => item?.ImageCard || item)
        .filter((img) => img?.fileUrl || img?.url || img?.src)
        .map((img) => ({
          src: img?.fileUrl || img?.url || img?.src,
          alt: img?.alt || "Travel experience",
        }))
    : Array.isArray(content?.images)
      ? content.images
          .map((img) => {
            if (typeof img === "string") {
              return { src: img, alt: "Travel experience" };
            }
            if (img?.fileUrl || img?.url || img?.src) {
              return {
                src: img?.fileUrl || img?.url || img?.src,
                alt: img?.alt || "Travel experience",
              };
            }
            return null;
          })
          .filter(Boolean)
      : [];

  return {
    preTitle,
    title,
    buttonText,
    buttonLink,
    iconType,
    images,
    hasContent: Boolean(preTitle || title || buttonText || images.length),
  };
}
