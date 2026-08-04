"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
} from "@phosphor-icons/react";
import Button from "@/components/ui/Button";

export default function MixedThreeImagesCtas({
  lang = "en",
  primaryCta,
  secondaryCta,
  className = "",
  fullWidth = false,
}) {
  if (!primaryCta?.label && !secondaryCta?.label) {
    return null;
  }

  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <div
      className={[
        fullWidth
          ? "flex flex-col gap-3"
          : "mt-5 flex flex-wrap items-center gap-3 sm:mt-6 sm:gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {primaryCta?.label ? (
        <Button
          label={primaryCta.label}
          href={primaryCta.href || "/"}
          icon={<ArrowIcon size={18} weight="bold" aria-hidden />}
          iconPosition="end"
          variant="primary"
          fullWidth={fullWidth}
        />
      ) : null}

      {secondaryCta?.label ? (
        <Button
          label={secondaryCta.label}
          href={secondaryCta.href || "/"}
          icon={<BookOpenIcon size={18} weight="regular" aria-hidden />}
          iconPosition="start"
          variant="secondary"
          fullWidth={fullWidth}
        />
      ) : null}
    </div>
  );
}
