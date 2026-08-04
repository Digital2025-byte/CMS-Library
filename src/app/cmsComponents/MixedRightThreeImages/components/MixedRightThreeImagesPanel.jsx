import PageContentContainer from "@/components/layout/PageContentContainer";
import MixedRightThreeImagesContent from "./MixedRightThreeImagesContent";
import MixedRightThreeImagesFeature from "./MixedRightThreeImagesFeature";
import MixedRightThreeImagesSmallImages from "./MixedRightThreeImagesSmallImages";

export default function MixedRightThreeImagesPanel({
  lang = "en",
  title,
  description,
  primaryCta,
  secondaryCta,
  largeImage,
  smallImageOne,
  smallImageTwo,
}) {
  const isRtl = lang === "ar";

  return (
    <section
      className="w-full bg-primary-1 py-8 md:py-12 lg:py-14"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-6 xl:gap-8">
          <MixedRightThreeImagesContent
            lang={lang}
            title={title}
            description={description}
            primaryCta={primaryCta}
            secondaryCta={secondaryCta}
          />

          <MixedRightThreeImagesFeature image={largeImage} />

          <MixedRightThreeImagesSmallImages
            smallImageOne={smallImageOne}
            smallImageTwo={smallImageTwo}
          />
        </div>
      </PageContentContainer>
    </section>
  );
}
