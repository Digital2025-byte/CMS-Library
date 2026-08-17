export function isUsableImageSrc(src) {
  const value = String(src || "").trim();
  if (!value) {
    return false;
  }

  if (value.startsWith("/") && !value.startsWith("//")) {
    return true;
  }

  try {
    const url = new URL(value.startsWith("//") ? `https:${value}` : value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function normalizeItem(raw) {
  const item = raw?.item || raw || {};
  const image = item?.image || {};

  return {
    title: item?.title || "",
    description: item?.description || "",
    imageUrl:
      item?.imageUrl || image?.fileUrl || image?.url || image?.src || "",
    imageAlt: image?.alt || item?.imageAlt || item?.title || "Value image",
  };
}

export function getCarouselImageText6Content(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return { title: "", items: [], hasContent: false };
  }

  const normalizedLang = String(lang || "").toLowerCase();
  const matchedTranslation =
    translations.find(
      (translation) =>
        String(translation?.languageCode || "").toLowerCase() ===
        normalizedLang
    ) || translations[0];

  const content = matchedTranslation?.content || {};
  const title = content?.title || "";
  const items = (Array.isArray(content?.items) ? content.items : [])
    .map(normalizeItem)
    .filter((item) => item.title || item.imageUrl || item.description);

  return {
    title,
    items,
    hasContent: Boolean(title || items.length),
  };
}

export function getCarouselImageText6EditorContent(data, lang = "en") {
  const { title, items } = getCarouselImageText6Content(data, lang);

  return {
    title,
    items: items.map((item) => ({
      title: item.title || "",
      description: item.description || "",
      imageUrl: item.imageUrl || "",
      imageAlt: item.imageAlt || "",
    })),
  };
}

export function wrapCarouselImageText6Content(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          items: (Array.isArray(content.items) ? content.items : []).map(
            (item) => ({
              item: {
                title: item?.title || "",
                description: item?.description || "",
                image: {
                  fileUrl: item?.imageUrl || "",
                  alt: item?.imageAlt || item?.title || "Value image",
                },
              },
            })
          ),
        },
      },
    ],
  };
}
