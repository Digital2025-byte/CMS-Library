"use client";

import { useRef } from "react";
import DrawerHeader from "./components/DrawerHeader";
import DrawerPanel from "./components/DrawerPanel";
import DrawerTrigger from "./components/DrawerTrigger";
import useDrawerDismiss from "./hooks/useDrawerDismiss";

/**
 * Reusable side drawer. Content is passed as children so each
 * component playground can render its own props form.
 *
 * @param {boolean} isOpen
 * @param {() => void} onClose
 * @param {import("react").ReactNode} children
 * @param {string} [title="Props"]
 * @param {"left"|"right"} [side="left"]
 * @param {import("react").RefObject<HTMLElement|null>} [triggerRef]
 * @param {import("react").RefObject<HTMLElement|null>} [panelRef]
 * @param {() => void} [onOpen]
 * @param {string} [titleId]
 * @param {string} [triggerLabel]
 */
export default function Drawer({
  isOpen,
  onClose,
  onOpen,
  children,
  title = "Props",
  side = "left",
  triggerRef,
  panelRef: panelRefProp,
  titleId = "drawer-title",
  triggerLabel = "Edit props",
}) {
  const internalPanelRef = useRef(null);
  const panelRef = panelRefProp ?? internalPanelRef;

  useDrawerDismiss({
    isOpen,
    onClose,
    panelRef,
    triggerRef,
  });

  return (
    <>
      <DrawerTrigger
        triggerRef={triggerRef}
        onClick={onOpen}
        isOpen={isOpen}
        side={side}
        label={triggerLabel}
      />
      <DrawerPanel
        panelRef={panelRef}
        isOpen={isOpen}
        side={side}
        titleId={titleId}
      >
        <DrawerHeader titleId={titleId} title={title} onClose={onClose} />
        <div className="flex-1 overflow-y-auto px-4 py-4">{children}</div>
      </DrawerPanel>
    </>
  );
}

export { default as useDrawer } from "./hooks/useDrawer";
export { default as useDrawerDismiss } from "./hooks/useDrawerDismiss";
