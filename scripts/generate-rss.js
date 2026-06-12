import { copyFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { posts } from "../src/data/posts.js";

const siteUrl = "https://ashb4.github.io";
const feedUrl = `${siteUrl}/feed.xml`;
const siteTitle = "Ashley Broussard | React + Full-Stack Developer";
const siteDescription =
  "Creative full-stack developer blending React, Tailwind, GPT APIs, and UX design.";
const language = "en-us";
const authorName = "Ashley Broussard";
const authorEmail = "fleurdeviefarmsllc@gmail.com";

const currentDir = dirname(fileURLToPath(import.meta.url));
const distDir = join(currentDir, "..", "dist");
const outputPath = join(distDir, "feed.xml");

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

function cdata(value) {
  return `<![CDATA[${String(value).replaceAll("]]>", "]]]]><![CDATA[>")}]]>`;
}

function isDevToUrl(url) {
  return new URL(url).hostname === "dev.to";
}

function rssDate(date) {
  return new Date(`${date}T00:00:00.000Z`).toUTCString();
}

const feedPosts = posts.filter((post) => {
  if (post.includeInFeed === false) return false;
  if (!post.canonicalUrl) return false;
  return !isDevToUrl(post.canonicalUrl);
});

if (feedPosts.length === 0) {
  console.warn(
    "Generated RSS feed with no items. Existing DEV-hosted posts are excluded from DEV import."
  );
}

const items = [...feedPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((post) => {
    const url = absoluteUrl(post.canonicalUrl);
    const description = post.excerpt || post.description;
    const content = post.content || `<p>${escapeXml(description)}</p>`;
    const categories = (post.tags || [])
      .map((tag) => `      <category>${escapeXml(tag)}</category>`)
      .join("\n");

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${rssDate(post.date)}</pubDate>
      <author>${escapeXml(`${authorEmail} (${authorName})`)}</author>
      <description>${escapeXml(description)}</description>
${categories}
      <content:encoded>${cdata(content)}</content:encoded>
    </item>`;
  })
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>${escapeXml(language)}</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, rss, "utf8");

console.log(`Generated RSS feed at ${outputPath}`);

await Promise.all(
  feedPosts.map(async (post) => {
    const url = new URL(post.canonicalUrl);
    if (url.origin !== siteUrl) return;

    const routeDir = join(distDir, url.pathname.replace(/^\/+/, ""));
    await mkdir(routeDir, { recursive: true });
    await copyFile(join(distDir, "index.html"), join(routeDir, "index.html"));
  })
);

console.log("Generated static pages for RSS item URLs");
