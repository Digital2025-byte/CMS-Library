function normalizeItem(rawItem) {
  const item = rawItem?.item || rawItem || {};
  const image = item?.image || {};

  return {
    title: item?.title || "",
    description: item?.description || "",
    imageUrl: image?.fileUrl || image?.url || image?.src || "",
    imageAlt: image?.alt || item?.title || "Section image",
  };
}

export function getDualImageTextContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      items: [],
      variant: "towards",
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
  const rawItems = Array.isArray(content?.items) ? content.items : [];
  const items = rawItems
    .map(normalizeItem)
    .filter((item) => item.title || item.imageUrl || item.description);

  const combinedTitle = items
    .map((item) => String(item.title || "").toLowerCase())
    .join(" ");

  const explicitVariant = String(content?.variant || "").toLowerCase();

  let variant = "towards";
  if (explicitVariant === "training" || explicitVariant === "traning") {
    variant = "training";
  } else if (explicitVariant === "towards") {
    variant = "towards";
  } else if (
    combinedTitle.includes("train") ||
    combinedTitle.includes("training") ||
    combinedTitle.includes("towards")
  ) {
    variant = "training";
  }

  return {
    items,
    variant,
    hasContent: items.length > 0,
  };
}
