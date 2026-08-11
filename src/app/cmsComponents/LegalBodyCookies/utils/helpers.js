function parseBody(body) {
  if (!body) {
    return null;
  }

  if (typeof body === "object") {
    return body;
  }

  if (typeof body !== "string") {
    return null;
  }

  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
}

export function getLegalBodyCookiesContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return { content: null, hasContent: false };
  }

  const normalized = String(lang || "").toLowerCase();
  const matched =
    translations.find(
      (item) => String(item?.languageCode || "").toLowerCase() === normalized
    ) || translations[0];

  const parsed = parseBody(matched?.content?.body);
  if (!parsed) {
    return { content: null, hasContent: false };
  }

  const content = {
    cover: parsed.cover || null,
    introduction: parsed.introduction || null,
    typesTitle: parsed.typesTitle || "",
    types: Array.isArray(parsed.types) ? parsed.types : [],
    thirdParty: parsed.thirdParty || null,
    preferences: parsed.preferences || null,
    lifespan: parsed.lifespan || null,
    updates: parsed.updates || null,
    contact: parsed.contact || null,
  };

  const hasContent = Boolean(
    content.cover?.effectiveDate ||
      content.introduction ||
      content.types.length ||
      content.thirdParty ||
      content.preferences ||
      content.lifespan ||
      content.updates ||
      content.contact
  );

  return { content, hasContent };
}
