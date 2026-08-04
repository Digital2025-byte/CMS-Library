import Image from "next/image";
import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function ServiceCard({ service, isRtl = false }) {
  if (!service) {
    return null;
  }

  const { title, description, imageUrl, imageAlt, href } = service;
  const ArrowIcon = isRtl ? CaretLeftIcon : CaretRightIcon;

  const card = (
    <article className="group flex h-full items-center gap-3 rounded-2xl bg-white px-3 py-4 shadow-sm transition  sm:gap-4 sm:px-4 sm:py-5">
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20">
        <span
          className="absolute inset-[6%] rounded-[42%_58%_48%_52%/48%_42%_58%_52%] bg-[#EEF4F7]"
          aria-hidden
        />
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt || title || ""}
            fill
            className="relative z-10 object-contain object-center"
            sizes="80px"
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        {title ? (
          <h3
            className={`${typography.itemTitle} font-semibold text-secondary-2`}
          >
            {title}
          </h3>
        ) : null}

        {description ? (
          <p
            className={`${typography.caption} mt-1 line-clamp-3 leading-relaxed text-icon`}
          >
            {description}
          </p>
        ) : null}
      </div>

      <ArrowIcon
        size={18}
        weight="bold"
        className="shrink-0 text-icon transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
        aria-hidden
      />
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
