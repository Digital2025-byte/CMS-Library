import CustomCard from "@/components/ui/CustomCard";

export default function PhotoTileGridCards({
  lang = "en",
  destinations = [],
  cId,
}) {
  if (!destinations.length) {
    return null;
  }

  return (
    <div className="mt-4 grid w-full grid-cols-1 gap-4 py-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
      {destinations.map((card) => (
        <CustomCard
          key={`${card.cityName}-${card.iataCode}-${card.imageUrl}`}
          ImageUrl={card.imageUrl}
          IATACode={card.iataCode}
          CityName={card.cityName}
          CountryName={card.countryName}
          TakeUrl={card.takeATripUrl}
          discoverLabel={card.discoverLabel}
          lang={lang}
          cId={cId}
        />
      ))}
    </div>
  );
}
