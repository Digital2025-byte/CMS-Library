export function getTextWithBlobContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations) ? data.translations : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      imageSrc: "",
      imageAlt: "Blob image",
    };
  }

  const normalizedLang = String(lang || "").toLowerCase();
  const matchedTranslation =
    translations.find(
      (translation) =>
        translation?.languageCode?.toLowerCase() === normalizedLang
    ) || translations[0];

  const content = matchedTranslation?.content || {};

  return {
    title: content?.title || "",
    description: content?.description || "",
    imageSrc: content?.image?.fileUrl || "",
    imageAlt: content?.image?.alt || content?.title || "Blob image",
  };
}
