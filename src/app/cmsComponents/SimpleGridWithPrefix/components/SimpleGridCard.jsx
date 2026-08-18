import Image from "next/image";
import { ArrowUpLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { getThemeColorCss } from "@/styles/themeColors";
import { typography } from "@/styles/typography";
import {
  CARD_RADIUS_CLASS,
  DEFAULT_SIMPLE_GRID_STYLE,
} from "../utils/style";
import { withCampaignPath } from "../utils/withCampaignPath";

export default function SimpleGridCard({
  lang = "en",
  item,
  prefix = "",
  chip = "",
  cId,
  showIcon = DEFAULT_SIMPLE_GRID_STYLE.showIcon,
  showPrefix = DEFAULT_SIMPLE_GRID_STYLE.showPrefix,
  showChip = DEFAULT_SIMPLE_GRID_STYLE.showChip,
  showUserName = DEFAULT_SIMPLE_GRID_STYLE.showUserName,
  showArrow = DEFAULT_SIMPLE_GRID_STYLE.showArrow,
  showCardBg = DEFAULT_SIMPLE_GRID_STYLE.showCardBg,
  cardRadius = DEFAULT_SIMPLE_GRID_STYLE.cardRadius,
  cardBg = DEFAULT_SIMPLE_GRID_STYLE.cardBg,
  nameColor = DEFAULT_SIMPLE_GRID_STYLE.nameColor,
  chipBg = DEFAULT_SIMPLE_GRID_STYLE.chipBg,
  chipText = DEFAULT_SIMPLE_GRID_STYLE.chipText,
  userNameColor = DEFAULT_SIMPLE_GRID_STYLE.userNameColor,
  arrowColor = DEFAULT_SIMPLE_GRID_STYLE.arrowColor,
}) {
  if (!item) {
    return null;
  }

  const { title, link, userName, iconSrc } = item;
  const href = withCampaignPath(link, cId);
  const ArrowIcon = lang === "ar" ? ArrowUpLeftIcon : ArrowUpRightIcon;
  const radiusClass = CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.sm;
  const chipCss = getThemeColorCss(chipBg, "secondary-100");
  const chipTextCss = getThemeColorCss(chipText, "primary-2");
  const showHeading = title || (showPrefix && prefix);

  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-stretch gap-4 ${radiusClass} px-4 py-5 no-underline transition-shadow`}
      style={{
        backgroundColor: showCardBg
          ? getThemeColorCss(cardBg, "white")
          : "transparent",
      }}
    >
      {showIcon ? (
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
      ) : null}

      <div className="min-w-0 flex-1">
        {showHeading ? (
          <h4
            className={`${typography.itemDescription} truncate font-semibold`}
            style={{ color: getThemeColorCss(nameColor, "secondary-2") }}
          >
            {showPrefix && prefix ? `${prefix} ` : ""}
            {title}
          </h4>
        ) : null}
        {showChip && chip ? (
          <div className="mt-1.5 mb-1.5">
            <span
              className={`${typography.caption} inline-flex rounded-full px-2.5 py-0.5 font-medium`}
              style={{
                backgroundColor: `color-mix(in srgb, ${chipCss} 50%, transparent)`,
                color: chipTextCss,
              }}
            >
              {chip}
            </span>
          </div>
        ) : null}
        {showUserName && userName ? (
          <p
            className={typography.caption}
            style={{ color: getThemeColorCss(userNameColor, "icon") }}
          >
            {userName}
          </p>
        ) : null}
      </div>

      {showArrow ? (
        <ArrowIcon
          size={20}
          className="mt-auto shrink-0"
          style={{ color: getThemeColorCss(arrowColor, "primary-1") }}
        />
      ) : null}
    </a>
  );
}
