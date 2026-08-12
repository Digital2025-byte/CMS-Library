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
import AccordionWithImagesExamples from "@/app/cmsComponents/AccordionWithImages/docs/AccordionWithImagesExamples";
import CarouselImageText6Examples from "@/app/cmsComponents/CarouselImageText6/docs/CarouselImageText6Examples";
import DestinationShowcaseExamples from "@/app/cmsComponents/DestinationShowcase/docs/DestinationShowcaseExamples";
import DualImageTextExamples from "@/app/cmsComponents/DualImageText/docs/DualImageTextExamples";
import OppositeScrollExamples from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/docs/OppositeScrollExamples";
import SliderExamples from "@/app/cmsComponents/Slider/docs/SliderExamples";
import { COMPONENT_NAV_ITEMS } from "@/components/ui/ComponentNav";
import { typography } from "@/styles/typography";

const DOCS_EXAMPLES = {
  "dual-image-text": (ctx, label) => (
    <DualImageTextExamples ctx={ctx} name={label} variant="towards" />
  ),
  "dual-image-text-training": (ctx, label) => (
    <DualImageTextExamples ctx={ctx} name={label} variant="training" />
  ),
  "accordion-with-content": (ctx, label) => (
    <AccordionWithContentExamples ctx={ctx} name={label} />
  ),
  "accordion-with-images": (ctx, label) => (
    <AccordionWithImagesExamples ctx={ctx} name={label} />
  ),
  "destination-showcase": (ctx, label) => (
    <DestinationShowcaseExamples ctx={ctx} name={label} />
  ),
  slider: (ctx, label) => <SliderExamples ctx={ctx} name={label} />,
  "image-carousels-with-opposite-scroll": (ctx, label) => (
    <OppositeScrollExamples ctx={ctx} name={label} />
  ),
  "carousel-image-text-6": (ctx, label) => (
    <CarouselImageText6Examples ctx={ctx} name={label} />
  ),
};

export default function DocsComponentPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const known = isKnownSectionId(slug);
  const sectionIds = useMemo(() => (slug ? [slug] : []), [slug]);
  const ctx = useCmsDemoData(sectionIds);
  const label =
    COMPONENT_NAV_ITEMS.find((item) => item.id === slug)?.label || slug;
  const group = getIdeaGroupForSection(slug);
  const renderExamples = DOCS_EXAMPLES[slug];

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
      {renderExamples ? (
        renderExamples(ctx, label)
      ) : (
        <CmsDemoSections ids={[slug]} ctx={ctx} />
      )}
    </CmsDemoChrome>
  );
}
