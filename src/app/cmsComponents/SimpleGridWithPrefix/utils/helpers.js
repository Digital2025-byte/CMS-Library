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

export function getSimpleGridWithPrefixEditorContent(data, lang = "en") {
  const content = getSimpleGridWithPrefixContent(data, lang);

  return {
    title: content.title || "",
    description: content.description || "",
    prefix: content.prefix || "",
    chip: content.chip || "",
    items: content.items.map((item) => ({
      title: item.title || "",
      userName: item.userName || "",
      link: item.link === "#" ? "" : item.link || "",
      icon: item.icon || "",
      chip: item.chip || "",
    })),
  };
}

export function wrapSimpleGridWithPrefixContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          description: content.description || "",
          prefix: content.prefix || "",
          chip: content.chip || "",
          channels: (Array.isArray(content.items) ? content.items : []).map(
            (item) => ({
              grid: {
                title: item?.title || "",
                userName: item?.userName || "",
                link: item?.link || "",
                icon: item?.icon || "",
                chip: item?.chip || "",
              },
            })
          ),
        },
      },
    ],
  };
}
