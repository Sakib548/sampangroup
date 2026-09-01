"use client";

import { FaShieldAlt, FaFileContract, FaCheckCircle, FaAward, FaBuilding } from "react-icons/fa";

export interface LegalCredentialItem {
  authority: string;
  approvalTitle: string;
  referenceNumber: string;
  status: string;
  description: string;
}

export interface LegalCredentialsModuleProps {
  title?: string;
  subtitle?: string;
  credentials: LegalCredentialItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
}

export default function LegalCredentialsModule({
  title = "Legal & Registration Credentials",
  subtitle = "Complete regulatory compliance, government approvals, and verified land deed documentation.",
  credentials,
  bgTheme = "about-ivory",
}: LegalCredentialsModuleProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="legal-credentials" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
              <FaShieldAlt className="text-xs" />
              <span>Regulatory Approvals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="border border-current/15 bg-white p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#ca8a04] transition-all duration-500 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 bg-[#ca8a04]/15 text-[#ca8a04] flex items-center justify-center font-bold border border-[#ca8a04]/30">
                    <FaFileContract className="text-base" />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 px-2.5 py-1">
                    {cred.status}
                  </span>
                </div>

                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#ca8a04] block">
                  {cred.authority}
                </span>

                <h3 className="text-xl font-bold text-current leading-snug">{cred.approvalTitle}</h3>

                <div className="p-3 bg-[#f3f6f2] border border-current/10 font-mono text-xs">
                  <span className="opacity-60 block text-[10px]">Ref / Memo No:</span>
                  <span className="font-bold text-[#183b2b]">{cred.referenceNumber}</span>
                </div>

                <p className="text-xs opacity-75 leading-relaxed font-normal">
                  {cred.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-current/15 flex items-center gap-2 text-xs font-mono font-bold text-emerald-700">
                <FaCheckCircle />
                <span>Verified Legal Clear Title</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
