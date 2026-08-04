"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { typography } from "@/styles/typography";
import OurValuesDesktop from "./OurValuesDesktop";
import OurValuesMobile from "./OurValuesMobile";

export default function CarouselImageText6Panel({
  lang = "en",
  title,
  items = [],
}) {
  const isMobile = useIsMobile(1024);

  return (
    <section className="min-h-screen bg-secondary-2">
      {title ? (
        <h2
          className={`${typography.pageTitle} py-6 text-center font-bold text-white`}
        >
          {title}
        </h2>
      ) : null}

      {isMobile ? (
        <OurValuesMobile lang={lang} items={items} />
      ) : (
        <OurValuesDesktop lang={lang} items={items} />
      )}
    </section>
  );
}
