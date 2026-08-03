"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/types/NavItem";

function MenuLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const className =
    "block rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-white/10 hover:text-white";

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
  const [isScrolled, setIsScrolled] = useState(false);
  function closeMenus() {
    setOpenMenu(null);
    setMobileMenuOpen(false);
    setMobileConcernsOpen(false);
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-gray-200 bg-white/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={`text-2xl font-bold tracking-[0.2em] ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            SAMPAN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => item.megaMenu && setOpenMenu(item.id)}
              onMouseLeave={() => item.megaMenu && setOpenMenu(null)}
            >
              {item.megaMenu ? (
                <button
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-800 hover:text-black"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.label}

                  <svg
                    className={`h-4 w-4 transition-transform ${
                      openMenu === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className={`relative text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-800 hover:text-black"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {item.label}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}

              {/* Mega Menu */}
              {item.megaMenu && openMenu === item.id && (
                <div className="absolute left-1/2 top-full mt-8 w-[1100px] -translate-x-1/2 rounded-2xl bg-white p-10 shadow-2xl">
                  <div className="grid grid-cols-4 gap-8">
                    {item.megaMenu.map((column) => (
                      <div key={column.id}>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-red-400">
                          {column.title}
                        </h3>

                        <div className="space-y-2">
                          {column.items.map((menuItem) => (
                            <MenuLink key={menuItem.id} item={menuItem} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 lg:inline-flex"
          >
            Contact Us
          </Link>

          <button
            className={`lg:hidden ${isScrolled ? "text-black" : "text-white"}`}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
