import { getIconSrc } from "./icons";

export function normalizeSimpleGridItem(item) {
  const grid = item?.grid || {};

  return {
    title: grid?.title || item?.title || "",
    link: grid?.link || item?.link || "#",
    userName: grid?.userName || item?.userName || "",
    icon: grid?.icon || item?.icon || "",
    iconSrc: getIconSrc(grid?.icon || item?.icon),
    chip: grid?.chip || item?.chip || "",
  };
}

export function getSimpleGridWithPrefixContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      prefix: "",
      chip: "",
      items: [],
      hasContent: false,
    };
  }

  const normalizedLang = String(lang || "").toLowerCase();
  const matchedTranslation =
    translations.find(
      (translation) =>
        translation?.languageCode?.toLowerCase() === normalizedLang
    ) || translations[0];

  const content = matchedTranslation?.content || {};
  const title = content?.title || "";
  const description = content?.description || "";
  const prefix = content?.prefix || "";
  const chip = content?.chip || "";
  const rawItems = content?.channels || content?.items || [];
  const items = Array.isArray(rawItems)
    ? rawItems.map(normalizeSimpleGridItem)
    : [];

  return {
    title,
    description,
    prefix,
    chip,
    items,
    hasContent: Boolean(title || items.length),
  };
}
