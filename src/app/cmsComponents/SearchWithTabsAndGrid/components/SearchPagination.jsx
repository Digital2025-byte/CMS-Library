import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

export default function SearchPagination({
  pageCount = 0,
  activePageIndex = 0,
  onPrev,
  onNext,
  onGoToPage,
}) {
  if (pageCount <= 1) {
    return null;
  }

  return (
    <div
      className="z-10 mt-5 flex items-center justify-center gap-6"
      dir="ltr"
      role="navigation"
      aria-label="Results pagination"
    >
      <button
        type="button"
        onClick={onPrev}
        disabled={activePageIndex === 0}
        aria-label="Previous page"
        className="cursor-pointer rounded-full border-2 border-white p-2 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowLeftIcon size={18} weight="bold" className="text-white" />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={`page-dot-${index}`}
            type="button"
            onClick={() => onGoToPage(index)}
            aria-label={`Go to page ${index + 1}`}
            aria-current={index === activePageIndex ? "page" : undefined}
            className={`h-2 rounded-full bg-primary-2 transition-all duration-300 ${
              index === activePageIndex ? "w-5" : "w-2 opacity-40"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={activePageIndex === pageCount - 1}
        aria-label="Next page"
        className="cursor-pointer rounded-full border-2 border-white p-2 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowRightIcon size={18} weight="bold" className="text-white" />
      </button>
    </div>
  );
}
