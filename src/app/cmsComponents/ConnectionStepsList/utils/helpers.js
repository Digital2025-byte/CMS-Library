function normalizeImage(image, fallbackAlt = "Step image") {
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

function normalizeStep(raw, index) {
  const step = raw?.step || raw || {};
  const fallbackAlt = `Step ${index + 1}`;
  const image = normalizeImage(step?.image, step?.imageAlt || fallbackAlt);

  return {
    description: step?.description || "",
    imageUrl: image.fileUrl,
    imageAlt: image.alt || fallbackAlt,
  };
}

export function getConnectionStepsListContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return { title: "", steps: [], stepLabel: "", hasContent: false };
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
  const steps = (Array.isArray(content?.steps) ? content.steps : [])
    .map(normalizeStep)
    .filter((step) => step.description || step.imageUrl);

  return {
    title,
    steps,
    stepLabel: content?.stepLabel || "",
    hasContent: Boolean(title || steps.length),
  };
}
