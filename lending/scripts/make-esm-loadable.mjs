/* Make the dist/esm build loadable by Node's own ES module loader, which the package.json
   exports map points at through its "import" condition.

   Two things stop tsc's ESM output loading as it stands. The package declares no "type", so Node
   reads every .js under it as CommonJS; and tsc leaves relative import specifiers extensionless
   ("./runtime"), which Node's ESM resolver rejects. This writes the type marker into dist/esm and
   rewrites each relative specifier to the file it actually resolves to. The CommonJS build and
   bundler consumers (which read the "module" field) are untouched. Runs from the package root as
   the last step of `npm run build`. */
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const esmDir = resolve("dist/esm");
if (!existsSync(esmDir)) {
  console.error("dist/esm is missing - run `tsc -p tsconfig.esm.json` first");
  process.exit(1);
}

writeFileSync(join(esmDir, "package.json"), JSON.stringify({ type: "module" }, null, 2) + "\n");

const RELATIVE_SPECIFIER = /(from\s*|import\s*\(?\s*)(['"])(\.[^'"]*)\2/g;

function jsFiles(dir) {
  const found = [];
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) found.push(...jsFiles(path));
    else if (item.name.endsWith(".js")) found.push(path);
  }
  return found;
}

function fullPathFor(file, specifier) {
  const target = resolve(dirname(file), specifier);
  if (existsSync(`${target}.js`)) return `${specifier}.js`;
  if (existsSync(join(target, "index.js"))) return `${specifier.replace(/\/$/, "")}/index.js`;
  return null;
}

let rewritten = 0;
for (const file of jsFiles(esmDir)) {
  const source = readFileSync(file, "utf8");
  const updated = source.replace(RELATIVE_SPECIFIER, (whole, prefix, quote, specifier) => {
    if (/\.(js|mjs|cjs|json)$/.test(specifier)) return whole;
    const fullPath = fullPathFor(file, specifier);
    return fullPath ? `${prefix}${quote}${fullPath}${quote}` : whole;
  });
  if (updated !== source) {
    writeFileSync(file, updated);
    rewritten += 1;
  }
}
console.log(`dist/esm: type marker written, ${rewritten} file(s) given full import paths`);
