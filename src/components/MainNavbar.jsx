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
import { useNavigate, useLocation } from "react-router-dom";

// ✅ Reusable Dropdown Menu Component (hover to open on desktop)
function DropdownMenu({ title, items, onItemClick, activePath }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    onItemClick?.(path); // ✅ Auto close navbar
    setOpen(false);
  };

  // ✅ Check if current path is active
  const isActive = items.some((item) => item.path === activePath);

  return (
    <div
      // Hover open/close (desktop)
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative"
    >
      <Menu open={open} handler={setOpen} allowHover placement="bottom-start" offset={12}>
        <MenuHandler>
          <Button
            variant="text"
            className={`flex items-center gap-2 text-sm font-secondary px-4 py-2 rounded-full transition-all duration-300 
              ${
                isActive
                  ? "bg-primary text-white shadow-md"
                  : "text-black hover:bg-primary hover:text-white hover:shadow-md"
              }`}
            // Touch/click toggle for mobile
            onClick={() => setOpen((v) => !v)}
            onTouchStart={() => setOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            {title}
            <ChevronDownIcon
              strokeWidth={2}
              className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </Button>
        </MenuHandler>

        <MenuList className="p-4 mt-3 rounded-xl shadow-lg min-w-[220px]">
          {items.map((item, i) => (
            <Typography
              key={i}
              as="div"
              role="menuitem"
              tabIndex={0}
              onClick={() => handleClick(item.path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleClick(item.path);
              }}
              className={`block text-lg font-primary px-2 py-1 rounded cursor-pointer
                ${
                  activePath === item.path
                    ? "bg-primary text-white"
                    : "text-black hover:bg-primary hover:text-white"
                }`}
            >
              {item.label}
            </Typography>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

// ✅ Main Navbar with Responsive Behavior
export function CenteredLogoNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Detect active route
  const activePath = location.pathname;

  // ✅ Function to handle navigation & close navbar
  const handleNavigation = (path) => {
    navigate(path);
    setExpanded(false);
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center">
      {/* ✅ Logo Button (Initial State) */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="bg-white shadow-glow w-[100px] sm:w-[120px] rounded-full p-3 
                     hover:scale-105 hover:shadow-3xl transition-transform duration-300 
                     flex items-center justify-center"
        >
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        </button>
      )}

      {/* ✅ Expanded Navbar */}
      {expanded && (
        <div className="animate-fadeIn" style={{ animation: "fadeInScale 0.4s ease-out" }}>
          <Navbar
            className="relative md:w-[740px] lg:w-[740px] 
            bg-white font-primary shadow-glow hover:shadow-3xl
            px-2 sm:px-4 py-3
            flex flex-col sm:flex-row flex-wrap justify-center items-center
            gap-2 sm:gap-2 transition-all duration-500
            rounded-xl sm:rounded-xl md:rounded-full lg:rounded-full xl:rounded-full 2xl:rounded-full"
          >
            {/* ✅ Close Button (Top Right Corner on Mobile) */}
            <button
              onClick={() => setExpanded(false)}
              className="absolute top-2 right-2 p-2 rounded-full text-primary 
                         hover:bg-primary/80 transition duration-300 sm:hidden"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            {/* ✅ Navbar Items */}
            <Button
              variant="text"
              onClick={() => handleNavigation("/")}
              className="p-0 bg-transparent hover:bg-transparent shadow-none"
            >
              <img src="/ayatiworks_logo.svg" alt="Logo" className="h-10 w-auto" />
            </Button>

            <DropdownMenu
              title="About"
              items={[
                { label: "About", path: "/about" },
                { label: "Teams", path: "/teams" },
              ]}
              onItemClick={handleNavigation}
              activePath={activePath}
            />

            <DropdownMenu
              title="Services"
              items={[
                { label: "Digital Marketing Service", path: "/digital-marketing-service" },
                { label: "Content as a Service", path: "/content-as-a-service" },
                { label: "Digital PR Service", path: "/digital-pr" },
                { label: "Web & Development Services", path: "/web-ecommerce" },
              ]}
              onItemClick={handleNavigation}
              activePath={activePath}
            />

            <DropdownMenu
              title="Insights"
              items={[
                { label: "Blogs", path: "#" },
                { label: "Awards", path: "/awards" },
                { label: "Case Studies", path: "/case-studies" },
              ]}
              onItemClick={handleNavigation}
              activePath={activePath}
            />

            <Button
              variant="text"
              onClick={() => handleNavigation("/contact-us")}
              className={`font-medium text-sm font-secondary rounded-full px-4 py-2 transition-all duration-300
                ${
                  activePath === "/contact-us"
                    ? "bg-primary text-white shadow-md"
                    : "text-black hover:bg-primary hover:text-white hover:shadow-md"
                }`}
            >
              Contact
            </Button>
          </Navbar>
        </div>
      )}
    </div>
  );
}
