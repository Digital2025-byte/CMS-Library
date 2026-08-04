const CITY_IMAGES = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
];

/**
 * Builds CMS-shaped FlightFaresSection data from i18next translations.
 */
export function buildFlightFaresData(t, lang = "en") {
  const cities = t("flightFares.cities", { returnObjects: true });

  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: t("flightFares.title"),
          cities: Array.isArray(cities)
            ? cities.map((city, index) => ({
                cityId: city?.cityId || index + 1,
                cityName: city?.cityName || "",
                IATACode: city?.IATACode || "",
                countryName: city?.countryName || "",
                price: city?.price || "",
                currency: city?.currency || "",
                isNew: Boolean(city?.isNew),
                images: [
                  {
                    url: CITY_IMAGES[index % CITY_IMAGES.length],
                    alt: city?.cityName || "",
                  },
                ],
              }))
            : [],
        },
      },
    ],
  };
}
