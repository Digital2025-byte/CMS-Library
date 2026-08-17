export function getAccordionContent(data) {
  const content = data?.translations?.[0]?.content || {};

  return {
    title: content?.title || "",
    description: content?.description || "",
    buttonLabel: content?.buttonLabel || "",
    buttonHref: content?.buttonHref || "#",
    items: Array.isArray(content?.items)
      ? content.items.map((item) => ({
          title: item?.title || "",
          description: item?.description || "",
        }))
      : [],
  };
}

export function wrapAccordionContent(content = {}) {
  return {
    translations: [
      {
        content: {
          title: content.title || "",
          description: content.description || "",
          buttonLabel: content.buttonLabel || "",
          buttonHref: content.buttonHref || "#",
          items: Array.isArray(content.items) ? content.items : [],
        },
      },
    ],
  };
}
