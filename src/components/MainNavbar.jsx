import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  Menu,
  MenuHandler,
  MenuList,
  Button,
  Drawer,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { MobileMenu } from "./MobileMenu";

/* ---------------- NAV JSON ---------------- */
export const NAV = [
  { kind: "logo", src: "/ayatiworks_logo.svg", alt: "Logo", to: "/" },
  // { kind: "logo1", src: "/logo.png", alt: "Logo", to: "/" }, // optional second logo
  {
    kind: "dropdown",
    title: "About",
    items: [
      { label: "About", path: "/about-us" },
      { label: "Teams", path: "/team" },
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
          {
            label: "Social Media Marketing",
            path: "/digital-marketing-service/social-media-marketing",
          },
          {
            label: "Email Marketing",
            path: "/digital-marketing-service/email-marketing",
          },
          {
            label: "Instagram Marketing",
            path: "/digital-marketing-service/instagram-marketing",
          },
          {
            label: "Affiliate Marketing",
            path: "/digital-marketing-service/affiliate-marketing",
          },
          {
            label: "Programmatic Marketing",
            path: "/digital-marketing-service/programmatic-marketing",
          },
          {
            label: "Video Marketing",
            path: "/digital-marketing-service/video-marketing",
          },
        ],
      },
      {
        heading: "Content as a Service",
        basePath: "/content-as-a-service",
        items: [
          {
            label: "Brand Consultant",
            path: "/content-as-a-service/branding-service",
          },
          {
            label: "Video Creation",
            path: "/content-as-a-service/video-creation",
          },
          {
            label: "Multi-lingual Marketing",
            path: "/content-as-a-service/multilingual-marketing",
          },
        ],
      },
      {
        heading: "Digital PR Service",
        basePath: "/digital-pr",
        items: [
          { label: "Digital PR", path: "/digital-pr/digital-pr-services" },
          {
            label: "Influencer Marketing",
            path: "/digital-pr/influencer-marketing",
          },
          {
            label: "Online Reputation & Media Outreach",
            path: "/digital-pr/online-reputation-media-outreach",
          },
        ],
      },
      {
        heading: "Web & E-commerce",
        basePath: "/web-ecommerce",
        items: [
          { label: "UX/UI Design", path: "/web-ecommerce/ux-ui-design" },
          {
            label: "Web Development Services",
            path: "/web-ecommerce/web-development",
          },
          {
            label: "Web Maintenance Services",
            path: "/web-ecommerce/web-maintenance",
          },
          {
            label: "Shopify Development Services",
            path: "/web-ecommerce/shopify-development",
          },
          { label: "E-commerce", path: "/e-commerce" },
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
  { kind: "link", label: "Contact", path: "/contact-us" },
];

/* ---------------- UTIL ---------------- */
const cx = (...a) => a.filter(Boolean).join(" ");
const anyMatch = (paths, pathname) =>
  paths.some((p) => pathname === p || pathname.startsWith(p + "/"));

/* ---------------- SIMPLE DROPDOWN ---------------- */
function SimpleDropdown({ title, items, active, pathname, onSelect }) {
  const [open, setOpen] = useState(false);
  const btn = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        btn.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
    >
      <Menu
        open={open}
        handler={setOpen}
        allowHover
        placement="bottom-start"
        offset={12}
      >
        <MenuHandler>
          <Button
            ref={btn}
            variant="text"
            className={cx(
              "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition",
              active || open
                ? "bg-primary font-secondary text-white font-semibold hover:text-white hover:bg-primary shadow-lg"
                : "text-black font-secondary  font-semibold hover:bg-primary hover:text-white"
            )}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            {title}
            <ChevronDownIcon
              className={cx(
                "h-3 w-3 transition-transform",
                open && "-rotate-180"
              )}
            />
          </Button>
        </MenuHandler>

        <MenuList className="p-2 mt-3 rounded-xl shadow-xl min-w-[220px] ring-1">
          {items.map((item) => {
            const isItemActive = anyMatch([item.path], pathname);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => {
                  e.preventDefault(); // avoid double nav
                  onSelect?.(item.path); // navigateOrSelect
                  close();
                }}
                className={cx(
                  "block text-sm px-3 py-2 rounded-lg",
                  isItemActive
                    ? "bg-primary font-primary text-xl text-white"
                    : "text-black font-primary text-xl hover:bg-primary hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}

/* ---------------- MEGA MENU (SERVICES) ---------------- */
function MegaMenu({ title, groups, active, pathname, onSelect }) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const wrapRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target))
        setOpen(false);
    };
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
      if (e.key === "ArrowDown")
        setActiveIdx((i) => Math.min(i + 1, groups.length - 1));
      if (e.key === "ArrowUp") setActiveIdx((i) => Math.max(i - 1, 0));
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, groups.length]);

  const close = () => setOpen(false);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
    >
      <Menu
        open={open}
        handler={setOpen}
        allowHover
        placement="bottom-start"
        offset={12}
      >
        <MenuHandler>
          <Button
            ref={btnRef}
            variant="text"
            className={cx(
              "flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition",
              active || open
                ? "bg-primary font-secondary font-semibold hover:-bg-primary text-white shadow-xl"
                : "text-black font-secondary font-semibold hover:bg-primary hover:text-white"
            )}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            {title}
            <ChevronDownIcon
              className={cx(
                "h-3 w-3 transition-transform",
                open && "-rotate-180"
              )}
            />
          </Button>
        </MenuHandler>

        <MenuList className="mt-3 p-0 bg-transparent shadow-none">
          <div className="flex gap-4 rounded-2xl bg-white/95 backdrop-blur p-3 shadow-xl ring-1 ring-black/5">
            {/* Left: group headings */}
            <div className="w-64 rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
              {groups.map((g, idx) => {
                const isActive = idx === activeIdx;
                const to = g.basePath || "#";
                return (
                  <Link
                    key={g.heading}
                    to={to}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={(e) => {
                      e.preventDefault();
                      if (g.basePath) onSelect?.(g.basePath);
                      close();
                    }}
                    className={cx(
                      "block w-full rounded-xl text-left px-4 py-3 text-xl font-primary text-[15px] transition",
                      isActive
                        ? "bg-primary rounded-xl shadow-xl font-primary text-white"
                        : "text-black/80 hover:bg-white hover:text-secondary",
                      !g.basePath && "cursor-default"
                    )}
                  >
                    {g.heading}
                  </Link>
                );
              })}
            </div>

            {/* Right: items */}
            <div className="w-80 rounded-xl bg-white shadow-xl ring-1 ring-black/5 p-3">
              {groups[activeIdx]?.basePath && (
                <Link
                  to={groups[activeIdx].basePath}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect?.(groups[activeIdx].basePath);
                    close();
                  }}
                  className="mb-2 inline-block rounded-full border border-white px-3 py-1 text-xs font-medium text-slate-600 hover:bg-secondary font-secondary hover:border-secondary hover:text-white"
                >
                  View all {groups[activeIdx].heading}
                </Link>
              )}

              {groups[activeIdx]?.items.map((it) => {
                const isItemActive = anyMatch([it.path], pathname);
                return (
                  <Link
                    key={it.path}
                    to={it.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelect?.(it.path);
                      close();
                    }}
                    className={cx(
                      "block rounded-lg px-3 py-2 text-[15px] transition",
                      isItemActive
                        ? "bg-primary font-primary text-xl text-white"
                        : "text-black/80 hover:bg-primary font-primary rounded-xl text-xl hover:text-white"
                    )}
                  >
                    {it.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}


function useViewportHeight(enabled = true) {
  const [vh, setVh] = React.useState(0);
  React.useEffect(() => {
    if (!enabled) return;
    const read = () => setVh((window.visualViewport?.height ?? window.innerHeight) || 0);
    read();
    window.addEventListener("resize", read);
    window.addEventListener("orientationchange", read);
    return () => {
      window.removeEventListener("resize", read);
      window.removeEventListener("orientationchange", read);
    };
  }, [enabled]);
  return vh;
}

/* ---------------- MAIN NAV ---------------- */
export function CenteredLogoNavbar({
  nav = NAV,
  onSelect,
  autoExpandMs = 2000,
}) {

  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const expandTimer = useRef(null);

  const isTopActive = (entry) => {
    if (entry.kind === "link") return anyMatch([entry.path], pathname);
    if (entry.kind === "dropdown")
      return anyMatch(
        entry.items.map((i) => i.path),
        pathname
      );
    if (entry.kind === "mega") {
      const starts = [
        ...entry.groups.map((g) => g.basePath),
        ...entry.groups.flatMap((g) => g.items.map((i) => i.path)),
      ].filter(Boolean);
      return anyMatch(starts, pathname);
    }
    return pathname === "/" && entry.kind === "logo";
  };

  // Auto-expand desktop pill after delay on each route
  useEffect(() => {
    setExpanded(false);
    if (expandTimer.current) clearTimeout(expandTimer.current);
    expandTimer.current = setTimeout(() => setExpanded(true), autoExpandMs);
    return () => {
      if (expandTimer.current) clearTimeout(expandTimer.current);
    };
  }, [pathname, autoExpandMs]);

    // inside your component
const drawerHeight = useViewportHeight(mobileOpen);

  // Scroll to top after route changes (wait a tick for new view to render)
  useEffect(() => {
    if (!mobileOpen) {
      const id = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [pathname, mobileOpen]);

  const openNow = () => {
    if (expandTimer.current) clearTimeout(expandTimer.current);
    setExpanded(true);
  };

  const navigateOrSelect = useCallback(
    (path) => {
      if (typeof onSelect === "function") onSelect(path);
      else navigate(path);
    },
    [navigate, onSelect]
  );

  const handleSelect = (path) => {
    navigateOrSelect(path);
    setExpanded(false);
    if (expandTimer.current) clearTimeout(expandTimer.current);
  };

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMenu = useCallback(() => setMobileOpen((v) => !v), []);

  // gets a reliable viewport height (handles iOS Safari address bar)


  return (
    <>
      {/* MOBILE: top bar + drawer trigger */}
      <div className="sm:hidden fixed top-4 left-0 right-0 z-50 px-4">
        <div className="flex items-center justify-between rounded-full bg-white/90 backdrop-blur px-3 py-2 shadow-xl">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleSelect("/");
            }}
            className="shrink-0"
          >
            <img src="/ayatiworks_logo.svg" alt="Logo" className="h-8 w-auto" />
          </Link>

          <button
            type="button"
            className="p-2 rounded-full hover:bg-black/5 transition"
            onClick={toggleMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE: Drawer with full-height MobileMenu content */}
      <Drawer
        id="mobile-nav-drawer"
        open={mobileOpen}
        onClose={closeMenu}
        placement="top"
        size={drawerHeight || 600} // 👈 full-screen height
        overlayProps={{
          className: "fixed inset-0 bg-black/45 backdrop-blur-md",
        }}
        className="sm:hidden p-0 bg-transparent shadow-none !overflow-hidden"
      >
        <div className="h-full w-full overflow-hidden">
          {" "}
          {/* 👈 fill Drawer */}
          <MobileMenu
            nav={nav}
            open={mobileOpen}
            setOpen={setMobileOpen}
            pathname={pathname}
            onSelect={navigateOrSelect}
          />
        </div>
      </Drawer>

      {/* DESKTOP: centered auto-expanding pill */}
      <div className="hidden sm:flex fixed top-8 left-1/2 -translate-x-1/2 z-40 justify-center items-center">
        {!expanded && (
          <button
            onClick={openNow}
            className="backdrop-blur shadow-glow w-[110px] rounded-full p-3 hover:scale-105 transition"
          >
            <img src="/logo.png" alt="Logo" className="h-8 w-auto mx-auto" />
          </button>
        )}

        {expanded && (
          <div className="animate-[fadeInScale_.35s_ease-out]">
            <Navbar className="relative w-[760px] max-w-[95vw] backdrop-blur shadow-3xl hover:shadow-glow px-3 py-2 flex flex-wrap items-center justify-center gap-2 rounded-full">
              {/* Logo */}
              <Button variant="text" className="p-0 bg-transparent shadow-none">
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect("/");
                  }}
                >
                  <img
                    src="/ayatiworks_logo.svg"
                    alt="Logo"
                    className="h-10 w-auto"
                  />
                </Link>
              </Button>

              {nav.map((entry) => {
                if (entry.kind === "dropdown") {
                  return (
                    <SimpleDropdown
                      key={entry.title}
                      title={entry.title}
                      items={entry.items}
                      active={isTopActive(entry)}
                      pathname={pathname}
                      onSelect={handleSelect}
                    />
                  );
                }
                if (entry.kind === "mega") {
                  return (
                    <MegaMenu
                      key={entry.title}
                      title={entry.title}
                      groups={entry.groups}
                      active={isTopActive(entry)}
                      pathname={pathname}
                      onSelect={handleSelect}
                    />
                  );
                }
                if (entry.kind === "link") {
                  const active = isTopActive(entry);
                  return (
                    <Button
                      key={entry.path}
                      variant="text"
                      onClick={() => handleSelect(entry.path)}
                      className={cx(
                        "text-sm rounded-full font-secondary font-semibold px-4 py-2 transition",
                        active
                          ? "bg-primary text-white shadow-xl"
                          : "text-black/80 hover:bg-primary hover:text-white"
                      )}
                    >
                      {entry.label}
                    </Button>
                  );
                }
                return null;
              })}
            </Navbar>
          </div>
        )}
      </div>
    </>
  );
}

/* Tailwind keyframes (add once globally)
@layer utilities {
  @keyframes fadeInScale {
    from { opacity: 0; transform: translateY(6px) scale(.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
}
*/
