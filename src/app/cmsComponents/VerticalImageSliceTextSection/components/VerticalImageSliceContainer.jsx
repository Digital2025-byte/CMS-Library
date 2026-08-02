export default function VerticalImageSliceContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-surface-1"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <section className="relative z-0 mx-auto flex w-full max-w-7xl items-center justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20">
        {children}
      </section>
    </div>
  );
}
