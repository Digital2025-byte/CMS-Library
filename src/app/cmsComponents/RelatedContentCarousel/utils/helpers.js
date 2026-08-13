export function getCardKey(card, index) {
  return card?.id || card?.title || `card-${index}`;
}

export function getImageUrl(img) {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (img?.src) return img.src;
  if (img?.default) return img.default;
  return "";
}

export function getCurrentSlidesToShow(cardsCount = 0, width) {
  const count = Math.max(cardsCount || 1, 1);
  if (width == null) return Math.min(2.35, count);
  if (width < 768) return Math.min(1.15, count);
  if (width < 1024) return Math.min(1.7, count);
  return Math.min(2.35, count);
}

export function normalizeCarouselCard(page, lang = "en", posParams = "gb") {
  const buttonText = page?.CTA?.content || page?.buttonText || "";

  const buttonLink = page?.CTA?.slug
    ? `/${posParams}/${lang}/${page.CTA.slug}`
    : page?.buttonLink || "#";

  return {
    id: page?.id || "",
    title: page?.title || "",
    description: page?.description || "",
    image: {
      fileUrl:
        page?.CardImage?.fileUrl ||
        page?.image?.fileUrl ||
        page?.imageUrl ||
        "",
      width: page?.CardImage?.width || page?.image?.width || 0,
      height: page?.CardImage?.height || page?.image?.height || 0,
      alt: page?.CardImage?.alt || page?.title || "Card image",
    },
    buttonText,
    buttonLink,
  };
}

export function getRelatedContentCarouselContent(
  data,
  lang = "en",
  posParams = "gb"
) {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      cards: [],
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
  const pages = Array.isArray(content?.pages) ? content.pages : [];
  const cardsFromPages = pages.map((page) =>
    normalizeCarouselCard(page, lang, posParams)
  );
  const fallbackCards = Array.isArray(content?.cards)
    ? content.cards.map((card) => normalizeCarouselCard(card, lang, posParams))
    : [];
  const cards = cardsFromPages.length ? cardsFromPages : fallbackCards;

  return {
    title: content?.title || "",
    description: content?.description || "",
    cards,
    hasContent: Boolean(content?.title || content?.description || cards.length),
  };
}
