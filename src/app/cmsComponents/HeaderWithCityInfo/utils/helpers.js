function toCssUrl(url = "") {
  return String(url)
    .replace(/\s/g, "%20")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
}

function formatNextFlightDate(value, lang = "en") {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleDateString(lang === "ar" ? "ar" : "en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export function getHeaderWithCityInfoContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      countryName: "",
      weatherTitle: "",
      description: "",
      weather: "",
      localTime: "",
      duration: "",
      numberOfFlightPerWeek: "",
      nextFlight: "",
      nextFlightLabel: "",
      backgroundImage: "",
      labels: {},
      hasContent: false,
      hasCityCard: false,
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
  const countryName = content?.countryName || "";
  const weatherTitle = content?.weatherTitle || "";
  const description = content?.description || "";
  const weather = content?.weather || "";
  const localTime = content?.localTime || "";
  const duration = content?.duration || "";
  const numberOfFlightPerWeek = content?.numberOfFlightPerWeek || "";
  const nextFlightRaw = content?.nextFlight || "";
  const backgroundImage = content?.backgroundImage?.fileUrl || "";
  const labels = content?.labels || {};

  return {
    title,
    countryName,
    weatherTitle,
    description,
    weather,
    localTime,
    duration,
    numberOfFlightPerWeek,
    nextFlight: formatNextFlightDate(nextFlightRaw, lang) || nextFlightRaw,
    backgroundImage: backgroundImage ? toCssUrl(backgroundImage) : "",
    labels: {
      weather: labels.weather || (lang === "ar" ? "الطقس:" : "Weather:"),
      localTime:
        labels.localTime || (lang === "ar" ? "الوقت المحلي:" : "Local Time:"),
      flightDuration:
        labels.flightDuration ||
        (lang === "ar" ? "مدة الرحلة:" : "Flight Duration:"),
      flightsPerWeek:
        labels.flightsPerWeek ||
        (lang === "ar" ? "عدد الرحلات في الأسبوع:" : "Flights per week:"),
      nextFlight:
        labels.nextFlight ||
        (lang === "ar" ? "الرحلة التالية:" : "Next Flight:"),
    },
    hasCityCard: Boolean(weatherTitle),
    hasContent: Boolean(title || countryName || weatherTitle || backgroundImage),
  };
}
