function getFileUrl(image) {
  if (!image) {
    return "";
  }
  if (typeof image === "string") {
    return image;
  }
  return image.fileUrl || image.url || image.src || "";
}

function resolveCtaHref({ href, slug, posParams, lang }) {
  if (href && String(href).startsWith("/")) {
    return href;
  }

  const path = href || slug;
  if (!path) {
    return "";
  }

  const segments = [posParams, lang, String(path).replace(/^\//, "")].filter(
    Boolean
  );
  return `/${segments.join("/")}`;
}

export function getFullHeightHeaderWithTextContent(
  data,
  lang = "en",
  posParams = "gb"
) {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      buttonText: "",
      ctaHref: "",
      backgroundImage: "",
      imageAlt: "",
      hasContent: false,
    };
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
  const description = content?.description || "";
  const buttonText =
    content?.ctaButton?.content ||
    content?.ctaButton?.label ||
    content?.buttonText ||
    "";
  const ctaHref = resolveCtaHref({
    href: content?.ctaButton?.href,
    slug: content?.ctaButton?.slug || content?.ctaSlug,
    posParams,
    lang,
  });
  const backgroundImage = getFileUrl(
    content?.backgroundImage || content?.image
  );
  const imageAlt =
    content?.backgroundImage?.alt || content?.imageAlt || title || "";

  return {
    title,
    description,
    buttonText,
    ctaHref,
    backgroundImage,
    imageAlt,
    hasContent: Boolean(title || description || buttonText || backgroundImage),
  };
}
