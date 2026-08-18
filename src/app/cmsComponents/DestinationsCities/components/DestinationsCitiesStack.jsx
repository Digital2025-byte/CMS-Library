"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CarouselCard from "@/components/ui/CarouselCard";
import {
  CARD_RADIUS_BOTTOM_CLASS,
  CARD_RADIUS_CLASS,
  DEFAULT_DESTINATIONS_CITIES_STYLE,
} from "../utils/style";

export default function DestinationsCitiesStack({
  cities = [],
  lang = "en",
  posParams = "gb",
  showCardImage = DEFAULT_DESTINATIONS_CITIES_STYLE.showCardImage,
  showCity = DEFAULT_DESTINATIONS_CITIES_STYLE.showCity,
  showOrigin = DEFAULT_DESTINATIONS_CITIES_STYLE.showOrigin,
  showNew = DEFAULT_DESTINATIONS_CITIES_STYLE.showNew,
  showFlights = DEFAULT_DESTINATIONS_CITIES_STYLE.showFlights,
  showDuration = DEFAULT_DESTINATIONS_CITIES_STYLE.showDuration,
  showCardDescription = DEFAULT_DESTINATIONS_CITIES_STYLE.showCardDescription,
  showPanel = DEFAULT_DESTINATIONS_CITIES_STYLE.showPanel,
  showInactiveDim = DEFAULT_DESTINATIONS_CITIES_STYLE.showInactiveDim,
  showButton = DEFAULT_DESTINATIONS_CITIES_STYLE.showButton,
  cardRadius = DEFAULT_DESTINATIONS_CITIES_STYLE.cardRadius,
  cityColor = DEFAULT_DESTINATIONS_CITIES_STYLE.cityColor,
  originColor = DEFAULT_DESTINATIONS_CITIES_STYLE.originColor,
  metaColor = DEFAULT_DESTINATIONS_CITIES_STYLE.metaColor,
  bodyColor = DEFAULT_DESTINATIONS_CITIES_STYLE.bodyColor,
  panelBg = DEFAULT_DESTINATIONS_CITIES_STYLE.panelBg,
  overlayColor = DEFAULT_DESTINATIONS_CITIES_STYLE.overlayColor,
  buttonBg = DEFAULT_DESTINATIONS_CITIES_STYLE.buttonBg,
  buttonText = DEFAULT_DESTINATIONS_CITIES_STYLE.buttonText,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [transitionInfo, setTransitionInfo] = useState({ from: 0, to: 0 });
  const totalCards = cities.length;

  const handleDragEnd = (_event, info) => {
    const dragDistance = info.offset.x;

    if (dragDistance > 100) {
      setActiveIndex((prevIndex) => {
        const nextIndex = Math.min(prevIndex + 1, totalCards - 1);
        if (nextIndex === prevIndex) return prevIndex;
        setDirection(1);
        setTransitionInfo({ from: prevIndex, to: nextIndex });
        return nextIndex;
      });
    } else if (dragDistance < -100) {
      setActiveIndex((prevIndex) => {
        const nextIndex = Math.max(prevIndex - 1, 0);
        if (nextIndex === prevIndex) return prevIndex;
        setDirection(-1);
        setTransitionInfo({ from: prevIndex, to: nextIndex });
        return nextIndex;
      });
    }
  };

  if (!totalCards) {
    return null;
  }

  const radiusClass = CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.full;
  const panelRadiusClass =
    CARD_RADIUS_BOTTOM_CLASS[cardRadius] ?? CARD_RADIUS_BOTTOM_CLASS.full;

  return (
    <div className="flex w-full min-w-0 flex-col items-center justify-center gap-6">
      <div className="relative ms-auto h-[400px] w-full min-w-0 max-w-xl sm:max-w-lg lg:h-[550px]">
        <motion.div
          className="relative h-full w-full"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cities.map((card, index) => {
            const stackIndex = index - activeIndex;

            return (
              <CarouselCard
                key={`${card.cityName}-${card.IATACode || index}`}
                IATACode={card.IATACode}
                cityName={card.cityName}
                numberOfFlightsPerWeek={card.numberOfFlightsPerWeek}
                description={card.description}
                imageUrl={card.imageUrl}
                imageAlt={card.imageAlt}
                duration={card.duration}
                title={card.title}
                subtitle={card.subtitle}
                flights={card.flights}
                versionCard={card.versionCard}
                buttonLabel={card.buttonLabel}
                isActive={index === activeIndex}
                stackIndex={stackIndex}
                direction={direction}
                isLeaving={
                  index === transitionInfo.from && index !== activeIndex
                }
                isEntering={
                  index === transitionInfo.to && index === activeIndex
                }
                onSelect={() => {
                  if (index === activeIndex) return;
                  const dir = index > activeIndex ? 1 : -1;
                  setDirection(dir);
                  setTransitionInfo({ from: activeIndex, to: index });
                  setActiveIndex(index);
                }}
                onDragEnd={handleDragEnd}
                posParams={posParams}
                lang={lang}
                showImage={showCardImage}
                showCity={showCity}
                showOrigin={showOrigin}
                showNew={showNew}
                showFlights={showFlights}
                showDuration={showDuration}
                showDescription={showCardDescription}
                showPanel={showPanel}
                showInactiveDim={showInactiveDim}
                showButton={showButton}
                cityColor={cityColor}
                originColor={originColor}
                metaColor={metaColor}
                bodyColor={bodyColor}
                panelBg={panelBg}
                overlayColor={overlayColor}
                buttonBg={buttonBg}
                buttonText={buttonText}
                cardRadiusClass={radiusClass}
                panelRadiusClass={panelRadiusClass}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
