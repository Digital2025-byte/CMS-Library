"use client";

import Image from "next/image";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { UnderlinedFirstWord } from "@/utils/UnderlinedFirstWord";
import { typography } from "@/styles/typography";

function DualImageBlock({ item, reverse = false, priority = false }) {
  if (!item?.title && !item?.description && !item?.imageUrl) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-12 xl:gap-16">
      <div
        className={`relative w-full overflow-hidden rounded-xl  ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {item.imageUrl ? (
          <Image
            src={
              String(item.imageUrl).startsWith("http")
                ? encodeURI(item.imageUrl)
                : item.imageUrl
            }
            alt={item.imageAlt || item.title || "Section image"}
            width={1000}
            height={750}
            className="aspect-4/3 h-auto w-full object-cover"
            priority={priority}
            quality={75}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : null}
      </div>

      <div
        className={`flex flex-col justify-center ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {item.title ? (
          <UnderlinedFirstWord text={item.title} />
        ) : null}
        {item.description ? (
          <p
            className={`${typography.sectionDescription} mt-4 leading-relaxed text-700 text-start lg:mt-6 lg:text-justify`}
          >
            {item.description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function TrainingSection({ lang = "en", items = [] }) {
  const first = items[0] || {};
  const second = items[1] || {};

  return (
    <section
      className="flex items-center justify-center bg-100 py-10 sm:py-12 lg:py-16"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        <div className="flex w-full flex-col gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
          <DualImageBlock item={first} reverse={false} priority />
          <DualImageBlock item={second} reverse />
        </div>
      </PageContentContainer>
    </section>
  );
}
