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
    hostname: "https://ayatiworks.com", // ✅ change to your domain
  });

  const writeStream = createWriteStream(
    path.resolve(__dirname, "../dist/sitemap.xml")
  );

  sitemapStream.pipe(writeStream);

  urls.forEach((link) => sitemapStream.write(link));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap().catch((err) => {
  console.error("❌ Error generating sitemap:", err);
});
