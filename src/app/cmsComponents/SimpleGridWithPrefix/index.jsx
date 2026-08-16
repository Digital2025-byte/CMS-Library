"use client";

import SimpleGrid from "./components/SimpleGrid";
import SimpleGridHeader from "./components/SimpleGridHeader";
import { getSimpleGridWithPrefixContent } from "./utils/helpers";

const SimpleGridWithPrefix = ({ lang = "en", data, cId }) => {
  const { title, description, prefix, chip, items, hasContent } =
    getSimpleGridWithPrefixContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <SimpleGridHeader title={title} description={description} />
      <SimpleGrid items={items} prefix={prefix} chip={chip} lang={lang} cId={cId} />
    </>
  );
};

export default SimpleGridWithPrefix;
