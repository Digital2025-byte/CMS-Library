export default function ServiceBenefitsContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-surface-1"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {children}
      </section>
    </div>
  );
}
