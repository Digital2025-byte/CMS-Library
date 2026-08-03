export function getTabbedCardsContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations) ? data.translations : [];

  if (!translations.length) {
    return {
      title: "",
      subtitle: "",
      tabs: [],
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
  const subtitle = content?.subtitle || "";
  const tabs =
    Array.isArray(content?.tabs) && content.tabs.length > 0
      ? content.tabs.map((tab) => ({
          label: tab?.label || "",
          cards: Array.isArray(tab?.cards)
            ? tab.cards.map((card) => ({
                title: card?.title || "",
                description: card?.description || "",
                imageSrc: card?.image?.fileUrl || "",
                imageAlt: card?.image?.alt || card?.title || "Card image",
              }))
            : [],
        }))
      : [];

  return {
    title,
    subtitle,
    tabs,
    hasContent: Boolean(title || subtitle || tabs.length),
  };
}
