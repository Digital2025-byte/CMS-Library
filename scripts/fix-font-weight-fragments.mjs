/**
 * Wrap adjacent InspectorColor + InspectorFontWeight pairs in fragments
 * when they appear as ternary children without a parent.
 * Run: node scripts/fix-font-weight-fragments.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../src/app/cmsComponents");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function fixFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  if (!src.includes("InspectorFontWeight")) return false;

  // Pattern: ternary with two sibling components (Color then FontWeight)
  // {cond ? (
  //   <InspectorColor ... />
  //   <InspectorFontWeight ... />
  // ) : null}

  const re =
    /(\?\s*\(\s*)\n(\s*)(<InspectorColor[\s\S]*?\/>)\s*\n(\s*)(<InspectorFontWeight[\s\S]*?\/>)\s*\n(\s*)(\) :)/g;

  let changed = false;
  const next = src.replace(
    re,
    (match, open, indentColor, colorBlock, indentWeight, weightBlock, indentClose, close) => {
      changed = true;
      return `${open}\n${indentColor}<>\n${indentColor}${colorBlock}\n${indentWeight}${weightBlock}\n${indentClose}</>\n${indentClose}${close}`;
    }
  );

  // Also handle cases already partially broken without newline variations
  if (changed) {
    fs.writeFileSync(filePath, next);
  }
  return changed;
}

const files = walk(ROOT).filter((f) => f.endsWith("PropsForm.jsx"));
let count = 0;
for (const file of files) {
  if (fixFile(file)) {
    count += 1;
    console.log("fixed", path.relative(ROOT, file));
  }
}
console.log(JSON.stringify({ fixed: count }));
