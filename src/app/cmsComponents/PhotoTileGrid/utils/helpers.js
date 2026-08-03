export function getPhotoTileGridContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      destinations: [],
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
  const title = content?.title || "";

  const destinations = (
    Array.isArray(content?.destinations) ? content.destinations : []
  )
    .map((card) => {
      const imageUrl =
        card?.imageUrl ||
        card?.image?.fileUrl ||
        card?.image?.url ||
        card?.fileUrl ||
        "";

      if (!imageUrl || String(imageUrl).trim() === "") {
        return null;
      }

      return {
        imageUrl,
        iataCode: card?.iataCode || card?.IATACode || "",
        cityName: card?.cityName || card?.CityName || "",
        countryName: card?.countryName || card?.CountryName || "",
        takeATripUrl: card?.takeATripUrl || card?.TakeUrl || card?.href || "#",
        discoverLabel: card?.discoverLabel || "",
      };
    })
    .filter(Boolean);

  return {
    title,
    destinations,
    hasContent: Boolean(title || destinations.length),
  };
}
