import Link from "next/link";
import type { NavItem } from "@/types/NavItem";

export default function MegaMenu({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  if (!item.megaMenu) return null;

  return (
    <div className="absolute inset-x-0 top-full hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-x border-b border-slate-200 bg-[#f7f8f5] text-[#253247] shadow-[0_30px_70px_rgba(15,35,28,0.18)] md:block">
      <div className="columns-1 gap-x-8 p-8 sm:columns-2 lg:columns-5 lg:p-10">
        {item.megaMenu.map((column) => (
          <div key={column.id} className="mb-8 break-inside-avoid">
            <p className="mb-4 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-emerald-700">
              {column.title}
            </p>
            <div>
              {column.items.map((link) =>
                link.external ? (
                  <a key={link.id} href={link.href} target="_blank" rel="noreferrer" onClick={onClose} className="block border-b border-transparent py-2 text-[15px] leading-5 text-slate-700 transition-colors hover:border-emerald-700/30 hover:text-emerald-800">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.id} href={link.href ?? "#"} onClick={onClose} className="block border-b border-transparent py-2 text-[15px] leading-5 text-slate-700 transition-colors hover:border-emerald-700/30 hover:text-emerald-800">
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-slate-200 bg-white/60 px-8 py-5 lg:px-10">
        <p className="text-sm text-slate-500">Explore the businesses behind Sampan Group.</p>
        <Link href={item.href ?? "#"} onClick={onClose} className="text-sm font-semibold text-emerald-800 transition hover:text-red-600">
          View all {item.label.toLowerCase()} →
        </Link>
      </div>
    </div>
  );
}
