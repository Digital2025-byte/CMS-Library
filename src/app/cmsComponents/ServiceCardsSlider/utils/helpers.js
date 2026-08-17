import { withCampaignPath } from "@/utils/withCampaignPath";

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

function normalizeService(raw, lang, posParams, cId) {
  const item = raw?.item || raw?.service || raw || {};
  const image = item?.image || item?.icon || {};
  const link = item?.link || {};
  const slug = link?.slug || item?.slug || "";
  const hrefRaw = link?.href || link?.url || item?.href || "";

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
    imageUrl:
      item?.imageUrl || image?.fileUrl || image?.url || image?.src || "",
    imageAlt: image?.alt || item?.imageAlt || item?.title || "Service",
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
    .filter((service) => service.title || service.imageUrl || service.description);

  return {
    title,
    description,
    services,
    hasContent: Boolean(title || description || services.length),
  };
}

export function getServiceCardsSliderEditorContent(
  data,
  lang = "en",
  posParams,
  cId
) {
  const { title, description, services } = getServiceCardsSliderContent(
    data,
    lang,
    posParams,
    cId
  );

  return {
    title,
    description,
    items: services.map((service) => ({
      title: service.title || "",
      description: service.description || "",
      imageUrl: service.imageUrl || "",
      imageAlt: service.imageAlt || "",
      buttonHref: service.href || "",
      buttonLinkType: "internal",
    })),
  };
}

export function wrapServiceCardsSliderContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          description: content.description || "",
          services: (Array.isArray(content.items) ? content.items : []).map(
            (item) => ({
              title: item?.title || "",
              description: item?.description || "",
              image: {
                fileUrl: item?.imageUrl || "",
                alt: item?.imageAlt || item?.title || "Service",
              },
              link: {
                href: item?.buttonHref || "",
              },
            })
          ),
        },
      },
    ],
  };
}
