import ph1 from "@/assets/DestinationCities/ph1.jpg";
import ph2 from "@/assets/DestinationCities/ph2.jpg";
import ph3 from "@/assets/DestinationCities/ph3.jpg";
import ph4 from "@/assets/DestinationCities/ph4.jpg";

const toUrl = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

const IMAGES = [ph1, ph2, ph3, ph4].map(toUrl);

/**
 * Builds CMS-shaped DestinationsCities demo data.
 * Images: assets/DestinationCities/ph1–ph4
 */
export function buildDestinationsCitiesData(t, lang = "en") {
  const cities = t("destinationsCities.cities", { returnObjects: true });
  const safeCities = Array.isArray(cities) ? cities : [];

  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: t("destinationsCities.title"),
          description: t("destinationsCities.description"),
          cities: safeCities.map((city, index) => ({
            ...city,
            imageUrl: IMAGES[index % IMAGES.length],
          })),
        },
      },
    ],
  };
}
