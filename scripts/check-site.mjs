// Run after pnpm build: node scripts/check-site.mjs
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

const paths = [
  "",
  "about/",
  "privacy/",
  "notes/",
  "notes/navigation/",
  "notes/static-portfolio/",
  "notes/portfolio-design/",
];
for (const path of paths) {
  const html = await readFile(`dist/${path}index.html`, "utf8");
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one h1`);
  assert.ok(
    html.includes(`rel="canonical" href="https://www.felnut.com/${path}"`),
    `${path}: canonical`,
  );
  const data = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s);
  const page = JSON.parse(data[1])["@graph"].find((item) => item["@type"] === "WebPage");
  assert.equal(page.url, `https://www.felnut.com/${path}`);
  for (const link of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const target = decodeURIComponent(link[1]);
    await access(`dist${target.endsWith("/") ? `${target}index.html` : target}`);
  }
}
const sitemap = await readFile("dist/sitemap-0.xml", "utf8");
for (const path of paths) assert.ok(sitemap.includes(`https://www.felnut.com/${path}<`));
console.log(
  `PASS: ${paths.length} pages, headings, canonical URLs, structured data, internal links and sitemap`,
);
