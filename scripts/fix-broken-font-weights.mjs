/**
 * Repair getFontWeightValue(style.) left by a bad PowerShell replace.
 * Infers the weight key from nearby color usage on the same style object.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../src/app/cmsComponents");

const COLOR_TO_WEIGHT = {
  titleColor: "titleFontWeight",
  descriptionColor: "descriptionFontWeight",
  subtitleColor: "subtitleFontWeight",
  itemTitleColor: "itemTitleFontWeight",
  itemColor: "itemFontWeight",
  itemDescriptionColor: "itemDescriptionFontWeight",
  nameColor: "nameFontWeight",
  userNameColor: "userNameFontWeight",
  copyColor: "copyFontWeight",
  phoneColor: "phoneFontWeight",
  countryColor: "countryFontWeight",
  listColor: "listFontWeight",
  bodyColor: "bodyFontWeight",
  cardHeadingColor: "cardHeadingFontWeight",
  cardBodyColor: "cardBodyFontWeight",
  cardTitleColor: "cardTitleFontWeight",
  tileLabelColor: "tileLabelFontWeight",
  tileValueColor: "tileValueFontWeight",
  nextFlightColor: "nextFlightFontWeight",
  headingColor: "headingFontWeight",
  highlightColor: "highlightFontWeight",
  badgeText: "badgeTextFontWeight",
  chipText: "chipTextFontWeight",
  chipActiveText: "chipActiveTextFontWeight",
  primaryText: "primaryTextFontWeight",
  secondaryText: "secondaryTextFontWeight",
  buttonText: "buttonTextFontWeight",
  tabColor: "tabFontWeight",
  tabText: "tabTextFontWeight",
  labelColor: "labelFontWeight",
  numberColor: "numberFontWeight",
  questionColor: "questionFontWeight",
  answerColor: "answerFontWeight",
  prefixColor: "prefixFontWeight",
  valueColor: "valueFontWeight",
};

const VAR_HINTS = {
  titleCss: "titleFontWeight",
  descriptionCss: "descriptionFontWeight",
  subtitleCss: "subtitleFontWeight",
  nameCss: "nameFontWeight",
  bodyCss: "bodyFontWeight",
  copyCss: "copyFontWeight",
  itemCss: "itemFontWeight",
  headingCss: "cardHeadingFontWeight",
  accentCss: "nextFlightFontWeight",
  tabCss: "tabFontWeight",
  titleColor: "titleFontWeight",
  itemColor: "itemFontWeight",
  labelCss: "labelFontWeight",
  badgeTextCss: "badgeTextFontWeight",
};

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.jsx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

function inferWeightKey(before) {
  // Prefer style.fooColor in the preceding ~120 chars
  const slice = before.slice(-160);
  for (const [colorKey, weightKey] of Object.entries(COLOR_TO_WEIGHT)) {
    if (slice.includes(`style.${colorKey}`)) return weightKey;
  }
  // const var names
  for (const [varName, weightKey] of Object.entries(VAR_HINTS)) {
    if (new RegExp(`\\b${varName}\\b`).test(slice)) return weightKey;
  }
  return "titleFontWeight";
}

let fixed = 0;
for (const file of walk(ROOT)) {
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes("getFontWeightValue(style.)")) continue;

  let next = "";
  let i = 0;
  const needle = "getFontWeightValue(style.)";
  while (i < src.length) {
    const idx = src.indexOf(needle, i);
    if (idx < 0) {
      next += src.slice(i);
      break;
    }
    const weightKey = inferWeightKey(src.slice(0, idx));
    next += src.slice(i, idx) + `getFontWeightValue(style.${weightKey})`;
    i = idx + needle.length;
    fixed += 1;
  }
  fs.writeFileSync(file, next);
  console.log(path.relative(ROOT, file));
}

console.log(JSON.stringify({ fixed }));
