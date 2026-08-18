/**
 * POS code -> country names (en + ar) to exclude:
 * hide cities in the current origin country.
 */
export const POS_COUNTRY_NAMES = {
  sy: ["syria", "سورية"],
  ae: ["united arab emirates", "uae", "الإمارات العربية المتحدة", "الإمارات"],
  kw: ["kuwait", "الكويت"],
  iq: ["iraq", "baghdad", "العراق", "بغداد"],
  om: ["oman", "muscat", "عمان", "مسقط"],
  tr: ["turkey", "تركيا"],
  am: ["armenia", "yerevan", "أرمينيا", "يريفان"],
  gb: ["united kingdom", "great britain", "المملكة المتحدة", "بريطانيا"],
};

export function normalizeForMatch(str) {
  return (str || "").trim().toLowerCase();
}

export function isCityInPosCountry(city, posCode) {
  const names = POS_COUNTRY_NAMES[posCode];
  if (!names || !Array.isArray(names)) return false;
  const country = normalizeForMatch(city?.countryName || "");
  return names.some((name) => normalizeForMatch(name) === country);
}

/**
 * For duplicate cityId/cityName: first occurrence uses images[0],
 * second images[1], etc.
 */
export function getImageIndexForPosition(cities, index) {
  const current = cities[index];
  if (!current) return 0;

  const key = (city) =>
    city?.cityId != null
      ? String(city.cityId)
      : (city?.cityName || "").trim().toLowerCase();

  const currentKey = key(current);
  let occurrence = 0;

  for (let i = 0; i < index; i += 1) {
    if (key(cities[i]) === currentKey) occurrence += 1;
  }

  return occurrence;
}

export function filterCitiesByPos(cities = [], posParams) {
  const posCode = String(posParams || "")
    .trim()
    .toLowerCase();

  if (!posCode) return cities;

  return cities.filter((city) => !isCityInPosCountry(city, posCode));
}

export function normalizeFareCity(city) {
  const images = Array.isArray(city?.images)
    ? city.images
        .map((image) => ({
          url: image?.url || image?.fileUrl || "",
          alt: image?.alt || city?.cityName || "",
        }))
        .filter((image) => image.url)
    : [];

  return {
    cityId: city?.cityId ?? null,
    cityName: city?.cityName || "",
    IATACode: city?.IATACode || city?.iataCode || "",
    countryName: city?.countryName || "",
    price: city?.price || "",
    currency: city?.currency || "",
    isNew: Boolean(city?.isNew),
    images,
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

export function formatFarePrice(template, price, currency, fallback) {
  if (!template) {
    return fallback;
  }

  return String(template)
    .replaceAll("{{price}}", price ?? "")
    .replaceAll("{{currency}}", currency ?? "")
    .replaceAll("{price}", price ?? "")
    .replaceAll("{currency}", currency ?? "");
}

function defaultFareLabels(lang = "en") {
  const isAr = String(lang || "").toLowerCase() === "ar";

  return {
    oneWayLabel: isAr ? "اتجاه واحد" : "One-way",
    newLabel: isAr ? "جديد" : "New",
    fromTemplate: isAr
      ? "الدرجة الاقتصادية من {price} {currency}"
      : "Economy from {price} {currency}",
  };
}

export function getFlightFaresContent(data, lang = "en", posParams) {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      cities: [],
      oneWayLabel: "",
      newLabel: "",
      fromTemplate: "",
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
  const rawCities = Array.isArray(content?.cities) ? content.cities : [];
  const cities = filterCitiesByPos(
    rawCities.map(normalizeFareCity),
    posParams
  );

  return {
    title,
    cities,
    oneWayLabel: content?.oneWayLabel || "",
    newLabel: content?.newLabel || "",
    fromTemplate: content?.fromTemplate || "",
    hasContent: Boolean(title || cities.length),
  };
}

export function getFlightFaresEditorContent(data, lang = "en") {
  const content = getFlightFaresContent(data, lang);
  const labels = defaultFareLabels(lang);

  return {
    title: content.title || "",
    oneWayLabel: content.oneWayLabel || labels.oneWayLabel,
    newLabel: content.newLabel || labels.newLabel,
    fromTemplate: content.fromTemplate || labels.fromTemplate,
    items: content.cities.map((city) => ({
      cityName: city.cityName || "",
      IATACode: city.IATACode || "",
      countryName: city.countryName || "",
      price: city.price || "",
      currency: city.currency || "",
      isNew: Boolean(city.isNew),
      imageUrl: city.images?.[0]?.url || "",
      imageAlt: city.images?.[0]?.alt || city.cityName || "",
    })),
  };
}

export function wrapFlightFaresContent(content = {}, lang = "en") {
  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: content.title || "",
          oneWayLabel: content.oneWayLabel || "",
          newLabel: content.newLabel || "",
          fromTemplate: content.fromTemplate || "",
          cities: (Array.isArray(content.items) ? content.items : []).map(
            (item, index) => ({
              cityId: item?.cityId ?? index + 1,
              cityName: item?.cityName || "",
              IATACode: item?.IATACode || item?.iataCode || "",
              countryName: item?.countryName || "",
              price: item?.price || "",
              currency: item?.currency || "",
              isNew: Boolean(item?.isNew),
              images: item?.imageUrl
                ? [
                    {
                      url: item.imageUrl,
                      alt: item.imageAlt || item.cityName || "",
                    },
                  ]
                : [],
            })
          ),
        },
      },
    ],
  };
}
