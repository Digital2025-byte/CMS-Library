import Image from "next/image";

export default function TwoColumnMedia({
  mainImage,
  mainImageAlt,
  overlayImage,
  overlayImageAlt,
  lang = "en",
}) {
  const isRtl = lang === "ar";

  return (
    <div
      className={`relative w-full`}
    >
      <div className="relative ms-auto w-full lg:w-[92%]">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] shadow-md sm:rounded-[2rem] md:rounded-[2.5rem]">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={mainImageAlt}
              fill
              priority
              quality={75}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="h-full w-full bg-white" />
          )}
        </div>

        {overlayImage ? (
          <div
            className={`absolute z-10 aspect-[4/3] w-[46%] overflow-hidden   sm:w-[44%] rounded-[24px] 
              -bottom-[10%] -start-[-10%] sm:-bottom-[10%] sm:-start-[-10%]
              `}
          >
            <Image
              src={overlayImage}
              alt={overlayImageAlt}
              fill
              quality={75}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 42vw, 22vw"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
