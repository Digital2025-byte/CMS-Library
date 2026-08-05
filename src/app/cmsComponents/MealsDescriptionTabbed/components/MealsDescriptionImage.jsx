import Image from "next/image";

export default function MealsDescriptionImage({ image, tabKey = "" }) {
  if (!image?.fileUrl) {
    return null;
  }

  return (
    <div className="lg:sticky lg:top-24 lg:col-span-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-surface-2 shadow-sm">
        <Image
          key={tabKey || image.fileUrl}
          src={image.fileUrl}
          alt={image.alt || ""}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 1024px) 100vw, 33vw"
          priority={false}
        />
      </div>
    </div>
  );
}
