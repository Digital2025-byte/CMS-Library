import { PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

function Field({ id, label, value, onChange, multiline = false }) {
  const inputClass = `${typography.body} w-full rounded-lg border border-200 bg-white px-3 py-2 text-main outline-none focus:border-primary-1`;

  return (
    <label className="flex flex-col gap-1" htmlFor={id}>
      <span className={`${typography.caption} font-medium text-700`}>
        {label}
      </span>
      {multiline ? (
        <textarea
          id={id}
          rows={3}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClass} resize-y`}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={inputClass}
        />
      )}
    </label>
  );
}

export default function AccordionWithContentContentForm({ content, onChange }) {
  const updateField = (key, value) => {
    onChange({ ...content, [key]: value });
  };

  const updateItem = (index, key, value) => {
    onChange({
      ...content,
      items: content.items.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [key]: value } : item
      ),
    });
  };

  const addItem = () => {
    onChange({
      ...content,
      items: [...content.items, { title: "", description: "" }],
    });
  };

  const removeItem = (index) => {
    onChange({
      ...content,
      items: content.items.filter((_, itemIndex) => itemIndex !== index),
    });
  };

  return (
    <fieldset className="flex flex-col gap-5">
      <legend className="sr-only">AccordionWithContent content</legend>

      <div className="flex flex-col gap-3">
        <Field
          id="accordion-title"
          label="title"
          value={content.title}
          onChange={(value) => updateField("title", value)}
        />
        <Field
          id="accordion-description"
          label="description"
          value={content.description}
          onChange={(value) => updateField("description", value)}
          multiline
        />
        <Field
          id="accordion-button-label"
          label="buttonLabel"
          value={content.buttonLabel}
          onChange={(value) => updateField("buttonLabel", value)}
        />
        <Field
          id="accordion-button-href"
          label="buttonHref"
          value={content.buttonHref}
          onChange={(value) => updateField("buttonHref", value)}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <p className={`${typography.caption} font-medium text-700`}>items</p>
          <button
            type="button"
            onClick={addItem}
            className={`${typography.caption} inline-flex items-center gap-1 rounded-full border border-200 bg-white px-2.5 py-1 font-medium text-700 hover:border-primary-200 hover:text-main`}
          >
            <PlusIcon size={14} weight="bold" aria-hidden />
            Add item
          </button>
        </div>

        {content.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg border border-200 bg-white p-3"
          >
            <div className="flex items-center justify-between gap-2">
              <p className={`${typography.caption} font-medium text-main`}>
                Item {index + 1}
              </p>
              <button
                type="button"
                onClick={() => removeItem(index)}
                aria-label={`Remove item ${index + 1}`}
                className="rounded-md p-1 text-500 hover:bg-200 hover:text-main"
              >
                <TrashIcon size={16} weight="regular" aria-hidden />
              </button>
            </div>
            <Field
              id={`accordion-item-${index}-title`}
              label="title"
              value={item.title}
              onChange={(value) => updateItem(index, "title", value)}
            />
            <Field
              id={`accordion-item-${index}-description`}
              label="description"
              value={item.description}
              onChange={(value) => updateItem(index, "description", value)}
              multiline
            />
          </div>
        ))}
      </div>
    </fieldset>
  );
}
