import { DRAWER_SIDES, DRAWER_WIDTH } from "../utils/constants";

export default function DrawerPanel({
  panelRef,
  isOpen,
  side = "left",
  titleId,
  children,
}) {
  const sideClasses = DRAWER_SIDES[side] ?? DRAWER_SIDES.left;

  return (
    <aside
      ref={panelRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      aria-hidden={!isOpen}
      className={[
        "pointer-events-auto fixed inset-y-0 z-50 flex flex-col bg-50 shadow-xl transition-transform duration-300",
        DRAWER_WIDTH,
        sideClasses.position,
        isOpen ? "translate-x-0" : `pointer-events-none ${sideClasses.closed}`,
      ].join(" ")}
    >
      {children}
    </aside>
  );
}
