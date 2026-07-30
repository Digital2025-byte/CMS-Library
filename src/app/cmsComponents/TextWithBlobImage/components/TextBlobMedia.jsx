import Image from "next/image";
import maskAsset from "@/assets/mask.png";
import TextBlobHighlight from "./TextBlobHighlight";

const maskUrl = typeof maskAsset === "string" ? maskAsset : maskAsset.src;

export default function TextBlobMedia({ imageSrc, imageAlt }) {
  if (!imageSrc) {
    return null;
  }

  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[400px] md:w-[400px] lg:h-[440px] lg:w-[440px]">
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            WebkitMaskImage: `url(${maskUrl})`,
            maskImage: `url(${maskUrl})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskMode: "luminance",
            maskMode: "luminance",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            quality={75}
            priority
            className="object-cover object-center"
            sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 440px"
          />
        </div>

        <TextBlobHighlight position="top" />
        <TextBlobHighlight position="bottom" />
      </div>
    </div>
  );
}
