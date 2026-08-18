import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_FILL_IMAGE_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";

/**
 * Full-bleed section shell. Header/nav use PageContentContainer;
 * the carousel track breaks out edge-to-edge inside the component.
 */
export default function CardsCarouselFillImageContainer({
  lang,
  dir,
  background = DEFAULT_FILL_IMAGE_STYLE.sectionBg,
  showBackground = DEFAULT_FILL_IMAGE_STYLE.showSectionBg,
  padding = DEFAULT_FILL_IMAGE_STYLE.sectionPadding,
  children,
}) {
  const paddingClass =
    SECTION_PADDING_CLASS[padding] ?? SECTION_PADDING_CLASS.default;

  return (
    <section
      className="w-full overflow-x-hidden"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
      style={
        showBackground
          ? { backgroundColor: getThemeColorCss(background, "200") }
          : undefined
      }
    >
      <div className={paddingClass}>{children}</div>
    </section>
  );
}

export function CardsCarouselFillImageInset({ children, className = "" }) {
  return (
    <PageContentContainer className={className}>{children}</PageContentContainer>
  );
}
