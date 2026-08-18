import Button from "@/components/ui/Button";
import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_BANNER_WITH_CTA_STYLE } from "../utils/style";

export default function BannerWithCtaButton({
  label,
  href,
  icon,
  cId,
  buttonBg = DEFAULT_BANNER_WITH_CTA_STYLE.buttonBg,
  buttonText = DEFAULT_BANNER_WITH_CTA_STYLE.buttonText,
}) {
  if (!label) {
    return null;
  }

  const pillCss = getThemeColorCss(buttonBg, "primary-2");
  const labelCss = getThemeColorCss(buttonText, "white");

  return (
    <Button
      label={label}
      href={href || undefined}
      icon={icon}
      cId={cId}
      className="mt-5"
      style={{
        backgroundColor: pillCss,
        borderColor: pillCss,
        color: labelCss,
      }}
    />
  );
}
