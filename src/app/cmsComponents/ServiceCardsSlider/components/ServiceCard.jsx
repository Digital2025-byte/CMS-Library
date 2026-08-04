import Image from "next/image";
import Link from "next/link";
import {
  Armchair,
  CaretLeftIcon,
  CaretRightIcon,
  Car,
  Suitcase,
} from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

const TITLE_ICONS = {
  Suitcase,
  Armchair,
  Car,
};

export default function ServiceCard({ service, isRtl = false }) {
  if (!service) {
    return null;
  }

  const { title, description, imageUrl, imageAlt, icon, ctaLabel, href } =
    service;
  const TitleIcon = TITLE_ICONS[icon] || null;
  const ArrowIcon = isRtl ? CaretLeftIcon : CaretRightIcon;

  const card = (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgb(1_38_59_/_0.08)] transition hover:shadow-[0_12px_28px_rgb(1_38_59_/_0.12)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EEF4F7]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || title || ""}
            fill
            className="object-contain object-center p-4 sm:p-6"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`${typography.itemTitle} font-bold text-secondary-2`}
          >
            {title}
          </h3>
          {TitleIcon ? (
            <TitleIcon
              size={22}
              weight="regular"
              className="mt-0.5 shrink-0 text-secondary-2"
              aria-hidden
            />
          ) : null}
        </div>

        {description ? (
          <p
            className={`${typography.caption} mt-2 flex-1 leading-relaxed text-icon`}
          >
            {description}
          </p>
        ) : null}

        {ctaLabel ? (
          <div className="mt-4 flex justify-end">
            <span
              className={`${typography.caption} inline-flex items-center gap-1.5 font-medium text-secondary-2`}
            >
              {ctaLabel}
              <ArrowIcon size={14} weight="bold" aria-hidden />
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block h-full outline-none focus-visible:rounded-2xl focus-visible:ring-2 focus-visible:ring-primary-1/40"
      >
        {card}
      </Link>
    );
  }

  return card;
}
