/**
 * Escapes spaces and parentheses so a URL is safe inside CSS url().
 */
export function toCssUrl(url = "") {
  return String(url)
    .replace(/\s/g, "%20")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
}

/**
 * Builds CTA href from CMS slug/href and optional POS routing params.
 */
export function getBannerCtaHref({ ctaHref, ctaSlug, posParams, lang }) {
  if (ctaHref) {
    return ctaHref;
  }

  if (!ctaSlug) {
    return "#";
  }

  const segments = [posParams, lang, ctaSlug].filter(Boolean);
  return `/${segments.join("/")}`;
}

export function getBannerWithCtaContent(data, lang = "en", posParams) {
  const translations = Array.isArray(data?.translations) ? data.translations : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      ctaLabel: "",
      ctaHref: "#",
      backgroundImage: "",
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
  const description = content?.description || "";
  const ctaLabel =
    content?.ctaButton?.content || content?.ctaButton?.label || "";
  const ctaSlug = content?.ctaButton?.slug || "";
  const ctaHrefRaw = content?.ctaButton?.href || "";
  const backgroundImage = content?.backgroundImage?.fileUrl || "";
  const safeBackgroundImage =
    typeof backgroundImage === "string" ? toCssUrl(backgroundImage) : backgroundImage;

  return {
    title,
    description,
    ctaLabel,
    ctaHref: getBannerCtaHref({
      ctaHref: ctaHrefRaw,
      ctaSlug,
      posParams,
      lang,
    }),
    backgroundImage: safeBackgroundImage,
    hasContent: Boolean(title || description || ctaLabel || backgroundImage),
  };
}
