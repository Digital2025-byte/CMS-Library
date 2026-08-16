export const CITY_TABS_LIMIT = 6;

export function makeMapUrl(latitude, longitude) {
  if (!latitude || !longitude) return null;
  return `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;
}

export function getUniqueCountries(branches = []) {
  return [...new Set(branches.map((branch) => branch.country))]
    .filter(Boolean)
    .sort();
}

export function groupBranchesByCountry(branches = []) {
  const grouped = {};

  branches.forEach((branch) => {
    if (!branch.country) return;
    if (!grouped[branch.country]) {
      grouped[branch.country] = {};
    }
    if (!grouped[branch.country][branch.city]) {
      grouped[branch.country][branch.city] = [];
    }
    grouped[branch.country][branch.city].push(branch);
  });

  return grouped;
}

export function normalizeMapBranch(branch) {
  return {
    id: branch?.id || branch?.branchId || "",
    name: branch?.name || "",
    country: branch?.country || "",
    city: branch?.city || "",
    address: branch?.address || "",
    phone: branch?.phone || "",
    email: branch?.email || "",
    workingHours: branch?.workingHours || branch?.workingHoursText || "",
    latitude: branch?.latitude || "",
    longitude: branch?.longitude || "",
  };
}

export function getMapInfoContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      description: "",
      branches: [],
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
  const rawBranches = content?.branches || [];
  const branches = Array.isArray(rawBranches)
    ? rawBranches.map(normalizeMapBranch)
    : [];

  return {
    title,
    description,
    branches,
    hasContent: Boolean(title || description || branches.length),
  };
}

export function getContactFieldLabels(t) {
  return {
    address: t("mapInfo.labels.address"),
    phone: t("mapInfo.labels.phone"),
    email: t("mapInfo.labels.email"),
    workingHours: t("mapInfo.labels.workingHours"),
    city: t("mapInfo.labels.city"),
    mapUnavailable: t("mapInfo.labels.mapUnavailable"),
  };
}
