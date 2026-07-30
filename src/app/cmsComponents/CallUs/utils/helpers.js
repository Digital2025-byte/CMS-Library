/**
 * Normalizes phone text that sometimes arrives like "963112158121.0".
 */
export function normalizePhoneText(value) {
  return String(value || "").replace(/\.0+$/, "");
}

/**
 * Builds a tel: href from a display phone number (spaces stripped).
 */
export function getPhoneHref(phoneText) {
  const digits = String(phoneText || "").replace(/\s/g, "");
  return digits ? `tel:+${digits}` : "#";
}

export function getCallUsContent(data) {
  const content = data?.translations?.[0]?.content || {};

  const upperText = content?.["upper-text"] || content?.upperText || "";
  const mainText = content?.["main-text"] || content?.mainText || "";
  const bottomText = content?.["bottom-text"] || content?.bottomText || "";
  const normalizedMainText = normalizePhoneText(mainText);

  return {
    upperText,
    mainText: normalizedMainText,
    bottomText,
    phoneHref: getPhoneHref(normalizedMainText),
    hasContent: Boolean(upperText || normalizedMainText || bottomText),
  };
}
