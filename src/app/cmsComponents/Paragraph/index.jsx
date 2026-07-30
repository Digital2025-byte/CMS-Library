"use client";

import ParagraphContent from "./components/ParagraphContent";
import { getParagraphContent } from "./utils/helpers";

const Paragraph = ({ lang = "en", data }) => {
  const { title, description, hasContent } = getParagraphContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return <ParagraphContent title={title} description={description} />;
};

export default Paragraph;
