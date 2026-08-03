import { typography } from "@/styles/typography";

export default function HeaderWithThreeImageContent({
  lang = "en",
  title,
  description,
}) {
  if (!title && !description) {
    return null;
  }

  return (
    <div
      className="relative z-10 mx-auto flex w-full max-w-7xl items-start justify-start px-4 sm:px-6 lg:items-center lg:px-12"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="p-1">
        {title ? (
          <h1 className={`${typography.pageTitle} mt-2 font-semibold text-50`}>
            {title}
          </h1>
        ) : null}
        {description ? (
          <p
            className={`${typography.sectionDescription} mt-2 max-w-sm text-justify leading-relaxed text-50`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
