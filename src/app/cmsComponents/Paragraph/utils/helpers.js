export function getParagraphContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations) ? data.translations : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      hasContent: false,
    };
  }

  const normalizedLang = String(lang || "").toLowerCase();
  const matchedTranslation =
    translations.find(
      (translation) =>
        translation?.languageCode?.toLowerCase() === normalizedLang
    ) || translations[0];

  const content = matchedTranslation?.content || {};
  const title = content?.title || "";
  const description = content?.description || content?.paragraph || "";

  return {
    title,
    description,
    hasContent: Boolean(title || description),
  };
}

export function getParagraphEditorContent(data, lang = "en") {
  const content = getParagraphContent(data, lang);

  return {
    title: content.title || "",
    description: content.description || "",
  };
}

export function wrapParagraphContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          description: content.description || "",
        },
      },
    ],
  };
}
