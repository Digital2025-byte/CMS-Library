import Button from "@/components/ui/Button";
import PageContentContainer from "@/components/layout/PageContentContainer";
import CitiesSectionsImages from "./CitiesSectionsImages";
import CitiesSectionsText from "./CitiesSectionsText";

export default function CitiesSectionsPanel({
  lang = "en",
  cId,
  title = "",
  description = "",
  /** "right" = images on the right; "left" = images on the left */
  side = "right",
  image1 = "",
  image2 = "",
  isCTA = false,
  ctaLabel = "",
  ctaHref = "",
}) {
  const isRtl = lang === "ar";
  const imagesOnRight = side !== "left";

  const textOrder = imagesOnRight ? "order-1" : "order-1 lg:order-2";
  const imagesOrder = imagesOnRight ? "order-2" : "order-2 lg:order-1";
  const showMobileCta = isCTA && ctaLabel && ctaHref;

  return (
    <section
      className="relative bg-primary-800"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer className="py-12 lg:py-20">
        {/*
          Default align-items:stretch so the text column matches the tall
          images column — required for position:sticky to pin while images scroll.
          Mobile order: text → images → CTA
        */}
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className={`${textOrder} min-h-0`}>
            <CitiesSectionsText
              title={title}
              description={description}
              isCTA={isCTA}
              ctaLabel={ctaLabel}
              ctaHref={ctaHref}
              cId={cId}
            />
          </div>

          <div className={imagesOrder}>
            <CitiesSectionsImages
              image1={image1}
              image2={image2}
              title={title}
            />
          </div>

          {showMobileCta ? (
            <div className="order-3 lg:hidden">
              <Button label={ctaLabel} href={ctaHref} cId={cId} />
            </div>
          ) : null}
        </div>
      </PageContentContainer>
    </section>
  );
}
