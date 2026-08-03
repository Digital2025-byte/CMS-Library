import PageContentContainer from "@/components/layout/PageContentContainer";

export default function SubSectionsContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-secondary-100"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer
        as="section"
        className="overflow-visible py-10 sm:py-14 lg:py-16"
      >
        {children}
      </PageContentContainer>
    </div>
  );
}
