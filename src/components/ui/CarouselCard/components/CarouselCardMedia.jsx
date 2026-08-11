import Image from "next/image";

export default function CarouselCardMedia({ src, cityName, isActive }) {
  return (
    <div className="relative h-full w-full">
      <div className="relative h-full w-full">
        {src ? (
          <Image
            src={src}
            alt={cityName || "Destination"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 680px"
          />
        ) : null}
      </div>
      <div
        className={`absolute inset-0 bg-secondary-2/30 transition-opacity duration-300 ${
          isActive ? "opacity-0" : "opacity-40"
        }`}
      />
    </div>
  );
}
