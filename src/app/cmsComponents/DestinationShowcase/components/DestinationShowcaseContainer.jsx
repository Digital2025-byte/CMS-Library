/**
 * Full-bleed section shell — banner goes edge-to-edge on mobile.
 * Header stays inset via PageContentContainer in the panel.
 */
export default function DestinationShowcaseContainer({
  lang,
  dir,
  children,
}) {
  return (
    <section
      className="w-full overflow-x-hidden bg-50 py-8 sm:py-12 lg:py-16"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      {children}
    </section>
  );
}
