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

export function getAccordionImagesEditorContent(data) {
  const content = data?.translations?.[0]?.content || {};

  return {
    title: content?.title || "",
    description: content?.description || "",
    items: Array.isArray(content?.items)
      ? content.items.map((item) => ({
          title: item?.title || "",
          description: item?.description || "",
          imageUrl: item?.illustrationImage?.fileUrl || "",
          imageAlt: item?.illustrationImage?.alt || "",
        }))
      : [],
  };
}

export function wrapAccordionImagesContent(content = {}) {
  return {
    translations: [
      {
        content: {
          title: content.title || "",
          description: content.description || "",
          items: Array.isArray(content.items)
            ? content.items.map((item) => ({
                title: item?.title || "",
                description: item?.description || "",
                illustrationImage: {
                  fileUrl: item?.imageUrl || "",
                  alt: item?.imageAlt || item?.title || "Service Image",
                },
              }))
            : [],
        },
      },
    ],
  };
}
