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
  const verticalImageSliceData = buildVerticalImageSliceData(t, lang);
  const splitTextOnlyData = buildSplitTextOnlyData(t, lang);

  return (
    <main>
      <div className="flex justify-end bg-surface-1 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-4xl justify-end">
          <LanguageSwitcher />
        </div>
      </div>

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

      <VerticalImageSliceContainer lang={lang} dir={dir}>
        <VerticalImageSliceTextSection
          lang={lang}
          data={verticalImageSliceData}
        />
      </VerticalImageSliceContainer>

      <SplitTextOnlyContainer lang={lang} dir={dir}>
        <SplitTextOnly lang={lang} data={splitTextOnlyData} />
      </SplitTextOnlyContainer>
    </main>
  );
}
