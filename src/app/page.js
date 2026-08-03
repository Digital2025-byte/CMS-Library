"use client";

import { useTranslation } from "react-i18next";
import AccordionWithContent from "@/app/cmsComponents/AccordionWithContent";
import AccordionContainer from "@/app/cmsComponents/AccordionWithContent/components/AccordionContainer";
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
import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import { isRtl } from "@/i18n/settings";

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

  return (
    <main>
      <div className="w-full bg-100 pt-4">
        <div className="mx-auto flex w-full max-w-7xl justify-end px-4 sm:px-6 lg:px-12">
          <LanguageSwitcher />
        </div>
      </div>

      <BannerWithCTAsAndItemsContainer lang={lang} dir={dir}>
        <BannerWithCTAsAndItems
          lang={lang}
          data={bannerWithCTAsAndItemsData}
        />
      </BannerWithCTAsAndItemsContainer>

      <AccordionContainer lang={lang} dir={dir}>
        <AccordionWithContent data={accordionData} />
      </AccordionContainer>

      <AccordionImagesContainer lang={lang} dir={dir}>
        <AccordionWithImages data={accordionWithImagesData} />
      </AccordionImagesContainer>

      <ParagraphContainer lang={lang} dir={dir}>
        <Paragraph lang={lang} data={paragraphData} />
      </ParagraphContainer>

      <BannerWithCtaContainer lang={lang} dir={dir}>
        <BannerWithCta lang={lang} data={bannerWithCtaData} />
      </BannerWithCtaContainer>

      <TextBlobContainer lang={lang} dir={dir}>
        <TextWithBlobImage lang={lang} data={textWithBlobData} />
      </TextBlobContainer>

      <CallUsContainer lang={lang} dir={dir}>
        <CallUs data={callUsData} />
      </CallUsContainer>

      <TwoColumnContainer lang={lang} dir={dir}>
        <TwoColumnIntroWithTwoImage lang={lang} data={twoColumnIntroData} />
      </TwoColumnContainer>

      <SubSectionsContainer lang={lang} dir={dir}>
        <TwoColumnWithSubSections
          lang={lang}
          data={twoColumnWithSubSectionsData}
        />
      </SubSectionsContainer>

      <ServiceBenefitsContainer lang={lang} dir={dir}>
        <ServiceBenefitsList lang={lang} data={serviceBenefitsData} />
      </ServiceBenefitsContainer>

      <VerticalImageSliceContainer lang={lang} dir={dir}>
        <VerticalImageSliceTextSection
          lang={lang}
          data={verticalImageSliceData}
        />
      </VerticalImageSliceContainer>

      <SplitTextOnlyContainer lang={lang} dir={dir}>
        <SplitTextOnly lang={lang} data={splitTextOnlyData} />
      </SplitTextOnlyContainer>

      <TabbedCardsContainer lang={lang} dir={dir}>
        <TabbedCardsSection lang={lang} data={tabbedCardsData} />
      </TabbedCardsContainer>

      <GridInfoContainer lang={lang} dir={dir}>
        <GridInfo lang={lang} data={gridInfoData} />
      </GridInfoContainer>

      <SimpleGridContainer lang={lang} dir={dir}>
        <SimpleGridWithPrefix lang={lang} data={simpleGridWithPrefixData} />
      </SimpleGridContainer>

      <MapInfoContainer lang={lang} dir={dir}>
        <MapInfo lang={lang} data={mapInfoData} />
      </MapInfoContainer>

      <AnimatedImagesContainer lang={lang} dir={dir}>
        <SectionWithAnimatedImages
          lang={lang}
          data={sectionWithAnimatedImagesData}
        />
      </AnimatedImagesContainer>

      <OppositeScrollContainer lang={lang} dir={dir}>
        <ImageCarouselsWithOppositeScrollDirections
          lang={lang}
          data={imageCarouselsWithOppositeScrollData}
        />
      </OppositeScrollContainer>

      <HeaderWithThreeImageContainer lang={lang} dir={dir}>
        <HeaderWithThreeImage lang={lang} data={headerWithThreeImageData} />
      </HeaderWithThreeImageContainer>

      <PhotoTileGridContainer lang={lang} dir={dir}>
        <PhotoTileGrid lang={lang} data={photoTileGridData} />
      </PhotoTileGridContainer>

      <DualImageTextContainer lang={lang} dir={dir}>
        <DualImageText lang={lang} data={dualImageTextData} />
      </DualImageTextContainer>

      <DualImageTextContainer lang={lang} dir={dir}>
        <DualImageText lang={lang} data={dualImageTrainingData} />
      </DualImageTextContainer>
    </main>
  );
}
