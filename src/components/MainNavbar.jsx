// CenteredLogoNavbar.jsx
import React, { useState, useEffect, useRef } from "react";
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

/* Helpers */
const pathStartsWith = (base, current) =>
  !!base && !!current && (current === base || current.startsWith(base + "/"));

/* ============================
   HoverDropdownMenu (used for ALL navs)
   - Opens on hover (top chip)
   - If an item has `children`, show right-side submenu on hover
   - Clicking parent or child navigates
   ============================ */
function HoverDropdownMenu({
  title,
  items,
  onItemClick,
  activePath,
  hoverOpenDelay = 120,
  hoverCloseDelay = 160,
}) {
  const [open, setOpen] = useState(false);
  const [openSubIdx, setOpenSubIdx] = useState(null);
  const hoverTimer = useRef(null);
  const subHoverTimer = useRef(null);
  const navigate = useNavigate();

  const clearTimer = (ref) => {
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  // Top-level open/close on hover
  const handleEnter = () => {
    clearTimer(hoverTimer);
    hoverTimer.current = setTimeout(() => setOpen(true), hoverOpenDelay);
  };
  const handleLeave = () => {
    clearTimer(hoverTimer);
    hoverTimer.current = setTimeout(() => {
      setOpen(false);
      setOpenSubIdx(null);
    }, hoverCloseDelay);
  };

  // Auto-open matching parent submenu if the current route is inside it
  useEffect(() => {
    if (!open) return;
    const idx = items.findIndex(
      (it) => Array.isArray(it.children) && pathStartsWith(it.path, activePath)
    );
    if (idx >= 0) setOpenSubIdx(idx);
  }, [open, activePath, items]);

  // Highlight chip if parent or any child matches
  const isActiveTop = items.some(
    (it) =>
      activePath === it.path ||
      pathStartsWith(it.path, activePath) ||
      (Array.isArray(it.children) &&
        it.children.some((c) => activePath === c.path || pathStartsWith(c.path, activePath)))
  );

  const go = (path) => {
    navigate(path);
    onItemClick?.(path);
    setOpen(false);
    setOpenSubIdx(null);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Menu open={open} handler={setOpen} allowHover>
        <MenuHandler>
          {/* Hover-only to open; keep click as toggle for touch devices */}
          <Button
            variant="text"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex items-center gap-2 text-sm font-secondary px-4 py-2 rounded-full transition-all duration-300
              ${
                isActiveTop
                  ? "bg-primary text-white shadow-md"
                  : "text-black hover:bg-primary hover:text-white hover:shadow-md"
              }`}
          >
            {title}
            <ChevronDownIcon
              strokeWidth={2}
              className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </Button>
        </MenuHandler>

        <MenuList className="p-2 mt-5 rounded-xl shadow-lg overflow-visible">
          {items.map((item, i) => {
            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const activeParent =
              activePath === item.path || pathStartsWith(item.path, activePath);

            const onItemEnter = () => {
              if (!hasChildren) return;
              clearTimer(subHoverTimer);
              subHoverTimer.current = setTimeout(() => setOpenSubIdx(i), hoverOpenDelay);
            };
            const onItemLeave = () => {
              if (!hasChildren) return;
              clearTimer(subHoverTimer);
              subHoverTimer.current = setTimeout(() => {
                setOpenSubIdx((idx) => (idx === i ? null : idx));
              }, hoverCloseDelay);
            };

            return (
              <div
                key={i}
                className="relative"
                onMouseEnter={onItemEnter}
                onMouseLeave={onItemLeave}
              >
                <Typography
                  as="div"
                  tabIndex={0}
                  role="menuitem"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") go(item.path);           // Enter navigates
                    if (e.key === "ArrowRight" && hasChildren) setOpenSubIdx(i);
                    if (e.key === "ArrowLeft") setOpenSubIdx(null);
                  }}
                  onClick={() => go(item.path)}                      // Click parent navigates
                  className={`flex items-center justify-between gap-3 text-base font-primary px-3 py-2 rounded cursor-pointer
                    ${
                      activeParent
                        ? "bg-primary text-white"
                        : "text-black hover:bg-primary hover:text-white"
                    }`}
                  title={hasChildren ? "Hover to see sub items" : undefined}
                >
                  <span>{item.label}</span>
                  {hasChildren && <span className="ml-2 select-none">&rsaquo;</span>}
                </Typography>

                {/* RIGHT-SIDE SUBMENU (hover) */}
                {hasChildren && openSubIdx === i && (
                  <div
                    className="absolute top-0 left-full ml-2 w-64 bg-white rounded-xl shadow-lg p-2 z-[60]"
                    onMouseEnter={() => {
                      clearTimer(subHoverTimer);
                      setOpenSubIdx(i);
                    }}
                    onMouseLeave={onItemLeave}
                  >
                    {item.children.map((child, ci) => {
                      const childActive =
                        activePath === child.path || pathStartsWith(child.path, activePath);
                      return (
                        <div
                          key={ci}
                          onClick={() => go(child.path)}
                          className={`text-base font-primary px-3 py-2 rounded cursor-pointer
                            ${
                              childActive
                                ? "bg-primary text-white"
                                : "text-black hover:bg-primary hover:text-white"
                            }`}
                        >
                          {child.label}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}

/* ============================
   Main Navbar — auto-expands 5s after every refresh
   ============================ */
export function CenteredLogoNavbar() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const t = setTimeout(() => setExpanded(true), 2000); // 2 seconds every load
    return () => clearTimeout(t);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setExpanded(false);
  };

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center">
      {/* Splash logo until expanded */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          aria-expanded={expanded}
          className="bg-white shadow-glow w-[100px] sm:w-[120px] rounded-full p-3 
                     hover:scale-105 hover:shadow-3xl transition-transform duration-300 
                     flex items-center justify-center"
        >
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        </button>
      )}

      {/* Expanded navbar */}
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
            {/* Mobile close */}
            <button
              onClick={() => setExpanded(false)}
              aria-label="Close navigation"
              className="absolute top-2 right-2 p-2 rounded-full text-primary 
                         hover:bg-primary/80 transition duration-300 sm:hidden"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            {/* Brand */}
            <Button
              variant="text"
              onClick={() => handleNavigation("/")}
              className="p-0 bg-transparent hover:bg-transparent shadow-none"
            >
              <img src="/ayatiworks_logo.svg" alt="Logo" className="h-8" />
            </Button>

            {/* About (hover) */}
            <HoverDropdownMenu
              title="About"
              items={[
                { label: "About", path: "/about-us" },
                { label: "Teams", path: "/about-us/team" },
              ]}
              onItemClick={handleNavigation}
              activePath={activePath}
            />

            {/* Services (hover) with right-side submenu on Digital Marketing Service */}
            <HoverDropdownMenu
              title="Services"
              items={[
                {
                  label: "Digital Marketing Service",
                  path: "/digital-marketing-service",
                  children: [
                    { label: "SEO Services", path: "/digital-marketing-service/seo" },
                    { label: "Social Media Marketing", path: "/digital-marketing-service/social-media-marketing" },
                    { label: "Email Marketing", path: "/digital-marketing-service/email-marketing" },
                    { label: "Instagram Marketing", path: "/digital-marketing-service/instagram-marketing" },
                    { label: "Affiliate Marketing", path: "/digital-marketing-service/affiliate-marketing" },
                    { label: "Programmatic Marketing", path: "/digital-marketing-service/programmatic-marketing" },
                    { label: "Video Marketing", path: "/digital-marketing-service/video-marketing" },
                  ],
                },
                { label: "Content as a Service", path: "/content-as-a-service" },
                { label: "Digital PR Service", path: "/digital-pr" },
                { label: "Web & Development Services", path: "/web-ecommerce" },
              ]}
              onItemClick={handleNavigation}
              activePath={activePath}
            />

            {/* Insights (hover) */}
            <HoverDropdownMenu
              title="Insights"
              items={[
                { label: "Blogs", path: "#" },
                { label: "Awards", path: "/awards" },
                { label: "Case Studies", path: "/case-studies" },
              ]}
              onItemClick={handleNavigation}
              activePath={activePath}
            />

            {/* Contact */}
            <Button
              variant="text"
              onClick={() => handleNavigation("/contact-us")}
              className={`font-bold text-sm font-secondary rounded-full px-4 py-2 transition-all duration-300
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
