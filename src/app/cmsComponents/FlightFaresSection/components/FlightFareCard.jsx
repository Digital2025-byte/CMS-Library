import Image from "next/image";

export default function FlightFareCard({
  item,
  className = "",
  size,
  lang = "en",
  imageIndex = 0,
}) {
  if (!item) {
    return null;
  }

  const sizeClass =
    size === "TALL" ? "md:row-span-2" : size === "WIDE" ? "md:col-span-2" : "";
  const images = item?.images || [];
  const safeIndex = Math.min(imageIndex, Math.max(0, images.length - 1));
  const image = images[safeIndex] || images[0];
  const isArabic = lang === "ar";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl",
        "bg-slate-100 shadow-sm transition hover:shadow-md",
        sizeClass,
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0">
        {image?.url ? (
          <Image
            src={image.url}
            alt={item?.cityName || image?.alt || ""}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 33vw, 80vw"
          />
        ) : null}
        <div className="absolute bottom-0 left-0 right-0 h-24.25 w-full bg-secondary-2/50 shadow-[0_4px_6px_0_rgba(33,37,41,0.20),0_0_1px_0_rgba(33,37,41,0.32)] blur-2xl" />
      </div>

      <div className="absolute inset-e-3 top-3 z-10">
        <span className="rounded-full bg-secondary-2/25 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
          {isArabic ? "اتجاه واحد" : "One-way"}
        </span>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-4">
        <div className="mb-1 flex items-center gap-2">
          {item.isNew ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary-2/25 px-2 py-1 text-xs font-medium text-white backdrop-blur">
              {isArabic ? "جديد" : "New"} <span aria-hidden="true">★</span>
            </span>
          ) : null}
        </div>

        <h3 className="text-lg font-bold text-primary-3">
          {item.cityName}
          {item.IATACode ? ` (${item.IATACode})` : ""}
        </h3>
        <p className="mt-1 text-sm font-medium text-white/90">
          {isArabic ? "الدرجة الاقتصادية من" : "Economy from"} {item.price}{" "}
          {item.currency}
        </p>
      </div>
    </div>
  );
}
