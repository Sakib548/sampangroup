"use client";

import { FaHandshake, FaShieldAlt, FaChartPie, FaCheckCircle, FaFileSignature } from "react-icons/fa";

export interface LandShareTier {
  title: string;
  shareSize: string;
  equityRatio: string;
  deedRegistration: string;
  keyBenefits: string[];
}

export interface LandShareStructureProps {
  title?: string;
  subtitle?: string;
  totalLandArea: string;
  totalSharesCount: string;
  registrationStatus: string;
  tiers: LandShareTier[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
}

export default function LandShareStructure({
  title = "Land Share Investment Structure",
  subtitle = "Complete transparency on land deed registration, share ownership distribution, and equity rights.",
  totalLandArea,
  totalSharesCount,
  registrationStatus,
  tiers,
  bgTheme = "about-ivory",
}: LandShareStructureProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="land-share" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
              <FaChartPie className="text-xs" />
              <span>Equity &amp; Ownership Model</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="border border-current/15 bg-white p-6 space-y-1 shadow-sm">
            <span className="text-xs font-mono uppercase opacity-60">Total Project Footprint</span>
            <p className="text-3xl font-mono font-bold text-[#ca8a04]">{totalLandArea}</p>
          </div>
          <div className="border border-current/15 bg-white p-6 space-y-1 shadow-sm">
            <span className="text-xs font-mono uppercase opacity-60">Total Shares Allotted</span>
            <p className="text-3xl font-mono font-bold text-current">{totalSharesCount}</p>
          </div>
          <div className="border border-current/15 bg-white p-6 space-y-1 shadow-sm">
            <span className="text-xs font-mono uppercase opacity-60">Legal Deed Registration</span>
            <p className="text-lg font-mono font-bold text-emerald-700 flex items-center gap-2 mt-2">
              <FaShieldAlt />
              <span>{registrationStatus}</span>
            </p>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-[#ca8a04]" />

              <div className="space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ca8a04]">
                  Share Ownership Tier
                </span>

                <h3 className="text-2xl font-bold text-current leading-snug">{tier.title}</h3>

                <div className="p-4 bg-[#f3f6f2] border border-current/10 font-mono text-xs space-y-2">
                  <div className="flex justify-between opacity-80">
                    <span>Share Size:</span>
                    <span className="font-bold text-current">{tier.shareSize}</span>
                  </div>
                  <div className="flex justify-between opacity-80">
                    <span>Equity Ownership Ratio:</span>
                    <span className="font-bold text-[#ca8a04]">{tier.equityRatio}</span>
                  </div>
                  <div className="flex justify-between opacity-80">
                    <span>Deed Transfer:</span>
                    <span className="font-bold text-current">{tier.deedRegistration}</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  {tier.keyBenefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs opacity-90">
                      <FaCheckCircle className="text-[#ca8a04] text-[11px] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-current/15">
                <a
                  href="#site-visit"
                  className="w-full inline-flex items-center justify-center bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md"
                >
                  Book Land Share Unit
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
