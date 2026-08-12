import ph1 from "@/assets/DestinationShowcase/ph1.png";
import ph2 from "@/assets/DestinationShowcase/ph2.png";
import ph3 from "@/assets/DestinationShowcase/ph3.png";
import ph4 from "@/assets/DestinationShowcase/ph4.png";
import heroPh1 from "@/assets/DestinationCities/ph1.webp";
import heroPh2 from "@/assets/DestinationCities/ph2.webp";
import heroPh3 from "@/assets/DestinationCities/ph3.webp";
import heroPh4 from "@/assets/DestinationCities/ph4.webp";

const toUrl = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

/** Carousel thumbnails — assets/DestinationShowcase/ph1–ph4 (~142×184) */
const CARD_IMAGES = [ph1, ph2, ph3, ph4].map(toUrl);

/** Full-width hero backgrounds — paired full-size photos by index */
const HERO_IMAGES = [heroPh1, heroPh2, heroPh3, heroPh4].map(toUrl);

/**
 * Builds CMS-shaped DestinationShowcase demo data.
 * Card images: assets/DestinationShowcase/ph1–ph4
 * Hero images: full-size companions (DestinationCities/ph1–ph4)
 */
export function buildDestinationShowcaseData(t, lang = "en") {
  const cities = t("destinationShowcase.cities", { returnObjects: true });
  const safeCities = Array.isArray(cities) ? cities : [];

  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: t("destinationShowcase.title"),
          description: t("destinationShowcase.description"),
          viewAllLabel: t("destinationShowcase.viewAllLabel"),
          exploreLabel: t("destinationShowcase.exploreLabel"),
          ctaButton: {
            content: t("destinationShowcase.viewAllLabel"),
            slug: t("destinationShowcase.viewAllHref"),
          },
          cities: safeCities.map((city, index) => {
            const i = index % CARD_IMAGES.length;
            return {
              ...city,
              heroImageUrl: HERO_IMAGES[i],
              cardImageUrl: CARD_IMAGES[i],
            };
          }),
        },
      },
    ],
  };
}
