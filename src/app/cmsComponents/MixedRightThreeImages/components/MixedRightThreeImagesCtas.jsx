"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
} from "@phosphor-icons/react";
import Button from "@/components/ui/Button";

export default function MixedRightThreeImagesCtas({
  lang = "en",
  primaryCta,
  secondaryCta,
}) {
  if (!primaryCta?.label && !secondaryCta?.label) {
    return null;
  }

  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;

  return (
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
          icon={<BookOpenIcon size={18} weight="regular" aria-hidden />}
          iconPosition="start"
          variant="secondary"
        />
      ) : null}
    </div>
  );
}
