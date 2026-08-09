"use client";

import SimpleHeaderWithCtaPanel from "./components/SimpleHeaderWithCtaPanel";
import { getSimpleHeaderWithCtaContent } from "./utils/helpers";

const SimpleHeaderWithCta = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
}) => {
  const content = getSimpleHeaderWithCtaContent(data, lang);

  if (!content.hasContent) {
    return null;
  }

  return (
    <SimpleHeaderWithCtaPanel
      lang={lang}
      posParams={posParams}
      cId={cId}
      title={content.title}
      subtitle={content.subtitle}
      description={content.description}
      buttonText={content.buttonText}
      ctaHref={content.ctaHref}
      backgroundImage={content.backgroundImage}
    />
  );
};

export default SimpleHeaderWithCta;
