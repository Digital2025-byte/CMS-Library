import TabbedCardsCard from "./TabbedCardsCard";

export default function TabbedCardsGrid({ cards }) {
  if (!Array.isArray(cards) || cards.length === 0) {
    return null;
  }

  return (
    <div
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 [-ms-overflow-style:none] scrollbar-none lg:grid lg:snap-none lg:grid-cols-2 lg:overflow-visible lg:px-0 lg:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden"
      role="list"
    >
      {cards.map((card, index) => (
        <div
          key={`${card.title}-${index}`}
          role="listitem"
          className="w-[82%] shrink-0 snap-start sm:w-[70%] md:w-[55%] lg:w-auto lg:shrink"
        >
          <TabbedCardsCard card={card} />
        </div>
      ))}
    </div>
  );
}
