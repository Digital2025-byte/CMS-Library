import Image from "next/image";

export default function CitiesSectionsImages({
  image1 = "",
  image2 = "",
  title = "",
}) {
  const imageClassName =
    "aspect-[4/3] w-full rounded-[12px] object-cover shadow-md lg:aspect-[16/11]";

  return (
    <div className="flex flex-col gap-8 lg:gap-12">
      {image1 ? (
        <Image
          src={image1}
          alt={title || "City image 1"}
          width={1200}
          height={900}
          className={imageClassName}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      ) : null}
      {image2 ? (
        <Image
          src={image2}
          alt={title || "City image 2"}
          width={1200}
          height={900}
          className={imageClassName}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      ) : null}
    </div>
  );
}
