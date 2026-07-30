export default function SubSectionsContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-[#F5F3EF]"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <section className="mx-auto w-full max-w-7xl overflow-visible px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {children}
      </section>
    </div>
  );
}
