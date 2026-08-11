"use client";

import CarouselCardMedia from "./components/CarouselCardMedia";
import CarouselCardPanel from "./components/CarouselCardPanel";
import CarouselCardShell from "./components/CarouselCardShell";
import { getImageSrc, getOriginLabel, getStackLayout } from "./utils/helpers";

export default function CarouselCard({
  IATACode,
  imageUrl,
  numberOfFlightsPerWeek,
  duration,
  cityName,
  description,
  subtitle,
  isActive,
  stackIndex,
  direction,
  isLeaving,
  isEntering,
  onSelect,
  onDragEnd,
  posParams,
  lang,
}) {
  const { hidden, baseTransform, safeZIndex } = getStackLayout(stackIndex);
  const originLabel = getOriginLabel(subtitle);
  const src = getImageSrc(imageUrl);

  return (
    <CarouselCardShell
      isActive={isActive}
      hidden={hidden}
      safeZIndex={safeZIndex}
      onSelect={onSelect}
      onDragEnd={onDragEnd}
      isEntering={isEntering}
      isLeaving={isLeaving}
      direction={direction}
      baseTransform={baseTransform}
    >
      <CarouselCardMedia src={src} cityName={cityName} isActive={isActive} />
      <CarouselCardPanel
        cityName={cityName}
        originLabel={originLabel}
        IATACode={IATACode}
        posParams={posParams}
        lang={lang}
        numberOfFlightsPerWeek={numberOfFlightsPerWeek}
        duration={duration}
        description={description}
      />
    </CarouselCardShell>
  );
}
