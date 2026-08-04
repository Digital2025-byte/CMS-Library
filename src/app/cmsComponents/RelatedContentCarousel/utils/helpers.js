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

export function getCurrentSlidesToShow(cardsCount = 0) {
  if (typeof window === "undefined") return Math.min(3, cardsCount || 1);
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1024) return Math.min(2, cardsCount || 1);
  return Math.min(3, cardsCount || 1);
}

export function normalizeCarouselCard(page, lang = "en", posParams = "gb") {
  const buttonText =
    page?.CTA?.content ||
    page?.buttonText ||
    (lang === "ar" ? "اعرف المزيد" : "Learn More");

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
