export function getTwoColumnIntroContent(data) {
  const content = data?.translations?.[0]?.content || {};
  const style = data?.style || {};
  const directionLayout = String(style?.directionLayout || "Left").toLowerCase();

  return {
    title: content?.title || "",
    description: content?.description || "",
    ctaButton:
      content?.ctaButton?.content ||
      content?.ctaButton?.label ||
      "",
    ctaHref: content?.ctaButton?.href || style?.ctaButton?.slug || "",
    mainImage: content?.illustrationImages?.mainImage?.fileUrl || "",
    mainImageAlt:
      content?.illustrationImages?.mainImage?.alt ||
      content?.title ||
      "Main illustration",
    overlayImage: content?.illustrationImages?.overlayImage?.fileUrl || "",
    overlayImageAlt:
      content?.illustrationImages?.overlayImage?.alt ||
      content?.title ||
      "Overlay illustration",
    isReversed: directionLayout === "right",
  };
}
