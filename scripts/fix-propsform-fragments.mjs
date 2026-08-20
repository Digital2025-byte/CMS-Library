/**
 * Line-based repair for PropsForm fragment corruption.
 * Fixes leaf ternaries repeatedly until the file parses.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "@babel/parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../src/app/cmsComponents");

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (full.endsWith("PropsForm.jsx")) out.push(full);
  }
  return out;
}

function canParse(code) {
  try {
    parse(code, { sourceType: "module", plugins: ["jsx"] });
    return true;
  } catch (error) {
    return error.message.split("\n")[0];
  }
}

function isOpenFrag(line) {
  return /^\s*<>\s*$/.test(line);
}
function isCloseFrag(line) {
  return /^\s*<\/>\s*$/.test(line);
}
function isTernaryStart(line) {
  return /\?\s*\(\s*$/.test(line);
}
function isTernaryEnd(line) {
  return /^\s*\)\s*:\s*null/.test(line);
}

function fixLeafTernaryBody(body) {
  const next = [...body];

  // Remove duplicate closers at the end
  while (
    next.length >= 2 &&
    isCloseFrag(next[next.length - 1]) &&
    isCloseFrag(next[next.length - 2])
  ) {
    next.pop();
  }

  let openCount = next.filter(isOpenFrag).length;
  let closeCount = next.filter(isCloseFrag).length;
  const hasFontWeight = next.some((line) =>
    line.includes("<InspectorFontWeight")
  );
  const hasChoose = next.some((line) => line.includes("<InspectorChoose"));
  const indent =
    (
      next.find((line) => line.trim().startsWith("<")) ||
      next.find(isOpenFrag) ||
      "          "
    ).match(/^\s*/)?.[0] || "          ";

  if (openCount > closeCount) {
    const excess = openCount - closeCount;
    if (!hasFontWeight && !hasChoose && isOpenFrag(next[0]) && excess === 1) {
      next.shift();
    } else {
      for (let n = 0; n < excess; n += 1) next.push(`${indent}</>`);
    }
  } else if (closeCount > openCount) {
    const missing = closeCount - openCount;
    for (let n = 0; n < missing; n += 1) next.unshift(`${indent}<>`);
  }

  openCount = next.filter(isOpenFrag).length;
  closeCount = next.filter(isCloseFrag).length;
  if (hasFontWeight && openCount === 0 && closeCount === 0) {
    next.unshift(`${indent}<>`);
    next.push(`${indent}</>`);
  }

  return next;
}

function fixOnce(source) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let changed = false;

  while (i < lines.length) {
    if (!isTernaryStart(lines[i])) {
      out.push(lines[i]);
      i += 1;
      continue;
    }

    out.push(lines[i]);
    i += 1;

    const bodyStart = i;
    let depth = 1;
    while (i < lines.length && depth > 0) {
      if (isTernaryStart(lines[i])) depth += 1;
      if (isTernaryEnd(lines[i])) {
        depth -= 1;
        if (depth === 0) break;
      }
      i += 1;
    }

    const body = lines.slice(bodyStart, i);
    const nested = body.some(isTernaryStart);

    if (!nested) {
      const fixedBody = fixLeafTernaryBody(body);
      if (fixedBody.join("\n") !== body.join("\n")) changed = true;
      out.push(...fixedBody);
    } else {
      out.push(...body);
    }

    if (i < lines.length) {
      out.push(lines[i]); // ) : null
      i += 1;
    }
  }

  return { code: out.join("\n"), changed };
}

let fixed = 0;
const still = [];

for (const file of walk(ROOT)) {
  const original = fs.readFileSync(file, "utf8");
  const before = canParse(original);
  if (before === true) continue;

  let code = original;
  for (let pass = 0; pass < 8; pass += 1) {
    const result = fixOnce(code);
    code = result.code;
    if (canParse(code) === true) break;
    if (!result.changed) break;
  }

  const after = canParse(code);
  if (after === true) {
    fs.writeFileSync(file, code);
    fixed += 1;
    console.log("fixed", path.relative(ROOT, file));
  } else {
    still.push({ file: path.relative(ROOT, file), before, after });
  }
}

console.log(JSON.stringify({ fixed, still }, null, 2));
