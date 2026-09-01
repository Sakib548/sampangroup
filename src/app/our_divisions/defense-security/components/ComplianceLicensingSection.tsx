"use client";

import { FaShieldAlt, FaBalanceScale, FaExclamationTriangle, FaCheckCircle, FaLock, FaFileContract } from "react-icons/fa";

export interface ComplianceLicensingSectionProps {
  title?: string;
  subtitle?: string;
  licenseNumber: string;
  issuingAuthority: string;
  complianceStatement: string;
  keyDirectives: string[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function ComplianceLicensingSection({
  title = "Licensing & Regulatory Compliance Statement",
  subtitle = "All operations, imports, storage, and sales are strictly regulated under the Arms Act 1878 and Bangladesh Ministry of Home Affairs directives.",
  licenseNumber,
  issuingAuthority,
  complianceStatement,
  keyDirectives,
  bgTheme = "divisions-green",
  accentColor = "#b91c1c",
}: ComplianceLicensingSectionProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="compliance" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Warning Banner Header */}
        <div className="bg-amber-500/10 border border-amber-500/30 p-4 mb-12 flex items-start gap-4">
          <FaExclamationTriangle className="text-amber-600 text-xl shrink-0 mt-0.5" />
          <div className="text-xs font-mono text-amber-900 leading-relaxed">
            <span className="font-bold uppercase block mb-1">MANDATORY LEGAL NOTICE</span>
            Inquiries, sales, inspections, and transactions are strictly reserved for verified Government Arms License holders, Law Enforcement Agencies, Defense Establishments, and Licensed Security Personnel. Unlicensed solicitations are strictly prohibited by law.
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaBalanceScale className="text-xs" />
              <span>Legal Regulatory Compliance</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Official License Credentials Card */}
          <div className="lg:col-span-5 border border-current/15 bg-white p-8 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-current/15 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-current flex items-center gap-2">
                  <FaShieldAlt style={{ color: accentColor }} />
                  Official License Accreditation
                </span>
                <span className="font-mono text-[10px] font-bold uppercase px-2.5 py-1 bg-emerald-500/15 text-emerald-700 border border-emerald-500/30">
                  Government Verified
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase block opacity-60">Issuing Regulatory Authority</span>
                <p className="text-lg font-bold text-current mt-0.5">{issuingAuthority}</p>
              </div>

              <div className="p-4 bg-[#f3f6f2] border border-current/10 font-mono text-xs space-y-1">
                <span className="opacity-60 text-[10px] uppercase block">Official License Reference Number</span>
                <span className="font-bold text-base block" style={{ color: accentColor }}>{licenseNumber}</span>
              </div>

              <p className="text-xs opacity-80 leading-relaxed font-normal pt-2">
                {complianceStatement}
              </p>
            </div>

            <div className="pt-4 border-t border-current/15 flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
              <FaLock />
              <span>Full Audit Clearance &amp; Biometric Ledger Enforcement</span>
            </div>
          </div>

          {/* Right Column: Key Directives Grid */}
          <div className="lg:col-span-7 border border-current/15 bg-white p-8 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-current flex items-center gap-2">
                <FaFileContract style={{ color: accentColor }} />
                <span>Statutory Compliance Guidelines</span>
              </h3>

              <div className="grid gap-4">
                {keyDirectives.map((directive, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-[#f3f6f2] border border-current/10 text-xs">
                    <FaCheckCircle className="text-emerald-700 text-sm shrink-0 mt-0.5" />
                    <span className="opacity-90 leading-relaxed">{directive}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-[#090d16] text-white font-mono text-xs flex justify-between items-center">
              <span className="opacity-70">Regulatory Standard:</span>
              <span className="font-bold" style={{ color: accentColor }}>Arms Act 1878 &amp; MOBA Guidelines</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
