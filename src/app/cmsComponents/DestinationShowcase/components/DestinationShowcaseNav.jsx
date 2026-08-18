"use client";

import Button from "@/components/ui/Button";
import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_DESTINATION_SHOWCASE_STYLE } from "../utils/style";

/** Explore CTA only — arrows + dots live in DestinationShowcaseControls. */
export default function DestinationShowcaseNav({
  exploreLabel,
  exploreHref,
  showButton = true,
  buttonBg = DEFAULT_DESTINATION_SHOWCASE_STYLE.buttonBg,
  buttonText = DEFAULT_DESTINATION_SHOWCASE_STYLE.buttonText,
}) {
  const showExplore = showButton && exploreLabel && exploreHref;
  if (!showExplore) return null;

  const pillCss = getThemeColorCss(buttonBg, "primary-2");
  const labelCss = getThemeColorCss(buttonText, "white");

  return (
    <div className="mt-5 shrink-0 sm:mt-6 md:mb-12">
      <Button
        label={exploreLabel}
        href={exploreHref}
        style={{
          backgroundColor: pillCss,
          borderColor: pillCss,
          color: labelCss,
        }}
      />
    </div>
  );
}
