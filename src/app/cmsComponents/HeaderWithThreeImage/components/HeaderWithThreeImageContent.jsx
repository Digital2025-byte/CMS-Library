import { typography } from "@/styles/typography";
import PageContentContainer from "@/components/layout/PageContentContainer";

export default function HeaderWithThreeImageContent({
  lang = "en",
  title,
  description,
}) {
  if (!title && !description) {
    return null;
  }

  return (
    <PageContentContainer
      className="relative z-10 flex items-start justify-start lg:items-center"
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
    </PageContentContainer>
  );
}
