import Image from "next/image";

export default function SubSectionsMedia({
  mainImage,
  mainImageAlt,
  overlayImage,
  overlayImageAlt,
}) {
  if (!mainImage) {
    return null;
  }

  return (
    <div className="relative w-full pb-[14%]  lg:pb-[10%]">
      {/* Positioning context sized to the main image, leaving room for the overlay */}
      <div className="relative w-[88%]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
          <Image
            src={mainImage}
            alt={mainImageAlt}
            fill
            priority
            quality={75}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>

        {overlayImage ? (
          <div className="absolute -bottom-[10%] -end-[8%] z-10 aspect-square w-[42%] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 sm:rounded-[1.5rem]">
            <Image
              src={overlayImage}
              alt={overlayImageAlt}
              fill
              quality={75}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 40vw, 20vw"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
