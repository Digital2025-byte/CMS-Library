/**
 * Apply fontWeight inline next to text color styles in component renderers.
 * Run: node scripts/apply-font-weights-render.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../src/app/cmsComponents");

const TEXT_COLOR_KEYS = [
  "titleColor",
  "descriptionColor",
  "subtitleColor",
  "itemTitleColor",
  "itemColor",
  "itemDescriptionColor",
  "nameColor",
  "userNameColor",
  "copyColor",
  "phoneColor",
  "countryColor",
  "listColor",
  "bodyColor",
  "cardHeadingColor",
  "cardBodyColor",
  "cardTitleColor",
  "tileLabelColor",
  "tileValueColor",
  "nextFlightColor",
  "headingColor",
  "highlightColor",
  "badgeText",
  "chipText",
  "chipActiveText",
  "primaryText",
  "secondaryText",
  "buttonText",
  "tabColor",
  "tabText",
  "labelColor",
  "numberColor",
  "questionColor",
  "answerColor",
  "prefixColor",
  "valueColor",
];

function weightKeyForColorKey(colorKey) {
  if (colorKey.endsWith("Color")) return colorKey.replace(/Color$/, "FontWeight");
  if (colorKey.endsWith("Text")) return `${colorKey}FontWeight`;
  return null;
}

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function ensureImport(src) {
  if (src.includes("@/styles/fontWeight")) return src;
  if (src.includes("@/styles/themeColors")) {
    return src.replace(
      /import \{([^}]+)\} from "@\/styles\/themeColors";/,
      (m, inner) =>
        `import {${inner}} from "@/styles/themeColors";\nimport { getFontWeightValue } from "@/styles/fontWeight";`
    );
  }
  return `import { getFontWeightValue } from "@/styles/fontWeight";\n${src}`;
}

function patchFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  if (!src.includes("getThemeColorCss")) return false;
  if (filePath.includes(`${path.sep}docs${path.sep}`)) return false;
  if (filePath.includes(`${path.sep}utils${path.sep}`)) return false;

  let changed = false;
  const original = src;

  for (const colorKey of TEXT_COLOR_KEYS) {
    const weightKey = weightKeyForColorKey(colorKey);

    // style={{ color: getThemeColorCss(style.X, Y) }}
    src = src.replace(
      new RegExp(
        `style=\\{\\{\\s*color:\\s*getThemeColorCss\\(style\\.${colorKey},\\s*([^)]+)\\)\\s*\\}\\}`,
        "g"
      ),
      (match, fallback) => {
        if (match.includes("fontWeight")) return match;
        changed = true;
        return `style={{ color: getThemeColorCss(style.${colorKey}, ${fallback}), fontWeight: getFontWeightValue(style.${weightKey}) }}`;
      }
    );

    // style={{ color: getThemeColorCss(style.X, Y), ...
    src = src.replace(
      new RegExp(
        `style=\\{\\{\\s*color:\\s*getThemeColorCss\\(style\\.${colorKey},\\s*([^)]+)\\)\\s*,`,
        "g"
      ),
      (match, fallback) => {
        if (match.includes("fontWeight")) return match;
        changed = true;
        return `style={{ color: getThemeColorCss(style.${colorKey}, ${fallback}), fontWeight: getFontWeightValue(style.${weightKey}),`;
      }
    );
  }

  // const foo = getThemeColorCss(style.titleColor, ...)
  // style={{ color: foo }}
  for (const colorKey of TEXT_COLOR_KEYS) {
    const weightKey = weightKeyForColorKey(colorKey);
    const constRe = new RegExp(
      `const\\s+(\\w+)\\s*=\\s*getThemeColorCss\\(\\s*style\\.${colorKey}\\s*,`,
      "g"
    );
    const names = [];
    let m;
    while ((m = constRe.exec(src)) !== null) names.push(m[1]);

    for (const varName of [...new Set(names)]) {
      const before = src;
      src = src.replace(
        new RegExp(`style=\\{\\{\\s*color:\\s*${varName}\\s*\\}\\}`, "g"),
        (match) => {
          if (src.includes(`fontWeight: getFontWeightValue(style.${weightKey})`)) {
            // may already exist elsewhere; still OK to add on this object if missing
          }
          if (match.includes("fontWeight")) return match;
          return `style={{ color: ${varName}, fontWeight: getFontWeightValue(style.${weightKey}) }}`;
        }
      );
      src = src.replace(
        new RegExp(`style=\\{\\{\\s*color:\\s*${varName}\\s*,`, "g"),
        (match) => {
          if (match.includes("fontWeight")) return match;
          return `style={{ color: ${varName}, fontWeight: getFontWeightValue(style.${weightKey}),`;
        }
      );
      // color: varName inside multi-line style objects (not backgroundColor)
      src = src.replace(
        new RegExp(`(^\\s*)color:\\s*${varName}\\s*,`, "gm"),
        (match, indent) => {
          if (match.includes("fontWeight")) return match;
          // Skip if next few lines already have this weightKey
          return `${indent}color: ${varName},\n${indent}fontWeight: getFontWeightValue(style.${weightKey}),`;
        }
      );
      if (src !== before) changed = true;
    }
  }

  // Deduplicate consecutive identical fontWeight lines
  src = src.replace(
    /(\s*fontWeight:\s*getFontWeightValue\(style\.(\w+)\),)\s*\1/g,
    "$1"
  );

  if (!changed || src === original) return false;

  src = ensureImport(src);
  fs.writeFileSync(filePath, src);
  return true;
}

const files = walk(ROOT).filter((f) => f.endsWith(".jsx") || f.endsWith(".js"));
let count = 0;
for (const file of files) {
  if (patchFile(file)) {
    count += 1;
    console.log("patched", path.relative(ROOT, file));
  }
}
console.log(JSON.stringify({ patched: count }));
