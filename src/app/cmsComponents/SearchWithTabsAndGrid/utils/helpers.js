function normalizeSight(raw, index) {
  const image =
    raw?.image ||
    raw?.imageUrl ||
    raw?.image?.fileUrl ||
    raw?.image?.url ||
    "";

  return {
    id: raw?.id || `sight-${index + 1}`,
    name: raw?.name || "",
    cityName: raw?.cityName || "",
    tag: raw?.tag || "",
    slug: raw?.slug || "",
    description: raw?.description || "",
    image: typeof image === "string" ? image : image?.src || "",
  };
}

export function getSearchWithTabsAndGridContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      namePlaceholder: "",
      cityPlaceholder: "",
      gridTitle: "",
      tags: [],
      sights: [],
      emptyMessage: "",
      allLabel: "All",
      exploreLabel: "Explore",
      exploreMagazineLabel: "Explore as magazine",
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
  const search = content?.Search || content?.search || {};
  const tagsRaw =
    content?.tabbedNavigation?.tags || content?.TabbedNavigation?.tags || [];
  const sightsRaw =
    content?.photoTileGrid?.sights ||
    content?.PhotoTileGrid?.sights ||
    [];

  const tags = (Array.isArray(tagsRaw) ? tagsRaw : [])
    .map((tag) => ({
      name: tag?.name || "",
      icon: tag?.Icon || tag?.icon || "",
    }))
    .filter((tag) => tag.name);

  const sights = (Array.isArray(sightsRaw) ? sightsRaw : [])
    .map(normalizeSight)
    .filter((sight) => sight.name || sight.image);

  const gridTitle =
    content?.PhotoTileGrid?.title ||
    content?.photoTileGrid?.title ||
    content?.gridTitle ||
    "";

  return {
    namePlaceholder: search?.namePlaceholder || "",
    cityPlaceholder: search?.cityPlaceholder || "",
    gridTitle,
    tags,
    sights,
    emptyMessage: content?.emptyMessage || "",
    allLabel: content?.allLabel || (lang === "ar" ? "الكل" : "All"),
    exploreLabel: content?.exploreLabel || (lang === "ar" ? "اكتشف" : "Explore"),
    exploreMagazineLabel:
      content?.exploreMagazineLabel ||
      (lang === "ar" ? "اكتشف كمجلة" : "Explore as magazine"),
    hasContent: Boolean(gridTitle || sights.length || tags.length),
  };
}
