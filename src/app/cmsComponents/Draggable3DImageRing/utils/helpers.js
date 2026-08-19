import { imageUrls as defaultImages } from "./data";

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

function pickTranslation(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];
  const normalized = String(lang || "").toLowerCase();
  return (
    translations.find(
      (item) => String(item?.languageCode || "").toLowerCase() === normalized
    ) || translations[0]
  );
}

function resolveImageUrl(image) {
  if (!image) return "";
  if (typeof image === "string") return image;
  return image.imageUrl || image.fileUrl || image.src || image.url || "";
}

export function getDraggable3DImageRingContent(data, lang = "en") {
  const content = pickTranslation(data, lang)?.content;
  const source = Array.isArray(content?.items)
    ? content.items.map(resolveImageUrl)
    : Array.isArray(content?.images)
      ? content.images.map(resolveImageUrl)
      : defaultImages;
  const images = source.filter((src) => isUsableImageSrc(src));

  return {
    images,
    items: images.map((imageUrl) => ({ imageUrl, imageAlt: "" })),
    hasContent: images.length > 0,
  };
}

export function getDraggable3DImageRingEditorContent(data, lang = "en") {
  const { images } = getDraggable3DImageRingContent(data, lang);

  return {
    items: images.map((imageUrl) => ({
      imageUrl,
      imageAlt: "",
    })),
  };
}

export function wrapDraggable3DImageRingContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          items: (Array.isArray(content.items) ? content.items : []).map(
            (item) => ({
              imageUrl: item?.imageUrl || "",
              imageAlt: item?.imageAlt || "",
            })
          ),
        },
      },
    ],
  };
}
