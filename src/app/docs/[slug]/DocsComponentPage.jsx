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
import BannerWithCtaExamples from "@/app/cmsComponents/BannerWithCta/docs/BannerWithCtaExamples";
import BannerWithCTAsAndItemsExamples from "@/app/cmsComponents/BannerWithCTAsAndItems/docs/BannerWithCTAsAndItemsExamples";
import CardsCarouselFillImageExamples from "@/app/cmsComponents/CardsCarouselFillImage/docs/CardsCarouselFillImageExamples";
import CarouselImageText6Examples from "@/app/cmsComponents/CarouselImageText6/docs/CarouselImageText6Examples";
import CarouselItemExamples from "@/app/cmsComponents/CarouselItem/docs/CarouselItemExamples";
import DestinationShowcaseExamples from "@/app/cmsComponents/DestinationShowcase/docs/DestinationShowcaseExamples";
import DestinationsCitiesExamples from "@/app/cmsComponents/DestinationsCities/docs/DestinationsCitiesExamples";
import DualImageTextExamples from "@/app/cmsComponents/DualImageText/docs/DualImageTextExamples";
import FullHeightHeaderWithTextExamples from "@/app/cmsComponents/FullHeightHeaderWithText/docs/FullHeightHeaderWithTextExamples";
import FlightFaresSectionExamples from "@/app/cmsComponents/FlightFaresSection/docs/FlightFaresSectionExamples";
import GridInfoExamples from "@/app/cmsComponents/GridInfo/docs/GridInfoExamples";
import HeaderWithCityInfoExamples from "@/app/cmsComponents/HeaderWithCityInfo/docs/HeaderWithCityInfoExamples";
import PhotoTileGridExamples from "@/app/cmsComponents/PhotoTileGrid/docs/PhotoTileGridExamples";
import SearchWithTabsAndGridExamples from "@/app/cmsComponents/SearchWithTabsAndGrid/docs/SearchWithTabsAndGridExamples";
import SimpleGridWithPrefixExamples from "@/app/cmsComponents/SimpleGridWithPrefix/docs/SimpleGridWithPrefixExamples";
import HeaderWithThreeImageExamples from "@/app/cmsComponents/HeaderWithThreeImage/docs/HeaderWithThreeImageExamples";
import OppositeScrollExamples from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/docs/OppositeScrollExamples";
import RelatedContentCarouselExamples from "@/app/cmsComponents/RelatedContentCarousel/docs/RelatedContentCarouselExamples";
import ServiceCardsSliderExamples from "@/app/cmsComponents/ServiceCardsSlider/docs/ServiceCardsSliderExamples";
import SliderExamples from "@/app/cmsComponents/Slider/docs/SliderExamples";
import ThreeDSliderExamples from "@/app/cmsComponents/ThreeDSlider/docs/ThreeDSliderExamples";
import OnBoardImageRingExamples from "@/app/cmsComponents/OnBoardImageRing/docs/OnBoardImageRingExamples";
import { COMPONENT_NAV_ITEMS } from "@/components/ui/ComponentNav";
import PageContentContainer from "@/components/layout/PageContentContainer";
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
  "three-d-slider": (ctx, label) => (
    <ThreeDSliderExamples ctx={ctx} name={label} />
  ),
  "on-board-image-ring": (ctx, label) => (
    <OnBoardImageRingExamples ctx={ctx} name={label} />
  ),
  "image-carousels-with-opposite-scroll": (ctx, label) => (
    <OppositeScrollExamples ctx={ctx} name={label} />
  ),
  "carousel-image-text-6": (ctx, label) => (
    <CarouselImageText6Examples ctx={ctx} name={label} />
  ),
  "service-cards-slider": (ctx, label) => (
    <ServiceCardsSliderExamples ctx={ctx} name={label} />
  ),
  "related-content-carousel": (ctx, label) => (
    <RelatedContentCarouselExamples ctx={ctx} name={label} />
  ),
  "cards-carousel-fill-image": (ctx, label) => (
    <CardsCarouselFillImageExamples ctx={ctx} name={label} />
  ),
  "carousel-item": (ctx, label) => (
    <CarouselItemExamples ctx={ctx} name={label} />
  ),
  "destinations-cities": (ctx, label) => (
    <DestinationsCitiesExamples ctx={ctx} name={label} />
  ),
  "full-height-header-with-text": (ctx, label) => (
    <FullHeightHeaderWithTextExamples ctx={ctx} name={label} />
  ),
  "header-with-city-info": (ctx, label) => (
    <HeaderWithCityInfoExamples ctx={ctx} name={label} />
  ),
  "header-with-three-image": (ctx, label) => (
    <HeaderWithThreeImageExamples ctx={ctx} name={label} />
  ),
  "banner-with-cta": (ctx, label) => (
    <BannerWithCtaExamples ctx={ctx} name={label} />
  ),
  "banner-with-ctas-and-items": (ctx, label) => (
    <BannerWithCTAsAndItemsExamples ctx={ctx} name={label} />
  ),
  "grid-info": (ctx, label) => <GridInfoExamples ctx={ctx} name={label} />,
  "simple-grid-with-prefix": (ctx, label) => (
    <SimpleGridWithPrefixExamples ctx={ctx} name={label} />
  ),
  "photo-tile-grid": (ctx, label) => (
    <PhotoTileGridExamples ctx={ctx} name={label} />
  ),
  "search-with-tabs-and-grid": (ctx, label) => (
    <SearchWithTabsAndGridExamples ctx={ctx} name={label} />
  ),
  "flight-fares-section": (ctx, label) => (
    <FlightFaresSectionExamples ctx={ctx} name={label} />
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
        <PageContentContainer className="py-24">
          <h1 className={`${typography.pageTitle} font-semibold text-main`}>
            Component not found
          </h1>
          <p className={`${typography.body} mt-3 text-700`}>
            No demo page exists for “{slug}”.
          </p>
        </PageContentContainer>
      </CmsDemoChrome>
    );
  }

  return (
    <CmsDemoChrome overlay={false} sectionIds={[slug]}>
      <div className="border-b border-200 bg-50 py-10">
        <PageContentContainer>
          {group ? (
            <p className={`${typography.caption} text-500`}>{group.label}</p>
          ) : null}
          <h1 className={`${typography.pageTitle} mt-1 font-semibold text-main`}>
            {label}
          </h1>
        </PageContentContainer>
      </div>
      {renderExamples ? (
        renderExamples(ctx, label)
      ) : (
        <CmsDemoSections ids={[slug]} ctx={ctx} />
      )}
    </CmsDemoChrome>
  );
}
