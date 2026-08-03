import PageContentContainer from "@/components/layout/PageContentContainer";

export default function TwoColumnContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-100"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer as="section" className="py-12 sm:py-14 lg:py-20">
        {children}
      </PageContentContainer>
    </div>
  );
}
