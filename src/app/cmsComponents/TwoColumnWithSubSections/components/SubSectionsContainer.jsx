export default function SubSectionsContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-[#F5F3EF]"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <section className="mx-auto w-full max-w-7xl overflow-visible px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {children}
      </section>
    </div>
  );
}
