"use client";

import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { UnderlinedFirstWord } from "@/utils/UnderlinedFirstWord";
import { typography } from "@/styles/typography";

export default function TrainingSection({ lang = "en", items = [] }) {
  const isMobile = useIsMobile(768);
  const first = items[0] || {};
  const second = items[1] || {};

  return (
    <section
      className="flex min-h-screen items-center justify-center bg-100"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-12 mt-8 grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="order-2 mt-1 flex flex-col justify-center p-4 px-6 lg:order-1">
          {first.title ? (
            <div>
              <UnderlinedFirstWord text={first.title} isMobile={isMobile} />
            </div>
          ) : null}
          {first.description ? (
            <p className={`${typography.body} mt-6 leading-relaxed text-700`}>
              {first.description}
            </p>
          ) : null}
        </div>

        <div className="order-1 flex justify-center p-4 lg:order-2">
          {first.imageUrl ? (
            <Image
              src={encodeURI(first.imageUrl)}
              alt={first.imageAlt}
              width={1000}
              height={1000}
              className="h-auto w-full max-w-lg rounded-lg object-cover shadow-md"
              priority
              quality={75}
            />
          ) : null}
        </div>

        <div className="order-3 flex justify-center p-4 lg:order-3">
          {second.imageUrl ? (
            <Image
              src={encodeURI(second.imageUrl)}
              alt={second.imageAlt}
              width={1000}
              height={1000}
              className="h-auto w-full rounded-lg object-cover shadow-md"
              priority
              quality={75}
            />
          ) : null}
        </div>

        <div className="order-4 mb-1 mt-1 flex flex-col justify-center p-4 px-6 lg:order-4">
          {second.title ? (
            <div>
              <UnderlinedFirstWord text={second.title} isMobile={isMobile} />
            </div>
          ) : null}
          {second.description ? (
            <p className={`${typography.body} mt-6 leading-relaxed text-700`}>
              {second.description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
