import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaTractor, FaFish, FaSeedling, FaAward, FaTruckLoading } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { concerns2 } from "@/data/concerns2";

export const metadata: Metadata = {
  title: "Agro & Fresh Produce Division | Sampan Group",
  description: "Explore Sampan Group's Agro & Fresh Produce Division featuring Sampan Eco & Agro and Sampan Fish & Meat.",
};

const agroConcerns = concerns2.filter((c) => c.category === "Agro & Fresh Produce");

export default function AgroFreshProduceArchivePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950 pt-28 pb-20">
      
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#06180e] text-white py-20 border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(34,197,94,0.15),transparent_30%),radial-gradient(circle_at_94%_92%,rgba(234,179,8,0.12),transparent_25%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400">
              <FaLeaf className="text-xs" />
              <span>Division Archive</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              Agro &amp; <span className="font-semibold text-emerald-400">Fresh Produce Division</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl">
              Nurturing Bangladesh&apos;s agricultural heritage through organic crop cultivation, bio-secure aquaculture, cold-chain logistics, and fresh farm-to-table food distribution.
            </p>

            <div className="pt-4 flex flex-wrap gap-6 font-mono text-xs text-white/80">
              <div className="flex items-center gap-2">
                <FaTractor className="text-emerald-400" />
                <span>2 Flagship Agro Concerns</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFish className="text-blue-400" />
                <span>Sustainable Fisheries &amp; Organic Livestock</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAward className="text-amber-400" />
                <span>100% Traceable &amp; Chemical-Free</span>
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
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700">
                Division Member Concerns
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mt-1">
                Explore Agro &amp; Fisheries Ventures
              </h2>
            </div>
            <p className="max-w-md text-xs text-neutral-600 leading-relaxed font-mono">
              Each concern provides dedicated contract farming, direct farmgate sales, seasonal harvest catalogs, and wholesale B2B distribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {agroConcerns.map((concern) => (
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
                        width={180}
                        height={60}
                        className="object-contain max-h-14"
                      />
                    </div>
                  )}

                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                    {concern.category}
                  </span>

                  <h3 className="text-2xl font-bold text-neutral-950">{concern.name}</h3>

                  <p className="text-xs text-neutral-700 leading-relaxed font-normal">
                    {concern.tagline}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                  {concern.href ? (
                    <Link
                      href={concern.href}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 hover:text-emerald-700 transition"
                    >
                      <span>Explore Concern Details</span>
                      <FiArrowRight className="text-sm text-emerald-700" />
                    </Link>
                  ) : (
                    <span className="text-xs font-mono text-neutral-400">Coming Soon</span>
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
