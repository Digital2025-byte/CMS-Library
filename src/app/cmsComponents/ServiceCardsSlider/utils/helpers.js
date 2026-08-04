import { withCampaignPath } from "@/utils/withCampaignPath";

function normalizeService(raw, lang, posParams, cId) {
  const item = raw?.item || raw?.service || raw || {};
  const image = item?.image || item?.icon || {};
  const link = item?.link || {};
  const slug = link?.slug || item?.slug || "";
  const hrefRaw = link?.href || link?.url || item?.href || "";
  const ctaLabel =
    link?.label || item?.ctaLabel || item?.cta || link?.content || "";

  let href = "";
  if (hrefRaw) {
    href = withCampaignPath(hrefRaw, cId);
  } else if (slug) {
    const segments = [posParams, lang, slug].filter(Boolean);
    href = withCampaignPath(`/${segments.join("/")}`, cId);
  }

  return {
    title: item?.title || "",
    description: item?.description || "",
    imageUrl: image?.fileUrl || image?.url || image?.src || "",
    imageAlt: image?.alt || item?.title || "Service",
    icon: item?.iconName || item?.iconKey || "",
    ctaLabel,
    href,
  };
}

export function getServiceCardsSliderContent(
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
      services: [],
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
  const services = (Array.isArray(content?.services) ? content.services : [])
    .map((entry) => normalizeService(entry, lang, posParams, cId))
    .filter((service) => service.title || service.imageUrl);

  return {
    title,
    description,
    services,
    hasContent: services.length > 0,
  };
}
