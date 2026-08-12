import { withCampaignPath } from "@/utils/withCampaignPath";

function resolveImageUrl(image) {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (typeof image.url === "string") return image.url;
  if (image.url?.src) return image.url.src;
  if (image.src) return image.src;
  if (image.fileUrl) return image.fileUrl;
  return "";
}

function uniqueCities(cities) {
  const seen = new Set();
  return cities.filter((city) => {
    const name = city?.cityName?.trim().toLowerCase();
    if (!name || seen.has(name)) return false;
    seen.add(name);
    return true;
  });
}

/**
 * Normalize CMS DestinationShowcase payload.
 */
export function getDestinationShowcaseContent(
  data,
  lang = "en",
  { posParams = "gb", cId } = {}
) {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      viewAllLabel: "",
      viewAllHref: "",
      exploreLabel: "",
      destinations: [],
      hasContent: false,
    };
  }

  const normalized = String(lang || "").toLowerCase();
  const matched =
    translations.find(
      (entry) =>
        String(entry?.languageCode || "").toLowerCase() === normalized
    ) || translations[0];

  const content = matched?.content || {};
  const rawCities = uniqueCities(
    Array.isArray(content.cities) ? content.cities : []
  );

  const destinations = rawCities
    .map((city, index) => {
      const slug = (city.slug || city.cityName || "")
        .toLowerCase()
        .replace(/\s+/g, "-");
      // One photo per destination — banner background and card share it.
      const imageUrl =
        resolveImageUrl(city.heroImageUrl) ||
        resolveImageUrl(city.heroImage) ||
        resolveImageUrl(city.cardImageUrl) ||
        resolveImageUrl(city.cardImage) ||
        resolveImageUrl(city.imageUrl) ||
        resolveImageUrl(city.image);

      return {
        id: city.cityId || city.airportId || index,
        name: city.cityName || "",
        description:
          city.description ||
          [city.cityName, city.countryName].filter(Boolean).join(" — "),
        imageUrl,
        cardImageUrl: imageUrl,
        exploreLink: withCampaignPath(
          `/${posParams}/${lang}/our-destinations/${slug}`,
          cId
        ),
      };
    })
    .filter((city) => city.imageUrl);

  const viewAllPath =
    data?.style?.ctaButton?.slug ||
    content?.ctaButton?.slug ||
    `/${posParams}/${lang}/our-destinations`;

  return {
    title: content.title || "",
    description: content.description || "",
    viewAllLabel:
      content?.ctaButton?.content ||
      content?.viewAllLabel ||
      (lang === "ar" ? "عرض كل الوجهات" : "View all destinations"),
    viewAllHref: withCampaignPath(viewAllPath, cId),
    exploreLabel: content.exploreLabel || (lang === "ar" ? "اكتشف" : "Explore"),
    destinations,
    hasContent: Boolean(content.title || destinations.length),
  };
}

/**
 * Build a seamless infinite track. With `cloneCount === destinations.length`
 * this yields three identical copies ([A B C][A B C][A B C]), so the slider is
 * always filled on both sides and can recenter into the middle copy invisibly.
 */
export function buildInfiniteList(destinations, cloneCount = 2) {
  if (destinations.length <= 1) return destinations;
  return [
    ...destinations.slice(-cloneCount),
    ...destinations,
    ...destinations.slice(0, cloneCount),
  ];
}
