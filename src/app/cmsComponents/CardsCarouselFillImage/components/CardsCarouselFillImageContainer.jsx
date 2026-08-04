import PageContentContainer from "@/components/layout/PageContentContainer";

/**
 * Full-bleed section shell. Header/nav use PageContentContainer;
 * the carousel track breaks out edge-to-edge inside the component.
 */
export default function CardsCarouselFillImageContainer({
  lang,
  dir,
  children,
}) {
  return (
    <section
      className="w-full overflow-x-hidden bg-200"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <div className="py-8 sm:py-10 lg:py-12">{children}</div>
    </section>
  );
}

export function CardsCarouselFillImageInset({ children, className = "" }) {
  return (
    <PageContentContainer className={className}>{children}</PageContentContainer>
  );
}
