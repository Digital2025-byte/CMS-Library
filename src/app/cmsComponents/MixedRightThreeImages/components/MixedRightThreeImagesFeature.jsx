import MixedImageTile from "./MixedImageTile";

export default function MixedRightThreeImagesFeature({ image }) {
  return (
    <MixedImageTile
      image={image}
      className="order-2 h-[48vh] rounded-3xl lg:col-start-2 lg:row-span-2 lg:h-full lg:min-h-[34rem]"
      sizes="(max-width: 1024px) 100vw, 50vw"
      priority
    />
  );
}
