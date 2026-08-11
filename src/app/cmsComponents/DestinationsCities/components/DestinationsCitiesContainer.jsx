export default function DestinationsCitiesContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      {children}
    </div>
  );
}
