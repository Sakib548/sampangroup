import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaStore, FaShoppingBasket, FaGift, FaExchangeAlt, FaAward, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { concerns2 } from "@/data/concerns2";

export const metadata: Metadata = {
  title: "Retail Shop & Super Shop Division | Sampan Group",
  description: "Explore Sampan Group's Retail & Super Shop Division featuring Sampan Sweet Box, Sampan Mart, and Mini Sampan Super Shop.",
};

const retailConcerns = concerns2.filter((c) => c.category === "Retail Shop & Super Shop");

export default function RetailSuperShopsArchivePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950 pt-28 pb-20">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090d16] text-white py-20 border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(245,158,11,0.15),transparent_30%),radial-gradient(circle_at_94%_92%,rgba(220,38,38,0.12),transparent_25%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
              <FaStore className="text-xs" />
              <span>Division Archive</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              Retail Shop &amp; <span className="font-semibold text-amber-500">Super Shop Division</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl">
              Delivering premium artisanal sweets, daily fresh groceries, imported gourmet delicacies, and 30-minute neighborhood super shop services across Bangladesh.
            </p>

            <div className="pt-4 flex flex-wrap gap-6 font-mono text-xs text-white/80">
              <div className="flex items-center gap-2">
                <FaShoppingBasket className="text-amber-500" />
                <span>3 Flagship Retail Concerns</span>
              </div>
              <div className="flex items-center gap-2">
                <FaExchangeAlt className="text-rose-500" />
                <span>Omnichannel Delivery &amp; In-Store Lounge</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAward className="text-emerald-400" />
                <span>100% Quality &amp; Hygiene Assurance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concerns Grid Showcase */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-600">
                Division Member Concerns
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mt-1">
                Explore Retail Outlets &amp; Super Shops
              </h2>
            </div>
            <p className="max-w-md text-xs text-neutral-600 leading-relaxed font-mono">
              Each concern provides dedicated online ordering, physical store locations, weekly promotional feeds, and loyalty rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {retailConcerns.map((concern) => (
              <div
                key={concern.id}
                className="border border-neutral-300 bg-white p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="space-y-4">
                  {concern.logo && (
                    <div className="relative h-20 w-full bg-[#f8f9fa] border border-neutral-200 p-4 flex items-center justify-center">
                      <Image
                        src={concern.logo}
                        alt={concern.name}
                        width={160}
                        height={60}
                        className="object-contain max-h-14"
                      />
                    </div>
                  )}

                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-600 block">
                    {concern.category}
                  </span>

                  <h3 className="text-2xl font-bold text-neutral-950">{concern.name}</h3>

                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    {concern.tagline}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-200">
                  {concern.href ? (
                    <Link
                      href={concern.href}
                      className="w-full inline-flex items-center justify-between bg-[#090d16] hover:bg-amber-600 text-white p-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>View Full Concern Page</span>
                      <FiArrowRight />
                    </Link>
                  ) : (
                    <span className="w-full inline-flex items-center justify-center bg-neutral-200 text-neutral-600 p-3.5 font-mono text-xs font-bold uppercase tracking-wider">
                      Coming Soon
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
