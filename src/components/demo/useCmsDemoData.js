"use client";

import { useTranslation } from "react-i18next";
import { buildAccordionData } from "@/app/cmsComponents/AccordionWithContent/utils/data";
import { buildAccordionWithImagesData } from "@/app/cmsComponents/AccordionWithImages/utils/data";
import { buildBannerWithCtaData } from "@/app/cmsComponents/BannerWithCta/utils/data";
import { buildCallUsData } from "@/app/cmsComponents/CallUs/utils/data";
import { buildParagraphData } from "@/app/cmsComponents/Paragraph/utils/data";
import { buildTextWithBlobData } from "@/app/cmsComponents/TextWithBlobImage/utils/data";
import { buildTwoColumnIntroData } from "@/app/cmsComponents/TwoColumnIntroWithTwoImage/utils/data";
import { buildVerticalImageSliceData } from "@/app/cmsComponents/VerticalImageSliceTextSection/utils/data";
import { buildSplitTextOnlyData } from "@/app/cmsComponents/SplitTextOnly/utils/data";
import { buildTabbedCardsData } from "@/app/cmsComponents/TabbedCardsSection/utils/data";
import { buildGridInfoData } from "@/app/cmsComponents/GridInfo/utils/data";
import { buildSimpleGridWithPrefixData } from "@/app/cmsComponents/SimpleGridWithPrefix/utils/data";
import { buildMapInfoData } from "@/app/cmsComponents/MapInfo/utils/data";
import { buildTwoColumnWithSubSectionsData } from "@/app/cmsComponents/TwoColumnWithSubSections/utils/data";
import { buildServiceBenefitsData } from "@/app/cmsComponents/ServiceBenefitsList/utils/data";
import { buildBannerWithCTAsAndItemsData } from "@/app/cmsComponents/BannerWithCTAsAndItems/utils/data";
import { buildSectionWithAnimatedImagesData } from "@/app/cmsComponents/SectionWithAnimatedImages/utils/data";
import { buildImageCarouselsWithOppositeScrollData } from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/utils/data";
import { buildHeaderWithThreeImageData } from "@/app/cmsComponents/HeaderWithThreeImage/utils/data";
import { buildPhotoTileGridData } from "@/app/cmsComponents/PhotoTileGrid/utils/data";
import { buildDualImageTextData } from "@/app/cmsComponents/DualImageText/utils/data";
import { buildCarouselImageText6Data } from "@/app/cmsComponents/CarouselImageText6/utils/data";
import { buildFlightFaresData } from "@/app/cmsComponents/FlightFaresSection/utils/data";
import { buildSplitWithImageData } from "@/app/cmsComponents/SplitWithImage/utils/data";
import { buildServiceCardsSliderData } from "@/app/cmsComponents/ServiceCardsSlider/utils/data";
import { buildMixedRightThreeImagesData } from "@/app/cmsComponents/MixedRightThreeImages/utils/data";
import { buildMixedLeftThreeImagesData } from "@/app/cmsComponents/MixedLeftThreeImages/utils/data";
import { buildRelatedContentCarouselData } from "@/app/cmsComponents/RelatedContentCarousel/utils/data";
import { buildCardsCarouselFillImageData } from "@/app/cmsComponents/CardsCarouselFillImage/utils/data";
import { buildMealsDescriptionTabbedData } from "@/app/cmsComponents/MealsDescriptionTabbed/utils/data";
import { buildConnectionStepsListData } from "@/app/cmsComponents/ConnectionStepsList/utils/data";
import { buildTitleWithListData } from "@/app/cmsComponents/TitleWithList/utils/data";
import { buildHeaderWithCityInfoData } from "@/app/cmsComponents/HeaderWithCityInfo/utils/data";
import { buildSliderData } from "@/app/cmsComponents/Slider/utils/data";
import { buildFullHeightHeaderWithTextData } from "@/app/cmsComponents/FullHeightHeaderWithText/utils/data";
import { buildSearchWithTabsAndGridData } from "@/app/cmsComponents/SearchWithTabsAndGrid/utils/data";
import { buildCitiesSectionsData } from "@/app/cmsComponents/CitiesSections/utils/data";
import { buildDataTableWithImageData } from "@/app/cmsComponents/DataTableWithImage/utils/data";
import { buildUpperRightThreeImagesData } from "@/app/cmsComponents/UpperRightThreeImages/utils/data";
import { buildThreeDImageRingSectionData } from "@/app/cmsComponents/ThreeDImageRingSection/utils/data";
import { buildCarouselItemData } from "@/app/cmsComponents/CarouselItem/utils/data";
import { buildDestinationsMapData } from "@/app/cmsComponents/DestinationsMap/utils/data";
import { buildDestinationsCitiesData } from "@/app/cmsComponents/DestinationsCities/utils/data";
import { isRtl } from "@/i18n/settings";

export default function useCmsDemoData() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const dir = isRtl(lang) ? "rtl" : "ltr";

  return {
    lang,
    dir,
    accordionData: buildAccordionData(t),
    accordionWithImagesData: buildAccordionWithImagesData(t),
    bannerWithCtaData: buildBannerWithCtaData(t, lang),
    callUsData: buildCallUsData(t),
    paragraphData: buildParagraphData(t, lang),
    textWithBlobData: buildTextWithBlobData(t, lang),
    twoColumnIntroData: buildTwoColumnIntroData(t),
    twoColumnWithSubSectionsData: buildTwoColumnWithSubSectionsData(t),
    serviceBenefitsData: buildServiceBenefitsData(t, lang),
    bannerWithCTAsAndItemsData: buildBannerWithCTAsAndItemsData(t, lang),
    verticalImageSliceData: buildVerticalImageSliceData(t, lang),
    splitTextOnlyData: buildSplitTextOnlyData(t, lang),
    tabbedCardsData: buildTabbedCardsData(t, lang),
    gridInfoData: buildGridInfoData(t, lang),
    simpleGridWithPrefixData: buildSimpleGridWithPrefixData(t, lang),
    mapInfoData: buildMapInfoData(t, lang),
    sectionWithAnimatedImagesData: buildSectionWithAnimatedImagesData(t, lang),
    imageCarouselsWithOppositeScrollData:
      buildImageCarouselsWithOppositeScrollData(t, lang),
    headerWithThreeImageData: buildHeaderWithThreeImageData(t, lang),
    photoTileGridData: buildPhotoTileGridData(t, lang),
    dualImageTextData: buildDualImageTextData(t, lang, "towards"),
    dualImageTrainingData: buildDualImageTextData(t, lang, "training"),
    carouselImageText6Data: buildCarouselImageText6Data(t, lang),
    flightFaresData: buildFlightFaresData(t, lang),
    splitWithImageData: buildSplitWithImageData(t, lang),
    serviceCardsSliderData: buildServiceCardsSliderData(t, lang),
    mixedRightThreeImagesData: buildMixedRightThreeImagesData(t, lang),
    mixedLeftThreeImagesData: buildMixedLeftThreeImagesData(t, lang),
    relatedContentCarouselData: buildRelatedContentCarouselData(t, lang),
    cardsCarouselFillImageData: buildCardsCarouselFillImageData(t, lang),
    mealsDescriptionTabbedData: buildMealsDescriptionTabbedData(t, lang),
    connectionStepsListData: buildConnectionStepsListData(t, lang),
    titleWithListData: buildTitleWithListData(t, lang),
    headerWithCityInfoData: buildHeaderWithCityInfoData(t, lang),
    sliderData: buildSliderData(t, lang),
    fullHeightHeaderWithTextData: buildFullHeightHeaderWithTextData(t, lang),
    searchWithTabsAndGridData: buildSearchWithTabsAndGridData(t, lang),
    citiesSectionsData: buildCitiesSectionsData(t, lang),
    dataTableWithImageData: buildDataTableWithImageData(t, lang),
    upperRightThreeImagesData: buildUpperRightThreeImagesData(t, lang),
    threeDImageRingSectionData: buildThreeDImageRingSectionData(t, lang),
    carouselItemData: buildCarouselItemData(t, lang),
    destinationsMapData: buildDestinationsMapData(t, lang),
    destinationsCitiesData: buildDestinationsCitiesData(t, lang),
  };
}
