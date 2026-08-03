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
                  fileUrl:
                    variant === "training"
                      ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
                      : "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
                  alt: t(`dualImageText.${variant}.itemOne.imageAlt`),
                },
              },
            },
            {
              item: {
                title: t(`dualImageText.${variant}.itemTwo.title`),
                description: t(`dualImageText.${variant}.itemTwo.description`),
                image: {
                  fileUrl:
                    variant === "training"
                      ? "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
                      : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
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
