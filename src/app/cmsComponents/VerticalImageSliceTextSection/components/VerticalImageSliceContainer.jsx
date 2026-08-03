import PageContentContainer from "@/components/layout/PageContentContainer";

export default function VerticalImageSliceContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-100"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer
        as="section"
        className="relative z-0 flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        {children}
      </PageContentContainer>
    </div>
  );
}
