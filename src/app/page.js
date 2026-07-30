"use client";

import { useTranslation } from "react-i18next";
import AccordionWithContent from "@/app/cmsComponents/AccordionWithContent";
import AccordionContainer from "@/app/cmsComponents/AccordionWithContent/components/AccordionContainer";
import { buildAccordionData } from "@/app/cmsComponents/AccordionWithContent/utils/data";
import AccordionWithImages from "@/app/cmsComponents/AccordionWithImages";
import AccordionImagesContainer from "@/app/cmsComponents/AccordionWithImages/components/AccordionImagesContainer";
import { buildAccordionWithImagesData } from "@/app/cmsComponents/AccordionWithImages/utils/data";
import CallUs from "@/app/cmsComponents/CallUs";
import CallUsContainer from "@/app/cmsComponents/CallUs/components/CallUsContainer";
import { buildCallUsData } from "@/app/cmsComponents/CallUs/utils/data";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import { isRtl } from "@/i18n/settings";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const dir = isRtl(lang) ? "rtl" : "ltr";
  const accordionData = buildAccordionData(t);
  const accordionWithImagesData = buildAccordionWithImagesData(t);
  const callUsData = buildCallUsData(t);

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

      <CallUsContainer lang={lang} dir={dir}>
        <CallUs data={callUsData} />
      </CallUsContainer>
    </main>
  );
}
