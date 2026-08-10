"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/types/NavItem";

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
  const closeTimerRef = useRef<number | null>(null);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
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
    closeTimerRef.current = window.setTimeout(() => {
      setDesktopMenuOpen(false);
      closeTimerRef.current = null;
    }, 180);
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        !isAboutPage ? "backdrop-blur-xl" : ""
      } ${
        isScrolled
          ? "border-black/10 bg-white/95 text-neutral-950"
          : "border-white/15 bg-black/25 text-white"
      }`}
    >
      <div
        className="relative mx-auto max-w-7xl"
        onMouseEnter={keepDesktopMenuOpen}
        onMouseLeave={scheduleDesktopMenuClose}
      >
        <div className="flex h-20 items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            onClick={closeMenus}
            aria-label="Sampan Group home"
            className="group flex items-center gap-3"
          >
            <Image
              src="/images/Sampan-Group.png"
              alt="Sampan Group"
              width={190}
              height={68}
              priority
              className={`h-auto w-48 object-contain sm:w-56 ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems
              .filter((item) => item.href !== "/contact")
              .map((item) =>
                item.megaMenu ? (
                  <button
                    key={item.id}
                    type="button"
                    aria-expanded={desktopMenuOpen}
                    aria-controls="navbar2-concerns"
                    onMouseEnter={() => {
                      keepDesktopMenuOpen();
                      setDesktopMenuOpen(true);
                    }}
                    onFocus={() => setDesktopMenuOpen(true)}
                    onClick={() => setDesktopMenuOpen((open) => !open)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${isScrolled ? "text-neutral-600 hover:text-neutral-950" : "text-white/75 hover:text-white"}`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`text-xs transition-transform duration-300 ${
                        desktopMenuOpen ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                ) : (
                  <NavigationLink
                    key={item.id}
                    item={item}
                    className={`px-4 py-3 text-sm font-medium transition-colors ${isScrolled ? "text-neutral-600 hover:text-neutral-950" : "text-white/75 hover:text-white"}`}
                  />
                ),
              )}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-3 border px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${isScrolled ? "border-neutral-300 text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white" : "border-white/35 text-white hover:border-white hover:bg-white hover:text-neutral-950"}`}
            >
              {/* Let&apos;s talk */}
              Explore More
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 border md:hidden ${isScrolled ? "border-neutral-300 text-neutral-950" : "border-white/30 text-white"}`}
          >
            <span
              className={`h-px w-4 bg-current transition-transform ${
                mobileMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-current transition-transform ${
                mobileMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {concernItem?.megaMenu && desktopMenuOpen && (
          <div
            id="navbar2-concerns"
            onMouseEnter={keepDesktopMenuOpen}
            className="absolute inset-x-0 top-full hidden overflow-hidden border-x border-b border-white/15 bg-neutral-950/95 text-white shadow-[0_30px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:block"
          >
            <div className="grid grid-cols-4 gap-x-8 gap-y-9 p-8 lg:p-10">
              {concernItem.megaMenu.map((column) => (
                <div key={column.id}>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                    {column.title}
                  </p>
                  <div className="space-y-1">
                    {column.items.map((item) => (
                      <NavigationLink
                        key={item.id}
                        item={item}
                        onClick={closeMenus}
                        className="block border-b border-transparent py-1.5 text-sm leading-5 text-white/60 transition-colors hover:border-white/20 hover:text-white"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-8 py-5 lg:px-10">
              <p className="text-sm text-white/45">
                Explore the businesses behind Sampan Group.
              </p>
              <Link
                href="/concerns"
                onClick={closeMenus}
                className="text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
              >
                View all concerns →
              </Link>
            </div>
          </div>
        )}

        {mobileMenuOpen && (
          <nav
            data-lenis-prevent
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-x border-b border-white/15 bg-neutral-950/95 p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col">
              {standardItems.map((item, index) => (
                <NavigationLink
                  key={item.id}
                  item={item}
                  onClick={closeMenus}
                  className={`py-4 text-2xl font-medium ${
                    index ? "border-t border-white/10" : ""
                  }`}
                />
              ))}

              {concernItem?.megaMenu && (
                <div className="border-t border-white/10">
                  <button
                    type="button"
                    aria-expanded={mobileConcernsOpen}
                    onClick={() => setMobileConcernsOpen((open) => !open)}
                    className="flex w-full items-center justify-between py-4 text-2xl font-medium"
                  >
                    {concernItem.label}
                    <span
                      aria-hidden="true"
                      className={`text-lg transition-transform ${
                        mobileConcernsOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {mobileConcernsOpen && (
                    <div className="space-y-6 border-t border-white/10 bg-white/[0.03] px-4 py-6">
                      {concernItem.megaMenu.map((column) => (
                        <div key={column.id}>
                          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                            {column.title}
                          </p>
                          <div>
                            {column.items.map((item) => (
                              <NavigationLink
                                key={item.id}
                                item={item}
                                onClick={closeMenus}
                                className="block py-1.5 text-sm text-white/60 transition hover:text-white"
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

            <Link
              href="/contact"
              onClick={closeMenus}
              className="mt-6 flex items-center justify-between border border-white/30 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
            >
              Let&apos;s talk
              <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
