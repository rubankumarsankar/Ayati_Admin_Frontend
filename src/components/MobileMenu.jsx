import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";

const cx = (...a) => a.filter(Boolean).join(" ");
const anyMatch = (paths, pathname) =>
  paths.some((p) => pathname === p || pathname.startsWith(p + "/"));
const idify = (s) =>
  String(s).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

export function MobileMenu({ nav, open, setOpen, pathname, onSelect }) {
  const [topOpenKey, setTopOpenKey] = useState(null); // only one top section
  const [svcOpenIdx, setSvcOpenIdx] = useState(-1);   // only one services group (all closed)

  // Reset accordions each time drawer opens
  useEffect(() => {
    if (open) {
      setTopOpenKey(null);
      setSvcOpenIdx(-1);
    }
  }, [open]);

  // Close drawer with Esc
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setOpen]);

  const openTop = (key, type) => {
    setTopOpenKey((prev) => {
      const next = prev === key ? null : key;
      if (type === "mega") setSvcOpenIdx(-1);
      return next;
    });
  };

  const toggleSvc = (idx) => setSvcOpenIdx((prev) => (prev === idx ? -1 : idx));

  const handleNav = (to) => {
    onSelect?.(to);
    setOpen(false);
    setTopOpenKey(null);
    setSvcOpenIdx(-1);
  };

  const SectionHeader = ({ title, onClick, isOpen }) => (
    <button
      onClick={onClick}
      className={cx(
        "w-full flex items-center justify-between px-4 py-3 rounded-xl",
        "text-base font-semibold transition",
        isOpen ? "bg-primary text-white" : "bg-white text-black hover:bg-primary hover:text-white"
      )}
      aria-expanded={isOpen}
      aria-controls={`${idify(title)}-panel`}
    >
      <span>{title}</span>
      <ChevronDownIcon className={cx("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
    </button>
  );

  const Collapse = ({ id, show, children, className }) => (
    <div
      id={id}
      className={cx(
        "overflow-hidden transition-all duration-300 will-change-[max-height,opacity]",
        show ? "max-h-[700px] opacity-100 mt-2" : "max-h-0 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );

  return (
    // Full-screen glass panel (parent <Drawer> renders this)
    <div className="h-[100dvh] max-h-[100dvh] w-full overflow-hidden">
      <div className="relative h-full bg-white/45 backdrop-blur-2xl border-b border-white/25 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white/55 backdrop-blur-2xl border-b border-white/25">
          <Link
            to="/"
            onClick={(e) => { e.preventDefault(); handleNav("/"); }}
            className="shrink-0"
          >
            <img src="/ayatiworks_logo.svg" alt="Logo" className="h-8 w-auto" />
          </Link>
          <button
            className="p-2 rounded-full text-secondary hover:bg-black/5"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="h-[calc(100dvh-56px)] overflow-y-auto overscroll-contain scroll-smooth px-3 pb-[env(safe-area-inset-bottom)] pt-2 space-y-3">
          {nav.map((entry) => {
            // Simple link
            if (entry.kind === "link") {
              const active = anyMatch([entry.path], pathname);
              return (
                <Link
                  key={entry.path}
                  to={entry.path}
                  onClick={(e) => { e.preventDefault(); handleNav(entry.path); }}
                  className={cx(
                    "block px-4 py-3 rounded-xl text-base font-semibold transition",
                    active ? "bg-primary text-white" : "bg-white/70 backdrop-blur-xl hover:bg-primary hover:text-white"
                  )}
                >
                  {entry.label}
                </Link>
              );
            }

            // Dropdown (About / Insights)
            if (entry.kind === "dropdown") {
              const key = `dd-${entry.title}`;
              const isOpen = topOpenKey === key;
              return (
                <div key={key} className="rounded-xl">
                  <SectionHeader
                    title={entry.title}
                    isOpen={isOpen}
                    onClick={() => openTop(key, "dropdown")}
                  />
                  <Collapse id={`${idify(entry.title)}-panel`} show={isOpen}>
                    <div className="mt-2 space-y-1">
                      {entry.items.map((it) => {
                        const active = anyMatch([it.path], pathname);
                        return (
                          <Link
                            key={it.path}
                            to={it.path}
                            onClick={(e) => { e.preventDefault(); handleNav(it.path); }}
                            className={cx(
                              "block rounded-lg px-4 py-2 text-sm transition",
                              active
                                ? "bg-primary text-white"
                                : "bg-white/60 backdrop-blur-xl hover:bg-primary hover:text-white"
                            )}
                          >
                            {it.label}
                          </Link>
                        );
                      })}
                    </div>
                  </Collapse>
                </div>
              );
            }

            // Mega (Services)
            if (entry.kind === "mega") {
              const key = `mega-${entry.title}`;
              const isOpen = topOpenKey === key;
              return (
                <div key={key} className="rounded-xl">
                  <SectionHeader
                    title={entry.title}
                    isOpen={isOpen}
                    onClick={() => openTop(key, "mega")}
                  />

                  <Collapse id={`${idify(entry.title)}-panel`} show={isOpen} className="mt-2 space-y-2">
                    {entry.groups.map((g, idx) => {
                      const gOpen = svcOpenIdx === idx;
                      return (
                        <div key={g.heading} className="rounded-lg border border-white/20 bg-white/50 backdrop-blur-xl">
                          {/* Group row */}
                          <button
                            onClick={() => toggleSvc(idx)}
                            className={cx(
                              "w-full flex items-center justify-between px-4 py-3",
                              "text-sm font-semibold transition rounded-lg",
                              gOpen
                                ? "bg-primary/90 text-white"
                                : "bg-white/50 backdrop-blur-xl hover:bg-primary hover:text-white"
                            )}
                            aria-expanded={gOpen}
                            aria-controls={`${idify(g.heading)}-items`}
                          >
                            <span>{g.heading}</span>
                            <ChevronDownIcon className={cx("h-4 w-4 transition-transform", gOpen && "rotate-180")} />
                          </button>

                          {/* Items */}
                          <div
                            id={`${idify(g.heading)}-items`}
                            className={cx(
                              "overflow-hidden transition-all duration-300 will-change-[max-height,opacity]",
                              gOpen ? "max-h-[700px] opacity-100 mt-2" : "max-h-0 opacity-0"
                            )}
                          >
                            <div className="px-2 pb-3 pt-2 space-y-1">
                              {g.basePath && (
                                <Link
                                  to={g.basePath}
                                  onClick={(e) => { e.preventDefault(); handleNav(g.basePath); }}
                                  className="mb-1 inline-block rounded-full border border-white/30 bg-white/50 backdrop-blur-xl
                                             px-3 py-1 text-xs font-medium hover:bg-primary hover:text-white transition"
                                >
                                  View all {g.heading}
                                </Link>
                              )}

                              {g.items.map((it) => {
                                const active = anyMatch([it.path], pathname);
                                return (
                                  <Link
                                    key={it.path}
                                    to={it.path}
                                    onClick={(e) => { e.preventDefault(); handleNav(it.path); }}
                                    className={cx(
                                      "block rounded-lg px-3 py-2 text-sm transition",
                                      active
                                        ? "bg-primary text-white"
                                        : "bg-white/60 backdrop-blur-xl hover:bg-primary hover:text-white"
                                    )}
                                  >
                                    {it.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Collapse>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
