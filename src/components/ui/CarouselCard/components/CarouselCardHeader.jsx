import Button from "@/components/ui/Button";
import { typography } from "@/styles/typography";
import { getFlightsHref } from "../utils/helpers";

export default function CarouselCardHeader({
  cityName,
  originLabel,
  IATACode,
  posParams,
  lang,
}) {
  return (
    <div className="flex flex-none items-center justify-between gap-2 overflow-visible px-3 pt-2.5 pb-1 sm:px-4 sm:pt-3 sm:pb-1.5">
      <div className="flex min-w-0 flex-1 items-center gap-2 pe-2">
        <h3
          className={`${typography.itemTitle} min-w-0 truncate text-start font-semibold text-50`}
        >
          {cityName}
        </h3>
        <span
          className={`${typography.caption} -mt-1 inline-flex max-w-[min(100%,11rem)] shrink-0 items-center truncate rounded-full bg-900/30 px-2.5 py-1 font-medium text-50 sm:max-w-[14rem]`}
        >
          {originLabel}
        </span>
      </div>
      <Button
        href={getFlightsHref(posParams, lang, IATACode)}
        label={lang === "ar" ? "تحقق من الرحلات" : "Check flights"}
        className="pointer-events-auto relative z-20 shrink-0 -translate-y-1/2 !border-main !bg-main !p-3    hover:text-main "
        onClick={(event) => event.stopPropagation()}
        variant="primary"
      />
    </div>
  );
}
