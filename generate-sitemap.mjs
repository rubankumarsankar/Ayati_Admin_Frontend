    const { SitemapStream, streamToPromise } = require('sitemap');
    const { createWriteStream } = require('fs');
    const path = require('path');

    async function generateSitemap() {
      const links = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        // Add more static routes
      ];

      // Add dynamic routes (e.g., from an API or database)
      // const dynamicData = await fetchDynamicRoutes();
      // dynamicData.forEach(item => {
      //   links.push({ url: `/products/${item.id}`, changefreq: 'weekly', priority: 0.7 });
      // });

      const sitemapStream = new SitemapStream({ hostname: 'https://ayatiworks.com' });
      const writeStream = createWriteStream(path.resolve(__dirname, './dist/sitemap.xml'));

      sitemapStream.pipe(writeStream);
      links.forEach(link => sitemapStream.write(link));
      sitemapStream.end();

      await streamToPromise(sitemapStream);
      console.log('Sitemap generated successfully!');
    }

    generateSitemap();