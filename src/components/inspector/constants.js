import { typography } from "@/styles/typography";

export const inspectorControlClass = `${typography.caption} w-full rounded-sm border border-200 bg-white px-2.5 py-2 text-foreground outline-none focus:border-800`;

export const ALIGNMENT_OPTIONS = ["left", "center", "right"];

export const LINK_TYPE_OPTIONS = [
  { value: "internal", label: "Internal" },
  { value: "external", label: "External" },
];
