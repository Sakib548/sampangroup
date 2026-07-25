"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-black/20 text-white backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="text-xl font-semibold tracking-[0.2em]">
          SAMPAN
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.href ? (
              <Link key={item.id} href={item.href}>
                {item.label}
              </Link>
            ) : (
              <button key={item.id}>{item.label}</button>
            ),
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/20 bg-black/90 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) =>
              item.href ? (
                <Link key={item.id} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <button key={item.id}>{item.label}</button>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
