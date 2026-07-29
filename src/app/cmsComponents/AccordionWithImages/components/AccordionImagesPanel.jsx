import Image from "next/image";

export default function AccordionImagesPanel({
  image,
  imageAlt,
  openIndex,
  imageKey,
}) {
  if (!image) {
    return (
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-surface-1 sm:h-80 lg:h-[600px]" />
    );
  }

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-80 lg:h-[600px]">
      <Image
        key={`${openIndex}-${imageKey}`}
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={75}
        className="object-cover transition-opacity duration-500 ease-in-out"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}
