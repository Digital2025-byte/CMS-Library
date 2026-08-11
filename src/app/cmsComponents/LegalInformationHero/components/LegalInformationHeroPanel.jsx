"use client";

import Image from "next/image";
import defaultPattern from "@/assets/legal/pattern.webp";
import { typography } from "@/styles/typography";

export default function LegalInformationHeroPanel({
  lang = "en",
  title = "",
  description = "",
  patternUrl,
}) {
  const patternSrc = patternUrl || defaultPattern;

  return (
    <section
      className="relative h-96 w-full overflow-hidden bg-gradient-to-b from-main to-secondary-2"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="absolute inset-y-0 end-0 hidden w-1/2 opacity-50 lg:block">
        <Image
          src={patternSrc}
          alt=""
          fill
          className="object-cover object-right rtl:object-left"
          sizes="50vw"
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-50">
        {title ? (
          <h1
            className={`${typography.pageTitle} mb-4 text-center font-semibold`}
          >
            {title}
          </h1>
        ) : null}
        {description ? (
          <p
            className={`${typography.sectionDescription} max-w-4xl text-center text-50/90`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
