import DualImageTextBlock from "./DualImageTextBlock";

export default function DualImageTextContent({
  items = [],
  blueLayer = false,
  underlineFirstWord = false,
}) {
  const first = items[0] || {};
  const second = items[1] || {};

  return (
    <div className="flex w-full flex-col gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
      <DualImageTextBlock
        item={first}
        reverse={false}
        priority
        blueLayer={blueLayer}
        underlineFirstWord={underlineFirstWord}
      />
      <DualImageTextBlock
        item={second}
        reverse
        blueLayer={blueLayer}
        underlineFirstWord={underlineFirstWord}
      />
    </div>
  );
}
