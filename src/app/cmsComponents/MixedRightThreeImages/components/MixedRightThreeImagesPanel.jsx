"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
} from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import MixedImageTile from "./MixedImageTile";

export default function MixedRightThreeImagesPanel({
  lang = "en",
  title,
  description,
  primaryCta,
  secondaryCta,
  largeImage,
  smallImageOne,
  smallImageTwo,
}) {
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <section
      className="w-full bg-primary-1 py-8 md:py-12 lg:py-14"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-6 xl:gap-8">
          <div className="order-1 flex flex-col justify-center lg:col-start-1 lg:row-start-1">
            {title ? (
              <h2
                className={`${typography.sectionTitle} font-semibold text-white`}
              >
                {title}
              </h2>
            ) : null}

            {description ? (
              <p
                className={`${typography.sectionDescription} mt-3 max-w-xl leading-relaxed text-white/90 sm:mt-4`}
              >
                {description}
              </p>
            ) : null}

            {(primaryCta?.label || secondaryCta?.label) && (
              <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6 sm:gap-4">
                {primaryCta?.label ? (
                  <Button
                    label={primaryCta.label}
                    href={primaryCta.href || "/"}
                    icon={<ArrowIcon size={18} weight="bold" aria-hidden />}
                    iconPosition="end"
                    variant="primary"
                  />
                ) : null}

                {secondaryCta?.label ? (
                  <Button
                    label={secondaryCta.label}
                    href={secondaryCta.href || "/"}
                    icon={
                      <BookOpenIcon size={18} weight="regular" aria-hidden />
                    }
                    iconPosition="start"
                    variant="secondary"
                  />
                ) : null}
              </div>
            )}
          </div>

          <MixedImageTile
            image={largeImage}
            className="order-2 h-[48vh] rounded-3xl lg:col-start-2 lg:row-span-2 lg:h-full lg:min-h-[34rem]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          <div className="order-3 grid grid-cols-2 gap-3 sm:gap-4 lg:col-start-1 lg:row-start-2 lg:gap-5">
            <MixedImageTile
              image={smallImageOne}
              className="aspect-[4/3] rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[11rem]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <MixedImageTile
              image={smallImageTwo}
              className="aspect-[4/3] rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[11rem]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </PageContentContainer>
    </section>
  );
}
