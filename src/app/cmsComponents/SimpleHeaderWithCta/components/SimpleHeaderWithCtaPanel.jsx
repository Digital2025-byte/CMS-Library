import Image from "next/image";
import PageContentContainer from "@/components/layout/PageContentContainer";
import SimpleHeaderWithCtaContent from "./SimpleHeaderWithCtaContent";

export default function SimpleHeaderWithCtaPanel({
  lang = "en",
  posParams = "gb",
  cId,
  title = "",
  subtitle = "",
  description = "",
  buttonText = "",
  ctaHref = "",
  backgroundImage = "",
}) {
  const isRtl = lang === "ar";

  return (
    <section
      className="relative box-border w-full min-w-0 overflow-hidden py-8 sm:py-10 md:min-h-[420px] md:py-12 lg:min-h-[500px] lg:py-16"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt={title || "Header background"}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-main/70 via-main/20 to-transparent"
            aria-hidden
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-primary-800" aria-hidden />
      )}

      <div className="relative flex h-full min-h-[280px] w-full items-end sm:min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
        <PageContentContainer className="w-full">
          <SimpleHeaderWithCtaContent
            lang={lang}
            posParams={posParams}
            cId={cId}
            title={title}
            subtitle={subtitle}
            description={description}
            buttonText={buttonText}
            ctaHref={ctaHref}
          />
        </PageContentContainer>
      </div>
    </section>
  );
}
