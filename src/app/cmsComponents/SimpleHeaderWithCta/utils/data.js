import ph1 from "@/assets/header/ph1.webp";

const toUrl = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

/**
 * Builds CMS-shaped SimpleHeaderWithCta data from i18next translations.
 */
export function buildSimpleHeaderWithCtaData(t, lang = "en") {
  return {
    style: {
      ctaButton: {
        slug: t("simpleHeaderWithCta.ctaSlug"),
      },
    },
    translations: [
      {
        languageCode: lang,
        content: {
          title: t("simpleHeaderWithCta.title"),
          subtitle: t("simpleHeaderWithCta.subtitle"),
          description: t("simpleHeaderWithCta.description"),
          buttonText: t("simpleHeaderWithCta.buttonText"),
          backgroundImage: {
            fileUrl: toUrl(ph1),
            alt: t("simpleHeaderWithCta.imageAlt"),
          },
        },
      },
    ],
  };
}
