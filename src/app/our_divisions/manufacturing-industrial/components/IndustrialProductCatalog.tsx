"use client";

import { useState } from "react";
import { FaBoxes, FaCheckCircle, FaCogs, FaFileDownload, FaTag } from "react-icons/fa";

export interface IndustrialProductItem {
  id: string;
  name: string;
  category: string;
  dimensions: string;
  weightOrVolume: string;
  materialGrade: string;
  moq: string;
  description: string;
  highlights: string[];
}

export interface IndustrialProductCatalogProps {
  title?: string;
  subtitle?: string;
  products: IndustrialProductItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  onSelectProduct?: (productId: string) => void;
}

export default function IndustrialProductCatalog({
  title = "Manufacturing Product Range & Specifications",
  subtitle = "Explore our precision engineered products, industrial dimensions, material grades, and minimum order quantities.",
  products,
  bgTheme = "about-ivory",
  accentColor = "#047857",
  onSelectProduct,
}: IndustrialProductCatalogProps) {
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
    <section id="product-range" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaBoxes className="text-xs" />
              <span>Product Line</span>
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
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border"
                    style={{ color: accentColor, borderColor: `${accentColor}30`, backgroundColor: `${accentColor}10` }}
                  >
                    {item.category}
                  </span>
                  <span className="font-mono text-[10px] opacity-75 font-bold flex items-center gap-1 bg-neutral-100 border border-neutral-200 px-2 py-0.5">
                    MOQ: {item.moq}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-current leading-snug">{item.name}</h3>

                {/* Technical Specs Strip */}
                <div className="grid grid-cols-3 gap-2 p-4 bg-[#f3f6f2] border border-current/10 font-mono text-xs text-center">
                  <div>
                    <span className="block opacity-60 text-[10px] uppercase">Dimensions</span>
                    <span className="font-bold text-current" style={{ color: accentColor }}>{item.dimensions}</span>
                  </div>
                  <div>
                    <span className="block opacity-60 text-[10px] uppercase">Weight / Vol</span>
                    <span className="font-bold text-current">{item.weightOrVolume}</span>
                  </div>
                  <div>
                    <span className="block opacity-60 text-[10px] uppercase">Grade</span>
                    <span className="font-bold text-current">{item.materialGrade}</span>
                  </div>
                </div>

                <p className="text-xs opacity-75 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 text-xs">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-90">
                      <FaCheckCircle className="text-emerald-700 text-[11px] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-current/15">
                <button
                  onClick={() => onSelectProduct && onSelectProduct(item.id)}
                  className="w-full bg-[#090d16] hover:bg-neutral-800 text-white py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <FaTag className="text-[10px]" />
                  <span>Request Wholesale Quote</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
