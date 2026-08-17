import PageContentContainer from "@/components/layout/PageContentContainer";
import { SURFACE_CLASS } from "../utils/style";

export default function AccordionContainer({
  lang,
  dir,
  background = "100",
  children,
}) {
  const backgroundClass = SURFACE_CLASS[background] ?? SURFACE_CLASS["100"];

  return (
    <div
      className={`w-full ${backgroundClass}`}
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer as="section" className="py-8 sm:py-12 lg:py-16">
        {children}
      </PageContentContainer>
    </div>
  );
}
