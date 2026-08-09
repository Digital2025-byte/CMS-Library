export default function FullHeightHeaderWithTextContainer({
  lang,
  dir,
  children,
}) {
  return (
    <div
      className="relative h-dvh min-h-dvh w-full"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      {children}
    </div>
  );
}
