import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import ServiceCard from "./ServiceCard";
import {
  CARD_GAP_CLASS,
  DEFAULT_SERVICE_CARDS_STYLE,
  SECTION_PADDING_CLASS,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function ServiceCardsSliderPanel({
  lang = "en",
  title,
  description,
  services = [],
  showTitle = true,
  showDescription = true,
  showItemTitle = true,
  showItemDescription = true,
  showIcon = true,
  showArrow = true,
  sectionBg = DEFAULT_SERVICE_CARDS_STYLE.sectionBg,
  sectionPadding = DEFAULT_SERVICE_CARDS_STYLE.sectionPadding,
  titleAlign = DEFAULT_SERVICE_CARDS_STYLE.titleAlign,
  titleColor = DEFAULT_SERVICE_CARDS_STYLE.titleColor,
  descriptionColor = DEFAULT_SERVICE_CARDS_STYLE.descriptionColor,
  cardBg = DEFAULT_SERVICE_CARDS_STYLE.cardBg,
  cardRadius = DEFAULT_SERVICE_CARDS_STYLE.cardRadius,
  cardPadding = DEFAULT_SERVICE_CARDS_STYLE.cardPadding,
  cardGap = DEFAULT_SERVICE_CARDS_STYLE.cardGap,
  iconBg,
  itemTitleColor = DEFAULT_SERVICE_CARDS_STYLE.itemTitleColor,
  itemBodyColor = DEFAULT_SERVICE_CARDS_STYLE.itemBodyColor,
  arrowColor = DEFAULT_SERVICE_CARDS_STYLE.arrowColor,
}) {
  const isRtl = lang === "ar";
  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const paddingClass =
    SECTION_PADDING_CLASS[sectionPadding] ?? SECTION_PADDING_CLASS.default;
  const gapClass = CARD_GAP_CLASS[cardGap] ?? CARD_GAP_CLASS.default;
  const showHeading =
    (showTitle && title) || (showDescription && description);

  if (!services.length && !showHeading) {
    return null;
  }

  return (
    <section
      className={`w-full ${paddingClass}`}
      dir={isRtl ? "rtl" : "ltr"}
      style={{ backgroundColor: getThemeColorCss(sectionBg, "white") }}
    >
      <PageContentContainer>
        {showHeading ? (
          <div className={`mb-6 md:mb-8 ${alignClass}`}>
            {showTitle && title ? (
              <h2
                className={`${typography.sectionTitle} font-semibold`}
                style={{ color: getThemeColorCss(titleColor, "primary-1") }}
              >
                {title}
              </h2>
            ) : null}
            {showDescription && description ? (
              <p
                className={`${typography.sectionDescription} mt-2 ${
                  titleAlign === "center" ? "mx-auto max-w-3xl" : ""
                }`}
                style={{
                  color: getThemeColorCss(descriptionColor, "secondary-2"),
                }}
              >
                {description}
              </p>
            ) : null}
          </div>
        ) : null}

        {services.length ? (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gapClass}`}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={`${service.title}-${index}`}
                service={service}
                isRtl={isRtl}
                showItemTitle={showItemTitle}
                showItemDescription={showItemDescription}
                showIcon={showIcon}
                showArrow={showArrow}
                cardBg={cardBg}
                cardRadius={cardRadius}
                cardPadding={cardPadding}
                iconBg={iconBg}
                itemTitleColor={itemTitleColor}
                itemBodyColor={itemBodyColor}
                arrowColor={arrowColor}
              />
            ))}
          </div>
        ) : null}
      </PageContentContainer>
    </section>
  );
}
