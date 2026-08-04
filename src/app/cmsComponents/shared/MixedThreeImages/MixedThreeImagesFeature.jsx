import MixedImageTile from "./MixedImageTile";

export default function MixedThreeImagesFeature({
  image,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}) {
  return (
    <MixedImageTile
      image={image}
      className={`rounded-3xl ${className}`.trim()}
      sizes={sizes}
      priority={priority}
    />
  );
}
