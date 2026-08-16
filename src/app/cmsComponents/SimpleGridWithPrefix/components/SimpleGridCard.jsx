import Image from "next/image";
import { ArrowUpLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { withCampaignPath } from "../utils/withCampaignPath";

export default function SimpleGridCard({
  lang = "en",
  item,
  prefix = "",
  chip = "",
  cId,
}) {
  if (!item) {
    return null;
  }

  const { title, link, userName, iconSrc } = item;
  const href = withCampaignPath(link, cId);
  const ArrowIcon = lang === "ar" ? ArrowUpLeftIcon : ArrowUpRightIcon;

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-stretch gap-4 rounded-xl bg-white px-4 py-5 no-underline transition-shadow "
    >
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt={title || ""}
            fill
            className="object-contain"
            sizes="48px"
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <h4
          className={`${typography.itemDescription} truncate font-semibold text-secondary-2`}
        >
          {prefix ? `${prefix} ` : ""}
          {title}
        </h4>
        {chip ? (
          <div className="mt-1.5 mb-1.5">
            <span
              className={`${typography.caption} inline-flex rounded-full bg-secondary-100/50 px-2.5 py-0.5 font-medium text-primary-2`}
            >
              {chip}
            </span>
          </div>
        ) : null}
        {userName ? (
          <p className={`${typography.caption} text-icon`}>{userName}</p>
        ) : null}
      </div>

      <ArrowIcon size={20} className="mt-auto shrink-0 text-primary-1" />
    </a>
  );
}
