import ph1 from "@/assets/DualImageText/ph1.png";
import ph2 from "@/assets/DualImageText/ph2.png";
import ph3 from "@/assets/DualImageText/ph3.png";

const toUrl = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

const ph1Url = toUrl(ph1);
const ph2Url = toUrl(ph2);
const ph3Url = toUrl(ph3);

/**
 * Builds CMS-shaped DualImageText data from i18next translations.
 * Set content.variant to "towards" | "training".
 */
export function buildDualImageTextData(t, lang = "en", variant = "towards") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          variant,
          exploreButton: {
            label: t("dualImageText.exploreMore"),
            slug: t("dualImageText.exploreSlug"),
          },
          extraImage: {
            fileUrl: ph3Url,
            alt: t("dualImageText.extraImageAlt"),
          },
          items: [
            {
              item: {
                title: t(`dualImageText.${variant}.itemOne.title`),
                description: t(`dualImageText.${variant}.itemOne.description`),
                image: {
                  fileUrl: ph1Url,
                  alt: t(`dualImageText.${variant}.itemOne.imageAlt`),
                },
              },
            },
            {
              item: {
                title: t(`dualImageText.${variant}.itemTwo.title`),
                description: t(`dualImageText.${variant}.itemTwo.description`),
                image: {
                  fileUrl: ph2Url,
                  alt: t(`dualImageText.${variant}.itemTwo.imageAlt`),
                },
              },
            },
          ],
        },
      },
    ],
  };
}
