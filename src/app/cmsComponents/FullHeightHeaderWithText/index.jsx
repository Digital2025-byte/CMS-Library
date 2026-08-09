"use client";

import FullHeightHeaderWithTextPanel from "./components/FullHeightHeaderWithTextPanel";
import { getFullHeightHeaderWithTextContent } from "./utils/helpers";

/**
 * Full-viewport hero with background image, title, description, and CTA.
 */
const FullHeightHeaderWithText = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
}) => {
  const content = getFullHeightHeaderWithTextContent(data, lang, posParams);

  if (!content.hasContent) {
    return null;
  }

  return (
    <FullHeightHeaderWithTextPanel
      lang={lang}
      title={content.title}
      description={content.description}
      buttonText={content.buttonText}
      ctaHref={content.ctaHref}
      backgroundImage={content.backgroundImage}
      cId={cId}
    />
  );
};

export default FullHeightHeaderWithText;
