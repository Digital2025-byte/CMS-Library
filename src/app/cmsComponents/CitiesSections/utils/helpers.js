function getFileUrl(file) {
  if (!file) {
    return "";
  }
  if (typeof file === "string") {
    return file;
  }
  return (
    file?.fileUrl ||
    file?.FileUrl ||
    file?.url ||
    file?.src ||
    ""
  );
}

export function getCitiesSectionsContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      template: "right",
      image1: "",
      image2: "",
      isCTA: false,
      slug: "",
      ctaLabel: "",
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

  // Support nested CMS Translations array when present
  const nestedTranslations = Array.isArray(content?.Translations)
    ? content.Translations
    : Array.isArray(content?.translations)
      ? content.translations
      : [];
  const nested =
    nestedTranslations.find(
      (item) =>
        String(item?.LanguageCode || item?.languageCode || "").toLowerCase() ===
        normalizedLang
    ) || nestedTranslations[0] || {};

  const title =
    nested?.Title || nested?.title || content?.title || "";
  const description =
    nested?.Description || nested?.description || content?.description || "";
  const template =
    nested?.template || content?.template || "left";

  const files = content?.files || content?.images || [];
  const image1 = getFileUrl(files[0]);
  const image2 = getFileUrl(files[1]);

  const isCTA = Boolean(content?.isCTA);
  const slug = content?.slug || "";
  const ctaLabel =
    content?.ctaLabel ||
    (lang === "ar" ? "اكتشف المزيد" : "Explore more");

  return {
    title,
    description,
    template: template === "left" ? "left" : "right",
    image1,
    image2,
    isCTA,
    slug,
    ctaLabel,
    hasContent: Boolean(title || description || image1 || image2),
  };
}
