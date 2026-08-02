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
