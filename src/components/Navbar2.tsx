"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/types/NavItem";
import MegaMenu from "@/components/MegaMenu";

const lightNavbarRoutes = ["/concerns"];

function NavigationLink({
  item,
  className,
  onClick,
}: {
  item: NavItem;
  className: string;
  onClick?: () => void;
}) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href ?? "#"} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

export default function Navbar2() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isLightPage = lightNavbarRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  const closeTimerRef = useRef<number | null>(null);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [openMegaId, setOpenMegaId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileConcernsOpen, setMobileConcernsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const concernItem = navItems.find((item) => item.megaMenu);
  const standardItems = navItems.filter(
    (item) => !item.megaMenu && item.href !== "/contact",
  );

  function closeMenus() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setDesktopMenuOpen(false);
    setOpenMegaId(null);
    setMobileMenuOpen(false);
    setMobileConcernsOpen(false);
  }

  function keepDesktopMenuOpen() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function scheduleDesktopMenuClose() {
    // 180ms delay allows the cursor to bridge the gap between the trigger and the dropdown
    closeTimerRef.current = window.setTimeout(() => {
      setDesktopMenuOpen(false);
      setOpenMegaId(null);
      closeTimerRef.current = null;
    }, 180);
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > window.innerHeight * 0.85);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenus();
    }

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  // Determine if navbar should show solid background
  const showSolidNav = isScrolled || isLightPage;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        showSolidNav
          ? "border-b border-black/10 bg-white/90 py-3 text-neutral-950 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent py-5 text-white"
      }`}
    >
      {/* Removed broad onMouseEnter/Leave from this container */}
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* LOGO - Significantly Increased Size */}
          <Link
            href="/"
            onClick={closeMenus}
            aria-label="Sampan Group home"
            className="group relative z-10 flex items-center"
          >
            <Image
              src="/images/Sampan-Group.webp"
              alt="Sampan Group"
              width={240}
              height={80}
              priority
              className={`h-14 w-auto transition-all duration-500 sm:h-16 lg:h-12 ${
                showSolidNav ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (pathname.startsWith(item.href) && item.href !== "/");

              return item.megaMenu ? (
                <button
                  key={item.id}
                  type="button"
                  aria-expanded={desktopMenuOpen && openMegaId === item.id}
                  aria-controls="navbar2-concerns"
                  // Attach hover directly to the trigger
                  onMouseEnter={() => {
                    keepDesktopMenuOpen();
                    setDesktopMenuOpen(true);
                    setOpenMegaId(item.id);
                  }}
                  onMouseLeave={scheduleDesktopMenuClose}
                  onFocus={() => {
                    setDesktopMenuOpen(true);
                    setOpenMegaId(item.id);
                  }}
                  onClick={() => {
                    setDesktopMenuOpen((open) => !open);
                    setOpenMegaId((current) =>
                      current === item.id ? null : item.id,
                    );
                  }}
                  className={`group relative flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                    showSolidNav
                      ? "text-neutral-600 hover:text-neutral-950"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`text-[10px] opacity-70 transition-transform duration-300 ${
                      desktopMenuOpen && openMegaId === item.id
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    ▼
                  </span>
                  {/* Active Underline */}
                  <span
                    className={`absolute -bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100 ${isActive ? "scale-x-100" : ""}`}
                  />
                </button>
              ) : (
                <NavigationLink
                  key={item.id}
                  item={item}
                  className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:origin-left after:scale-x-0 after:bg-emerald-500 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive
                      ? "text-emerald-500 after:scale-x-100"
                      : showSolidNav
                        ? "text-neutral-600 hover:text-neutral-950"
                        : "text-white/70 hover:text-white"
                  }`}
                />
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2 border px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                showSolidNav
                  ? "border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                  : "border-white/40 text-white hover:bg-white hover:text-neutral-950"
              }`}
            >
              Let&apos;s talk
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`relative z-10 flex h-12 w-12 flex-col items-center justify-center gap-2 lg:hidden ${
              showSolidNav ? "text-neutral-950" : "text-white"
            }`}
          >
            <span
              className={`h-px w-7 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-7 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* MEGA MENU DROPDOWN */}
        {desktopMenuOpen && openMegaId && (
          // Wrap the dropdown in a hover-aware div to bridge the gap from the trigger
          <div
            onMouseEnter={keepDesktopMenuOpen}
            onMouseLeave={scheduleDesktopMenuClose}
          >
            <MegaMenu
              item={
                navItems.find((item) => item.id === openMegaId) ?? navItems[0]
              }
              onClose={closeMenus}
            />
          </div>
        )}

        {/* MOBILE MENU OVERLAY */}
        {mobileMenuOpen && (
          <nav
            data-lenis-prevent
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-x border-b border-neutral-200 bg-white text-neutral-950 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col p-8">
              {standardItems.map((item, index) => (
                <NavigationLink
                  key={item.id}
                  item={item}
                  onClick={closeMenus}
                  className={`py-5 text-3xl font-semibold tracking-tight transition-colors hover:text-emerald-600 ${
                    index ? "border-t border-neutral-100" : ""
                  }`}
                />
              ))}

              {concernItem?.megaMenu && (
                <div className="border-t border-neutral-100">
                  <button
                    type="button"
                    aria-expanded={mobileConcernsOpen}
                    onClick={() => setMobileConcernsOpen((open) => !open)}
                    className="flex w-full items-center justify-between py-5 text-3xl font-semibold tracking-tight"
                  >
                    {concernItem.label}
                    <span
                      aria-hidden="true"
                      className={`text-2xl text-neutral-400 transition-transform duration-300 ${
                        mobileConcernsOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {mobileConcernsOpen && (
                    <div className="space-y-6 border-t border-neutral-100 bg-neutral-50 px-4 py-6">
                      {concernItem.megaMenu.map((column) => (
                        <div key={column.id}>
                          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                            {column.title}
                          </p>
                          <div className="space-y-1">
                            {column.items.map((item) => (
                              <NavigationLink
                                key={item.id}
                                item={item}
                                onClick={closeMenus}
                                className="block py-2 text-lg text-neutral-600 transition hover:text-emerald-800"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="border-t border-neutral-100 p-8">
              <Link
                href="/contact"
                onClick={closeMenus}
                className="flex items-center justify-between border border-neutral-900 px-6 py-5 text-sm font-bold uppercase tracking-[0.15em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Let&apos;s talk
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
