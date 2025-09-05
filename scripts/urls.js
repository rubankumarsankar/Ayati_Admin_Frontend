// scripts/urls.js

export const urls = [
  // Top-level public pages
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about-us", changefreq: "weekly", priority: 0.8 },
  { url: "/about-us/team", changefreq: "monthly", priority: 0.6 },
  { url: "/blogs", changefreq: "weekly", priority: 0.7 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
  { url: "/awards", changefreq: "monthly", priority: 0.6 },
  { url: "/case-studies", changefreq: "monthly", priority: 0.6 },
  { url: "/seo-simplified", changefreq: "weekly", priority: 0.7 },
  { url: "/comingsoon", changefreq: "monthly", priority: 0.3 },

  // Service hubs
  { url: "/digital-marketing-service", changefreq: "weekly", priority: 0.8 },
  { url: "/content-as-a-service", changefreq: "weekly", priority: 0.7 },
  { url: "/digital-pr", changefreq: "weekly", priority: 0.7 },
  { url: "/web-ecommerce", changefreq: "weekly", priority: 0.7 },

  // Digital Marketing detail pages
  {
    url: "/digital-marketing-service/seo",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "/digital-marketing-service/social-media-marketing",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "/digital-marketing-service/email-marketing",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "/digital-marketing-service/instagram-marketing",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "/digital-marketing-service/affiliate-marketing",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "/digital-marketing-service/programmatic-marketing",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "/digital-marketing-service/video-marketing",
    changefreq: "weekly",
    priority: 0.7,
  },

  // Content-as-a-Service detail pages
  {
    url: "/content-as-a-service/branding-service",
    changefreq: "weekly",
    priority: 0.7,
  },
  {
    url: "/content-as-a-service/video-creation",
    changefreq: "weekly",
    priority: 0.7,
  },
  // Current route (with typo) to avoid 404s in production:
  {
    url: "/content-as-a-service/multilingual-arketing",
    changefreq: "weekly",
    priority: 0.7,
  },
  // Preferred route (uncomment after you fix the path in App.jsx):
  // { url: "/content-as-a-service/multilingual-marketing",      changefreq: "weekly", priority: 0.7 },

  // Digital PR detail pages
  { url: "/digital-pr/digital-pr", changefreq: "weekly", priority: 0.6 }, // matches your current link
  {
    url: "/digital-pr/influencer-marketing",
    changefreq: "weekly",
    priority: 0.6,
  },
  {
    url: "/digital-pr/online-reputation-media-outreach",
    changefreq: "weekly",
    priority: 0.6,
  },

  // Web & E-commerce detail pages
  { url: "/web-ecommerce/ux-ui-design", changefreq: "weekly", priority: 0.6 },
  {
    url: "/web-ecommerce/web-development",
    changefreq: "weekly",
    priority: 0.6,
  },
  {
    url: "/web-ecommerce/web-maintenance",
    changefreq: "weekly",
    priority: 0.6,
  },
  {
    url: "/web-ecommerce/shopify-development",
    changefreq: "weekly",
    priority: 0.6,
  },
  { url: "/web-ecommerce", changefreq: "weekly", priority: 0.6 }, // hub itself
];
