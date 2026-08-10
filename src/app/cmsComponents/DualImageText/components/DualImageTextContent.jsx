import DualImageTextBlock from "./DualImageTextBlock";
import { DEFAULT_EXTRA_IMAGE_POSITION } from "../utils/helpers";

export default function DualImageTextContent({
  items = [],
  firstSection = null,
  showFirstSection = false,
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
      {showFirstSection && firstSection ? (
        <DualImageTextBlock
          item={firstSection}
          reverse
          priority
          blueLayer={false}
          underlineFirstWord={false}
          showExploreButton={false}
          showExtraImage={false}
        />
      ) : null}

      <DualImageTextBlock
        item={first}
        reverse={false}
        priority={!showFirstSection}
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
