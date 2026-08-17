"use client";

import { useState } from "react";
import { PlusIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import {
  InspectorChoose,
  InspectorField,
  InspectorRepeaterItem,
  InspectorSection,
  InspectorSelect,
} from "@/components/ui/Inspector";
import {
  INTERNAL_PAGES,
  isInternalPage,
  resolveEditorLink,
} from "@/components/demo/internalPages";

export default function AccordionWithContentContentForm({ content, onChange }) {
  const [openIndexes, setOpenIndexes] = useState(() => new Set([0]));
  const resolvedLink = resolveEditorLink(content.buttonHref);
  const linkType = content.buttonLinkType || resolvedLink.type;

  const updateField = (key, value) => {
    onChange({ ...content, [key]: value });
  };

  const setLinkType = (type) => {
    if (type === "internal") {
      onChange({
        ...content,
        buttonLinkType: "internal",
        buttonHref: isInternalPage(content.buttonHref)
          ? content.buttonHref
          : INTERNAL_PAGES[0]?.href || "/",
      });
      return;
    }

    onChange({
      ...content,
      buttonLinkType: "external",
      buttonHref: isInternalPage(content.buttonHref) ? "" : content.buttonHref,
    });
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
    <div>
      <InspectorSection title="Title">
        <InspectorField
          id="accordion-title"
          label="Title"
          value={content.title}
          onChange={(value) => updateField("title", value)}
        />
        <InspectorField
          id="accordion-description"
          label="Description"
          value={content.description}
          onChange={(value) => updateField("description", value)}
          multiline
        />
      </InspectorSection>

      <InspectorSection title="Button">
        <InspectorField
          id="accordion-button-label"
          label="Label"
          value={content.buttonLabel}
          onChange={(value) => updateField("buttonLabel", value)}
        />
        <InspectorChoose
          label="Link type"
          name="accordion-link-type"
          value={linkType}
          options={[
            { value: "internal", label: "Internal" },
            { value: "external", label: "External" },
          ]}
          onChange={setLinkType}
        />
        {linkType === "internal" ? (
          <InspectorSelect
            id="accordion-button-page"
            label="Page"
            value={
              isInternalPage(content.buttonHref)
                ? content.buttonHref
                : INTERNAL_PAGES[0]?.href || "/"
            }
            options={INTERNAL_PAGES.map((page) => ({
              value: page.href,
              label: page.label,
            }))}
            onChange={(value) =>
              onChange({
                ...content,
                buttonLinkType: "internal",
                buttonHref: value,
              })
            }
          />
        ) : (
          <InspectorField
            id="accordion-button-href"
            label="URL"
            value={isInternalPage(content.buttonHref) ? "" : content.buttonHref}
            onChange={(value) =>
              onChange({
                ...content,
                buttonLinkType: "external",
                buttonHref: value,
              })
            }
          />
        )}
      </InspectorSection>

      <InspectorSection title="Items">
        {content.items.map((item, index) => {
          const itemLabel = `Item ${index + 1}`;

          return (
            <InspectorRepeaterItem
              key={index}
              label={itemLabel}
              open={openIndexes.has(index)}
              onToggle={() => toggleItem(index)}
              onRemove={() => removeItem(index)}
            >
              <InspectorField
                id={`accordion-item-${index}-title`}
                label="Title"
                value={item.title}
                onChange={(value) => updateItem(index, "title", value)}
              />
              <InspectorField
                id={`accordion-item-${index}-description`}
                label="Description"
                value={item.description}
                onChange={(value) => updateItem(index, "description", value)}
                multiline
              />
            </InspectorRepeaterItem>
          );
        })}

        <button
          type="button"
          onClick={addItem}
          className={`${typography.caption} inline-flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-md border border-200 bg-50 py-2 font-medium text-700 hover:bg-100 hover:text-main`}
        >
          <PlusIcon size={14} weight="bold" aria-hidden />
          Add Item
        </button>
      </InspectorSection>
    </div>
  );
}
