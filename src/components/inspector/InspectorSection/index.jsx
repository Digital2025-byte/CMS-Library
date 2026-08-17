"use client";

import { useState } from "react";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function InspectorSection({
  title,
  defaultOpen = true,
  children,
}) {
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
