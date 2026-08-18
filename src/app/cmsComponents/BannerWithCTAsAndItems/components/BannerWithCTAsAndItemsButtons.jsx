import Button from "@/components/ui/Button";
import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_BANNER_WITH_CTAS_STYLE } from "../utils/style";

export default function BannerWithCTAsAndItemsButtons({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  primaryIcon,
  secondaryIcon,
  cId,
  primaryBg = DEFAULT_BANNER_WITH_CTAS_STYLE.primaryBg,
  primaryText = DEFAULT_BANNER_WITH_CTAS_STYLE.primaryText,
  secondaryText = DEFAULT_BANNER_WITH_CTAS_STYLE.secondaryText,
}) {
  if (!primaryLabel && !secondaryLabel) {
    return null;
  }

  const primaryPill = getThemeColorCss(primaryBg, "primary-2");
  const primaryFg = getThemeColorCss(primaryText, "white");
  const secondaryFg = getThemeColorCss(secondaryText, "white");

  return (
    <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
      {primaryLabel ? (
        <Button
          label={primaryLabel}
          href={primaryHref || undefined}
          icon={primaryIcon}
          cId={cId}
          variant="primary"
          className="min-h-12 w-full font-semibold sm:w-auto sm:min-w-40 lg:px-10"
          style={{
            backgroundColor: primaryPill,
            borderColor: primaryPill,
            color: primaryFg,
          }}
        />
      ) : null}
      {secondaryLabel ? (
        <Button
          label={secondaryLabel}
          href={secondaryHref || undefined}
          icon={secondaryIcon}
          cId={cId}
          variant="secondary"
          className="min-h-12 w-full font-semibold sm:w-auto sm:min-w-40 lg:px-10"
          style={{
            borderColor: secondaryFg,
            color: secondaryFg,
          }}
        />
      ) : null}
    </div>
  );
}
