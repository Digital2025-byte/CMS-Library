import { DRAWER_SIDES } from "../utils/constants";

export default function DrawerResizeHandle({ side = "left", onPointerDown }) {
  const sideClasses = DRAWER_SIDES[side] ?? DRAWER_SIDES.left;

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize drawer"
      onPointerDown={onPointerDown}
      className={[
        "absolute inset-y-0 z-10 w-3 touch-none",
        sideClasses.handle,
      ].join(" ")}
    >
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-200" />
    </div>
  );
}
