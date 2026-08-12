import { typography } from "@/styles/typography";

const BUTTON_POSITIONS = ["left", "center", "right"];

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

export default function AccordionWithContentPropsForm({
  flags,
  toggle,
  buttonPosition,
  setButtonPosition,
}) {
  return (
    <fieldset className="flex flex-col gap-5">
      <legend className="sr-only">AccordionWithContent props</legend>

      <div className="flex flex-col gap-2">
        <Checkbox
          checked={flags.showTitleDescription}
          onChange={() => toggle("showTitleDescription")}
          label="showTitleDescription"
          hint="Section title and description"
        />
        <Checkbox
          checked={flags.showButton}
          onChange={() => toggle("showButton")}
          label="showButton"
          hint="CTA under the accordion items"
        />
      </div>

      {flags.showButton ? (
        <div>
          <p className={`${typography.caption} mb-2 font-medium text-700`}>
            buttonPosition
          </p>
          <div className="flex flex-wrap gap-2">
            {BUTTON_POSITIONS.map((value) => (
              <label
                key={value}
                className={`cursor-pointer rounded-full border px-3 py-1 ${typography.caption} ${
                  buttonPosition === value
                    ? "border-primary-1 bg-primary-1 text-50"
                    : "border-200 bg-white text-700"
                }`}
              >
                <input
                  type="radio"
                  name="buttonPosition"
                  value={value}
                  checked={buttonPosition === value}
                  onChange={() => setButtonPosition(value)}
                  className="sr-only"
                />
                {value}
              </label>
            ))}
          </div>
        </div>
      ) : null}
    </fieldset>
  );
}
