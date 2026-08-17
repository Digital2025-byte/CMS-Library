"use client";

import { useState } from "react";
import { CaretDownIcon, CaretUpIcon, TrashIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export function InspectorSection({ title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-200">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between bg-100 px-4 py-2.5 text-start hover:bg-200"
      >
        <span className={`${typography.caption} font-semibold text-main`}>
          {title}
        </span>
        {open ? (
          <CaretUpIcon className="h-4 w-4 shrink-0 text-700" weight="bold" aria-hidden />
        ) : (
          <CaretDownIcon className="h-4 w-4 shrink-0 text-700" weight="bold" aria-hidden />
        )}
      </button>
      {open ? (
        <div className="flex flex-col gap-3 bg-white px-4 py-3">{children}</div>
      ) : null}
    </section>
  );
}

export function InspectorField({
  id,
  label,
  value,
  onChange,
  multiline = false,
}) {
  const inputClass = `${typography.caption} w-full cursor-text rounded-sm border border-200 bg-white px-2.5 py-2 text-foreground outline-none focus:border-800`;

  return (
    <label className="flex flex-col gap-1" htmlFor={id}>
      <span className={`${typography.caption} text-700`}>{label}</span>
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

export function InspectorSwitch({ checked, onChange, label, hint }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3">
      <span className="min-w-0">
        <span className={`${typography.caption} block font-medium text-main`}>
          {label}
        </span>
        {hint ? (
          <span className={`${typography.caption} text-500`}>{hint}</span>
        ) : null}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 cursor-pointer accent-primary-1"
      />
    </label>
  );
}

export function InspectorChoose({ label, name, value, options, onChange }) {
  const items = options.map((option) =>
    typeof option === "string" ? { value: option, label: option } : option
  );

  return (
    <fieldset className="flex flex-col gap-1.5">
      <legend className={`${typography.caption} text-700`}>{label}</legend>
      <div className="flex flex-wrap gap-4">
        {items.map((option) => (
          <label
            key={option.value}
            className={`${typography.caption} flex cursor-pointer items-center gap-2 text-foreground`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 shrink-0 cursor-pointer accent-foreground"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function InspectorSelect({ id, label, value, options, onChange }) {
  return (
    <label className="flex flex-col gap-1" htmlFor={id}>
      <span className={`${typography.caption} text-700`}>{label}</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`${typography.caption} w-full cursor-pointer rounded-sm border border-200 bg-white px-2.5 py-2 text-foreground outline-none focus:border-800`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function InspectorRepeaterItem({
  label,
  open,
  onToggle,
  onRemove,
  children,
}) {
  return (
    <div className="overflow-hidden rounded-md border border-200">
      <div className="flex items-center bg-50">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 px-3 py-2 text-start hover:bg-100"
        >
          {open ? (
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
            className={`${typography.caption} truncate font-medium ${
              open ? "text-primary-1" : "text-main"
            }`}
          >
            {label}
          </span>
        </button>
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          className="cursor-pointer px-2 py-2 text-500 hover:bg-200 hover:text-main"
        >
          <TrashIcon size={14} weight="regular" aria-hidden />
        </button>
      </div>
      {open ? (
        <div className="flex flex-col gap-3 border-t border-200 bg-white px-3 py-3">
          {children}
        </div>
      ) : null}
    </div>
  );
}
