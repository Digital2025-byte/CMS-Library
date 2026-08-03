import PageContentContainer from "@/components/layout/PageContentContainer";

export default function TextBlobContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-100"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer as="section" className="py-10 sm:py-12 lg:py-16">
        {children}
      </PageContentContainer>
    </div>
  );
}
