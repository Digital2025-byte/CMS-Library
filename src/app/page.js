"use client";

import { useTranslation } from "react-i18next";
import AccordionWithContent from "@/app/cmsComponents/AccordionWithContent";
import AccordionContainer from "@/app/cmsComponents/AccordionWithContent/AccordionContainer";
import { buildAccordionData } from "@/app/cmsComponents/AccordionWithContent/data";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import { isRtl } from "@/i18n/settings";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const accordionData = buildAccordionData(t);

  return (
    <main>
      <div className="flex justify-end bg-surface-1 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-4xl justify-end">
          <LanguageSwitcher />
        </div>
      </div>

      <AccordionContainer lang={lang} dir={isRtl(lang) ? "rtl" : "ltr"}>
        <AccordionWithContent data={accordionData} />
      </AccordionContainer>
    </main>
  );
}
