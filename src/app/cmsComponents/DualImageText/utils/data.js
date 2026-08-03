import ph1 from "@/assets/DualImageText/ph1.png";
import ph2 from "@/assets/DualImageText/ph2.png";

const ph1Url = typeof ph1 === "string" ? ph1 : ph1.src;
const ph2Url = typeof ph2 === "string" ? ph2 : ph2.src;

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
