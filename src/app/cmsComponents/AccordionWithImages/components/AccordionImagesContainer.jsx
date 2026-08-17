import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";

export default function AccordionImagesContainer({
  lang,
  dir,
  background = "background",
  children,
}) {
  return (
    <div
      className="w-full"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
      style={{ backgroundColor: getThemeColorCss(background, "background") }}
    >
      <PageContentContainer as="section" className="py-8 sm:py-12 lg:py-16">
        {children}
      </PageContentContainer>
    </div>
  );
}
