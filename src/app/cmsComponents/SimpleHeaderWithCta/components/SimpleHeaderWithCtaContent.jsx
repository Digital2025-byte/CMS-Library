import Button from "@/components/ui/Button";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";

export default function SimpleHeaderWithCtaContent({
  lang = "en",
  title = "",
  subtitle = "",
  description = "",
  buttonText = "",
  ctaHref = "",
  posParams = "gb",
  cId,
}) {
  const isRtl = lang === "ar";
  const resolvedHref = ctaHref
    ? String(ctaHref).startsWith("/")
      ? ctaHref
      : `/${posParams}/${lang}/${String(ctaHref).replace(/^\//, "")}`
    : "";

  return (
    <div
      className={`w-full pb-6 text-white sm:pb-8 md:pb-12 lg:pb-16 ${
        isRtl ? "text-right" : "text-left"
      }`}
    >
      {subtitle ? (
        <p
          className={`${typography.sectionTitle} font-semibold text-white drop-shadow-md`}
        >
          {subtitle}
        </p>
      ) : null}

      {title ? (
        <h1
          className={`${typography.pageTitle} mt-1 font-bold leading-tight text-white drop-shadow-md sm:mt-2 md:mt-3`}
        >
          {title}
        </h1>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} mt-2 max-w-lg text-white drop-shadow-md sm:mt-3`}
        >
          {description}
        </p>
      ) : null}

      {buttonText && resolvedHref ? (
        <div className="mt-4 sm:mt-5 md:mt-6">
          <Button
            label={buttonText}
            href={resolvedHref}
            cId={cId}
            variant="primary"
            className="min-w-[120px] sm:min-w-[140px] md:min-w-[180px]"
          />
        </div>
      ) : null}
    </div>
  );
}
