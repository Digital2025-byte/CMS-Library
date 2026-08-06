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

const CitiesSections = ({ lang = "en", data, cId }) => {
  const pathname = usePathname();
  const content = getCitiesSectionsContent(data, lang);

  if (!content.hasContent) {
    return null;
  }

  return (
    <CitiesSectionsPanel
      lang={lang}
      cId={cId}
      title={content.title}
      description={content.description}
      template={content.template}
      image1={content.image1}
      image2={content.image2}
      isCTA={content.isCTA}
      ctaLabel={content.ctaLabel}
      ctaHref={buildCtaHref(pathname, content.slug)}
    />
  );
};

export default CitiesSections;
