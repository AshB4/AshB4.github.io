import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { posts } from "../src/data/posts.js";

const siteUrl = "https://ashb4.github.io";
const feedUrl = `${siteUrl}/feed.xml`;
const siteTitle = "Ashley Broussard | React + Full-Stack Developer";
const siteDescription =
  "Creative full-stack developer blending React, Tailwind, GPT APIs, and UX design.";
const language = "en-us";

const currentDir = dirname(fileURLToPath(import.meta.url));
const outputPath = join(currentDir, "..", "dist", "feed.xml");

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function absoluteUrl(url) {
  return new URL(url, siteUrl).href;
}

function rssDate(date) {
  return new Date(`${date}T00:00:00.000Z`).toUTCString();
}

const items = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((post) => {
    const url = absoluteUrl(post.canonicalUrl || post.url);
    const description = post.excerpt || post.description;

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${rssDate(post.date)}</pubDate>
      <description>${escapeXml(description)}</description>
    </item>`;
  })
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>${escapeXml(language)}</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, rss, "utf8");

console.log(`Generated RSS feed at ${outputPath}`);
