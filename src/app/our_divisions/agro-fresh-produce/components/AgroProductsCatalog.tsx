"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLeaf, FaShoppingBasket, FaTag, FaCheckCircle, FaAward, FaBoxes } from "react-icons/fa";

export interface AgroProductItem {
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

export interface AgroProductsCatalogProps {
  title?: string;
  subtitle?: string;
  products: AgroProductItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  badgeColor?: string;
}

export default function AgroProductsCatalog({
  title = "What's Sold — Fresh Harvest & Produce Catalog",
  subtitle = "Explore our organic farm produce, seasonal fruits, wild & farmed fish varieties, and fresh meat cuts.",
  products,
  bgTheme = "about-ivory",
  accentColor = "#15803d",
  badgeColor = "#16a34a",
}: AgroProductsCatalogProps) {
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
    <section id="products-catalog" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header & Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaShoppingBasket className="text-xs" />
              <span>What&apos;s Sold</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-base text-neutral-600 font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border ${
                  filterCategory === cat
                    ? "bg-emerald-800 text-white border-emerald-900 shadow-md"
                    : "bg-white text-neutral-700 border-neutral-300 hover:border-emerald-600 hover:text-emerald-800"
                }`}
              >
                {cat === "all" ? "All Produce" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-neutral-300 bg-white p-6 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg transition duration-300 relative group overflow-hidden"
            >
              {/* Product Header / Tag */}
              <div className="space-y-4">
                <div className="relative h-48 w-full bg-[#f8f9fa] border border-neutral-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.tag && (
                    <span
                      className="absolute top-3 right-3 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 text-white shadow-sm"
                      style={{ backgroundColor: badgeColor }}
                    >
                      {product.tag}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {product.category}
                  </span>
                  <span className="font-mono text-xs font-semibold text-neutral-500 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                    {product.packSize}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {product.description}
                </p>

                {/* Highlights */}
                <div className="pt-2 space-y-1.5 border-t border-neutral-100 font-mono text-[11px] text-neutral-700">
                  {product.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-emerald-600 text-xs shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase text-neutral-400 block">Indicated B2B Rate</span>
                  <span className="text-lg font-bold text-emerald-800">{product.priceBDT}</span>
                </div>

                <a
                  href="#wholesale-inquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 bg-emerald-100 hover:bg-emerald-200 px-3.5 py-2 border border-emerald-300 transition duration-300"
                >
                  <FaBoxes className="text-xs text-emerald-700" />
                  <span>Order Bulk</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
