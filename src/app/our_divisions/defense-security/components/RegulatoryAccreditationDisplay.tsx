"use client";

import { FaAward, FaShieldAlt, FaCheckCircle, FaFileContract, FaUniversity } from "react-icons/fa";

export interface AccreditationItem {
  agency: string;
  accreditationTitle: string;
  referenceNo: string;
  scope: string;
  status: string;
}

export interface RegulatoryAccreditationDisplayProps {
  title?: string;
  subtitle?: string;
  accreditations: AccreditationItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function RegulatoryAccreditationDisplay({
  title = "Government Regulatory Accreditations & Certifications",
  subtitle = "Enlisted and certified by premier defense, law enforcement, and government oversight agencies in Bangladesh.",
  accreditations,
  bgTheme = "divisions-green",
  accentColor = "#b91c1c",
}: RegulatoryAccreditationDisplayProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="accreditations" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaAward className="text-xs" />
              <span>Official Accreditations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accreditations.map((acc, idx) => (
            <div
              key={idx}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="h-10 w-10 flex items-center justify-center font-bold border"
                    style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
                  >
                    <FaUniversity className="text-base" />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 px-2.5 py-1">
                    {acc.status}
                  </span>
                </div>

                <span className="font-mono text-xs font-bold uppercase tracking-widest block" style={{ color: accentColor }}>
                  {acc.agency}
                </span>

                <h3 className="text-xl font-bold text-current leading-snug">{acc.accreditationTitle}</h3>

                <div className="p-3 bg-[#f3f6f2] border border-current/10 font-mono text-xs">
                  <span className="opacity-60 block text-[10px]">Ref / Memo Number:</span>
                  <span className="font-bold text-[#183b2b]">{acc.referenceNo}</span>
                </div>

                <p className="text-xs opacity-75 leading-relaxed font-normal">
                  {acc.scope}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-current/15 flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                <FaCheckCircle />
                <span>Verified Government Accreditation</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
