import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import ContactInfoItem from "./ContactInfoItem";
import { getContactFieldLabels, makeMapUrl } from "../utils/helpers";

export default function MapInfoDetails({
  office,
  citiesCount,
  lang = "en",
  isArabic = false,
}) {
  if (!office) {
    return null;
  }

  const labels = getContactFieldLabels(isArabic);
  const contactFields = [
    {
      label: labels.address,
      value: office.address || "",
      icon: MapPinIcon,
      isAddress: true,
    },
    {
      label: labels.phone,
      value: office.phone || "",
      icon: PhoneIcon,
    },
    {
      label: labels.email,
      value: office.email || "",
      icon: EnvelopeIcon,
    },
    {
      label: labels.workingHours,
      value: office.workingHours || "",
      icon: ClockIcon,
    },
  ].filter((field) => field.value);

  const mapUrl = makeMapUrl(office.latitude, office.longitude);
  const officeTitle = office.name || `${office.city} Branch`;

  return (
    <div className="px-0">
      <div className="rounded-2xl bg-surface-1 p-4 pb-10 sm:p-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {citiesCount === 1 && office.city ? (
              <div className="-mb-2 px-2 text-sm text-icon">{office.city}</div>
            ) : null}

            <h3 className="mb-2 px-2 text-xl font-medium text-primary-1">
              {officeTitle}
            </h3>

            {contactFields.map((field) => (
              <ContactInfoItem key={field.label} {...field} lang={lang} />
            ))}
          </div>

          <div className="h-64 min-h-70 w-full overflow-hidden rounded-xl bg-white lg:h-full lg:min-h-90">
            {mapUrl ? (
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${office.country} - ${office.city} office location`}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-surface-1 text-sm text-muted">
                {labels.mapUnavailable}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
