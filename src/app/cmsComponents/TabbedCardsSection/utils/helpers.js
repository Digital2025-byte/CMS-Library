export function isUsableImageSrc(src) {
  const value = String(src || "").trim();
  if (!value) {
    return false;
  }

  if (value.startsWith("/") && !value.startsWith("//")) {
    return true;
  }

  try {
    const url = new URL(value.startsWith("//") ? `https:${value}` : value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeCard(card) {
  const imageSrc =
    card?.imageSrc ||
    card?.imageUrl ||
    card?.image?.fileUrl ||
    card?.image?.url ||
    "";

  return {
    title: card?.title || "",
    description: card?.description || "",
    imageSrc,
    imageAlt: card?.imageAlt || card?.image?.alt || card?.title || "",
  };
}

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
  const subtitle = content?.subtitle || content?.description || "";
  const tabs =
    Array.isArray(content?.tabs) && content.tabs.length > 0
      ? content.tabs.map((tab) => ({
          label: tab?.label || "",
          cards: Array.isArray(tab?.cards) ? tab.cards.map(normalizeCard) : [],
        }))
      : [];

  return {
    title,
    subtitle,
    tabs,
    hasContent: Boolean(title || subtitle || tabs.length),
  };
}

export function getTabbedCardsEditorContent(data, lang = "en") {
  const content = getTabbedCardsContent(data, lang);

  return {
    title: content.title || "",
    description: content.subtitle || "",
    items: content.tabs.map((tab) => ({
      label: tab.label || "",
      cards: (tab.cards || []).map((card) => ({
        title: card.title || "",
        description: card.description || "",
        imageUrl: card.imageSrc || "",
        imageAlt: card.imageAlt || "",
      })),
    })),
  };
}

export function wrapTabbedCardsContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          subtitle: content.description || "",
          tabs: (Array.isArray(content.items) ? content.items : []).map(
            (tab) => ({
              label: tab?.label || "",
              cards: (Array.isArray(tab?.cards) ? tab.cards : []).map(
                (card) => ({
                  title: card?.title || "",
                  description: card?.description || "",
                  image: {
                    fileUrl: card?.imageUrl || "",
                    alt: card?.imageAlt || card?.title || "",
                  },
                })
              ),
            })
          ),
        },
      },
    ],
  };
}
