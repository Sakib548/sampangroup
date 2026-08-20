"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/navigation";
import MegaMenu from "@/components/MegaMenu";

export default function Navbar3() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const menuItem = navItems.find((item) => item.id === open);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#071b13]/70 text-white backdrop-blur-xl">
    <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16"><div className="flex h-20 items-center justify-between">
      <Link href="/" aria-label="Sampan Group home"><Image src="/images/Sampan-Group.png" alt="Sampan Group" width={190} height={68} priority className="h-auto w-36 brightness-0 invert sm:w-44" /></Link>
      <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">{navItems.map((item) => item.megaMenu ? <button key={item.id} type="button" onMouseEnter={() => setOpen(item.id)} onClick={() => setOpen(open === item.id ? null : item.id)} className="px-4 py-3 text-sm font-medium text-white/80 transition hover:text-[#a8df73]">{item.label} <span className="ml-1">⌄</span></button> : <Link key={item.id} href={item.href ?? "#"} className={`px-4 py-3 text-sm font-medium transition ${pathname === item.href ? "text-[#a8df73]" : "text-white/80 hover:text-[#a8df73]"}`}>{item.label}</Link>)}</nav>
      <Link href="/contact" className="hidden border border-white/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-[#ef636b] hover:border-[#ef636b] md:inline-flex">Explore More ↗</Link>
      <button type="button" aria-label="Toggle menu" aria-expanded={mobile} onClick={() => setMobile(!mobile)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/40 md:hidden"><span className={`h-px w-4 bg-white transition ${mobile ? "translate-y-[3px] rotate-45" : ""}`} /><span className={`h-px w-4 bg-white transition ${mobile ? "-translate-y-[3px] -rotate-45" : ""}`} /></button>
    </div>{open && menuItem?.megaMenu && <div onMouseLeave={() => setOpen(null)}><MegaMenu item={menuItem} onClose={() => setOpen(null)} /></div>}{mobile && <nav className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/15 bg-[#f7f8f5] p-6 text-[#183b2b] md:hidden">{navItems.map((item) => item.megaMenu ? <div key={item.id}><button type="button" onClick={() => setOpen(open === item.id ? null : item.id)} className="w-full py-4 text-left text-2xl font-medium">{item.label} +</button>{open === item.id && <div className="pb-4">{item.megaMenu.map((column) => <div key={column.id} className="mb-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">{column.title}</p>{column.items.map((entry) => <Link key={entry.id} href={entry.href ?? "#"} onClick={() => setMobile(false)} className="block py-2 text-base text-slate-700">{entry.label}</Link>)}</div>)}</div>}</div> : <Link key={item.id} href={item.href ?? "#"} onClick={() => setMobile(false)} className="block border-t border-[#183b2b]/10 py-4 text-2xl font-medium">{item.label}</Link>)}</nav>}</div>
  </header>;
}
