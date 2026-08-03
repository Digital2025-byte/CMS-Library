import Image from "next/image";

export default function HeaderWithThreeImageSlice({
  width,
  overlapStyle,
  clipPath,
  desktopImage,
  mobileImage,
  priority = false,
}) {
  if (!desktopImage?.fileUrl && !mobileImage?.fileUrl) {
    return (
      <div
        style={{ width, ...overlapStyle }}
        className="relative h-[51vh] shrink-0"
      />
    );
  }

  const desktopSrc = desktopImage?.fileUrl
    ? encodeURI(desktopImage.fileUrl)
    : "";
  const mobileSrc = mobileImage?.fileUrl
    ? encodeURI(mobileImage.fileUrl)
    : desktopSrc;

  return (
    <div
      style={{ width, ...overlapStyle }}
      className="relative h-[51vh] shrink-0"
    >
      <div className="absolute inset-0 will-change-transform" style={{ clipPath }}>
        {desktopSrc ? (
          <Image
            src={desktopSrc}
            alt={desktopImage?.alt || "Background image"}
            fill
            priority={priority}
            sizes="50vw"
            className="hidden object-cover lg:block"
            quality={75}
          />
        ) : null}
        {mobileSrc ? (
          <Image
            src={mobileSrc}
            alt={mobileImage?.alt || desktopImage?.alt || "Background image"}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover lg:hidden"
            quality={75}
          />
        ) : null}
      </div>
    </div>
  );
}
