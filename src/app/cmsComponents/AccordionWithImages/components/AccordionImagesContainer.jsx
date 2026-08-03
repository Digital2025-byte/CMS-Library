import PageContentContainer from "@/components/layout/PageContentContainer";

export default function AccordionImagesContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-background"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer as="section" className="py-8 sm:py-12 lg:py-16">
        {children}
      </PageContentContainer>
    </div>
  );
}
