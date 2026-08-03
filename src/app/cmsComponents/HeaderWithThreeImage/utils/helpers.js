function normalizeImage(image, fallbackAlt = "Background image") {
  if (!image) {
    return { fileUrl: "", alt: fallbackAlt };
  }

  if (typeof image === "string") {
    return { fileUrl: image, alt: fallbackAlt };
  }

  return {
    fileUrl: image.fileUrl || image.url || image.src || "",
    alt: image.alt || fallbackAlt,
  };
}

export function getHeaderWithThreeImageContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      imageOne: { fileUrl: "", alt: "" },
      imageTwo: { fileUrl: "", alt: "" },
      imageThree: { fileUrl: "", alt: "" },
      mobileImageOne: { fileUrl: "", alt: "" },
      mobileImageTwo: { fileUrl: "", alt: "" },
      mobileImageThree: { fileUrl: "", alt: "" },
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

  const imageOne = normalizeImage(
    content?.backgroundImageOne,
    "Background image one"
  );
  const imageTwo = normalizeImage(
    content?.backgroundImageTwo,
    "Background image two"
  );
  const imageThree = normalizeImage(
    content?.backgroundImageThree,
    "Background image three"
  );

  const mobileImageOne = normalizeImage(
    content?.backgroundMobileImageOne || content?.backgroundImageOne,
    imageOne.alt
  );
  const mobileImageTwo = normalizeImage(
    content?.backgroundMobileImageTwo || content?.backgroundImageTwo,
    imageTwo.alt
  );
  const mobileImageThree = normalizeImage(
    content?.backgroundMobileImageThree || content?.backgroundImageThree,
    imageThree.alt
  );

  return {
    title,
    description,
    imageOne,
    imageTwo,
    imageThree,
    mobileImageOne,
    mobileImageTwo,
    mobileImageThree,
    hasContent: Boolean(
      title ||
        description ||
        imageOne.fileUrl ||
        imageTwo.fileUrl ||
        imageThree.fileUrl
    ),
  };
}
