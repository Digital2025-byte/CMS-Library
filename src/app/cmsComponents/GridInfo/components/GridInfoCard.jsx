import { Fragment } from "react";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

function isPhoneNumber(text) {
  if (!text) return false;
  const cleaned = text.replace(/[\s\-\(\)\+\.]/g, "");
  return /^\d{7,}$/.test(cleaned);
}

function isEmail(text) {
  if (!text) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim());
}

function renderLine(line) {
  const trimmedLine = line.trim();

  if (isPhoneNumber(trimmedLine)) {
    const phoneNumber = trimmedLine.replace(/[\s\-\(\)]/g, "");
    return (
      <a href={`tel:${phoneNumber}`} className="hover:underline" dir="ltr">
        {trimmedLine}
      </a>
    );
  }

  if (isEmail(trimmedLine)) {
    return (
      <a href={`mailto:${trimmedLine}`} className="hover:underline">
        {trimmedLine}
      </a>
    );
  }

  return <span>{trimmedLine}</span>;
}

function renderLabel(label) {
  if (!label) return null;

  const hasBrTag = /<br\s*\/?>/gi.test(label);

  if (hasBrTag) {
    const lines = label
      .split(/<br\s*\/?>/gi)
      .filter((line) => line.trim() !== "");

    return (
      <div className="flex flex-col gap-1.5">
        {lines.map((line, index) => (
          <Fragment key={index}>{renderLine(line)}</Fragment>
        ))}
      </div>
    );
  }

  return renderLine(label);
}

const iconClassName = "mt-0.5 size-5 shrink-0 text-primary-2";

export default function GridInfoCard({ item, lang = "en" }) {
  if (!item) {
    return null;
  }

  const contactInfo = [
    {
      icon: <MapPinIcon className={iconClassName} />,
      label: item.address,
      isMultiLine: true,
    },
    {
      icon: (
        <PhoneIcon
          className={`${iconClassName} ${lang === "ar" ? "-scale-x-100" : ""}`}
        />
      ),
      label: item.phone,
    },
    {
      icon: <EnvelopeIcon className={iconClassName} />,
      label: item.email,
    },
    {
      icon: <ClockIcon className={iconClassName} />,
      label: item.workingHoursText,
      isMultiLine: true,
    },
  ].filter((info) => info.label);

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-sm">
      {item.name ? (
        <h3 className={`${typography.itemTitle} font-medium text-main`}>
          {item.name}
        </h3>
      ) : null}

      {contactInfo.map((contactItem, index) => {
        const hasMultiLine =
          contactItem.isMultiLine ||
          /<br\s*\/?>/gi.test(contactItem.label || "");

        return (
          <div
            key={index}
            className={`${typography.caption} flex gap-2 text-secondary-2 ${
              hasMultiLine ? "items-start" : "items-center"
            }`}
          >
            {contactItem.icon}
            {renderLabel(contactItem.label)}
          </div>
        );
      })}
    </div>
  );
}
