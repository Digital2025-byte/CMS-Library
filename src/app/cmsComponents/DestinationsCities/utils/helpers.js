export function getDestinationsCitiesContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return { title: "", description: "", cities: [], hasContent: false };
  }

  const normalized = String(lang || "").toLowerCase();
  const matched =
    translations.find(
      (t) => String(t?.languageCode || "").toLowerCase() === normalized
    ) || translations[0];

  const content = matched?.content || {};
  const cities = (Array.isArray(content.cities) ? content.cities : [])
    .filter((city) => Number(city?.numberOfFlightsPerWeek) > 0)
    .slice(0, 5)
    .map((city) => ({
      IATACode: city.IATACode || city.iataCode || "",
      cityName: city.cityName || "",
      numberOfFlightsPerWeek: city.numberOfFlightsPerWeek,
      description: city.description || "",
      imageUrl:
        typeof city.imageUrl === "string"
          ? city.imageUrl
          : city.imageUrl?.src ||
            city.imageUrl?.[0] ||
            city.image?.fileUrl ||
            "",
      duration: city.duration || "",
      title: city.title || city.cityName || "",
      subtitle: city.subtitle || "",
      flights: city.flights,
      versionCard: city.versionCard,
    }))
    .filter((city) => city.imageUrl);

  return {
    title: content.title || "",
    description: content.description || "",
    cities,
    hasContent: Boolean(content.title || cities.length),
  };
}
