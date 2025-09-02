// scripts/urls.js
export const urls = [
  // ✅ Public Pages
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/teams", changefreq: "weekly", priority: 0.7 },
  { url: "/blogs", changefreq: "weekly", priority: 0.7 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
  { url: "/awards", changefreq: "monthly", priority: 0.6 },
  { url: "/case-studies", changefreq: "monthly", priority: 0.6 },
  { url: "/digital-marketing-service", changefreq: "weekly", priority: 0.8 },
  { url: "/content-as-a-service", changefreq: "weekly", priority: 0.7 },
  { url: "/digital-pr", changefreq: "weekly", priority: 0.7 },
  { url: "/web-ecommerce", changefreq: "weekly", priority: 0.7 },
  { url: "/seo-simplified", changefreq: "weekly", priority: 0.7 },
  { url: "/comingsoon", changefreq: "monthly", priority: 0.3 },

  // ❌ NotFound "*" route skipped
  // ❌ Admin/protected routes skipped (/admin, /dashboard, /employees, /roles)
];
