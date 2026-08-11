import { DEFAULT_LIMITATION_TITLE } from "./constants";

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

export function isLimitationSection(section, limitationTitle) {
  if (section?.variant === "alert") {
    return true;
  }

  const title = String(section?.title || "").trim().toLowerCase();
  const expected = String(
    limitationTitle || DEFAULT_LIMITATION_TITLE
  )
    .trim()
    .toLowerCase();

  return Boolean(title && title === expected);
}

export function getLegalBodyTermsContent(data, lang = "en") {
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
    acceptance: parsed.acceptance || null,
    sections: Array.isArray(parsed.sections) ? parsed.sections : [],
    contact: parsed.contact || null,
    contactTitle: parsed.contactTitle || "",
    contactDescription: parsed.contactDescription || "",
    limitationTitle: parsed.limitationTitle || DEFAULT_LIMITATION_TITLE,
    effectiveDateLabel: parsed.effectiveDateLabel || "",
  };

  const hasContent = Boolean(
    content.cover?.effectiveDate ||
      content.acceptance ||
      content.sections.length ||
      content.contact
  );

  return { content, hasContent };
}
