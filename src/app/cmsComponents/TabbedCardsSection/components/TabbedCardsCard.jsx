import Image from "next/image";
import { typography } from "@/styles/typography";

export default function TabbedCardsCard({ card }) {
  if (!card) {
    return null;
  }

  return (
    <article className="relative flex h-full flex-col justify-start overflow-hidden rounded-2xl lg:overflow-visible lg:rounded-none">
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-2xl sm:h-[220px] lg:h-[250px] lg:rounded-2xl">
        {card.imageSrc ? (
          <Image
            src={card.imageSrc}
            alt={card.imageAlt || card.title || "Card image"}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 85vw, 33vw"
            priority
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-surface-1 text-sm text-muted"
            aria-hidden
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 bg-primary-1 px-4 py-5 text-center sm:px-5 sm:py-6 lg:bg-transparent lg:px-0 lg:py-4">
        {card.title ? (
          <h3
            className={`${typography.itemTitle} font-medium text-white lg:text-secondary-1`}
          >
            {card.title}
          </h3>
        ) : null}
        {card.description ? (
          <p
            className={`${typography.itemDescription} font-normal leading-relaxed text-white/90 lg:text-muted`}
          >
            {card.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
