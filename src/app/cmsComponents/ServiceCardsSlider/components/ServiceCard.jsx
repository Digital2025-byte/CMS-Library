import Image from "next/image";
import Link from "next/link";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { isUsableImageSrc } from "../utils/helpers";
import {
  CARD_PADDING_CLASS,
  CARD_RADIUS_CLASS,
  DEFAULT_SERVICE_CARDS_STYLE,
} from "../utils/style";

export default function ServiceCard({
  service,
  isRtl = false,
  showItemTitle = true,
  showItemDescription = true,
  showIcon = true,
  showArrow = true,
  cardBg = DEFAULT_SERVICE_CARDS_STYLE.cardBg,
  cardRadius = DEFAULT_SERVICE_CARDS_STYLE.cardRadius,
  cardPadding = DEFAULT_SERVICE_CARDS_STYLE.cardPadding,
  iconBg,
  itemTitleColor = DEFAULT_SERVICE_CARDS_STYLE.itemTitleColor,
  itemBodyColor = DEFAULT_SERVICE_CARDS_STYLE.itemBodyColor,
  arrowColor = DEFAULT_SERVICE_CARDS_STYLE.arrowColor,
}) {
  if (!service) {
    return null;
  }

  const { title, description, imageUrl, imageAlt, href } = service;
  const ArrowIcon = isRtl ? CaretLeftIcon : CaretRightIcon;
  const radiusClass = CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.lg;
  const paddingClass =
    CARD_PADDING_CLASS[cardPadding] ?? CARD_PADDING_CLASS.default;
  const canShowImage = showIcon && isUsableImageSrc(imageUrl);

  const card = (
    <article
      className={`group flex h-full items-center gap-3 shadow-sm transition sm:gap-4 ${radiusClass} ${paddingClass}`}
      style={{ backgroundColor: getThemeColorCss(cardBg, "white") }}
    >
      {showIcon ? (
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center sm:h-20 sm:w-20">
          <span
            className="absolute inset-[6%] rounded-[42%_58%_48%_52%/48%_42%_58%_52%]"
            style={{
              backgroundColor: iconBg
                ? getThemeColorCss(iconBg)
                : "#EEF4F7",
            }}
            aria-hidden
          />
          {canShowImage ? (
            <Image
              src={imageUrl}
              alt={imageAlt || title || ""}
              fill
              className="relative z-10 object-contain object-center"
              sizes="80px"
            />
          ) : null}
        </div>
      ) : null}

      <div className="min-w-0 flex-1">
        {showItemTitle && title ? (
          <h3
            className={`${typography.itemTitle} font-semibold`}
            style={{ color: getThemeColorCss(itemTitleColor, "secondary-2") }}
          >
            {title}
          </h3>
        ) : null}

        {showItemDescription && description ? (
          <p
            className={`${typography.caption} mt-1 line-clamp-3 leading-relaxed`}
            style={{ color: getThemeColorCss(itemBodyColor, "icon") }}
          >
            {description}
          </p>
        ) : null}
      </div>

      {showArrow ? (
        <ArrowIcon
          size={18}
          weight="bold"
          className="shrink-0 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
          style={{ color: getThemeColorCss(arrowColor, "icon") }}
          aria-hidden
        />
      ) : null}
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary-1/40 ${radiusClass}`}
      >
        {card}
      </Link>
    );
  }

  return card;
}
