export function getTwoColumnWithSubSectionsContent(data) {
  const content = data?.translations?.[0]?.content || {};
  const style = data?.style || {};

  return {
    sectionLabel: content?.sectionLabel || "",
    title: content?.title || "",
    description: content?.description || "",
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
    firstSubSection: {
      title: content?.firstSubSection?.title || "",
      description: content?.firstSubSection?.description || "",
    },
    secondSubSection: {
      title: content?.secondSubSection?.title || "",
      description: content?.secondSubSection?.description || "",
    },
    ctaButton:
      content?.ctaButton?.content ||
      content?.ctaButton?.label ||
      "",
    ctaHref: content?.ctaButton?.href || style?.ctaButton?.slug || "#",
  };
}
