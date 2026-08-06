"use client";

import { usePathname } from "next/navigation";
import CitiesSectionsPanel from "./components/CitiesSectionsPanel";
import { getCitiesSectionsContent } from "./utils/helpers";

function buildCtaHref(pathname = "", slug = "") {
  if (!slug) {
    return "";
  }

  const path = String(pathname || "").replace(/\/$/, "");
  const normalizedSlug = String(slug).startsWith("/")
    ? slug
    : `/${slug}`;

  return `${path}${normalizedSlug}`;
}

const CitiesSections = ({
  lang = "en",
  data,
  cId,
  /** "right" (default) = images on the right; "left" = images on the left */
  side = "right",
}) => {
  const pathname = usePathname();
  const content = getCitiesSectionsContent(data, lang);

  if (!content.hasContent) {
    return null;
  }

  return (
    <CitiesSectionsPanel
      lang={lang}
      cId={cId}
      side={side}
      title={content.title}
      description={content.description}
      image1={content.image1}
      image2={content.image2}
      isCTA={content.isCTA}
      ctaLabel={content.ctaLabel}
      ctaHref={buildCtaHref(pathname, content.slug)}
    />
  );
};

export default CitiesSections;
