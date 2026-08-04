import MixedImageTile from "./MixedImageTile";

export default function MixedThreeImagesSmallImages({
  smallImageOne,
  smallImageTwo,
  className = "",
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-2.5 sm:gap-4 lg:gap-5 ${className}`.trim()}
    >
      <MixedImageTile
        image={smallImageOne}
        className="aspect-square rounded-2xl sm:rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[14rem]"
        sizes="(max-width: 1024px) 50vw, 25vw"
      />
      <MixedImageTile
        image={smallImageTwo}
        className="aspect-square rounded-2xl sm:rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[14rem]"
        sizes="(max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
}
