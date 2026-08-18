import {
  CARD_GAP_CLASS,
  DEFAULT_GRID_INFO_STYLE,
} from "../utils/style";
import GridInfoCard from "./GridInfoCard";

export default function GridInfoGrid({
  items,
  lang,
  showName = DEFAULT_GRID_INFO_STYLE.showName,
  showAddress = DEFAULT_GRID_INFO_STYLE.showAddress,
  showPhone = DEFAULT_GRID_INFO_STYLE.showPhone,
  showEmail = DEFAULT_GRID_INFO_STYLE.showEmail,
  showHours = DEFAULT_GRID_INFO_STYLE.showHours,
  showCardBg = DEFAULT_GRID_INFO_STYLE.showCardBg,
  cardRadius = DEFAULT_GRID_INFO_STYLE.cardRadius,
  cardGap = DEFAULT_GRID_INFO_STYLE.cardGap,
  cardBg = DEFAULT_GRID_INFO_STYLE.cardBg,
  nameColor = DEFAULT_GRID_INFO_STYLE.nameColor,
  bodyColor = DEFAULT_GRID_INFO_STYLE.bodyColor,
  iconColor = DEFAULT_GRID_INFO_STYLE.iconColor,
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const gapClass = CARD_GAP_CLASS[cardGap] ?? CARD_GAP_CLASS.default;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${gapClass}`}>
      {items.map((item, index) => (
        <GridInfoCard
          key={`${item.name}-${item.city}-${index}`}
          item={item}
          lang={lang}
          showName={showName}
          showAddress={showAddress}
          showPhone={showPhone}
          showEmail={showEmail}
          showHours={showHours}
          showCardBg={showCardBg}
          cardRadius={cardRadius}
          cardBg={cardBg}
          nameColor={nameColor}
          bodyColor={bodyColor}
          iconColor={iconColor}
        />
      ))}
    </div>
  );
}
