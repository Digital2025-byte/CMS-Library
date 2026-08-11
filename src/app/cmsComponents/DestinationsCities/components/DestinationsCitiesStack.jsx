"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CarouselCard from "@/components/ui/CarouselCard";

export default function DestinationsCitiesStack({
  cities = [],
  lang = "en",
  posParams = "gb",
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
                duration={card.duration}
                title={card.title}
                subtitle={card.subtitle}
                flights={card.flights}
                versionCard={card.versionCard}
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
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
