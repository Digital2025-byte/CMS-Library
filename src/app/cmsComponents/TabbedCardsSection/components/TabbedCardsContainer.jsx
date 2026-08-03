export default function TabbedCardsContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-white"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        {children}
      </section>
    </div>
  );
}
