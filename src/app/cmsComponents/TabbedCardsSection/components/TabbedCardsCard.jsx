import Image from "next/image";
import { typography } from "@/styles/typography";

export default function TabbedCardsCard({ card }) {
  if (!card) {
    return null;
  }

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-primary-1 lg:overflow-visible lg:rounded-none lg:bg-transparent">
      <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:h-62.5 lg:rounded-3xl">
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

      <div className="flex flex-1 flex-col gap-2 px-5 py-6 text-center sm:px-6 sm:py-7 lg:gap-1 lg:px-0 lg:py-4">
        {card.title ? (
          <h3
            className={`${typography.itemTitle} font-semibold text-white lg:font-medium lg:text-secondary-2`}
          >
            {card.title}
          </h3>
        ) : null}
        {card.description ? (
          <p
            className={`${typography.itemDescription} font-normal leading-relaxed text-white/90 lg:text-600`}
          >
            {card.description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
