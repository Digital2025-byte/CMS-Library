"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import CmsDemoChrome from "@/components/demo/CmsDemoChrome";
import { CmsDemoSections } from "@/components/demo/CmsDemoSections";
import {
  getIdeaGroupForSection,
  isKnownSectionId,
} from "@/components/demo/ideaGroups";
import useCmsDemoData from "@/components/demo/useCmsDemoData";
import AccordionWithContentExamples from "@/app/cmsComponents/AccordionWithContent/docs/AccordionWithContentExamples";
import DualImageTextExamples from "@/app/cmsComponents/DualImageText/docs/DualImageTextExamples";
import { COMPONENT_NAV_ITEMS } from "@/components/ui/ComponentNav";
import { typography } from "@/styles/typography";

export default function DocsComponentPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const known = isKnownSectionId(slug);
  const sectionIds = useMemo(() => (slug ? [slug] : []), [slug]);
  const ctx = useCmsDemoData(sectionIds);
  const label =
    COMPONENT_NAV_ITEMS.find((item) => item.id === slug)?.label || slug;
  const group = getIdeaGroupForSection(slug);

  if (!known) {
    return (
      <CmsDemoChrome overlay={false} sectionIds={[]}>
        <div className="px-6 py-24">
          <h1 className={`${typography.pageTitle} font-semibold text-main`}>
            Component not found
          </h1>
          <p className={`${typography.body} mt-3 text-700`}>
            No demo page exists for “{slug}”.
          </p>
        </div>
      </CmsDemoChrome>
    );
  }

  const isDualImageText =
    slug === "dual-image-text" || slug === "dual-image-text-training";
  const isAccordionWithContent = slug === "accordion-with-content";

  return (
    <CmsDemoChrome overlay={false} sectionIds={[slug]}>
      <div className="border-b border-200 bg-50 px-6 py-10">
        <div className="mx-auto w-full max-w-7xl">
          {group ? (
            <p className={`${typography.caption} text-500`}>{group.label}</p>
          ) : null}
          <h1 className={`${typography.pageTitle} mt-1 font-semibold text-main`}>
            {label}
          </h1>
        </div>
      </div>
      {isDualImageText ? (
        <DualImageTextExamples
          ctx={ctx}
          name={label}
          variant={
            slug === "dual-image-text-training" ? "training" : "towards"
          }
        />
      ) : isAccordionWithContent ? (
        <AccordionWithContentExamples ctx={ctx} name={label} />
      ) : (
        <CmsDemoSections ids={[slug]} ctx={ctx} />
      )}
    </CmsDemoChrome>
  );
}
