function getFileUrl(image) {
  if (!image) {
    return "";
  }
  if (typeof image === "string") {
    return image;
  }
  return image.fileUrl || image.url || image.src || "";
}

function normalizeSlide(raw, index, shared = {}) {
  const image =
    getFileUrl(raw?.image) ||
    getFileUrl(raw?.backgroundImage) ||
    getFileUrl(raw?.fileUrl) ||
    "";

  return {
    id: raw?.id || `slide-${index + 1}`,
    image,
    alt: raw?.alt || raw?.imageAlt || shared.title || `Slide ${index + 1}`,
    title: raw?.title ?? shared.title ?? "",
    subtitle: raw?.subtitle ?? raw?.kicker ?? shared.subtitle ?? "",
    description: raw?.description ?? shared.description ?? "",
    buttonText:
      raw?.buttonText ||
      raw?.ctaButton?.content ||
      raw?.ctaButton?.label ||
      raw?.button ||
      shared.buttonText ||
      "",
    ctaHref:
      raw?.ctaHref ||
      raw?.ctaButton?.slug ||
      raw?.slug ||
      shared.ctaHref ||
      "",
  };
}

export function getSliderContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      slides: [],
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

  const shared = {
    title: content?.title || "",
    subtitle: content?.subtitle || content?.kicker || "",
    description: content?.description || "",
    buttonText:
      content?.buttonText ||
      content?.ctaButton?.content ||
      content?.ctaButton?.label ||
      content?.button ||
      "",
    ctaHref:
      style?.ctaButton?.slug ||
      content?.ctaButton?.slug ||
      content?.ctaHref ||
      content?.slug ||
      "",
  };

  let slidesRaw = [];

  if (Array.isArray(content?.slides) && content.slides.length) {
    slidesRaw = content.slides;
  } else if (Array.isArray(content?.images) && content.images.length) {
    slidesRaw = content.images;
  } else if (content?.backgroundImage || content?.image) {
    slidesRaw = [
      {
        image: content.backgroundImage || content.image,
        title: shared.title,
        subtitle: shared.subtitle,
        description: shared.description,
        buttonText: shared.buttonText,
        ctaHref: shared.ctaHref,
      },
    ];
  }

  const slides = slidesRaw
    .map((slide, index) => normalizeSlide(slide, index, shared))
    .filter((slide) => slide.image || slide.title || slide.description);

  return {
    slides,
    hasContent: slides.length > 0,
  };
}
