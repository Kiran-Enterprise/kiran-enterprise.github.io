import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { DEFAULT_SITE_URL, ROUTES, resolveSiteUrl } from "../src/shared/data/seo.js";

const SITE_URL = resolveSiteUrl(process.env.VITE_SITE_URL);

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "../dist");
const template = (await readFile(resolve(dist, "index.html"), "utf8")).replaceAll(DEFAULT_SITE_URL, SITE_URL);

const escapeAttr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Template is missing ${pattern}`);
  return html.replace(pattern, replacement);
}

for (const route of ROUTES) {
  const url = `${SITE_URL}${route.path === "/" ? "/" : route.path}`;
  let html = template;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${escapeAttr(route.title)}</title>`);
  html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeAttr(route.description)}" />`);
  html = replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeAttr(route.title)}" />`);
  html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeAttr(route.description)}" />`);
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`);
  html = replaceTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`);

  const outDir = route.path === "/" ? dist : resolve(dist, route.path.slice(1));
  await mkdir(outDir, { recursive: true });
  await writeFile(resolve(outDir, "index.html"), html, "utf8");
}

console.log(`[prerender] Wrote route-specific HTML for ${ROUTES.length} routes`);
