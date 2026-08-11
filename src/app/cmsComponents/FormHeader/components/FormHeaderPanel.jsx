"use client";

import Image from "next/image";
import Link from "next/link";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import {
  DEFAULT_HEADER_IMAGE,
  DEFAULT_PROMO_HREF,
  DEFAULT_PROMO_IMAGE,
} from "../utils/constants";

export default function FormHeaderPanel({
  lang = "en",
  posParams = "gb",
  title = "",
  subtitle = "",
  ctaLabel = "",
  headerImageSrc = "",
  promoImageSrc = "",
  promoHref = "",
  promoAlt = "",
  isTransportationSurvey = false,
  children,
}) {
  const homeHref = `/${posParams}/${lang}`;
  const bannerSrc = headerImageSrc || DEFAULT_HEADER_IMAGE;
  const promoSrc = promoImageSrc || DEFAULT_PROMO_IMAGE;
  const promoLink = promoHref || DEFAULT_PROMO_HREF;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <PageContentContainer className="mx-auto max-w-[600px] py-4">
        <Link href={homeHref} className="block pt-2">
          <Image
            src={bannerSrc}
            alt={title || "FlyCham"}
            width={1200}
            height={400}
            className="h-auto w-full"
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </Link>

        {!isTransportationSurvey && promoSrc ? (
          <div className="pb-4 pt-3">
            <a href={promoLink} target="_blank" rel="noreferrer">
              <Image
                src={promoSrc}
                alt={promoAlt || ""}
                width={1200}
                height={400}
                className="h-auto w-full rounded-md"
                sizes="(max-width: 600px) 100vw, 600px"
              />
            </a>
          </div>
        ) : null}

        <div className="px-2 pb-2 pt-3 text-center text-main">
          {title ? (
            <strong className={`${typography.itemTitle} block font-semibold`}>
              {title}
            </strong>
          ) : null}
          {subtitle ? (
            <p className={`${typography.body} pt-1`}>{subtitle}</p>
          ) : null}
        </div>

        {children}

        {ctaLabel ? (
          <div
            className={`${typography.button} bg-primary-1 px-4 py-3 text-center font-semibold text-50`}
          >
            {ctaLabel}
          </div>
        ) : null}
      </PageContentContainer>
    </section>
  );
}
