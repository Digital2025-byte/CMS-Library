import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { withCampaignPath } from "@/utils/withCampaignPath";
import { getLegalHref, getLegalIcon } from "../utils/helpers";

export default function LegalInformationCard({
  card,
  lang = "en",
  posParams = "gb",
  cId,
}) {
  const Icon = getLegalIcon(card.icon);
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeftIcon : ArrowRightIcon;
  const href = withCampaignPath(
    getLegalHref(posParams, lang, card.slug),
    cId
  );

  return (
    <article className="flex h-full flex-col rounded-2xl bg-primary-1 p-6 md:p-8">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-50 sm:h-16 sm:w-16">
        <Icon size={36} className="text-primary-1" weight="regular" aria-hidden />
      </div>

      <h3
        className={`${typography.itemTitle} mb-3 font-semibold text-primary-2`}
      >
        {card.title}
      </h3>

      <p
        className={`${typography.itemDescription} mb-6 flex-1 text-50`}
      >
        {card.description}
      </p>

      <Link
        href={href || "#"}
        className={`${typography.button} group mt-auto inline-flex items-center gap-2 text-50 transition-all hover:gap-3`}
      >
        <span>{card.ctaLabel}</span>
        <ArrowIcon
          size={20}
          className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
          aria-hidden
        />
      </Link>
    </article>
  );
}
