import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import CityInfoCard from "./CityInfoCard";

export default function HeaderWithCityInfoPanel({
  lang = "en",
  title,
  countryName,
  weatherTitle,
  description,
  weather,
  localTime,
  duration,
  numberOfFlightPerWeek,
  nextFlight,
  labels,
  backgroundImage,
  hasCityCard = false,
  showTitleDescription = true,
  showCityCard = true,
}) {
  const isRtl = lang === "ar";

  return (
    <CustomBackgroundImage
      imageUrl={backgroundImage}
      className="min-h-[75vh]"
      transition={{ duration: 5, ease: "easeInOut" }}
      specialGradient
      lang={lang}
    >
      <section
        className="relative flex min-h-[75vh] w-full items-end"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <PageContentContainer className="w-full pb-40 pt-20 lg:pb-16 lg:pt-28">
          <div className="flex w-full flex-col justify-between gap-10 md:flex-row md:items-center md:gap-8">
            {showTitleDescription ? (
              <div className="flex max-w-xl flex-col justify-end">
                {title ? (
                  <h1
                    className={`${typography.sectionTitle} font-semibold leading-tight text-white`}
                  >
                    {title}
                  </h1>
                ) : null}
                {countryName ? (
                  <p
                    className={`${typography.sectionDescription} mt-2 font-normal text-white`}
                  >
                    {countryName}
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="hidden md:block" />
            )}

            {showCityCard && hasCityCard ? (
              <div className="hidden shrink-0 items-end justify-start md:flex md:justify-end">
                <CityInfoCard
                  lang={lang}
                  weatherTitle={weatherTitle}
                  description={description}
                  weather={weather}
                  localTime={localTime}
                  duration={duration}
                  numberOfFlightPerWeek={numberOfFlightPerWeek}
                  nextFlight={nextFlight}
                  labels={labels}
                />
              </div>
            ) : null}
          </div>
        </PageContentContainer>
      </section>
    </CustomBackgroundImage>
  );
}
