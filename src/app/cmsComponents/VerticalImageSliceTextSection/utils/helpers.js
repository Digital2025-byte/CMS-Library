/**
 * Resolves an image value that may be a string URL or a Next.js static import.
 */
export function getImageUrl(img) {
  if (!img) return "";
  if (typeof img === "string") return img;
  if (img?.src) return img.src;
  if (img?.default) return img.default;
  return "";
}

/**
 * Splits a title around a highlight phrase (e.g. "Travel Experience").
 */
export function splitTitle(title = "", highlightPhrase = "") {
  if (!title) {
    return { firstPart: "", highlightPart: "", restPart: "" };
  }

  if (!highlightPhrase || !title.includes(highlightPhrase)) {
    return { firstPart: title, highlightPart: "", restPart: "" };
  }

  const [firstPart = "", ...rest] = title.split(highlightPhrase);

  return {
    firstPart,
    highlightPart: highlightPhrase,
    restPart: rest.join(highlightPhrase),
  };
}

export function getVerticalImageSliceContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations) ? data.translations : [];

  if (!translations.length) {
    return {
      title: "",
      highlightPhrase: "",
      firstPart: "",
      highlightPart: "",
      restPart: "",
      description: "",
      imageSrc: "",
      imageAlt: "Travel experience",
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
  const highlightPhrase =
    content?.highlightPhrase || content?.highlight || "Travel Experience";
  const { firstPart, highlightPart, restPart } = splitTitle(
    title,
    highlightPhrase
  );
  const description = content?.description || "";

  const sliceImage = content?.SliceImage ?? content?.sliceImage ?? null;
  const legacyImage = content?.image ?? null;
  const imageAsset = sliceImage || legacyImage;
  const imageUrl = imageAsset?.fileUrl ?? imageAsset?.fileURL;
  const imageSrc = getImageUrl(imageUrl);

  return {
    title,
    highlightPhrase,
    firstPart,
    highlightPart,
    restPart,
    description,
    imageSrc,
    imageAlt:
      imageAsset?.alt || legacyImage?.alt || title || "Travel experience",
    hasContent: Boolean(title || description || imageSrc),
  };
}
