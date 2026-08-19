import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE } from "../utils/style";
import HeaderWithThreeImageBackground from "./HeaderWithThreeImageBackground";
import HeaderWithThreeImageContent from "./HeaderWithThreeImageContent";

export default function HeaderWithThreeImagePanel({
  lang = "en",
  content,
  style = DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE,
}) {
  const overlayCss = getThemeColorCss(style.overlayColor, "main");

  return (
    <section
      className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden"
      style={
        style.showHeroImage
          ? undefined
          : { backgroundColor: overlayCss }
      }
    >
      {style.showHeroImage ? (
        <HeaderWithThreeImageBackground lang={lang} content={content} />
      ) : null}

      <HeaderWithThreeImageContent
        lang={lang}
        content={content}
        style={style}
      />

      {style.showOverlay ? (
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
