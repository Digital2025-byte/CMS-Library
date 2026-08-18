import { withCampaignPath } from "@/utils/withCampaignPath";

export function getBannerWithCTAsAndItemsContent(
  data,
  lang = "en",
  posParams,
  cId
) {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      backgroundImage: "",
      imageAlt: "",
      primaryLabel: "",
      secondaryLabel: "",
      primaryHref: "",
      secondaryHref: "",
      items: [],
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

  const rawBackground =
    content?.backgroundImage?.fileUrl || content?.backgroundImage || "";
  const backgroundImage =
    typeof rawBackground === "string"
      ? rawBackground
      : typeof rawBackground?.src === "string"
        ? rawBackground.src
        : "";
  const imageAlt =
    content?.backgroundImage?.alt || content?.imageAlt || title || "";

  const primaryLabel =
    content?.ctaPrimaryButton?.content ||
    content?.ctaPrimaryButton?.label ||
    "";
  const secondaryLabel =
    content?.ctaSecondaryButton?.content ||
    content?.ctaSecondaryButton?.label ||
    "";

  const primarySlug = content?.ctaPrimaryButton?.slug || "";
  const secondarySlug = content?.ctaSecondaryButton?.slug || "";
  const primaryHrefRaw = content?.ctaPrimaryButton?.href || "";
  const secondaryHrefRaw = content?.ctaSecondaryButton?.href || "";

  const buildHref = (href, slug) => {
    if (href) {
      return withCampaignPath(href, cId);
    }
    if (!slug) {
      return "";
    }
    const segments = [posParams, lang, slug].filter(Boolean);
    return withCampaignPath(`/${segments.join("/")}`, cId);
  };

  const itemsFromCms = Array.isArray(content?.items)
    ? content.items
        .map((entry) => entry?.item?.content || entry?.content || entry || "")
        .filter(Boolean)
    : [];

  return {
    title,
    description,
    backgroundImage,
    imageAlt,
    primaryLabel,
    secondaryLabel,
    primaryHref: buildHref(primaryHrefRaw, primarySlug),
    secondaryHref: buildHref(secondaryHrefRaw, secondarySlug),
    items: itemsFromCms,
    hasContent: Boolean(
      title ||
        description ||
        primaryLabel ||
        secondaryLabel ||
        itemsFromCms.length ||
        backgroundImage
    ),
  };
}

function normalizeHref(href) {
  if (!href || href === "#") {
    return "";
  }
  return href;
}

export function getBannerWithCTAsAndItemsEditorContent(
  data,
  lang = "en",
  posParams,
  cId
) {
  const content = getBannerWithCTAsAndItemsContent(data, lang, posParams, cId);

  return {
    title: content.title || "",
    description: content.description || "",
    imageUrl: content.backgroundImage || "",
    imageAlt: content.imageAlt || "",
    primaryLabel: content.primaryLabel || "",
    primaryHref: normalizeHref(content.primaryHref),
    primaryLinkType: "internal",
    secondaryLabel: content.secondaryLabel || "",
    secondaryHref: normalizeHref(content.secondaryHref),
    secondaryLinkType: "internal",
    items: (content.items || []).map((text) => ({ text })),
  };
}

export function wrapBannerWithCTAsAndItemsContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          description: content.description || "",
          imageAlt: content.imageAlt || "",
          backgroundImage: {
            fileUrl: content.imageUrl || "",
            alt: content.imageAlt || content.title || "",
          },
          ctaPrimaryButton: {
            content: content.primaryLabel || "",
            label: content.primaryLabel || "",
            href: content.primaryHref || "",
            slug: content.primaryHref || "",
          },
          ctaSecondaryButton: {
            content: content.secondaryLabel || "",
            label: content.secondaryLabel || "",
            href: content.secondaryHref || "",
            slug: content.secondaryHref || "",
          },
          items: (Array.isArray(content.items) ? content.items : [])
            .map((item) => ({
              content: typeof item === "string" ? item : item?.text || "",
            }))
            .filter((item) => item.content),
        },
      },
    ],
  };
}

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
