"use client";

import { useState } from "react";
import { FaLock, FaFileContract, FaCheckCircle, FaUserShield, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";

export interface LicensedEnquiryFormProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function LicensedEnquiryForm({
  title = "Contact for Licensed Enquiries Only",
  subtitle = "All inquiries require verification of a valid Bangladesh Arms License or official government agency authorization.",
  concernName,
  bgTheme = "about-ivory",
  accentColor = "#b91c1c",
}: LicensedEnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="licensed-enquiry" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        <div className="border border-current/15 bg-white p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 h-1.5 w-full" style={{ backgroundColor: accentColor }} />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div
                className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
              >
                <FaLock className="text-xs" />
                <span>Restricted Inquiry Portal</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current leading-tight">
                {title}
              </h2>

              <p className="text-sm leading-relaxed opacity-80 font-normal max-w-xl">
                {subtitle}
              </p>

              <div className="space-y-3 font-mono text-xs opacity-90 pt-2">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>Biometric License Ledger Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>Direct Coordination with Ministry of Home Affairs Audit</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>Encrypted Confidential Inquiry Protocol</span>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 text-amber-900 font-mono text-[11px] leading-relaxed">
                <FaExclamationTriangle className="inline mr-2 text-amber-600" />
                <span>Mandatory Notice: Submission of invalid or fraudulent license numbers will be logged and reported directly to Bangladesh Police headquarters.</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#f3f6f2] border border-current/15 p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <FaCheckCircle className="text-5xl text-emerald-700 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-neutral-950">Inquiry Logged Securely</h3>
                  <p className="text-xs text-neutral-600">
                    Your inquiry for <span className="font-bold text-neutral-950">{concernName}</span> has been encrypted and assigned Reference <span className="font-bold font-mono" style={{ color: accentColor }}>#LIC-2026-8890</span>. Our armorer team will verify your license details before contacting you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="border-b border-current/15 pb-3">
                    <span className="uppercase font-bold" style={{ color: accentColor }}>Verify License Details</span>
                    <h3 className="text-lg font-bold text-neutral-950 mt-0.5">{concernName}</h3>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Full Name (As on License)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Major (Retd.) Md. Rahat Khan"
                      className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1711..."
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">National ID (NID) No.</label>
                      <input
                        type="text"
                        required
                        placeholder="1990..."
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Arms License Number</label>
                      <input
                        type="text"
                        required
                        placeholder="AL-2024/9912"
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Issuing District / Authority</label>
                      <input
                        type="text"
                        required
                        placeholder="District Magistrate, Dhaka"
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Inquiry Purpose</label>
                    <select className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none">
                      <option>Personal Protection Arms &amp; Ammunition</option>
                      <option>Law Enforcement Agency Procurement</option>
                      <option>Licensed Private Security Firm Supply</option>
                      <option>National Rifle Association / Sports Shooting</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Detailed Requirements / Caliber Needed</label>
                    <textarea
                      rows={3}
                      placeholder="Specify caliber, quantity, or specific model inquiry..."
                      className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 font-bold uppercase tracking-[0.2em] transition-all shadow-md mt-2 cursor-pointer hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: accentColor }}
                  >
                    <FaUserShield />
                    <span>Submit Verified Licensed Enquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
