"use client";

import { useState } from "react";
import Image from "next/image";
import { FaShoppingBasket, FaTag, FaCheckCircle, FaStar, FaLeaf, FaExternalLinkAlt } from "react-icons/fa";

export interface RetailProductItem {
  id: string;
  name: string;
  category: string;
  priceBDT: string;
  packSize: string;
  image: string;
  tag?: string;
  description: string;
  highlights: string[];
}

export interface RetailProductCatalogProps {
  title?: string;
  subtitle?: string;
  products: RetailProductItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  badgeColor?: string;
  onSelectProduct?: (product: RetailProductItem) => void;
}

export default function RetailProductCatalog({
  title = "Curated Product Categories & Offerings",
  subtitle = "Discover our artisanal sweet boxes, fresh groceries, premium imports, and daily essentials.",
  products,
  bgTheme = "about-ivory",
  accentColor = "#dc2626",
  badgeColor = "#f59e0b",
  onSelectProduct,
}: RetailProductCatalogProps) {
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = filterCategory === "all"
    ? products
    : products.filter((p) => p.category === filterCategory);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="product-catalog" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(245,158,11,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(220,38,38,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaShoppingBasket className="text-xs" />
              <span>What's Sold &amp; Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-12 border-b border-current/15 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat
                    ? "bg-[#090d16] text-white shadow-md"
                    : "bg-white text-current hover:bg-[#090d16] hover:text-white border border-current/20"
                }`}
              >
                {cat === "all" ? "All Product Categories" : cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="border border-current/15 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Product Image Box */}
              <div className="relative h-60 w-full overflow-hidden bg-neutral-100 border-b border-current/10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <span
                  className="absolute top-4 left-4 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border shadow-sm backdrop-blur-md bg-white/90"
                  style={{ color: accentColor, borderColor: `${accentColor}40` }}
                >
                  {item.category}
                </span>

                {/* Optional Tag (e.g. Bestseller, Fresh, Sugar-Free) */}
                {item.tag && (
                  <span
                    className="absolute top-4 right-4 font-mono text-[10px] font-bold uppercase px-2.5 py-1 text-white shadow-md"
                    style={{ backgroundColor: badgeColor }}
                  >
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-bold text-current leading-snug">{item.name}</h3>
                  </div>

                  <p className="text-xs opacity-75 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-1.5 pt-2 text-xs font-sans">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 opacity-90">
                        <FaCheckCircle className="text-emerald-600 text-[11px] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Price & Order Action */}
                <div className="pt-4 border-t border-current/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase block opacity-60">Price ({item.packSize})</span>
                    <span className="font-mono font-bold text-xl" style={{ color: accentColor }}>
                      BDT {item.priceBDT}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProduct && onSelectProduct(item)}
                    className="px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all cursor-pointer hover:opacity-90 flex items-center gap-1.5"
                    style={{ backgroundColor: accentColor }}
                  >
                    <span>Order Inquiry</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
