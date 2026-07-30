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
    <div className="relative w-full pb-10 sm:pb-12 lg:w-[52%] lg:pb-8">
      <div className="relative ms-auto aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] shadow-md sm:rounded-[2rem] md:rounded-[2.5rem] lg:w-[92%]">
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
          className={`absolute -bottom-2 z-10 aspect-[16/11] w-[46%] overflow-hidden rounded-[1.25rem] shadow-xl sm:-bottom-4 sm:rounded-[1.5rem] md:rounded-[1.75rem] ${
            isRtl ? "end-0 sm:end-4 lg:end-6" : "start-0 sm:start-4 lg:start-2"
          }`}
        >
          <Image
            src={overlayImage}
            alt={overlayImageAlt}
            fill
            quality={75}
            className="object-cover object-center"
            sizes="(max-width: 1024px) 46vw, 24vw"
          />
        </div>
      ) : null}
    </div>
  );
}
