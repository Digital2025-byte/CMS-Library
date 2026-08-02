import AccordionImagesToggle from "./AccordionImagesToggle";
import { typography } from "@/styles/typography";

export default function AccordionImagesItem({
  item,
  isOpen,
  onToggle,
  itemRef,
}) {
  return (
    <div
      ref={itemRef}
      className="w-full cursor-pointer overflow-hidden border-b border-200 bg-background py-3 transition-all duration-700 ease-in-out sm:py-4 [&_*]:cursor-pointer"
      onClick={onToggle}
    >
      <div
        className={`flex items-start gap-3 p-3 sm:gap-4 sm:p-4 ${
          isOpen ? "opacity-100" : "opacity-50"
        }`}
      >
        <div className="min-w-0 flex-1">
          <h3
            className={`${typography.itemTitle} mb-2 font-medium leading-snug ${
              isOpen ? "text-primary-1" : "text-800"
            }`}
          >
            {item.title}
          </h3>

          <div
            className={`grid transition-all duration-700 ease-in-out ${
              isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p
                className={`${typography.itemDescription} pt-2 leading-relaxed text-700`}
              >
                {item.content}
              </p>
            </div>
          </div>
        </div>

        <AccordionImagesToggle isOpen={isOpen} onToggle={onToggle} />
      </div>
    </div>
  );
}
