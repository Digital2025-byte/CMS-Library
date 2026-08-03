import PageContentContainer from "@/components/layout/PageContentContainer";

export default function BannerWithCtaContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-100"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <PageContentContainer as="section" className="py-6 sm:py-8 lg:py-10">
        {children}
      </PageContentContainer>
    </div>
  );
}
