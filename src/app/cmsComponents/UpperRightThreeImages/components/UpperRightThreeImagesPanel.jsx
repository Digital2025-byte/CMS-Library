import PageContentContainer from "@/components/layout/PageContentContainer";
import UpperRightImageTile from "./UpperRightImageTile";
import UpperRightThreeImagesContent from "./UpperRightThreeImagesContent";
import UpperRightThreeImagesSmallPair from "./UpperRightThreeImagesSmallPair";

export default function UpperRightThreeImagesPanel({
  lang = "en",
  cId,
  title = "",
  description = "",
  cta,
  largeImage,
  smallImageOne,
  smallImageTwo,
}) {
  const isRtl = lang === "ar";

  return (
    <div className="w-full" dir={isRtl ? "rtl" : "ltr"}>
      <PageContentContainer>
        {/* Images: large left (~2/3) + stacked pair right (~1/3) */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[2fr_1fr] lg:gap-5">
          <UpperRightImageTile
            image={largeImage}
            className="aspect-[16/10] min-h-[14rem] rounded-2xl sm:rounded-3xl lg:aspect-auto lg:min-h-[22rem]"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
          <UpperRightThreeImagesSmallPair
            smallImageOne={smallImageOne}
            smallImageTwo={smallImageTwo}
          />
        </div>

        {/* Text + CTA under images */}
        <div className="mt-6 lg:mt-8">
          <UpperRightThreeImagesContent
            lang={lang}
            title={title}
            description={description}
            cta={cta}
            cId={cId}
          />
        </div>
      </PageContentContainer>
    </div>
  );
}
