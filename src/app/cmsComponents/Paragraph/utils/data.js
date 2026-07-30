/**
 * Builds CMS-shaped Paragraph data from i18next translations.
 */
export function buildParagraphData(t, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: t("paragraph.title"),
          description: t("paragraph.description"),
        },
      },
    ],
  };
}
