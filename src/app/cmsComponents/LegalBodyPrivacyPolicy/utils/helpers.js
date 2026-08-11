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

export function getLegalBodyPrivacyPolicyContent(data, lang = "en") {
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
    effectiveDate: parsed.effectiveDate || parsed.cover?.effectiveDate || "",
    introduction: parsed.introduction || null,
    summaryPoints: Array.isArray(parsed.summaryPoints)
      ? parsed.summaryPoints
      : [],
    sections: parsed.sections || null,
    tocTitle: parsed.tocTitle || "",
    infoCollectedLabel: parsed.infoCollectedLabel || "",
    shareSituationsLabel: parsed.shareSituationsLabel || "",
  };

  return {
    content,
    hasContent: Boolean(
      content.effectiveDate ||
        content.introduction ||
        content.summaryPoints.length ||
        content.sections
    ),
  };
}
