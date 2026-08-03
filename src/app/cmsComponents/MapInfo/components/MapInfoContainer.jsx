export default function MapInfoContainer({ lang, dir, children }) {
  return (
    <div
      className="w-full bg-surface-1 py-8"
      lang={lang}
      dir={dir || (lang === "ar" ? "rtl" : "ltr")}
    >
      <div className="px-3 lg:ml-6 lg:px-0">
        <div className="mx-auto w-full max-w-7xl rounded-xl bg-white px-5 pb-6 pt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
