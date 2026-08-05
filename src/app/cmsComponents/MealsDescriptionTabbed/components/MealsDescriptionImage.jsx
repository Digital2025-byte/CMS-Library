import Image from "next/image";

export default function MealsDescriptionImage({ image }) {
  if (!image?.fileUrl) {
    return null;
  }

  return (
    <div className="lg:sticky lg:top-24 lg:col-span-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
        <Image
          src={image.fileUrl}
          alt={image.alt || ""}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
    </div>
  );
}
