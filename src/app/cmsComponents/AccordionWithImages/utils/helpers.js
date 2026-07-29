export function getAccordionImagesContent(data) {
  const content = data?.translations?.[0]?.content || {};

  return {
    title: content?.title || "",
    description: content?.description || "",
    items: Array.isArray(content?.items)
      ? content.items.map((item) => ({
          title: item?.title || "",
          content: item?.description || "",
          image: item?.illustrationImage?.fileUrl || "",
          imageAlt:
            item?.illustrationImage?.alt ||
            item?.title ||
            "Service Image",
        }))
      : [],
  };
}
