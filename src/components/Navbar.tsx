"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/types/NavItem";

function MenuLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const className =
    "block rounded-md px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white";

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

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileConcernsOpen, setMobileConcernsOpen] = useState(false);

  function closeMenus() {
    setOpenMenu(null);
    setMobileMenuOpen(false);
    setMobileConcernsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/25 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          onClick={closeMenus}
          className="text-xl font-semibold tracking-[0.2em]"
        >
          SAMPAN
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => item.megaMenu && setOpenMenu(item.id)}
              onMouseLeave={() => item.megaMenu && setOpenMenu(null)}
            >
              {item.megaMenu ? (
                <button
                  type="button"
                  aria-expanded={openMenu === item.id}
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === item.id ? null : item.id,
                    )
                  }
                  onFocus={() => setOpenMenu(item.id)}
                  className="flex items-center gap-2 text-sm transition hover:text-emerald-300"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-xs">
                    {openMenu === item.id ? "▲" : "▼"}
                  </span>
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className="text-sm transition hover:text-emerald-300"
                >
                  {item.label}
                </Link>
              )}

              {item.megaMenu && openMenu === item.id && (
                <div className="absolute left-1/2 top-full w-screen -translate-x-1/2 border-t border-white/15 bg-black/95 shadow-2xl">
                  <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-8 lg:grid-cols-4 lg:px-10">
                    {item.megaMenu.map((column) => (
                      <div key={column.id}>
                        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                          {column.title}
                        </h2>
                        <div className="space-y-1">
                          {column.items.map((menuItem) => (
                            <MenuLink key={menuItem.id} item={menuItem} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10">
                    <div className="mx-auto max-w-7xl px-6 py-4 lg:px-10">
                      <Link
                        href="/concerns"
                        onClick={closeMenus}
                        className="text-sm text-white transition hover:text-emerald-300"
                      >
                        View all concerns →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden"
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          data-lenis-prevent
          className="max-h-[calc(100dvh-5rem)] touch-pan-y overscroll-contain overflow-y-auto border-t border-white/15 bg-black/95 px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.megaMenu ? (
                  <button
                    type="button"
                    aria-expanded={mobileConcernsOpen}
                    onClick={() => setMobileConcernsOpen((open) => !open)}
                    className="flex w-full items-center justify-between text-lg"
                  >
                    {item.label}
                    <span aria-hidden="true">
                      {mobileConcernsOpen ? "−" : "+"}
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    onClick={closeMenus}
                    className="text-lg"
                  >
                    {item.label}
                  </Link>
                )}

                {item.megaMenu && mobileConcernsOpen && (
                  <div className="mt-4 space-y-5 border-l border-white/20 pl-4">
                    {item.megaMenu.map((column) => (
                      <div key={column.id}>
                        <h2 className="mb-2 text-xs uppercase tracking-[0.2em] text-emerald-300">
                          {column.title}
                        </h2>
                        <div className="space-y-1">
                          {column.items.map((menuItem) => (
                            <MenuLink
                              key={menuItem.id}
                              item={menuItem}
                              onClick={closeMenus}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
