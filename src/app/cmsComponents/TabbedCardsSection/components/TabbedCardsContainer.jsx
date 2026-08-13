import PageContentContainer from "@/components/layout/PageContentContainer";

export default function TabbedCardsContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-white"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer as="section" className="py-8 sm:py-10 lg:py-12">
        {children}
      </PageContentContainer>
    </div>
  );
}
