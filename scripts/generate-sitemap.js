import { writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_URL } from "../src/shared/data/seo.js";

const xmlEscape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const lastmod = new Date().toISOString().split("T")[0];

const urls = ROUTES.map(
  (route) =>
    `  <url>\n` +
    `    <loc>${xmlEscape(`${SITE_URL}${route.path === "/" ? "/" : route.path}`)}</loc>\n` +
    `    <lastmod>${lastmod}</lastmod>\n` +
    `    <changefreq>${route.changefreq}</changefreq>\n` +
    `    <priority>${route.priority}</priority>\n` +
    `  </url>`,
).join("\n");

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const outPath = resolve(dirname(fileURLToPath(import.meta.url)), "../dist/sitemap.xml");
await writeFile(outPath, xml, "utf8");
console.log(`[sitemap] Wrote ${ROUTES.length} URLs to dist/sitemap.xml`);
