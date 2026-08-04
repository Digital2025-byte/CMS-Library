import MixedImageTile from "./MixedImageTile";

export default function MixedRightThreeImagesSmallImages({
  smallImageOne,
  smallImageTwo,
}) {
  return (
    <div className="order-3 grid grid-cols-2 gap-3 sm:gap-4 lg:col-start-1 lg:row-start-2 lg:gap-5">
      <MixedImageTile
        image={smallImageOne}
        className="aspect-[4/3] rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[11rem]"
        sizes="(max-width: 1024px) 50vw, 25vw"
      />
      <MixedImageTile
        image={smallImageTwo}
        className="aspect-[4/3] rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[11rem]"
        sizes="(max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
}
