import Image from "next/image";

export default function MixedImageTile({
  image,
  className = "",
  sizes = "100vw",
  priority = false,
}) {
  if (!image?.fileUrl) {
    return <div className={`bg-surface-2 ${className}`} aria-hidden />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.fileUrl}
        alt={image.alt || ""}
        fill
        className="object-cover object-center"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
