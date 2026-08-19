function resolveImageUrl(image) {
  if (!image) return "";
  if (typeof image === "string") return image;
  if (typeof image.url === "string") return image.url;
  if (image.url?.src) return image.url.src;
  if (image.src) return image.src;
  if (image.fileUrl) return image.fileUrl;
  return "";
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

export function getThreeDImageRingContent(data, lang = "en") {
  const content = pickTranslation(data, lang)?.content;

  if (!content) {
    return {
      title: "",
      description: "",
      images: [],
      captions: [],
      extras: {},
      hasContent: false,
    };
  }

  const pages = Array.isArray(content.pages) ? content.pages : [];
  const editorItems = Array.isArray(content.items) ? content.items : [];

  let images = [];
  let captions = [];

  if (editorItems.length > 0) {
    images = editorItems.map((item) => resolveImageUrl(item?.imageUrl));
    captions = editorItems.map((item) => item?.caption || item?.title || "");
  } else if (pages.length > 0) {
    images = pages
      .map(
        (page) =>
          page?.CardImage?.fileUrl ||
          page?.CardImage?.url ||
          page?.CardImage?.src
      )
      .filter(Boolean);
    captions = pages.map((page) => page?.title || "");
  } else {
    images = (content.images || [])
      .map((img) => resolveImageUrl(img))
      .filter(Boolean);
    captions = Array.isArray(content.captions) ? content.captions : [];
  }

  const config = content.config || {};

  return {
    title: content.title || "",
    description: content.description || "",
    images,
    captions,
    extras: {
      width: config.width,
      perspective: config.perspective,
      imageDistance: config.imageDistance,
      backgroundColor: config.backgroundColor,
      containerHeight: content.containerHeight,
      sectionClassName: content.sectionClassName,
    },
    hasContent: Boolean(content.title || content.description || images.length),
  };
}

export function getThreeDImageRingEditorContent(data, lang = "en") {
  const { title, description, images, captions } = getThreeDImageRingContent(
    data,
    lang
  );

  return {
    title,
    description,
    items: images.map((imageUrl, index) => ({
      imageUrl,
      caption: captions[index] || "",
      imageAlt: captions[index] || "",
    })),
  };
}

export function wrapThreeDImageRingContent(content = {}, lang = "en") {
  const items = Array.isArray(content.items) ? content.items : [];

  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          description: content.description || "",
          images: items.map((item) => item?.imageUrl || ""),
          captions: items.map((item) => item?.caption || item?.title || ""),
          config: {
            width: 260,
            perspective: 2000,
            imageDistance: 480,
            backgroundColor: "#01263B",
          },
          containerHeight:
            "h-[440px] sm:h-[540px] md:h-[640px] lg:h-[700px]",
        },
      },
    ],
  };
}
