function normalizeImage(image, fallbackAlt = "Meal image") {
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

function normalizeItem(raw) {
  const item = raw?.item || raw || {};
  return {
    title: item?.title || "",
    description: item?.description || "",
  };
}

function normalizeGroup(raw) {
  const group = raw?.group || raw || {};
  const items = (Array.isArray(group?.items) ? group.items : [])
    .map(normalizeItem)
    .filter((item) => item.title || item.description);

  return {
    title: group?.title || group?.groupTitle || "",
    items,
  };
}

function normalizeSection(raw) {
  const section = raw?.section || raw || {};
  const groups = (Array.isArray(section?.groups) ? section.groups : [])
    .map(normalizeGroup)
    .filter((group) => group.title || group.items.length);
  const items = (Array.isArray(section?.items) ? section.items : [])
    .map(normalizeItem)
    .filter((item) => item.title || item.description);

  return {
    sectionTitle: section?.sectionTitle || section?.title || "",
    groups,
    items,
  };
}

function normalizeTab(raw) {
  const tab = raw?.tab || raw || {};
  const label = tab?.label || "";
  const image = normalizeImage(tab?.image, label || "Meal image");
  const sections = (Array.isArray(tab?.sections) ? tab.sections : [])
    .map(normalizeSection)
    .filter(
      (section) =>
        section.sectionTitle || section.items.length || section.groups.length
    );

  return {
    label,
    image,
    sections,
  };
}

export function getMealsDescriptionTabbedContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return { title: "", tabs: [], notes: [], hasContent: false };
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
  const notes = Array.isArray(content?.notes)
    ? content.notes.filter(Boolean)
    : [];
  const tabs = (Array.isArray(content?.tabs) ? content.tabs : [])
    .map(normalizeTab)
    .filter((tab) => tab.label || tab.sections.length || tab.image.fileUrl);

  return {
    title,
    tabs,
    notes,
    hasContent: Boolean(title || tabs.length),
  };
}
