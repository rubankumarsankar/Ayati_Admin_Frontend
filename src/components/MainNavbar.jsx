import React, { useState } from "react";
import {
  Navbar,
  Menu,
  MenuHandler,
  MenuList,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

// ✅ Service Categories
const serviceCategories = [
  {
    title: "BRAND",
    items: [
      { label: "Branding Services", path: "/branding-services" },
      {
        label: "Branding Strategy and Positioning",
        path: "/branding-strategy",
      },
      { label: "Experience Design", path: "/experience-design" },
      { label: "Creative Marketing", path: "/creative-marketing" },
      { label: "Marketing Strategy Consulting", path: "/marketing-consulting" },
      { label: "Customer Acquisition", path: "/customer-acquisition" },
    ],
  },
  {
    title: "The Vibe Bureaus",
    items: [
      { label: "Influencer Marketing", path: "/influencer-marketing" },
      { label: "Instagram Marketing", path: "/instagram-marketing" },
      { label: "Social Media Marketing", path: "/social-media-marketing" },
      {
        label: "Interactive Social Media Agency",
        path: "/interactive-social-media-agency",
      },
      {
        label: "Response Management (If Offered)",
        path: "/response-management",
      },
      { label: "Multilingual Marketing", path: "/multilingual-marketing" },
    ],
  },
  {
    title: "Click & Convert",
    items: [
      { label: "Web Development Services", path: "/web-development" },
      { label: "Web Maintenance Services", path: "/web-maintenance" },
      { label: "Shopify Development", path: "/shopify-development" },
      { label: "E-Commerce", path: "/e-commerce" },
      { label: "Mobile App Development", path: "/mobile-app-development" },
      { label: "UX & Experience Design", path: "/ux-experience-design" },
    ],
  },
  {
    title: "Pixel & Performance",
    items: [
      { label: "SEO Services", path: "/seo-services" },
      { label: "Performance Marketing", path: "/performance-marketing" },
      { label: "Programmatic Solutions", path: "/programmatic-solutions" },
      { label: "Paid Media Planning & Buying", path: "/paid-media-planning" },
      { label: "Amazon Marketing", path: "/amazon-marketing" },
      { label: "Affiliate Marketing Services", path: "/affiliate-marketing" },
    ],
  },
  {
    title: "Contentual Healing",
    items: [
      { label: "Content Writing Services", path: "/content-writing" },
      { label: "Digital PR", path: "/digital-pr" },
      { label: "Video Creation & Marketing", path: "/video-marketing" },
      {
        label: "Digital Marketing Consultants",
        path: "/digital-marketing-consultants",
      },
      { label: "Creative Campaigns", path: "/creative-campaigns" },
      { label: "Ayati Intelligence", path: "/ayati-intelligence" },
    ],
  },
  {
    title: "Mad Lab",
    items: [
      { label: "Advertising Agency Services", path: "/advertising-agency" },
      { label: "Creative Campaigns", path: "/madlab-creative-campaigns" },
      {
        label: "Experiment-Based Marketing",
        path: "/experiment-based-marketing",
      },
      {
        label: "Conceptual Brand Thinking",
        path: "/conceptual-brand-thinking",
      },
    ],
  },
];

// ✅ Reusable Dropdown Menu Component
function DropdownMenu({ title, items, onItemClick }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    if (onItemClick) onItemClick(path); // ✅ Auto close navbar
  };

  return (
    <Menu open={open} handler={setOpen}>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-2 font-primary text-black hover:bg-secondary hover:text-white hover:shadow-md rounded-full px-4 py-2 transition-all duration-300"
        >
          {title}
          <ChevronDownIcon
            strokeWidth={2}
            className={`h-3 w-3 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-4 mt-5 rounded-xl shadow-lg">
        {items.map((item, i) => (
          <Typography
            key={i}
            as="div"
            onClick={() => handleClick(item.path)}
            className="block text-sm text-primary font-secondary px-2 py-1 hover:bg-gray-200 rounded cursor-pointer"
          >
            {item.label}
          </Typography>
        ))}
      </MenuList>
    </Menu>
  );
}

// ✅ Services Mega Menu
function ServicesMegaMenu({ onItemClick }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    if (onItemClick) onItemClick(path); // ✅ Auto close navbar
  };

  return (
    <Menu open={open} handler={setOpen}>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-2 font-primary text-black hover:bg-secondary hover:text-white hover:shadow-md rounded-full px-4 py-2 transition-all duration-300"
        >
          Services
          <ChevronDownIcon
            strokeWidth={2}
            className={`h-3 w-3 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      {/* ✅ Scrollable */}
      <MenuList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-[90vw] sm:w-[700px] rounded-xl mt-5 max-h-[350px] overflow-y-auto scrollbar-hide">
        {serviceCategories.map((cat, idx) => (
          <div key={idx}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-bold text-primary font-primary uppercase mb-2"
            >
              {cat.title}
            </Typography>
            <ul className="space-y-1">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleClick(item.path)}
                  className="text-xs text-gray-700 font-secondary hover:bg-gray-200 rounded-md hover:text-primary cursor-pointer transition"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </MenuList>
    </Menu>
  );
}

// ✅ Main Navbar with Responsive Behavior
export function CenteredLogoNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // ✅ Function to handle navigation & close navbar
  const handleNavigation = (path) => {
    navigate(path);
    setExpanded(false); // Close navbar after navigation
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center">
      {/* ✅ Logo Button (Initial State) */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="bg-white shadow-2xl w-[120px] sm:w-[150px] rounded-full p-4 
                     hover:scale-105 hover:shadow-2xl transition-transform duration-300 
                     flex items-center justify-center"
        >
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        </button>
      )}

      {/* ✅ Expanded Navbar */}
      {expanded && (
        <div
          className="animate-fadeIn"
          style={{ animation: "fadeInScale 0.4s ease-out" }}
        >
          <Navbar
            className="
              relative
              bg-white rounded-xl sm:rounded-full font-primary shadow-3xl 
              px-4 sm:px-8 py-3
              flex flex-col sm:flex-row flex-wrap justify-center items-center
              gap-3 sm:gap-4 transition-all duration-500"
          >
            {/* ✅ Close Button (Top Right Corner on Mobile) */}
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-2 right-2 p-2 rounded-full text-primary 
                         hover:bg-gray-200 transition duration-300 sm:hidden"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            {/* ✅ Navbar Items (Auto Close After Navigation) */}
            <Button
              variant="text"
              onClick={() => handleNavigation("/")}
              className="font-medium text-black hover:bg-secondary font-primary 
                         hover:text-white hover:shadow-md rounded-full px-4 py-2 
                         transition-all duration-300"
            >
              Home
            </Button>
            <DropdownMenu
              title="Crew & Clues"
              items={[
                { label: "About", path: "/about" },
                { label: "Teams", path: "/teams" },
              ]}
              onItemClick={handleNavigation} // ✅ Pass to auto close
            />
            <ServicesMegaMenu onItemClick={handleNavigation} />{" "}
            {/* ✅ Auto close */}
            <DropdownMenu
              title="Our Work"
              items={[
                { label: "Case Study", path: "/case-study" },
                { label: "Careers", path: "/careers" },
                { label: "Blogs", path: "/blogs" },
              ]}
              onItemClick={handleNavigation}
            />
            <Button
              variant="text"
              onClick={() => handleNavigation("/contact")}
              className="font-medium text-black hover:bg-secondary font-primary 
                         hover:text-white hover:shadow-md rounded-full px-4 py-2 
                         transition-all duration-300"
            >
              Contact
            </Button>
          </Navbar>
        </div>
      )}
    </div>
  );
}
