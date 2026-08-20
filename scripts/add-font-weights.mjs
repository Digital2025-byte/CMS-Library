/**
 * Inject font-weight defaults into style.js and weight dropdowns into PropsForms.
 * Run: node scripts/add-font-weights.mjs
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

const DEFAULT_WEIGHT = {
  titleFontWeight: "semibold",
  descriptionFontWeight: "normal",
  subtitleFontWeight: "medium",
  itemTitleFontWeight: "semibold",
  itemFontWeight: "medium",
  itemDescriptionFontWeight: "normal",
  nameFontWeight: "semibold",
  userNameFontWeight: "medium",
  copyFontWeight: "normal",
  phoneFontWeight: "semibold",
  countryFontWeight: "medium",
  listFontWeight: "normal",
  bodyFontWeight: "normal",
  cardHeadingFontWeight: "semibold",
  cardBodyFontWeight: "normal",
  cardTitleFontWeight: "semibold",
  tileLabelFontWeight: "medium",
  tileValueFontWeight: "semibold",
  nextFlightFontWeight: "semibold",
  headingFontWeight: "semibold",
  highlightFontWeight: "bold",
  badgeTextFontWeight: "medium",
  chipTextFontWeight: "medium",
  chipActiveTextFontWeight: "medium",
  primaryTextFontWeight: "semibold",
  secondaryTextFontWeight: "semibold",
  buttonTextFontWeight: "semibold",
  tabFontWeight: "medium",
  tabTextFontWeight: "medium",
  labelFontWeight: "medium",
  numberFontWeight: "bold",
  questionFontWeight: "semibold",
  answerFontWeight: "normal",
  prefixFontWeight: "semibold",
  valueFontWeight: "medium",
};

const LABEL_MAP = [
  ["Title color", "titleColor", "Title"],
  ["Description color", "descriptionColor", "Description"],
  ["Subtitle color", "subtitleColor", "Subtitle"],
  ["Item title color", "itemTitleColor", "Item title"],
  ["Item color", "itemColor", "Item"],
  ["Name color", "nameColor", "Name"],
  ["User name color", "userNameColor", "User name"],
  ["Copy color", "copyColor", "Copy"],
  ["Phone color", "phoneColor", "Phone"],
  ["Country color", "countryColor", "Country"],
  ["List color", "listColor", "List"],
  ["Body color", "bodyColor", "Body"],
  ["Heading color", "headingColor", "Heading"],
  ["Card heading color", "cardHeadingColor", "Heading"],
  ["Card body color", "cardBodyColor", "Body"],
  ["Card title color", "cardTitleColor", "Card title"],
  ["Highlight color", "highlightColor", "Highlight"],
  ["Badge text", "badgeText", "Badge"],
  ["Chip text", "chipText", "Chip text"],
  ["Primary text", "primaryText", "Primary text"],
  ["Secondary text", "secondaryText", "Secondary text"],
  ["Button text", "buttonText", "Button text"],
  ["Tab color", "tabColor", "Tab"],
  ["Next flight color", "nextFlightColor", "Next flight"],
  ["Number color", "numberColor", "Number"],
  ["Label color", "labelColor", "Label"],
  ["Prefix color", "prefixColor", "Prefix"],
  ["Value color", "valueColor", "Value"],
  ["Question color", "questionColor", "Question"],
  ["Answer color", "answerColor", "Answer"],
  ["Tile label color", "tileLabelColor", "Tile label"],
  ["Tile value color", "tileValueColor", "Tile value"],
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

function patchStyleFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  if (src.includes("FontWeight:")) {
    return { changed: false };
  }

  const start = src.search(/export const DEFAULT_\w+_STYLE = \{/);
  if (start < 0) return { changed: false };

  const braceStart = src.indexOf("{", start);
  let depth = 0;
  let end = -1;
  for (let i = braceStart; i < src.length; i += 1) {
    if (src[i] === "{") depth += 1;
    else if (src[i] === "}") {
      depth -= 1;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end < 0) return { changed: false };

  const objectBody = src.slice(braceStart + 1, end);
  const colorKeys = TEXT_COLOR_KEYS.filter((key) =>
    new RegExp(`\\b${key}\\s*:`).test(objectBody)
  );
  if (!colorKeys.length) return { changed: false };

  const weightLines = colorKeys
    .map((colorKey) => {
      const weightKey = weightKeyForColorKey(colorKey);
      const weight = DEFAULT_WEIGHT[weightKey] || "medium";
      return `  ${weightKey}: "${weight}",`;
    })
    .join("\n");

  let next = `${src.slice(0, end)}\n${weightLines}\n${src.slice(end)}`;

  for (const colorKey of colorKeys) {
    const weightKey = weightKeyForColorKey(colorKey);
    const colorLit = `"${colorKey}"`;
    const weightLit = `"${weightKey}"`;
    if (!next.includes(colorLit) || next.includes(weightLit)) continue;
    next = next.split(colorLit).join(`${colorLit}, ${weightLit}`);
  }

  fs.writeFileSync(filePath, next);
  return { changed: true, count: colorKeys.length };
}

function findInspectorColorBlocks(src, colorLabel) {
  const needle = `label="${colorLabel}"`;
  const blocks = [];
  let from = 0;
  while (from < src.length) {
    const labelIdx = src.indexOf(needle, from);
    if (labelIdx < 0) break;

    const openIdx = src.lastIndexOf("<InspectorColor", labelIdx);
    if (openIdx < 0 || openIdx < from - 200) {
      from = labelIdx + needle.length;
      continue;
    }

    const selfClose = src.indexOf("/>", labelIdx);
    if (selfClose < 0) break;
    blocks.push({ start: openIdx, end: selfClose + 2 });
    from = selfClose + 2;
  }
  return blocks;
}

function patchPropsForm(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  if (src.includes("InspectorFontWeight")) {
    return { changed: false };
  }

  const insertions = [];

  for (const [colorLabel, colorKey, roleLabel] of LABEL_MAP) {
    const weightKey = weightKeyForColorKey(colorKey);
    if (!weightKey) continue;
    if (!src.includes(`update("${colorKey}"`) && !src.includes(`update('${colorKey}'`)) {
      continue;
    }

    const blocks = findInspectorColorBlocks(src, colorLabel);
    for (const block of blocks) {
      const snippet = src.slice(block.start, block.end);
      if (!snippet.includes(colorKey)) continue;
      insertions.push({
        at: block.end,
        text: `
          <InspectorFontWeight
            id="${colorKey}-weight"
            label="${roleLabel} weight"
            value={style.${weightKey}}
            onChange={(value) => update("${weightKey}", value)}
          />`,
      });
    }
  }

  if (!insertions.length) return { changed: false };

  insertions.sort((a, b) => b.at - a.at);
  let next = src;
  for (const item of insertions) {
    next = next.slice(0, item.at) + item.text + next.slice(item.at);
  }

  if (next.includes("InspectorColor,")) {
    next = next.replace("InspectorColor,", "InspectorColor,\n  InspectorFontWeight,");
  } else if (next.includes("InspectorColor }")) {
    next = next.replace(
      "InspectorColor }",
      "InspectorColor, InspectorFontWeight }"
    );
  } else if (next.includes('from "@/components/inspector"')) {
    next = next.replace(
      /import \{/,
      "import {\n  InspectorFontWeight,"
    );
  }

  fs.writeFileSync(filePath, next);
  return { changed: true, count: insertions.length };
}

const files = walk(ROOT);
const styleFiles = files.filter((f) => /[\\/]utils[\\/]style\.js$/.test(f));
const propsFiles = files.filter((f) => f.endsWith("PropsForm.jsx"));

let styleChanged = 0;
let propsChanged = 0;

for (const file of styleFiles) {
  const result = patchStyleFile(file);
  if (result.changed) {
    styleChanged += 1;
    console.log("style", path.relative(ROOT, file), result.count);
  }
}

for (const file of propsFiles) {
  const result = patchPropsForm(file);
  if (result.changed) {
    propsChanged += 1;
    console.log("props", path.relative(ROOT, file), result.count);
  }
}

console.log(JSON.stringify({ styleChanged, propsChanged, styleTotal: styleFiles.length, propsTotal: propsFiles.length }));
