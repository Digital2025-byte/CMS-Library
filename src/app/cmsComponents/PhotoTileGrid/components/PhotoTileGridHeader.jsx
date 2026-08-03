import { typography } from "@/styles/typography";

export default function PhotoTileGridHeader({ lang = "en", title }) {
  if (!title) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-2 sm:px-6 lg:px-12">
      <div
        className="flex items-center justify-between"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <h2 className={`${typography.sectionTitle} font-bold text-white`}>
          {title}
        </h2>
      </div>
    </div>
  );
}
