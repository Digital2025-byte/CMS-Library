"use client";

import { useState } from "react";
import { CaretDownIcon, CaretUpIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
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

function SectionLabel({ children }) {
  return (
    <p className={`${typography.caption} font-medium text-700`}>{children}</p>
  );
}

export default function AccordionWithContentContentForm({ content, onChange }) {
  const [openIndexes, setOpenIndexes] = useState(() => new Set([0]));

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

  const toggleItem = (index) => {
    setOpenIndexes((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const addItem = () => {
    const nextIndex = content.items.length;
    onChange({
      ...content,
      items: [...content.items, { title: "", description: "" }],
    });
    setOpenIndexes((current) => new Set(current).add(nextIndex));
  };

  const removeItem = (index) => {
    onChange({
      ...content,
      items: content.items.filter((_, itemIndex) => itemIndex !== index),
    });
    setOpenIndexes((current) => {
      const next = new Set();
      current.forEach((itemIndex) => {
        if (itemIndex < index) next.add(itemIndex);
        if (itemIndex > index) next.add(itemIndex - 1);
      });
      return next;
    });
  };

  return (
    <fieldset className="flex flex-col gap-6">
      <legend className="sr-only">AccordionWithContent content</legend>

      <div className="flex flex-col gap-3">
        <SectionLabel>Section</SectionLabel>
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
      </div>

      <div className="flex flex-col gap-3 border-t border-200 pt-4">
        <SectionLabel>Button</SectionLabel>
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

      <div className="flex flex-col gap-3 border-t border-200 pt-4">
        <div className="flex items-center justify-between gap-2">
          <SectionLabel>Items</SectionLabel>
          <button
            type="button"
            onClick={addItem}
            className={`${typography.caption} inline-flex items-center gap-1 rounded-lg border border-200 bg-white px-2.5 py-1 font-medium text-700 hover:bg-100 hover:text-main`}
          >
            <PlusIcon size={14} weight="bold" aria-hidden />
            Add item
          </button>
        </div>

        {content.items.map((item, index) => {
          const isOpen = openIndexes.has(index);
          const itemLabel = `Item ${index + 1}`;

          return (
            <div
              key={index}
              className="rounded-lg border border-200 bg-white"
            >
              <div className="flex items-center gap-1 px-2 py-1.5">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex min-w-0 flex-1 items-center gap-2 rounded-md px-1 py-1 text-start hover:bg-100"
                >
                  {isOpen ? (
                    <CaretUpIcon
                      className="h-4 w-4 shrink-0 text-primary-1"
                      weight="bold"
                      aria-hidden
                    />
                  ) : (
                    <CaretDownIcon
                      className="h-4 w-4 shrink-0 text-500"
                      weight="bold"
                      aria-hidden
                    />
                  )}
                  <span
                    className={`${typography.body} truncate font-medium ${
                      isOpen ? "text-primary-1" : "text-main"
                    }`}
                  >
                    {itemLabel}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  aria-label={`Remove ${itemLabel}`}
                  className="rounded-md p-1 text-500 hover:bg-200 hover:text-main"
                >
                  <TrashIcon size={16} weight="regular" aria-hidden />
                </button>
              </div>

              {isOpen ? (
                <div className="flex flex-col gap-3 border-t border-200 px-3 py-3">
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
                    onChange={(value) =>
                      updateItem(index, "description", value)
                    }
                    multiline
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}
