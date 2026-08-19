function toImageSrc(value) {
  if (!value) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  return value.src || value.fileUrl || value.url || "";
}

export function isUsableImageSrc(src) {
  const value = String(toImageSrc(src) || "").trim();
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

export function getTwoColumnWithSubSectionsContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];
  const normalizedLang = String(lang || "").toLowerCase();
  const matchedTranslation =
    translations.find(
      (translation) =>
        String(translation?.languageCode || "").toLowerCase() ===
        normalizedLang
    ) || translations[0];

  const content = matchedTranslation?.content || {};
  const style = data?.style || {};

  const mainImage = toImageSrc(
    content?.illustrationImages?.mainImage?.fileUrl ||
      content?.mainImageUrl ||
      ""
  );
  const overlayImage = toImageSrc(
    content?.illustrationImages?.overlayImage?.fileUrl ||
      content?.overlayImageUrl ||
      ""
  );

  return {
    sectionLabel: content?.sectionLabel || "",
    title: content?.title || "",
    description: content?.description || "",
    mainImage,
    mainImageAlt:
      content?.illustrationImages?.mainImage?.alt ||
      content?.mainImageAlt ||
      content?.title ||
      "Main illustration",
    overlayImage,
    overlayImageAlt:
      content?.illustrationImages?.overlayImage?.alt ||
      content?.overlayImageAlt ||
      content?.title ||
      "Overlay illustration",
    firstSubSection: {
      title: content?.firstSubSection?.title || "",
      description: content?.firstSubSection?.description || "",
    },
    secondSubSection: {
      title: content?.secondSubSection?.title || "",
      description: content?.secondSubSection?.description || "",
    },
    ctaButton:
      content?.ctaButton?.content ||
      content?.ctaButton?.label ||
      content?.ctaLabel ||
      "",
    ctaHref:
      content?.ctaButton?.href ||
      content?.ctaHref ||
      style?.ctaButton?.slug ||
      "#",
    hasContent: Boolean(
      content?.title || content?.description || mainImage
    ),
  };
}

export function getTwoColumnWithSubSectionsEditorContent(data, lang = "en") {
  const content = getTwoColumnWithSubSectionsContent(data, lang);

  return {
    sectionLabel: content.sectionLabel || "",
    title: content.title || "",
    description: content.description || "",
    ctaLabel: content.ctaButton || "",
    ctaHref: content.ctaHref || "",
    ctaLinkType: "internal",
    mainImageUrl: content.mainImage || "",
    mainImageAlt: content.mainImageAlt || "",
    overlayImageUrl: content.overlayImage || "",
    overlayImageAlt: content.overlayImageAlt || "",
    items: [content.firstSubSection, content.secondSubSection].map((item) => ({
      title: item?.title || "",
      description: item?.description || "",
    })),
  };
}

export function wrapTwoColumnWithSubSectionsContent(content = {}, lang = "en") {
  const items = Array.isArray(content.items) ? content.items : [];

  return {
    translations: [
      {
        languageCode: lang,
        content: {
          sectionLabel: content.sectionLabel || "",
          title: content.title || "",
          description: content.description || "",
          firstSubSection: {
            title: items[0]?.title || "",
            description: items[0]?.description || "",
          },
          secondSubSection: {
            title: items[1]?.title || "",
            description: items[1]?.description || "",
          },
          ctaButton: {
            label: content.ctaLabel || "",
            href: content.ctaHref || "",
          },
          illustrationImages: {
            mainImage: {
              fileUrl: content.mainImageUrl || "",
              alt: content.mainImageAlt || "",
            },
            overlayImage: {
              fileUrl: content.overlayImageUrl || "",
              alt: content.overlayImageAlt || "",
            },
          },
        },
      },
    ],
  };
}
