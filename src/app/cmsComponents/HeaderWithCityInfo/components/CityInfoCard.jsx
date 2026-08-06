import { CalendarCheck, Clock, CloudSun, Timer } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

function Tile({ icon: Icon, title, value }) {
  return (
    <div className="rounded-xl border border-white/20 bg-black/20 p-3.5 sm:p-4">
      <Icon size={22} weight="regular" className="text-white" aria-hidden />
      <p
        className={`${typography.caption} mt-2.5 font-medium leading-none text-white/75`}
      >
        {title}
      </p>
      <p
        className={`${typography.body} mt-1.5 font-medium leading-snug text-white`}
      >
        {value}
      </p>
    </div>
  );
}

/**
 * Frosted glass city card — needs a visible photo behind it (not a solid overlay)
 * for backdrop-blur to read correctly.
 */
export default function CityInfoCard({
  lang = "en",
  weatherTitle,
  description,
  weather,
  localTime,
  duration,
  numberOfFlightPerWeek,
  nextFlight,
  labels = {},
  className = "",
}) {
  const isRtl = lang === "ar";

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className={[
        "relative w-full max-w-[500px] rounded-2xl p-5 text-white sm:p-6",
        "border border-white/25 ",
        "shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        "backdrop-blur-xs ",
        className,
      ].join(" ")}
    >
      <div className="mb-5">
        <h3
          className={`${typography.itemTitle} font-normal leading-none text-white`}
        >
          {weatherTitle || "City Information"}
        </h3>
        {description ? (
          <p
            className={`${typography.caption} mt-1.5 leading-snug text-white/65`}
          >
            {description}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Tile
          icon={CloudSun}
          title={labels.weather}
          value={weather || "N/A"}
        />
        <Tile
          icon={Clock}
          title={labels.localTime}
          value={localTime || "N/A"}
        />
        <Tile
          icon={Timer}
          title={labels.flightDuration}
          value={duration || "N/A"}
        />
        <Tile
          icon={CalendarCheck}
          title={labels.flightsPerWeek}
          value={numberOfFlightPerWeek || "N/A"}
        />
      </div>

      <div className="mt-5 h-px w-full bg-white/20" aria-hidden />

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className={`${typography.body} text-white/70`}>
          {labels.nextFlight}
        </span>
        <span className={`${typography.body} font-medium text-primary-100`}>
          {nextFlight || "N/A"}
        </span>
      </div>
    </div>
  );
}
