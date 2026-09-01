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

  const isCorporate = item.layout === "corporate";
  const isInvestment = item.layout === "investment";
  const isConcerns = item.layout === "concerns" || !item.layout;

  const footerTexts: Record<string, { sub: string; link: string }> = {
    "Who Are We": {
      sub: "Learn more about Sampan Group and our journey.",
      link: "Discover Sampan Group",
    },
    "Our Concerns": {
      sub: "Explore the businesses behind Sampan Group.",
      link: "View all concerns",
    },
    "Investment Portfolio": {
      sub: "Explore opportunities across the Sampan Group portfolio.",
      link: "Explore investments",
    },
  };
  const footer = footerTexts[item.label] || footerTexts["Our Concerns"];

  const headerTexts: Record<string, string> = {
    "Who Are We": "Discover the people, values and story behind Sampan Group.",
    "Investment Portfolio": "Opportunities designed around long-term value.",
    "Our Concerns": "Explore the businesses behind Sampan Group.",
  };

  return (
    <div
      className="absolute inset-x-0 top-full z-40 hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-x border-b border-slate-200 bg-[#f7f8f5] text-[#253247] shadow-[0_30px_70px_rgba(15,35,28,0.18)] md:block"
      style={{
        animation: "megaMenuFadeIn 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
      }}
    >
      <style jsx>{`
        @keyframes megaMenuFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1500px] px-8 py-10 lg:px-12 lg:py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            {item.label}
          </p>
          <h3 className="max-w-3xl text-2xl font-semibold tracking-tight text-[#253247] lg:text-3xl">
            {headerTexts[item.label]}
          </h3>
        </div>

        {isConcerns && (
          <div className="columns-1 gap-x-8 sm:columns-2 lg:columns-5">
            {item.megaMenu.map((column) => (
              <div key={column.id} className="mb-8 break-inside-avoid">
                <p className="mb-4 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-emerald-700">
                  {column.title}
                </p>
                <div>
                  {column.items.map((link) => (
                    <MenuLink key={link.id} link={link} onClose={onClose} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {isCorporate && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {item.megaMenu[0].items.map((card) => (
              <MenuCard key={card.id} card={card} onClose={onClose} />
            ))}
          </div>
        )}

        {isInvestment && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {item.megaMenu[0].items.map((card) => (
              <MenuCard key={card.id} card={card} onClose={onClose} large />
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
          <p className="text-sm text-slate-500">{footer.sub}</p>
          <Link
            href={item.href ?? "#"}
            onClick={onClose}
            className="group flex items-center gap-2 text-sm font-semibold text-emerald-800 transition hover:text-red-600"
          >
            {footer.link}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Simple Link List Component for Concerns
function MenuLink({ link, onClose }: { link: NavItem; onClose: () => void }) {
  const classes =
    "block border-b border-transparent py-2 text-[15px] leading-5 text-slate-700 transition-colors hover:border-emerald-700/30 hover:text-emerald-800";

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className={classes}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href ?? "#"} onClick={onClose} className={classes}>
      {link.label}
    </Link>
  );
}

// Premium Card Component for Corporate & Investment Menus
function MenuCard({
  card,
  onClose,
  large,
}: {
  card: NavItem;
  onClose: () => void;
  large?: boolean;
}) {
  const cardClasses = `group relative flex flex-col bg-white p-6 border border-slate-200 transition-all duration-300 hover:-translate-y-[3px] hover:border-emerald-700/30`;

  const innerContent = (
    <>
      <div className="flex items-start justify-between">
        <h4
          className={`font-semibold text-[#253247] ${large ? "text-lg" : "text-base"}`}
        >
          {card.label}
        </h4>
        {card.comingSoon && (
          <span className="rounded-full border border-emerald-700/30 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            Coming Soon
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-500">{card.description}</p>
      <div className="mt-auto pt-6">
        <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800">
          {card.comingSoon ? "Learn More" : "Explore"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </div>
    </>
  );

  if (card.comingSoon) {
    return (
      <div className={cardClasses + " cursor-default"}>{innerContent}</div>
    );
  }

  if (card.external) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className={cardClasses}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <Link href={card.href ?? "#"} onClick={onClose} className={cardClasses}>
      {innerContent}
    </Link>
  );
}
