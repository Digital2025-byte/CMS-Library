import DualImageTextBlock from "./DualImageTextBlock";
import { DEFAULT_EXTRA_IMAGE_POSITION } from "../utils/helpers";

export default function DualImageTextContent({
  items = [],
  blueLayer = false,
  underlineFirstWord = false,
  showExploreButton = false,
  exploreButtonLabel = "Explore more",
  exploreButtonHref = "explore",
  showExtraImage = false,
  extraImageUrl = "",
  extraImageAlt = "",
  extraImagePositions = [],
  cId,
}) {
  const first = items[0] || {};
  const second = items[1] || {};
  const firstPosition =
    extraImagePositions[0] ?? DEFAULT_EXTRA_IMAGE_POSITION;
  const secondPosition =
    extraImagePositions[1] ?? DEFAULT_EXTRA_IMAGE_POSITION;

  return (
    <div className="flex w-full flex-col gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
      <DualImageTextBlock
        item={first}
        reverse={false}
        priority
        blueLayer={blueLayer}
        underlineFirstWord={underlineFirstWord}
        showExploreButton={showExploreButton}
        exploreButtonLabel={exploreButtonLabel}
        exploreButtonHref={exploreButtonHref}
        showExtraImage={showExtraImage}
        extraImageUrl={extraImageUrl}
        extraImageAlt={extraImageAlt}
        extraImagePosition={firstPosition}
        cId={cId}
      />
      <DualImageTextBlock
        item={second}
        reverse
        blueLayer={blueLayer}
        underlineFirstWord={underlineFirstWord}
        showExploreButton={showExploreButton}
        exploreButtonLabel={exploreButtonLabel}
        exploreButtonHref={exploreButtonHref}
        showExtraImage={showExtraImage}
        extraImageUrl={extraImageUrl}
        extraImageAlt={extraImageAlt}
        extraImagePosition={secondPosition}
        cId={cId}
      />
    </div>
  );
}
