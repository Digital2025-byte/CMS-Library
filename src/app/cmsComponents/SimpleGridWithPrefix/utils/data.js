/**
 * Builds CMS-shaped SimpleGridWithPrefix data from i18next translations.
 */
export function buildSimpleGridWithPrefixData(t, lang = "en") {
  const channels = t("simpleGridWithPrefix.channels", { returnObjects: true });

  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: t("simpleGridWithPrefix.title"),
          description: t("simpleGridWithPrefix.description"),
          prefix: t("simpleGridWithPrefix.prefix"),
          channels: Array.isArray(channels)
            ? channels.map((channel) => ({
                grid: {
                  title: channel?.title || "",
                  userName: channel?.userName || "",
                  link: channel?.link || "#",
                  icon: channel?.icon || "",
                },
              }))
            : [],
        },
      },
    ],
  };
}
