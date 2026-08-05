"use client";

import TitleWithListPanel from "./components/TitleWithListPanel";
import { getTitleWithListContent } from "./utils/helpers";

const TitleWithList = ({ lang = "en", data }) => {
  const { title, items, hasContent } = getTitleWithListContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return <TitleWithListPanel lang={lang} title={title} items={items} />;
};

export default TitleWithList;
