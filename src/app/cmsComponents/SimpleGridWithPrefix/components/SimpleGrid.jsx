import {
  CARD_GAP_CLASS,
  DEFAULT_SIMPLE_GRID_STYLE,
} from "../utils/style";
import SimpleGridCard from "./SimpleGridCard";

export default function SimpleGrid({
  items,
  prefix,
  chip,
  lang,
  cId,
  showIcon = DEFAULT_SIMPLE_GRID_STYLE.showIcon,
  showPrefix = DEFAULT_SIMPLE_GRID_STYLE.showPrefix,
  showChip = DEFAULT_SIMPLE_GRID_STYLE.showChip,
  showUserName = DEFAULT_SIMPLE_GRID_STYLE.showUserName,
  showArrow = DEFAULT_SIMPLE_GRID_STYLE.showArrow,
  showCardBg = DEFAULT_SIMPLE_GRID_STYLE.showCardBg,
  cardRadius = DEFAULT_SIMPLE_GRID_STYLE.cardRadius,
  cardGap = DEFAULT_SIMPLE_GRID_STYLE.cardGap,
  cardBg = DEFAULT_SIMPLE_GRID_STYLE.cardBg,
  nameColor = DEFAULT_SIMPLE_GRID_STYLE.nameColor,
  chipBg = DEFAULT_SIMPLE_GRID_STYLE.chipBg,
  chipText = DEFAULT_SIMPLE_GRID_STYLE.chipText,
  userNameColor = DEFAULT_SIMPLE_GRID_STYLE.userNameColor,
  arrowColor = DEFAULT_SIMPLE_GRID_STYLE.arrowColor,
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const gapClass = CARD_GAP_CLASS[cardGap] ?? CARD_GAP_CLASS.default;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gapClass}`}>
      {items.map((item, index) => (
        <SimpleGridCard
          key={`${item.title}-${item.userName}-${index}`}
          item={item}
          prefix={prefix}
          chip={item.chip || chip}
          lang={lang}
          cId={cId}
          showIcon={showIcon}
          showPrefix={showPrefix}
          showChip={showChip}
          showUserName={showUserName}
          showArrow={showArrow}
          showCardBg={showCardBg}
          cardRadius={cardRadius}
          cardBg={cardBg}
          nameColor={nameColor}
          chipBg={chipBg}
          chipText={chipText}
          userNameColor={userNameColor}
          arrowColor={arrowColor}
        />
      ))}
    </div>
  );
}
