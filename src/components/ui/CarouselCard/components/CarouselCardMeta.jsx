import { CalendarCheckIcon, ClockIcon, StarIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function CarouselCardMeta({
  numberOfFlightsPerWeek,
  duration,
  lang,
  description,
}) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-hidden px-3 pb-2 sm:gap-1.5 sm:px-4 sm:pb-2.5">
      <div
        className={`${typography.caption} flex min-h-0 w-full flex-none flex-nowrap items-center gap-x-2 overflow-x-auto overscroll-x-contain font-medium text-50 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        <span className="inline-flex shrink-0 items-center gap-1">
          <StarIcon
            weight="fill"
            className="h-3 w-3 shrink-0 text-secondary sm:h-3.5 sm:w-3.5"
          />
          New
        </span>
        <span className="shrink-0 text-black" aria-hidden>
          |
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
          <CalendarCheckIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
          {numberOfFlightsPerWeek}{" "}
          {lang === "ar" ? "رحلات في الأسبوع" : "Flights per week"}
        </span>
        <span className="shrink-0 text-black" aria-hidden>
          |
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap">
          <ClockIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
          {`${lang === "ar" ? "مدة الرحلة" : "Duration"}: ${duration}`}
        </span>
      </div>

      <p
        className={`${typography.caption} min-h-0 flex-1 overflow-hidden text-start leading-snug font-light text-50 [overflow-wrap:anywhere] line-clamp-2 sm:line-clamp-3 lg:line-clamp-4`}
      >
        {description}
      </p>
    </div>
  );
}
