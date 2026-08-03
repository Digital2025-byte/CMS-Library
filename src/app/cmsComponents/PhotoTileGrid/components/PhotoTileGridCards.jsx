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
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-3 lg:gap-8 lg:px-12">
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
