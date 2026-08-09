import ph1 from "@/assets/header/ph1.webp";

const toUrl = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

/**
 * Builds CMS-shaped Slider data from i18next translations.
 * Add more entries to `slides` to show additional hero images.
 */
export function buildSliderData(t, lang = "en") {
  const slides = t("slider.slides", { returnObjects: true });
  const imageUrl = toUrl(ph1);

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
            ? slides.map((slide, index) => ({
                id: slide?.id || `slide-${index + 1}`,
                title: slide?.title || "",
                subtitle: slide?.subtitle || "",
                description: slide?.description || "",
                buttonText: slide?.buttonText || t("slider.buttonText"),
                ctaHref: slide?.ctaHref || t("slider.ctaSlug"),
                alt: slide?.alt || t("slider.imageAlt"),
                image: {
                  fileUrl: toUrl(slide?.image) || imageUrl,
                },
              }))
            : [
                {
                  id: "slide-1",
                  title: t("slider.title"),
                  subtitle: t("slider.subtitle"),
                  description: t("slider.description"),
                  buttonText: t("slider.buttonText"),
                  ctaHref: t("slider.ctaSlug"),
                  alt: t("slider.imageAlt"),
                  image: { fileUrl: imageUrl },
                },
              ],
        },
      },
    ],
  };
}
