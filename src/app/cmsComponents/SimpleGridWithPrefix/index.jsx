"use client";

import SimpleGrid from "./components/SimpleGrid";
import SimpleGridHeader from "./components/SimpleGridHeader";
import { getSimpleGridWithPrefixContent } from "./utils/helpers";
import { DEFAULT_SIMPLE_GRID_STYLE } from "./utils/style";

const SimpleGridWithPrefix = ({
  lang = "en",
  data,
  cId,
  showTitle = DEFAULT_SIMPLE_GRID_STYLE.showTitle,
  showDescription = DEFAULT_SIMPLE_GRID_STYLE.showDescription,
  showIcon = DEFAULT_SIMPLE_GRID_STYLE.showIcon,
  showPrefix = DEFAULT_SIMPLE_GRID_STYLE.showPrefix,
  showChip = DEFAULT_SIMPLE_GRID_STYLE.showChip,
  showUserName = DEFAULT_SIMPLE_GRID_STYLE.showUserName,
  showArrow = DEFAULT_SIMPLE_GRID_STYLE.showArrow,
  showCardBg = DEFAULT_SIMPLE_GRID_STYLE.showCardBg,
  titleAlign = DEFAULT_SIMPLE_GRID_STYLE.titleAlign,
  titleColor = DEFAULT_SIMPLE_GRID_STYLE.titleColor,
  descriptionColor = DEFAULT_SIMPLE_GRID_STYLE.descriptionColor,
  cardRadius = DEFAULT_SIMPLE_GRID_STYLE.cardRadius,
  cardGap = DEFAULT_SIMPLE_GRID_STYLE.cardGap,
  cardBg = DEFAULT_SIMPLE_GRID_STYLE.cardBg,
  nameColor = DEFAULT_SIMPLE_GRID_STYLE.nameColor,
  chipBg = DEFAULT_SIMPLE_GRID_STYLE.chipBg,
  chipText = DEFAULT_SIMPLE_GRID_STYLE.chipText,
  userNameColor = DEFAULT_SIMPLE_GRID_STYLE.userNameColor,
  arrowColor = DEFAULT_SIMPLE_GRID_STYLE.arrowColor,
}) => {
  const { title, description, prefix, chip, items, hasContent } =
    getSimpleGridWithPrefixContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <>
      <SimpleGridHeader
        title={title}
        description={description}
        showTitle={showTitle}
        showDescription={showDescription}
        titleAlign={titleAlign}
        titleColor={titleColor}
        descriptionColor={descriptionColor}
      />
      <SimpleGrid
        items={items}
        prefix={prefix}
        chip={chip}
        lang={lang}
        cId={cId}
        showIcon={showIcon}
        showPrefix={showPrefix}
        showChip={showChip}
        showUserName={showUserName}
        showArrow={showArrow}
        showCardBg={showCardBg}
        cardRadius={cardRadius}
        cardGap={cardGap}
        cardBg={cardBg}
        nameColor={nameColor}
        chipBg={chipBg}
        chipText={chipText}
        userNameColor={userNameColor}
        arrowColor={arrowColor}
      />
    </>
  );
};

export default SimpleGridWithPrefix;
