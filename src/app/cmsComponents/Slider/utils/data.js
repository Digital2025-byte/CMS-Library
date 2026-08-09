import ph1 from "@/assets/header/ph1.webp";
import ph2 from "@/assets/header/ph2.png";
import ph3 from "@/assets/header/ph3.png";

const toUrl = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

/** Hero images — one per slide, cycled if there are more slides than images */
const SLIDER_IMAGES = [ph1, ph2, ph3].map(toUrl);

/**
 * Builds CMS-shaped Slider data from i18next translations.
 * Each entry in `slider.slides` is paired with ph1 / ph2 / ph3 from `@/assets/header`.
 */
export function buildSliderData(t, lang = "en") {
  const slides = t("slider.slides", { returnObjects: true });
  const fallbackImage = SLIDER_IMAGES[0];

  const buildSlide = (slide, index) => ({
    id: slide?.id || `slide-${index + 1}`,
    title: slide?.title || "",
    subtitle: slide?.subtitle || "",
    description: slide?.description || "",
    buttonText: slide?.buttonText || t("slider.buttonText"),
    ctaHref: slide?.ctaHref || t("slider.ctaSlug"),
    alt: slide?.alt || t("slider.imageAlt"),
    image: {
      fileUrl:
        toUrl(slide?.image) ||
        SLIDER_IMAGES[index % SLIDER_IMAGES.length] ||
        fallbackImage,
    },
  });

  return {
    style: {
      ctaButton: {
        slug: t("slider.ctaSlug"),
      },
    },
    translations: [
      {
        languageCode: lang,
        content: {
          slides: Array.isArray(slides)
            ? slides.map(buildSlide)
            : [
                buildSlide(
                  {
                    id: "slide-1",
                    title: t("slider.title"),
                    subtitle: t("slider.subtitle"),
                    description: t("slider.description"),
                  },
                  0
                ),
              ],
        },
      },
    ],
  };
}
