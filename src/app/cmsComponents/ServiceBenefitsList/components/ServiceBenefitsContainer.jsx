import PageContentContainer from "@/components/layout/PageContentContainer";

export default function ServiceBenefitsContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-100"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer as="section" className="py-8 sm:py-10 lg:py-12">
        {children}
      </PageContentContainer>
    </div>
  );
}
