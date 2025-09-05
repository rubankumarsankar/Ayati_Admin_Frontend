import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { urls } from "./urls.js";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  const sitemapStream = new SitemapStream({
    hostname: "https://www.ayatiworks.com", // ✅ ensure your final domain (with www if needed)
  });

  const writeStream = createWriteStream(
    path.resolve(__dirname, "../dist/sitemap.xml")
  );

  sitemapStream.pipe(writeStream);

  // ✅ write only your defined URLs
  urls.forEach((link) => {
    sitemapStream.write({
      url: link.url,
      changefreq: link.changefreq,
      priority: link.priority,
      lastmod: new Date().toISOString(), // optional but recommended
    });
  });

  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap().catch((err) => {
  console.error("❌ Error generating sitemap:", err);
});
