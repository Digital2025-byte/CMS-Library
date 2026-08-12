import { typography } from "@/styles/typography";

const CONTROLS = [
  {
    key: "showTitle",
    label: "showTitle",
    hint: "Section title above the carousel",
  },
  {
    key: "showArrows",
    label: "showArrows",
    hint: "Previous / next arrows (mobile)",
  },
  {
    key: "showDots",
    label: "showDots",
    hint: "Pagination dots (mobile)",
  },
];

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

export default function CarouselImageText6PropsForm({ flags, toggle }) {
  return (
    <fieldset>
      <legend className="sr-only">CarouselImageText6 props</legend>
      <div className="flex flex-col gap-2">
        {CONTROLS.map(({ key, label, hint }) => (
          <Checkbox
            key={key}
            checked={Boolean(flags[key])}
            onChange={() => toggle(key)}
            label={label}
            hint={hint}
          />
        ))}
      </div>
    </fieldset>
  );
}
