"use client";

import { useTranslation } from "react-i18next";
import AccordionWithContent from "@/app/cmsComponents/AccordionWithContent";
import AccordionContainer from "@/app/cmsComponents/AccordionWithContent/container/AccordionContainer";
import { buildAccordionData } from "@/app/cmsComponents/AccordionWithContent/utils/data";
import AccordionWithImages from "@/app/cmsComponents/AccordionWithImages";
import AccordionImagesContainer from "@/app/cmsComponents/AccordionWithImages/components/AccordionImagesContainer";
import { buildAccordionWithImagesData } from "@/app/cmsComponents/AccordionWithImages/utils/data";
import BannerWithCta from "@/app/cmsComponents/BannerWithCta";
import BannerWithCtaContainer from "@/app/cmsComponents/BannerWithCta/components/BannerWithCtaContainer";
import { buildBannerWithCtaData } from "@/app/cmsComponents/BannerWithCta/utils/data";
import CallUs from "@/app/cmsComponents/CallUs";
import CallUsContainer from "@/app/cmsComponents/CallUs/components/CallUsContainer";
import { buildCallUsData } from "@/app/cmsComponents/CallUs/utils/data";
import Paragraph from "@/app/cmsComponents/Paragraph";
import ParagraphContainer from "@/app/cmsComponents/Paragraph/components/ParagraphContainer";
import { buildParagraphData } from "@/app/cmsComponents/Paragraph/utils/data";
import TextWithBlobImage from "@/app/cmsComponents/TextWithBlobImage";
import TextBlobContainer from "@/app/cmsComponents/TextWithBlobImage/components/TextBlobContainer";
import { buildTextWithBlobData } from "@/app/cmsComponents/TextWithBlobImage/utils/data";
import TwoColumnIntroWithTwoImage from "@/app/cmsComponents/TwoColumnIntroWithTwoImage";
import TwoColumnContainer from "@/app/cmsComponents/TwoColumnIntroWithTwoImage/components/TwoColumnContainer";
import { buildTwoColumnIntroData } from "@/app/cmsComponents/TwoColumnIntroWithTwoImage/utils/data";
import VerticalImageSliceTextSection from "@/app/cmsComponents/VerticalImageSliceTextSection";
import VerticalImageSliceContainer from "@/app/cmsComponents/VerticalImageSliceTextSection/components/VerticalImageSliceContainer";
import { buildVerticalImageSliceData } from "@/app/cmsComponents/VerticalImageSliceTextSection/utils/data";
import SplitTextOnly from "@/app/cmsComponents/SplitTextOnly";
import SplitTextOnlyContainer from "@/app/cmsComponents/SplitTextOnly/components/SplitTextOnlyContainer";
import { buildSplitTextOnlyData } from "@/app/cmsComponents/SplitTextOnly/utils/data";
import TabbedCardsSection from "@/app/cmsComponents/TabbedCardsSection";
import TabbedCardsContainer from "@/app/cmsComponents/TabbedCardsSection/components/TabbedCardsContainer";
import { buildTabbedCardsData } from "@/app/cmsComponents/TabbedCardsSection/utils/data";
import GridInfo from "@/app/cmsComponents/GridInfo";
import GridInfoContainer from "@/app/cmsComponents/GridInfo/components/GridInfoContainer";
import { buildGridInfoData } from "@/app/cmsComponents/GridInfo/utils/data";
import SimpleGridWithPrefix from "@/app/cmsComponents/SimpleGridWithPrefix";
import SimpleGridContainer from "@/app/cmsComponents/SimpleGridWithPrefix/components/SimpleGridContainer";
import { buildSimpleGridWithPrefixData } from "@/app/cmsComponents/SimpleGridWithPrefix/utils/data";
import MapInfo from "@/app/cmsComponents/MapInfo";
import MapInfoContainer from "@/app/cmsComponents/MapInfo/components/MapInfoContainer";
import { buildMapInfoData } from "@/app/cmsComponents/MapInfo/utils/data";
import TwoColumnWithSubSections from "@/app/cmsComponents/TwoColumnWithSubSections";
import SubSectionsContainer from "@/app/cmsComponents/TwoColumnWithSubSections/components/SubSectionsContainer";
import { buildTwoColumnWithSubSectionsData } from "@/app/cmsComponents/TwoColumnWithSubSections/utils/data";
import ServiceBenefitsList from "@/app/cmsComponents/ServiceBenefitsList";
import ServiceBenefitsContainer from "@/app/cmsComponents/ServiceBenefitsList/components/ServiceBenefitsContainer";
import { buildServiceBenefitsData } from "@/app/cmsComponents/ServiceBenefitsList/utils/data";
import BannerWithCTAsAndItems from "@/app/cmsComponents/BannerWithCTAsAndItems";
import BannerWithCTAsAndItemsContainer from "@/app/cmsComponents/BannerWithCTAsAndItems/components/BannerWithCTAsAndItemsContainer";
import { buildBannerWithCTAsAndItemsData } from "@/app/cmsComponents/BannerWithCTAsAndItems/utils/data";
import SectionWithAnimatedImages from "@/app/cmsComponents/SectionWithAnimatedImages";
import AnimatedImagesContainer from "@/app/cmsComponents/SectionWithAnimatedImages/components/AnimatedImagesContainer";
import { buildSectionWithAnimatedImagesData } from "@/app/cmsComponents/SectionWithAnimatedImages/utils/data";
import ImageCarouselsWithOppositeScrollDirections from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections";
import OppositeScrollContainer from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/components/OppositeScrollContainer";
import { buildImageCarouselsWithOppositeScrollData } from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/utils/data";
import HeaderWithThreeImage from "@/app/cmsComponents/HeaderWithThreeImage";
import HeaderWithThreeImageContainer from "@/app/cmsComponents/HeaderWithThreeImage/components/HeaderWithThreeImageContainer";
import { buildHeaderWithThreeImageData } from "@/app/cmsComponents/HeaderWithThreeImage/utils/data";
import PhotoTileGrid from "@/app/cmsComponents/PhotoTileGrid";
import PhotoTileGridContainer from "@/app/cmsComponents/PhotoTileGrid/components/PhotoTileGridContainer";
import { buildPhotoTileGridData } from "@/app/cmsComponents/PhotoTileGrid/utils/data";
import DualImageText from "@/app/cmsComponents/DualImageText";
import DualImageTextContainer from "@/app/cmsComponents/DualImageText/components/DualImageTextContainer";
import { buildDualImageTextData } from "@/app/cmsComponents/DualImageText/utils/data";
import CarouselImageText6 from "@/app/cmsComponents/CarouselImageText6";
import CarouselImageText6Container from "@/app/cmsComponents/CarouselImageText6/components/CarouselImageText6Container";
import { buildCarouselImageText6Data } from "@/app/cmsComponents/CarouselImageText6/utils/data";
import FlightFaresSection from "@/app/cmsComponents/FlightFaresSection";
import FlightFaresContainer from "@/app/cmsComponents/FlightFaresSection/components/FlightFaresContainer";
import { buildFlightFaresData } from "@/app/cmsComponents/FlightFaresSection/utils/data";
import SplitWithImage from "@/app/cmsComponents/SplitWithImage";
import SplitWithImageContainer from "@/app/cmsComponents/SplitWithImage/components/SplitWithImageContainer";
import { buildSplitWithImageData } from "@/app/cmsComponents/SplitWithImage/utils/data";
import ServiceCardsSlider from "@/app/cmsComponents/ServiceCardsSlider";
import ServiceCardsSliderContainer from "@/app/cmsComponents/ServiceCardsSlider/components/ServiceCardsSliderContainer";
import { buildServiceCardsSliderData } from "@/app/cmsComponents/ServiceCardsSlider/utils/data";
import MixedRightThreeImages from "@/app/cmsComponents/MixedRightThreeImages";
import MixedRightThreeImagesContainer from "@/app/cmsComponents/MixedRightThreeImages/components/MixedRightThreeImagesContainer";
import { buildMixedRightThreeImagesData } from "@/app/cmsComponents/MixedRightThreeImages/utils/data";
import { buildMixedLeftThreeImagesData } from "@/app/cmsComponents/MixedLeftThreeImages/utils/data";
import RelatedContentCarousel from "@/app/cmsComponents/RelatedContentCarousel";
import RelatedContentCarouselContainer from "@/app/cmsComponents/RelatedContentCarousel/components/RelatedContentCarouselContainer";
import { buildRelatedContentCarouselData } from "@/app/cmsComponents/RelatedContentCarousel/utils/data";
import CardsCarouselFillImage from "@/app/cmsComponents/CardsCarouselFillImage";
import CardsCarouselFillImageContainer from "@/app/cmsComponents/CardsCarouselFillImage/components/CardsCarouselFillImageContainer";
import { buildCardsCarouselFillImageData } from "@/app/cmsComponents/CardsCarouselFillImage/utils/data";
import MealsDescriptionTabbed from "@/app/cmsComponents/MealsDescriptionTabbed";
import MealsDescriptionTabbedContainer from "@/app/cmsComponents/MealsDescriptionTabbed/components/MealsDescriptionTabbedContainer";
import { buildMealsDescriptionTabbedData } from "@/app/cmsComponents/MealsDescriptionTabbed/utils/data";
import ConnectionStepsList from "@/app/cmsComponents/ConnectionStepsList";
import ConnectionStepsListContainer from "@/app/cmsComponents/ConnectionStepsList/components/ConnectionStepsListContainer";
import { buildConnectionStepsListData } from "@/app/cmsComponents/ConnectionStepsList/utils/data";
import TitleWithList from "@/app/cmsComponents/TitleWithList";
import TitleWithListContainer from "@/app/cmsComponents/TitleWithList/components/TitleWithListContainer";
import { buildTitleWithListData } from "@/app/cmsComponents/TitleWithList/utils/data";
import HeaderWithCityInfo from "@/app/cmsComponents/HeaderWithCityInfo";
import HeaderWithCityInfoContainer from "@/app/cmsComponents/HeaderWithCityInfo/components/HeaderWithCityInfoContainer";
import { buildHeaderWithCityInfoData } from "@/app/cmsComponents/HeaderWithCityInfo/utils/data";
import Slider from "@/app/cmsComponents/Slider";
import SliderContainer from "@/app/cmsComponents/Slider/components/SliderContainer";
import { buildSliderData } from "@/app/cmsComponents/Slider/utils/data";
import FullHeightHeaderWithText from "@/app/cmsComponents/FullHeightHeaderWithText";
import FullHeightHeaderWithTextContainer from "@/app/cmsComponents/FullHeightHeaderWithText/components/FullHeightHeaderWithTextContainer";
import { buildFullHeightHeaderWithTextData } from "@/app/cmsComponents/FullHeightHeaderWithText/utils/data";
import SearchWithTabsAndGrid from "@/app/cmsComponents/SearchWithTabsAndGrid";
import { buildSearchWithTabsAndGridData } from "@/app/cmsComponents/SearchWithTabsAndGrid/utils/data";
import CitiesSections from "@/app/cmsComponents/CitiesSections";
import CitiesSectionsContainer from "@/app/cmsComponents/CitiesSections/components/CitiesSectionsContainer";
import { buildCitiesSectionsData } from "@/app/cmsComponents/CitiesSections/utils/data";
import DataTableWithImage from "@/app/cmsComponents/DataTableWithImage";
import DataTableWithImageContainer from "@/app/cmsComponents/DataTableWithImage/components/DataTableWithImageContainer";
import { buildDataTableWithImageData } from "@/app/cmsComponents/DataTableWithImage/utils/data";
import UpperRightThreeImages from "@/app/cmsComponents/UpperRightThreeImages";
import { buildUpperRightThreeImagesData } from "@/app/cmsComponents/UpperRightThreeImages/utils/data";
import ThreeDImageRingSection from "@/app/cmsComponents/ThreeDImageRingSection";
import { buildThreeDImageRingSectionData } from "@/app/cmsComponents/ThreeDImageRingSection/utils/data";
import CarouselItem from "@/app/cmsComponents/CarouselItem";
import CarouselItemContainer from "@/app/cmsComponents/CarouselItem/components/CarouselItemContainer";
import { buildCarouselItemData } from "@/app/cmsComponents/CarouselItem/utils/data";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import { isRtl } from "@/i18n/settings";
import PageContentContainer from "@/components/layout/PageContentContainer";
import ComponentNav from "@/components/ui/ComponentNav";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const dir = isRtl(lang) ? "rtl" : "ltr";
  const accordionData = buildAccordionData(t);
  const accordionWithImagesData = buildAccordionWithImagesData(t);
  const bannerWithCtaData = buildBannerWithCtaData(t, lang);
  const callUsData = buildCallUsData(t);
  const paragraphData = buildParagraphData(t, lang);
  const textWithBlobData = buildTextWithBlobData(t, lang);
  const twoColumnIntroData = buildTwoColumnIntroData(t);
  const twoColumnWithSubSectionsData = buildTwoColumnWithSubSectionsData(t);
  const serviceBenefitsData = buildServiceBenefitsData(t, lang);
  const bannerWithCTAsAndItemsData = buildBannerWithCTAsAndItemsData(t, lang);
  const verticalImageSliceData = buildVerticalImageSliceData(t, lang);
  const splitTextOnlyData = buildSplitTextOnlyData(t, lang);
  const tabbedCardsData = buildTabbedCardsData(t, lang);
  const gridInfoData = buildGridInfoData(t, lang);
  const simpleGridWithPrefixData = buildSimpleGridWithPrefixData(t, lang);
  const mapInfoData = buildMapInfoData(t, lang);
  const sectionWithAnimatedImagesData = buildSectionWithAnimatedImagesData(
    t,
    lang
  );
  const imageCarouselsWithOppositeScrollData =
    buildImageCarouselsWithOppositeScrollData(t, lang);
  const headerWithThreeImageData = buildHeaderWithThreeImageData(t, lang);
  const photoTileGridData = buildPhotoTileGridData(t, lang);
  const dualImageTextData = buildDualImageTextData(t, lang, "towards");
  const dualImageTrainingData = buildDualImageTextData(t, lang, "training");
  const carouselImageText6Data = buildCarouselImageText6Data(t, lang);
  const flightFaresData = buildFlightFaresData(t, lang);
  const splitWithImageData = buildSplitWithImageData(t, lang);
  const serviceCardsSliderData = buildServiceCardsSliderData(t, lang);
  const mixedRightThreeImagesData = buildMixedRightThreeImagesData(t, lang);
  const mixedLeftThreeImagesData = buildMixedLeftThreeImagesData(t, lang);
  const relatedContentCarouselData = buildRelatedContentCarouselData(t, lang);
  const cardsCarouselFillImageData = buildCardsCarouselFillImageData(t, lang);
  const mealsDescriptionTabbedData = buildMealsDescriptionTabbedData(t, lang);
  const connectionStepsListData = buildConnectionStepsListData(t, lang);
  const titleWithListData = buildTitleWithListData(t, lang);
  const headerWithCityInfoData = buildHeaderWithCityInfoData(t, lang);
  const sliderData = buildSliderData(t, lang);
  const fullHeightHeaderWithTextData = buildFullHeightHeaderWithTextData(
    t,
    lang
  );
  const searchWithTabsAndGridData = buildSearchWithTabsAndGridData(t, lang);
  const citiesSectionsData = buildCitiesSectionsData(t, lang);
  const dataTableWithImageData = buildDataTableWithImageData(t, lang);
  const upperRightThreeImagesData = buildUpperRightThreeImagesData(t, lang);
  const threeDImageRingSectionData = buildThreeDImageRingSectionData(t, lang);
  const carouselItemData = buildCarouselItemData(t, lang);

  return (
    <main className="relative">
      <div className="absolute inset-x-0 top-0 z-50 w-full pt-4">
        <PageContentContainer className="flex items-center justify-end gap-2">
          <ComponentNav />
          <LanguageSwitcher />
        </PageContentContainer>
      </div>

      <div id="full-height-header-with-text" className="scroll-mt-20">
        <FullHeightHeaderWithTextContainer lang={lang} dir={dir}>
          <FullHeightHeaderWithText
            lang={lang}
            data={fullHeightHeaderWithTextData}
            posParams="gb"
          />
        </FullHeightHeaderWithTextContainer>
      </div>

      <div id="slider" className="scroll-mt-20">
        <SliderContainer lang={lang}>
          <Slider
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
        </SliderContainer>
      </div>

      <div id="header-with-city-info" className="scroll-mt-20">
        <HeaderWithCityInfoContainer lang={lang} dir={dir}>
          <HeaderWithCityInfo lang={lang} data={headerWithCityInfoData} />
        </HeaderWithCityInfoContainer>
      </div>

      <div id="mixed-right-three-images" className="scroll-mt-20">
        <MixedRightThreeImagesContainer lang={lang} dir={dir}>
          <MixedRightThreeImages
            lang={lang}
            data={mixedRightThreeImagesData}
            side="right"
          />
          <MixedRightThreeImages
            lang={lang}
            data={mixedLeftThreeImagesData}
            side="left"
          />
          <UpperRightThreeImages
            lang={lang}
            data={upperRightThreeImagesData}
            side="right"
          />
          <UpperRightThreeImages
            lang={lang}
            data={upperRightThreeImagesData}
            side="left"
          />
        </MixedRightThreeImagesContainer>
      </div>

      <div id="cities-sections" className="scroll-mt-20">
        <CitiesSectionsContainer lang={lang} dir={dir}>
          <CitiesSections lang={lang} data={citiesSectionsData} side="right" />
          <CitiesSections lang={lang} data={citiesSectionsData} side="left" />
        </CitiesSectionsContainer>
      </div>

      <div id="banner-with-ctas-and-items" className="scroll-mt-20">
        <BannerWithCTAsAndItemsContainer lang={lang} dir={dir}>
          <BannerWithCTAsAndItems
            lang={lang}
            data={bannerWithCTAsAndItemsData}
          />
        </BannerWithCTAsAndItemsContainer>
      </div>

      <div id="banner-with-cta" className="scroll-mt-20">
        <BannerWithCtaContainer lang={lang} dir={dir}>
          <BannerWithCta lang={lang} data={bannerWithCtaData} />
        </BannerWithCtaContainer>
      </div>

      <div id="data-table-with-image" className="scroll-mt-20">
        <DataTableWithImageContainer lang={lang} dir={dir}>
          <DataTableWithImage lang={lang} data={dataTableWithImageData} />
        </DataTableWithImageContainer>
      </div>

      <div id="accordion-with-content" className="scroll-mt-20">
        <AccordionContainer lang={lang} dir={dir}>
          <AccordionWithContent data={accordionData} />
        </AccordionContainer>
      </div>

      <div id="accordion-with-images" className="scroll-mt-20">
        <AccordionImagesContainer lang={lang} dir={dir}>
          <AccordionWithImages data={accordionWithImagesData} />
        </AccordionImagesContainer>
      </div>

      <div id="paragraph" className="scroll-mt-20">
        <ParagraphContainer lang={lang} dir={dir}>
          <Paragraph lang={lang} data={paragraphData} />
        </ParagraphContainer>
      </div>

      <div id="text-with-blob-image" className="scroll-mt-20">
        <TextBlobContainer lang={lang} dir={dir}>
          <TextWithBlobImage lang={lang} data={textWithBlobData} />
        </TextBlobContainer>
      </div>

      <div id="call-us" className="scroll-mt-20">
        <CallUsContainer lang={lang} dir={dir}>
          <CallUs data={callUsData} />
        </CallUsContainer>
      </div>

      <div id="two-column-intro-with-two-image" className="scroll-mt-20">
        <TwoColumnContainer lang={lang} dir={dir}>
          <TwoColumnIntroWithTwoImage lang={lang} data={twoColumnIntroData} />
        </TwoColumnContainer>
      </div>

      <div id="two-column-with-sub-sections" className="scroll-mt-20">
        <SubSectionsContainer lang={lang} dir={dir}>
          <TwoColumnWithSubSections
            lang={lang}
            data={twoColumnWithSubSectionsData}
          />
        </SubSectionsContainer>
      </div>

      <div id="service-benefits-list" className="scroll-mt-20">
        <ServiceBenefitsContainer lang={lang} dir={dir}>
          <ServiceBenefitsList lang={lang} data={serviceBenefitsData} />
        </ServiceBenefitsContainer>
      </div>

      <div id="vertical-image-slice-text-section" className="scroll-mt-20">
        <VerticalImageSliceContainer lang={lang} dir={dir}>
          <VerticalImageSliceTextSection
            lang={lang}
            data={verticalImageSliceData}
          />
        </VerticalImageSliceContainer>
      </div>

      <div id="split-text-only" className="scroll-mt-20">
        <SplitTextOnlyContainer lang={lang} dir={dir}>
          <SplitTextOnly lang={lang} data={splitTextOnlyData} />
        </SplitTextOnlyContainer>
      </div>

      <div id="tabbed-cards-section" className="scroll-mt-20">
        <TabbedCardsContainer lang={lang} dir={dir}>
          <TabbedCardsSection lang={lang} data={tabbedCardsData} />
        </TabbedCardsContainer>
      </div>

      <div id="grid-info" className="scroll-mt-20">
        <GridInfoContainer lang={lang} dir={dir}>
          <GridInfo lang={lang} data={gridInfoData} />
        </GridInfoContainer>
      </div>

      <div id="simple-grid-with-prefix" className="scroll-mt-20">
        <SimpleGridContainer lang={lang} dir={dir}>
          <SimpleGridWithPrefix lang={lang} data={simpleGridWithPrefixData} />
        </SimpleGridContainer>
      </div>

      <div id="map-info" className="scroll-mt-20">
        <MapInfoContainer lang={lang} dir={dir}>
          <MapInfo lang={lang} data={mapInfoData} />
        </MapInfoContainer>
      </div>

      <div id="section-with-animated-images" className="scroll-mt-20">
        <AnimatedImagesContainer lang={lang} dir={dir}>
          <SectionWithAnimatedImages
            lang={lang}
            data={sectionWithAnimatedImagesData}
          />
        </AnimatedImagesContainer>
      </div>

      <div id="image-carousels-with-opposite-scroll" className="scroll-mt-20">
        <OppositeScrollContainer lang={lang} dir={dir}>
          <ImageCarouselsWithOppositeScrollDirections
            lang={lang}
            data={imageCarouselsWithOppositeScrollData}
          />
        </OppositeScrollContainer>
      </div>

      <div id="header-with-three-image" className="scroll-mt-20">
        <HeaderWithThreeImageContainer lang={lang} dir={dir}>
          <HeaderWithThreeImage lang={lang} data={headerWithThreeImageData} />
        </HeaderWithThreeImageContainer>
      </div>

      <div id="carousel-image-text-6" className="scroll-mt-20">
        <CarouselImageText6Container lang={lang} dir={dir}>
          <CarouselImageText6 lang={lang} data={carouselImageText6Data} />
        </CarouselImageText6Container>
      </div>

      <div id="flight-fares-section" className="scroll-mt-20">
        <FlightFaresContainer lang={lang} dir={dir}>
          <FlightFaresSection lang={lang} data={flightFaresData} />
        </FlightFaresContainer>
      </div>

      <div id="split-with-image" className="scroll-mt-20">
        <SplitWithImageContainer lang={lang} dir={dir}>
          <SplitWithImage lang={lang} data={splitWithImageData} />
        </SplitWithImageContainer>
      </div>

      <div id="service-cards-slider" className="scroll-mt-20">
        <ServiceCardsSliderContainer lang={lang} dir={dir}>
          <ServiceCardsSlider lang={lang} data={serviceCardsSliderData} />
        </ServiceCardsSliderContainer>
      </div>

      <div id="related-content-carousel" className="scroll-mt-20">
        <RelatedContentCarouselContainer lang={lang} dir={dir}>
          <RelatedContentCarousel
            lang={lang}
            data={relatedContentCarouselData}
          />
        </RelatedContentCarouselContainer>
      </div>

      <div id="cards-carousel-fill-image" className="scroll-mt-20">
        <CardsCarouselFillImageContainer lang={lang} dir={dir}>
          <CardsCarouselFillImage
            lang={lang}
            data={cardsCarouselFillImageData}
          />
        </CardsCarouselFillImageContainer>
      </div>

      <div id="meals-description-tabbed" className="scroll-mt-20">
        <MealsDescriptionTabbedContainer lang={lang} dir={dir}>
          <MealsDescriptionTabbed
            lang={lang}
            data={mealsDescriptionTabbedData}
          />
        </MealsDescriptionTabbedContainer>
      </div>

      <div id="connection-steps-list" className="scroll-mt-20">
        <ConnectionStepsListContainer lang={lang} dir={dir}>
          <ConnectionStepsList lang={lang} data={connectionStepsListData} />
        </ConnectionStepsListContainer>
      </div>

      <div id="title-with-list" className="scroll-mt-20">
        <TitleWithListContainer lang={lang} dir={dir}>
          <TitleWithList lang={lang} data={titleWithListData} />
        </TitleWithListContainer>
      </div>

      <div id="search-with-tabs-and-grid" className="scroll-mt-20">
        <SearchWithTabsAndGrid
          lang={lang}
          data={searchWithTabsAndGridData}
          posParams="gb"
        />
      </div>

      <div id="photo-tile-grid" className="scroll-mt-20">
        <PhotoTileGridContainer lang={lang} dir={dir}>
          <PhotoTileGrid lang={lang} data={photoTileGridData} />
        </PhotoTileGridContainer>
      </div>

      <div id="dual-image-text" className="scroll-mt-20">
        <DualImageTextContainer lang={lang} dir={dir}>
          <DualImageText
            lang={lang}
            data={dualImageTextData}
            blueLayer
            animate
            bgColor="bg-200"
            showExploreButton
          />
        </DualImageTextContainer>
      </div>

      <div id="dual-image-text-training" className="scroll-mt-20">
        <DualImageTextContainer lang={lang} dir={dir}>
          <DualImageText
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
        </DualImageTextContainer>
      </div>

      <div id="three-d-image-ring-section" className="scroll-mt-20">
        <ThreeDImageRingSection lang={lang} data={threeDImageRingSectionData} />
      </div>

      <div id="carousel-item" className="scroll-mt-20">
        <CarouselItemContainer lang={lang} dir={dir}>
          <CarouselItem
            lang={lang}
            data={carouselItemData}
            posParams="gb"
          />
        </CarouselItemContainer>
      </div>
    </main>
  );
}
