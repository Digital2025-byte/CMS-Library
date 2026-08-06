import UpperRightImageTile from "./UpperRightImageTile";

/** Two stacked small images — height matches the large image via grid stretch. */
export default function UpperRightThreeImagesSmallPair({
  smallImageOne,
  smallImageTwo,
}) {
  return (
    <div className="grid min-h-[18rem] grid-rows-2 gap-3 sm:gap-4 lg:h-full lg:min-h-[22rem] lg:gap-5">
      <UpperRightImageTile
        image={smallImageOne}
        className="min-h-0 rounded-2xl sm:rounded-3xl"
        sizes="(max-width: 1024px) 100vw, 25vw"
      />
      <UpperRightImageTile
        image={smallImageTwo}
        className="min-h-0 rounded-2xl sm:rounded-3xl"
        sizes="(max-width: 1024px) 100vw, 25vw"
      />
    </div>
  );
}
