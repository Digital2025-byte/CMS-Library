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

export function getFlightFaresContent(data, lang = "en", posParams) {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      cities: [],
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
    hasContent: Boolean(title || cities.length),
  };
}
