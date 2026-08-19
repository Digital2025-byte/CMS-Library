import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import { isUsableImageSrc } from "../utils/helpers";
import { DEFAULT_BANNER_WITH_CTAS_STYLE } from "../utils/style";
import BannerWithCTAsAndItemsContent from "./BannerWithCTAsAndItemsContent";

export default function BannerWithCTAsAndItemsPanel({
  lang = "en",
  content,
  style = DEFAULT_BANNER_WITH_CTAS_STYLE,
  cId,
}) {
  const heroSrc =
    style.showHeroImage && isUsableImageSrc(content.backgroundImage)
      ? content.backgroundImage
      : "";
  const overlayCss = style.showOverlay
    ? getThemeColorCss(style.overlayColor, "main")
    : undefined;

  return (
    <CustomBackgroundImage
      imageUrl={heroSrc}
      desktopGradient={style.showOverlay}
      overlayColor={overlayCss}
      lang={lang}
      className="w-full min-h-[52vh] sm:min-h-[48vh] lg:min-h-[56vh]"
      style={
        heroSrc
          ? undefined
          : { backgroundColor: getThemeColorCss(style.overlayColor, "main") }
      }
    >
      <PageContentContainer
        className="flex min-h-[52vh] items-center sm:min-h-[48vh] lg:min-h-[56vh]"
        aria-label={content.imageAlt || content.title || undefined}
      >
        <BannerWithCTAsAndItemsContent
          content={content}
          style={style}
          cId={cId}
        />
      </PageContentContainer>
    </CustomBackgroundImage>
  );
}
