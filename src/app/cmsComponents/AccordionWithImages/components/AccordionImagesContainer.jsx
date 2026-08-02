export default function AccordionImagesContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-background"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16">
        {children}
      </section>
    </div>
  );
}
