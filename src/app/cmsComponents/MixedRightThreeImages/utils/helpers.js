function normalizeImage(image, fallbackAlt = "Image") {
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

function normalizeCta(raw, fallbackLabel = "", fallbackHref = "/") {
  if (!raw || typeof raw === "string") {
    return {
      label: typeof raw === "string" ? raw : fallbackLabel,
      href: fallbackHref,
    };
  }

  return {
    label: raw.label || raw.content || fallbackLabel,
    href: raw.href || raw.url || raw.slug || fallbackHref,
  };
}

export function getMixedRightThreeImagesContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      primaryCta: { label: "", href: "/" },
      secondaryCta: { label: "", href: "/" },
      largeImage: { fileUrl: "", alt: "" },
      smallImageOne: { fileUrl: "", alt: "" },
      smallImageTwo: { fileUrl: "", alt: "" },
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
  const title = content?.title || content?.name || "";
  const description = content?.description || "";

  const primaryCta = normalizeCta(
    content?.primaryCta || content?.cta,
    content?.ctaLabel || "",
    content?.ctaHref || "/"
  );
  const secondaryCta = normalizeCta(
    content?.secondaryCta,
    content?.secondaryCtaLabel || "",
    content?.secondaryCtaHref || "/"
  );

  const images = Array.isArray(content?.images) ? content.images : [];
  // Large tall image on the right; two smaller images side-by-side on the left.
  const largeImage = normalizeImage(
    content?.largeImage || images[0],
    "Featured image"
  );
  const smallImageOne = normalizeImage(
    content?.smallImageOne || images[1],
    "Gallery image one"
  );
  const smallImageTwo = normalizeImage(
    content?.smallImageTwo || images[2],
    "Gallery image two"
  );

  return {
    title,
    description,
    primaryCta,
    secondaryCta,
    largeImage,
    smallImageOne,
    smallImageTwo,
    hasContent: Boolean(
      title ||
        description ||
        largeImage.fileUrl ||
        smallImageOne.fileUrl ||
        smallImageTwo.fileUrl
    ),
  };
}
