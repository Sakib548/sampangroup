"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/types/NavItem";
import MegaMenu from "@/components/MegaMenu";

// Add routes here when their first section uses a light background.
// const lightNavbarRoutes = ["/contact", "/concerns"];
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
  const isAboutPage = pathname === "/about ";
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
        isScrolled || isLightPage
          ? "border-black/10 bg-white/95 text-neutral-950"
          : "border-white/15 bg-black/25 text-white"
      }`}
    >
      <div
        className="relative mx-auto max-w-7xl"
        onMouseEnter={keepDesktopMenuOpen}
        onMouseLeave={scheduleDesktopMenuClose}
      >
        <div className="flex h-16 items-center justify-between px-6 lg:px-10">
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
              className={`h-auto w-40 object-contain sm:w-44 ${isScrolled || isLightPage ? "" : "brightness-0 invert"}`}
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems
              // .filter((item) => item.href !== "/contact")
              .map((item) => {
                const isActive =
                  pathname == item.href ||
                  (pathname.startsWith(item.href) && item.href !== "/");
                return item.megaMenu ? (
                  <button
                    key={item.id}
                    type="button"
                    aria-expanded={desktopMenuOpen && openMegaId === item.id}
                    aria-controls="navbar2-concerns"
                    onMouseEnter={() => {
                      keepDesktopMenuOpen();
                      setDesktopMenuOpen(true);
                      setOpenMegaId(item.id);
                    }}
                    onFocus={() => {
                      setDesktopMenuOpen(true);
                      setOpenMegaId(item.id);
                    }}
                    onClick={() => {
                      setDesktopMenuOpen((open) => !open);
                      setOpenMegaId((current) => (current === item.id ? null : item.id));
                    }}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${isScrolled || isLightPage ? "text-neutral-600 hover:text-neutral-950" : "text-white/75 hover:text-white"}`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`text-xs transition-transform duration-300 ${
                        desktopMenuOpen && openMegaId === item.id ? "rotate-180" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                ) : (
                  <NavigationLink
                    key={item.id}
                    item={item}
                    className={`relative px-4 py-3 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-1 after:left-4 after:h-px after:bg-current after:transition-all after:duration-300 ${
                      isActive
                        ? "text-emerald-500 after:w-[calc(100%-2rem)]"
                        : isScrolled || isLightPage
                          ? "text-neutral-600 hover:text-emerald-700 after:w-0 hover:after:w-[calc(100%-2rem)]"
                          : "text-white/80 hover:text-emerald-300 after:w-0 hover:after:w-[calc(100%-2rem)]"
                    }`}
                  />
                );
              })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-3 border px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${isScrolled || isLightPage ? "border-neutral-300 text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white" : "border-white/35 text-white hover:border-white hover:bg-white hover:text-neutral-950"}`}
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
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 border md:hidden ${isScrolled || isLightPage ? "border-neutral-300 text-neutral-950" : "border-white/30 text-white"}`}
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

        {desktopMenuOpen && openMegaId && (
          <MegaMenu
            item={navItems.find((item) => item.id === openMegaId) ?? navItems[0]}
            onClose={closeMenus}
          />
        )}

        {false && concernItem?.megaMenu && desktopMenuOpen && (
          <div
            id="navbar2-concerns"
            onMouseEnter={keepDesktopMenuOpen}
            className="absolute inset-x-0 top-full hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-x border-b border-slate-200 bg-[#f7f8f5] text-[#253247] shadow-[0_30px_70px_rgba(15,35,28,0.18)] md:block"
          >
            <div className="grid grid-cols-5 gap-x-7 gap-y-9 p-8 lg:p-10">
              {(navItems.find((item) => item.id === openMegaId)?.megaMenu ?? []).map((column) => (
                <div key={column.id}>
                  <p className="mb-4 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-emerald-700">
                    {column.title}
                  </p>
                  <div className="space-y-1">
                    {column.items.map((item) => (
                      <NavigationLink
                        key={item.id}
                        item={item}
                        onClick={closeMenus}
                        className="block border-b border-transparent py-2 text-[15px] leading-5 text-slate-700 transition-colors hover:border-emerald-700/30 hover:text-emerald-800"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 bg-white/60 px-8 py-5 lg:px-10">
              <p className="text-sm text-slate-500">
                Explore the businesses behind Sampan Group.
              </p>
              <Link
                href="/concerns"
                onClick={closeMenus}
                className="text-sm font-semibold text-emerald-800 transition hover:text-red-600"
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
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-x border-b border-slate-200 bg-[#f7f8f5] p-6 text-[#253247] shadow-[0_24px_70px_rgba(15,35,28,0.18)] md:hidden"
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
                    className="flex w-full items-center justify-between py-4 text-2xl font-medium text-[#253247]"
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
                    <div className="space-y-6 border-t border-slate-200 bg-white/60 px-4 py-6">
                      {concernItem.megaMenu.map((column) => (
                        <div key={column.id}>
                          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">
                            {column.title}
                          </p>
                          <div>
                            {column.items.map((item) => (
                              <NavigationLink
                                key={item.id}
                                item={item}
                                onClick={closeMenus}
                                className="block py-2 text-base text-slate-700 transition hover:text-emerald-800"
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
              className="mt-6 flex items-center justify-between border border-emerald-800/40 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-900"
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
