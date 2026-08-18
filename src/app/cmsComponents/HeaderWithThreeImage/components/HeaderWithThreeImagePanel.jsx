import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE } from "../utils/style";
import HeaderWithThreeImageBackground from "./HeaderWithThreeImageBackground";
import HeaderWithThreeImageContent from "./HeaderWithThreeImageContent";

export default function HeaderWithThreeImagePanel({
  lang = "en",
  title,
  description,
  imageOne,
  imageTwo,
  imageThree,
  mobileImageOne,
  mobileImageTwo,
  mobileImageThree,
  showTitle = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showTitle,
  showDescription = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showDescription,
  showHeroImage = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showHeroImage,
  showOverlay = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.showOverlay,
  titleAlign = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.titleAlign,
  titleColor = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.titleColor,
  descriptionColor = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.descriptionColor,
  overlayColor = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE.overlayColor,
}) {
  const overlayCss = getThemeColorCss(overlayColor, "main");

  return (
    <section
      className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden"
      style={
        showHeroImage
          ? undefined
          : { backgroundColor: overlayCss }
      }
    >
      {showHeroImage ? (
        <HeaderWithThreeImageBackground
          lang={lang}
          imageOne={imageOne}
          imageTwo={imageTwo}
          imageThree={imageThree}
          mobileImageOne={mobileImageOne}
          mobileImageTwo={mobileImageTwo}
          mobileImageThree={mobileImageThree}
        />
      ) : null}

      <HeaderWithThreeImageContent
        lang={lang}
        title={title}
        description={description}
        showTitle={showTitle}
        showDescription={showDescription}
        titleAlign={titleAlign}
        titleColor={titleColor}
        descriptionColor={descriptionColor}
      />

      {showOverlay ? (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundImage: `linear-gradient(to top, color-mix(in srgb, ${overlayCss} 50%, transparent), color-mix(in srgb, ${overlayCss} 50%, transparent), transparent)`,
          }}
          aria-hidden
        />
      ) : null}
    </section>
  );
}
