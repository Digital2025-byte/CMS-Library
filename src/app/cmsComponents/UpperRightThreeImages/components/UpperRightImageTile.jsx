import Image from "next/image";

export default function UpperRightImageTile({
  image,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
}) {
  const src = image?.fileUrl || "";
  const alt = image?.alt || "";

  if (!src) {
    return (
      <div
        className={`bg-surface-2 ${className}`.trim()}
        aria-hidden
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
