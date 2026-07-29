import Image from "next/image";

export default function AccordionImagesPanel({ items, activeIndex }) {
  const layers = Array.isArray(items) ? items : [];
  const hasImages = layers.some((item) => item?.image);

  if (!hasImages) {
    return (
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-surface-1 sm:h-80 lg:h-[600px]" />
    );
  }

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-xl bg-surface-1 sm:h-80 lg:h-[600px]">
      {layers.map((item, index) =>
        item?.image ? (
          <Image
            key={index}
            src={item.image}
            alt={item.imageAlt || "Service Image"}
            fill
            priority={index === 0}
            quality={75}
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : null,
      )}
    </div>
  );
}
