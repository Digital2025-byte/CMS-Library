export default function MixedRightThreeImagesContainer({
  lang,
  dir,
  children,
  className = "",
}) {
  return (
    <section
      className={`w-full space-y-8 bg-primary-800 py-8 md:space-y-12 md:py-12 lg:space-y-14 lg:py-14 ${className}`.trim()}
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      {children}
    </section>
  );
}
