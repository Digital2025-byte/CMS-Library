import { typography } from "@/styles/typography";

export default function PhotoTileGridHeader({ lang = "en", title }) {
  if (!title) {
    return null;
  }

  return (
    <div
      className="flex w-full items-center justify-between pt-2"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <h2 className={`${typography.sectionTitle} font-bold text-white`}>
        {title}
      </h2>
    </div>
  );
}
