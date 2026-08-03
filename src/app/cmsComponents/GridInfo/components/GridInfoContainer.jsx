export default function GridInfoContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-surface-1"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <section className="mx-auto w-full max-w-7xl px-2 py-12 sm:px-4 lg:px-6">
        {children}
      </section>
    </div>
  );
}
