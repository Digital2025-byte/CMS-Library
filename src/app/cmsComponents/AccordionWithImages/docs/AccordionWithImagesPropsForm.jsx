import { typography } from "@/styles/typography";

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

export default function AccordionWithImagesPropsForm({ flags, toggle }) {
  return (
    <fieldset>
      <legend className="sr-only">AccordionWithImages props</legend>
      <div className="flex flex-col gap-2">
        <Checkbox
          checked={flags.showTitleDescription}
          onChange={() => toggle("showTitleDescription")}
          label="showTitleDescription"
          hint="Section title and description"
        />
        <Checkbox
          checked={flags.showImagePanel}
          onChange={() => toggle("showImagePanel")}
          label="showImagePanel"
          hint="Side image that follows the open item"
        />
      </div>
    </fieldset>
  );
}
