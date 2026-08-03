import { ArrowUpLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { withCampaignPath } from "../utils/withCampaignPath";

export default function SimpleGridCard({
  lang = "en",
  item,
  prefix = "",
  cId,
}) {
  if (!item) {
    return null;
  }

  const { title, link, userName, IconComponent } = item;
  const href = withCampaignPath(link, cId);
  const ArrowIcon = lang === "ar" ? ArrowUpLeftIcon : ArrowUpRightIcon;

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-xl bg-white px-4 py-6 transition-shadow hover:shadow-md"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        {IconComponent ? (
          <IconComponent size={40} weight="fill" className="text-primary-1" />
        ) : null}
      </div>

      <div className="min-w-0 flex-1">
        <h4
          className={`${typography.caption} truncate font-semibold text-secondary-2`}
        >
          {prefix ? `${prefix} ` : ""}
          {title}
        </h4>
        {userName ? (
          <p className="text-xs text-icon">{userName}</p>
        ) : null}
      </div>

      <ArrowIcon size={20} className="shrink-0 text-primary-1" />
    </a>
  );
}
