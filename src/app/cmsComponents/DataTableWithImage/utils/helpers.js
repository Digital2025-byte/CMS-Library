function normalizeHeader(item) {
  if (typeof item === "string") {
    return item;
  }
  return item?.header || item?.title || "";
}

function normalizeRow(row) {
  const rowData = row?.row || row;

  if (Array.isArray(rowData)) {
    return rowData.map((cell) =>
      typeof cell === "string" ? cell : cell?.cell || cell?.content || ""
    );
  }

  if (Array.isArray(rowData?.cells)) {
    return rowData.cells.map((cell) =>
      typeof cell === "string" ? cell : cell?.cell || cell?.content || ""
    );
  }

  return [];
}

export function getDataTableWithImageContent(data, lang = "en") {
  const translations = Array.isArray(data?.translations)
    ? data.translations
    : [];

  if (!translations.length) {
    return {
      title: "",
      headers: [],
      rows: [],
      note: "",
      imageSrc: "",
      imageAlt: "",
      hasContent: false,
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
  const title = content?.sectionTitle || content?.title || "";

  const headers = Array.isArray(content?.tableHeaders)
    ? content.tableHeaders.map(normalizeHeader).filter(Boolean)
    : [];

  const rows = Array.isArray(content?.tableRows)
    ? content.tableRows.map(normalizeRow).filter((row) => row.length > 0)
    : [];

  const note =
    content?.infoNote?.text ||
    content?.infoNote ||
    content?.note ||
    "";

  const imageSrc =
    content?.illustrationImage?.fileUrl ||
    content?.illustrationImage?.url ||
    "";
  const imageAlt =
    content?.illustrationImage?.alt ||
    (lang === "ar" ? "رسم توضيحي لحجم الأمتعة" : "Baggage size illustration");

  return {
    title,
    headers,
    rows,
    note: typeof note === "string" ? note : "",
    imageSrc,
    imageAlt,
    hasContent: Boolean(title || rows.length || imageSrc),
  };
}
