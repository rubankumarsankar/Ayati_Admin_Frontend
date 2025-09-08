// src/config/nav.js
export const NAV = [
  { kind: "logo", src: "/ayatiworks_logo.svg", alt: "Logo", to: "/" },

  {
    kind: "dropdown",
    title: "About",
    items: [
      { label: "About", path: "/about-us" },
      { label: "Teams", path: "/about-us/team" },
    ],
  },

  {
    kind: "mega",
    title: "Services",
    groups: [
      {
        heading: "Digital Marketing Services",
        basePath: "/digital-marketing-service",
        items: [
          { label: "SEO Services", path: "/digital-marketing-service/seo" },
          { label: "Social Media Marketing", path: "/digital-marketing-service/social-media-marketing" },
          { label: "Email Marketing", path: "/digital-marketing-service/email-marketing" },
          { label: "Instagram Marketing", path: "/digital-marketing-service/instagram-marketing" },
          { label: "Affiliate Marketing", path: "/digital-marketing-service/affiliate-marketing" },
          { label: "Programmatic Marketing", path: "/digital-marketing-service/programmatic-marketing" },
          { label: "Video Marketing", path: "/digital-marketing-service/video-marketing" },
        ],
      },
      {
        heading: "Content as a Service",
        basePath: "/content-as-a-service",
        items: [
          { label: "Brand Consultant", path: "/content-as-a-service/branding-service" },
          { label: "Video Creation", path: "/content-as-a-service/video-creation" },
          { label: "Multi-lingual Marketing", path: "/content-as-a-service/multilingual-marketing" },
        ],
      },
      {
        heading: "Digital PR Service",
        basePath: "/digital-pr",
        items: [
          { label: "Digital PR", path: "/digital-pr/digital-pr" },
          { label: "Influencer Marketing", path: "/digital-pr/influencer-marketing" },
          { label: "Online Reputation & Media Outreach", path: "/digital-pr/online-reputation-media-outreach" },
        ],
      },
      {
        heading: "Web & E-commerce",
        basePath: "/web-ecommerce",
        items: [
          { label: "UX/UI Design", path: "/web-ecommerce/ux-ui-design" },
          { label: "Web Development Services", path: "/web-ecommerce/web-development" },
          { label: "Web Maintenance Services", path: "/web-ecommerce/web-maintenance" },
          { label: "Shopify Development Services", path: "/web-ecommerce/shopify-development" },
          { label: "E-commerce", path: "/web-ecommerce" },
        ],
      },
    ],
  },

  {
    kind: "dropdown",
    title: "Insights",
    items: [
      { label: "Blogs", path: "/blogs" },
      { label: "Awards", path: "/awards" },
      { label: "Case Studies", path: "/case-studies" },
    ],
  },

  { kind: "link", label: "Industries", path: "/industries" }, // optional
  { kind: "link", label: "Contact", path: "/contact-us" },
];


