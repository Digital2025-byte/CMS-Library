import { typography } from "@/styles/typography";

export const BOOLEAN_OPTIONS = [
  {
    key: "underlineFirstWord",
    label: "underlineFirstWord",
    hint: "Gold underline on the first word of each title",
  },
  {
    key: "blueLayer",
    label: "blueLayer",
    hint: "Teal wash over the photos",
  },
  {
    key: "animate",
    label: "animate",
    hint: "Fade and rise on scroll",
  },
  {
    key: "showExploreButton",
    label: "showExploreButton",
    hint: "CTA under the copy",
  },
  {
    key: "showFirstSection",
    label: "showFirstSection",
    hint: "Leading intro row before the two blocks",
  },
  {
    key: "showExtraImage",
    label: "showExtraImage",
    hint: "Smaller photo overlaid on each image",
  },
  {
    key: "offsetExtraImage",
    label: "extraImagePositions",
    hint: "Offset overlays (bottom corners)",
  },
];

export const BG_OPTIONS = ["bg-50", "bg-100", "bg-200"];

function Checkbox({ checked, onChange, label, hint }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-200 bg-white px-3 py-2.5 hover:border-primary-200">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 shrink-0 accent-primary-1"
      />
      <span>
        <span className={`${typography.body} block font-medium text-main`}>
          {label}
        </span>
        {hint ? (
          <span className={`${typography.caption} text-500`}>{hint}</span>
        ) : null}
      </span>
    </label>
  );
}

export default function DualImageTextPropsForm({
  flags,
  toggle,
  bgColor,
  setBgColor,
}) {
  return (
    <fieldset className="p-4">
      <legend className="sr-only">DualImageText props</legend>
      <div className="flex flex-col gap-2">
        {BOOLEAN_OPTIONS.map((option) => (
          <Checkbox
            key={option.key}
            checked={flags[option.key]}
            onChange={() => toggle(option.key)}
            label={option.label}
            hint={option.hint}
          />
        ))}
      </div>

      <p className={`${typography.caption} mt-4 mb-2 font-medium text-700`}>
        bgColor
      </p>
      <div className="flex flex-wrap gap-2">
        {BG_OPTIONS.map((value) => (
          <label
            key={value}
            className={`cursor-pointer rounded-full border px-3 py-1 ${typography.caption} ${
              bgColor === value
                ? "border-primary-1 bg-primary-1 text-50"
                : "border-200 bg-white text-700"
            }`}
          >
            <input
              type="radio"
              name="bgColor"
              value={value}
              checked={bgColor === value}
              onChange={() => setBgColor(value)}
              className="sr-only"
            />
            {value}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
