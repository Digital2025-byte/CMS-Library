import Image from "next/image";

export default function SubSectionsMedia({
  mainImage,
  mainImageAlt,
  overlayImage,
  overlayImageAlt,
  lang = "en",
}) {
  const isRtl = lang === "ar";

  return (
    <div className="relative m-2 mt-4 w-full lg:mt-0 lg:w-[40%]">
      <div className="relative aspect-square w-[90%] overflow-hidden rounded-2xl shadow-lg md:aspect-[1.5/1] lg:aspect-[2/1]">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={mainImageAlt}
            fill
            priority
            quality={75}
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
        ) : (
          <div className="h-full w-full bg-white" />
        )}
      </div>

      {overlayImage ? (
        <div
          className={`absolute z-10 aspect-[4/3] w-2/5 overflow-hidden rounded-2xl shadow-xl lg:bottom-6 lg:w-[37.5%] ${
            isRtl
              ? "-bottom-6 start-2 lg:start-2"
              : "-bottom-6 end-2 lg:end-2"
          }`}
        >
          <Image
            src={overlayImage}
            alt={overlayImageAlt}
            fill
            quality={75}
            className="object-cover"
            sizes="(max-width: 1024px) 40vw, 15vw"
          />
        </div>
      ) : null}
    </div>
  );
}
