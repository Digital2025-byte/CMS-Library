"use client";

import dynamic from "next/dynamic";

function lazySection(loader) {
  return dynamic(loader, {
    loading: () => (
      <div className="min-h-24 w-full animate-pulse bg-100/60" aria-hidden />
    ),
  });
}

/**
 * One dynamic import per section so Turbopack only compiles
 * components that appear on the current page.
 */
export const SECTION_COMPONENTS = {
  "full-height-header-with-text": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/FullHeightHeaderWithText"),
      import(
        "@/app/cmsComponents/FullHeightHeaderWithText/components/FullHeightHeaderWithTextContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, fullHeightHeaderWithTextData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default
              lang={lang}
              data={fullHeightHeaderWithTextData}
              posParams="gb"
            />
          </Cont.default>
        );
      },
    }))
  ),
  slider: lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/Slider"),
      import("@/app/cmsComponents/Slider/components/SliderContainer"),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, sliderData }) {
        return (
          <Cont.default lang={lang}>
            <Comp.default
              lang={lang}
              data={sliderData}
              posParams="gb"
              theme="secondary-2"
              imageOverlay={{
                color: "main",
                fromOpacity: 0.7,
                viaOpacity: 0.2,
                to: "transparent",
                direction: "to bottom",
              }}
              settings={{
                autoplay: true,
                autoplaySpeed: 5000,
                dots: true,
                fade: false,
                arrows: true,
                infinite: true,
                speed: 700,
                pauseOnHover: true,
              }}
            />
          </Cont.default>
        );
      },
    }))
  ),
  "header-with-city-info": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/HeaderWithCityInfo"),
      import(
        "@/app/cmsComponents/HeaderWithCityInfo/components/HeaderWithCityInfoContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, headerWithCityInfoData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={headerWithCityInfoData} />
          </Cont.default>
        );
      },
    }))
  ),
  "mixed-right-three-images": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/MixedRightThreeImages"),
      import(
        "@/app/cmsComponents/MixedRightThreeImages/components/MixedRightThreeImagesContainer"
      ),
      import("@/app/cmsComponents/UpperRightThreeImages"),
    ]).then(([Mixed, Cont, Upper]) => ({
      default: function Section({
        lang,
        dir,
        mixedRightThreeImagesData,
        mixedLeftThreeImagesData,
        upperRightThreeImagesData,
      }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Mixed.default
              lang={lang}
              data={mixedRightThreeImagesData}
              side="right"
            />
            <Mixed.default
              lang={lang}
              data={mixedLeftThreeImagesData}
              side="left"
            />
            <Upper.default
              lang={lang}
              data={upperRightThreeImagesData}
              side="right"
            />
            <Upper.default
              lang={lang}
              data={upperRightThreeImagesData}
              side="left"
            />
          </Cont.default>
        );
      },
    }))
  ),
  "cities-sections": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/CitiesSections"),
      import(
        "@/app/cmsComponents/CitiesSections/components/CitiesSectionsContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, citiesSectionsData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={citiesSectionsData} side="right" />
            <Comp.default lang={lang} data={citiesSectionsData} side="left" />
          </Cont.default>
        );
      },
    }))
  ),
  "banner-with-ctas-and-items": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/BannerWithCTAsAndItems"),
      import(
        "@/app/cmsComponents/BannerWithCTAsAndItems/components/BannerWithCTAsAndItemsContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, bannerWithCTAsAndItemsData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={bannerWithCTAsAndItemsData} />
          </Cont.default>
        );
      },
    }))
  ),
  "banner-with-cta": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/BannerWithCta"),
      import(
        "@/app/cmsComponents/BannerWithCta/components/BannerWithCtaContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, bannerWithCtaData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={bannerWithCtaData} />
          </Cont.default>
        );
      },
    }))
  ),
  "data-table-with-image": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/DataTableWithImage"),
      import(
        "@/app/cmsComponents/DataTableWithImage/components/DataTableWithImageContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, dataTableWithImageData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={dataTableWithImageData} />
          </Cont.default>
        );
      },
    }))
  ),
  "accordion-with-content": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/AccordionWithContent"),
      import(
        "@/app/cmsComponents/AccordionWithContent/container/AccordionContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, accordionData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default data={accordionData} />
          </Cont.default>
        );
      },
    }))
  ),
  "accordion-with-images": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/AccordionWithImages"),
      import(
        "@/app/cmsComponents/AccordionWithImages/components/AccordionImagesContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, accordionWithImagesData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default data={accordionWithImagesData} />
          </Cont.default>
        );
      },
    }))
  ),
  paragraph: lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/Paragraph"),
      import("@/app/cmsComponents/Paragraph/components/ParagraphContainer"),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, paragraphData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={paragraphData} />
          </Cont.default>
        );
      },
    }))
  ),
  "text-with-blob-image": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/TextWithBlobImage"),
      import(
        "@/app/cmsComponents/TextWithBlobImage/components/TextBlobContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, textWithBlobData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={textWithBlobData} />
          </Cont.default>
        );
      },
    }))
  ),
  "call-us": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/CallUs"),
      import("@/app/cmsComponents/CallUs/components/CallUsContainer"),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, callUsData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default data={callUsData} />
          </Cont.default>
        );
      },
    }))
  ),
  "two-column-intro-with-two-image": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/TwoColumnIntroWithTwoImage"),
      import(
        "@/app/cmsComponents/TwoColumnIntroWithTwoImage/components/TwoColumnContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, twoColumnIntroData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={twoColumnIntroData} />
          </Cont.default>
        );
      },
    }))
  ),
  "two-column-with-sub-sections": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/TwoColumnWithSubSections"),
      import(
        "@/app/cmsComponents/TwoColumnWithSubSections/components/SubSectionsContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, twoColumnWithSubSectionsData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={twoColumnWithSubSectionsData} />
          </Cont.default>
        );
      },
    }))
  ),
  "service-benefits-list": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/ServiceBenefitsList"),
      import(
        "@/app/cmsComponents/ServiceBenefitsList/components/ServiceBenefitsContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, serviceBenefitsData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={serviceBenefitsData} />
          </Cont.default>
        );
      },
    }))
  ),
  "vertical-image-slice-text-section": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/VerticalImageSliceTextSection"),
      import(
        "@/app/cmsComponents/VerticalImageSliceTextSection/components/VerticalImageSliceContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, verticalImageSliceData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={verticalImageSliceData} />
          </Cont.default>
        );
      },
    }))
  ),
  "split-text-only": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/SplitTextOnly"),
      import(
        "@/app/cmsComponents/SplitTextOnly/components/SplitTextOnlyContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, splitTextOnlyData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={splitTextOnlyData} />
          </Cont.default>
        );
      },
    }))
  ),
  "tabbed-cards-section": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/TabbedCardsSection"),
      import(
        "@/app/cmsComponents/TabbedCardsSection/components/TabbedCardsContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, tabbedCardsData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={tabbedCardsData} />
          </Cont.default>
        );
      },
    }))
  ),
  "grid-info": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/GridInfo"),
      import("@/app/cmsComponents/GridInfo/components/GridInfoContainer"),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, gridInfoData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={gridInfoData} />
          </Cont.default>
        );
      },
    }))
  ),
  "simple-grid-with-prefix": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/SimpleGridWithPrefix"),
      import(
        "@/app/cmsComponents/SimpleGridWithPrefix/components/SimpleGridContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, simpleGridWithPrefixData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={simpleGridWithPrefixData} />
          </Cont.default>
        );
      },
    }))
  ),
  "map-info": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/MapInfo"),
      import("@/app/cmsComponents/MapInfo/components/MapInfoContainer"),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, mapInfoData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={mapInfoData} />
          </Cont.default>
        );
      },
    }))
  ),
  "section-with-animated-images": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/SectionWithAnimatedImages"),
      import(
        "@/app/cmsComponents/SectionWithAnimatedImages/components/AnimatedImagesContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, sectionWithAnimatedImagesData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={sectionWithAnimatedImagesData} />
          </Cont.default>
        );
      },
    }))
  ),
  "image-carousels-with-opposite-scroll": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections"),
      import(
        "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/components/OppositeScrollContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({
        lang,
        dir,
        imageCarouselsWithOppositeScrollData,
      }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default
              lang={lang}
              data={imageCarouselsWithOppositeScrollData}
            />
          </Cont.default>
        );
      },
    }))
  ),
  "header-with-three-image": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/HeaderWithThreeImage"),
      import(
        "@/app/cmsComponents/HeaderWithThreeImage/components/HeaderWithThreeImageContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, headerWithThreeImageData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={headerWithThreeImageData} />
          </Cont.default>
        );
      },
    }))
  ),
  "carousel-image-text-6": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/CarouselImageText6"),
      import(
        "@/app/cmsComponents/CarouselImageText6/components/CarouselImageText6Container"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, carouselImageText6Data }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={carouselImageText6Data} />
          </Cont.default>
        );
      },
    }))
  ),
  "flight-fares-section": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/FlightFaresSection"),
      import(
        "@/app/cmsComponents/FlightFaresSection/components/FlightFaresContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, flightFaresData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={flightFaresData} />
          </Cont.default>
        );
      },
    }))
  ),
  "split-with-image": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/SplitWithImage"),
      import(
        "@/app/cmsComponents/SplitWithImage/components/SplitWithImageContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, splitWithImageData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={splitWithImageData} />
          </Cont.default>
        );
      },
    }))
  ),
  "service-cards-slider": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/ServiceCardsSlider"),
      import(
        "@/app/cmsComponents/ServiceCardsSlider/components/ServiceCardsSliderContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, serviceCardsSliderData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={serviceCardsSliderData} />
          </Cont.default>
        );
      },
    }))
  ),
  "related-content-carousel": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/RelatedContentCarousel"),
      import(
        "@/app/cmsComponents/RelatedContentCarousel/components/RelatedContentCarouselContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, relatedContentCarouselData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={relatedContentCarouselData} />
          </Cont.default>
        );
      },
    }))
  ),
  "cards-carousel-fill-image": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/CardsCarouselFillImage"),
      import(
        "@/app/cmsComponents/CardsCarouselFillImage/components/CardsCarouselFillImageContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, cardsCarouselFillImageData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={cardsCarouselFillImageData} />
          </Cont.default>
        );
      },
    }))
  ),
  "meals-description-tabbed": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/MealsDescriptionTabbed"),
      import(
        "@/app/cmsComponents/MealsDescriptionTabbed/components/MealsDescriptionTabbedContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, mealsDescriptionTabbedData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={mealsDescriptionTabbedData} />
          </Cont.default>
        );
      },
    }))
  ),
  "connection-steps-list": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/ConnectionStepsList"),
      import(
        "@/app/cmsComponents/ConnectionStepsList/components/ConnectionStepsListContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, connectionStepsListData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={connectionStepsListData} />
          </Cont.default>
        );
      },
    }))
  ),
  "title-with-list": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/TitleWithList"),
      import(
        "@/app/cmsComponents/TitleWithList/components/TitleWithListContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, titleWithListData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={titleWithListData} />
          </Cont.default>
        );
      },
    }))
  ),
  "search-with-tabs-and-grid": lazySection(() =>
    import("@/app/cmsComponents/SearchWithTabsAndGrid").then((Comp) => ({
      default: function Section({ lang, searchWithTabsAndGridData }) {
        return (
          <Comp.default
            lang={lang}
            data={searchWithTabsAndGridData}
            posParams="gb"
          />
        );
      },
    }))
  ),
  "photo-tile-grid": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/PhotoTileGrid"),
      import(
        "@/app/cmsComponents/PhotoTileGrid/components/PhotoTileGridContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, photoTileGridData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={photoTileGridData} />
          </Cont.default>
        );
      },
    }))
  ),
  "dual-image-text": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/DualImageText"),
      import(
        "@/app/cmsComponents/DualImageText/components/DualImageTextContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, dualImageTextData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default
              lang={lang}
              data={dualImageTextData}
              blueLayer
              animate
              bgColor="bg-200"
              showExploreButton
            />
          </Cont.default>
        );
      },
    }))
  ),
  "dual-image-text-training": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/DualImageText"),
      import(
        "@/app/cmsComponents/DualImageText/components/DualImageTextContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, dualImageTrainingData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default
              lang={lang}
              data={dualImageTrainingData}
              underlineFirstWord
              bgColor="bg-100"
              showFirstSection
              showExtraImage
              extraImagePositions={[
                { bottom: -50, start: 0, horizontal: 60 },
                { bottom: -50, end: 0, horizontal: -60 },
              ]}
            />
          </Cont.default>
        );
      },
    }))
  ),
  "three-d-image-ring-section": lazySection(() =>
    import("@/app/cmsComponents/ThreeDImageRingSection").then((Comp) => ({
      default: function Section({ lang, threeDImageRingSectionData }) {
        return (
          <Comp.default lang={lang} data={threeDImageRingSectionData} />
        );
      },
    }))
  ),
  "draggable-3d-image-ring": lazySection(() =>
    import("@/app/cmsComponents/Draggable3DImageRing").then((Comp) => ({
      default: function Section({ lang }) {
        return <Comp.default lang={lang} />;
      },
    }))
  ),
  "on-board-image-ring": lazySection(() =>
    import("@/app/cmsComponents/OnBoardImageRing").then((Comp) => ({
      default: function Section({ lang, onBoardImageRingData }) {
        return <Comp.default lang={lang} data={onBoardImageRingData} />;
      },
    }))
  ),
  "destinations-map": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/DestinationsMap"),
      import(
        "@/app/cmsComponents/DestinationsMap/components/DestinationsMapContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, destinationsMapData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={destinationsMapData} />
          </Cont.default>
        );
      },
    }))
  ),
  "destinations-cities": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/DestinationsCities"),
      import(
        "@/app/cmsComponents/DestinationsCities/components/DestinationsCitiesContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, destinationsCitiesData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default
              lang={lang}
              data={destinationsCitiesData}
              posParams="gb"
            />
          </Cont.default>
        );
      },
    }))
  ),
  "destination-showcase": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/DestinationShowcase"),
      import(
        "@/app/cmsComponents/DestinationShowcase/components/DestinationShowcaseContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, destinationShowcaseData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default
              lang={lang}
              data={destinationShowcaseData}
              posParams="gb"
            />
          </Cont.default>
        );
      },
    }))
  ),
  "carousel-item": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/CarouselItem"),
      import(
        "@/app/cmsComponents/CarouselItem/components/CarouselItemContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, carouselItemData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={carouselItemData} posParams="gb" />
          </Cont.default>
        );
      },
    }))
  ),
  "legal-information-hero": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/LegalInformationHero"),
      import(
        "@/app/cmsComponents/LegalInformationHero/components/LegalInformationHeroContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, legalInformationHeroData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={legalInformationHeroData} />
          </Cont.default>
        );
      },
    }))
  ),
  "legal-information-cards": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/LegalInformationCards"),
      import(
        "@/app/cmsComponents/LegalInformationCards/components/LegalInformationCardsContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, legalInformationCardsData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default
              lang={lang}
              data={legalInformationCardsData}
              posParams="gb"
            />
          </Cont.default>
        );
      },
    }))
  ),
  "legal-body-terms": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/LegalBodyTerms"),
      import(
        "@/app/cmsComponents/LegalBodyTerms/components/LegalBodyTermsContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, legalBodyTermsData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={legalBodyTermsData} />
          </Cont.default>
        );
      },
    }))
  ),
  "legal-body-cookies": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/LegalBodyCookies"),
      import(
        "@/app/cmsComponents/LegalBodyCookies/components/LegalBodyCookiesContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, legalBodyCookiesData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={legalBodyCookiesData} />
          </Cont.default>
        );
      },
    }))
  ),
  "legal-body-privacy-policy": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/LegalBodyPrivacyPolicy"),
      import(
        "@/app/cmsComponents/LegalBodyPrivacyPolicy/components/LegalBodyPrivacyPolicyContainer"
      ),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, legalBodyPrivacyPolicyData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={legalBodyPrivacyPolicyData} />
          </Cont.default>
        );
      },
    }))
  ),
  "form-header": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/FormHeader"),
      import("@/app/cmsComponents/FormHeader/components/FormHeaderContainer"),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, formHeaderData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={formHeaderData} posParams="gb" />
          </Cont.default>
        );
      },
    }))
  ),
  "form-footer": lazySection(() =>
    Promise.all([
      import("@/app/cmsComponents/FormFooter"),
      import("@/app/cmsComponents/FormFooter/components/FormFooterContainer"),
    ]).then(([Comp, Cont]) => ({
      default: function Section({ lang, dir, formFooterData }) {
        return (
          <Cont.default lang={lang} dir={dir}>
            <Comp.default lang={lang} data={formFooterData} />
          </Cont.default>
        );
      },
    }))
  ),
};
