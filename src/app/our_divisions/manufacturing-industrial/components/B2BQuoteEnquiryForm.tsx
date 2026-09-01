"use client";

import { useState } from "react";
import { FaFileDownload, FaCogs, FaCheckCircle, FaBuilding, FaTruck, FaEnvelope } from "react-icons/fa";

export interface B2BQuoteEnquiryFormProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  catalogDownloadUrl?: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function B2BQuoteEnquiryForm({
  title = "B2B Wholesale Enquiry & Price Quote Request",
  subtitle = "Request wholesale volume pricing, custom dimensional manufacturing, or download product technical spec sheets.",
  concernName,
  catalogDownloadUrl = "#",
  bgTheme = "divisions-green",
  accentColor = "#047857",
}: B2BQuoteEnquiryFormProps) {
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
    <section id="b2b-quote" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
                <FaCogs className="text-xs" />
                <span>B2B Commercial Desk</span>
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
                  <span>Direct Factory Wholesale Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>Custom Mold &amp; Dimensional Fabrication Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>Nationwide Logistics Trucking Delivery</span>
                </div>
              </div>

              {/* Download Spec Sheet Banner */}
              <div className="pt-4 border-t border-current/15">
                <a
                  href={catalogDownloadUrl}
                  download
                  className="inline-flex items-center gap-3 bg-[#090d16] hover:bg-neutral-800 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                >
                  <FaFileDownload />
                  <span>Download Spec Sheet &amp; Catalog PDF</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#f3f6f2] border border-current/15 p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <FaCheckCircle className="text-5xl text-emerald-700 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-neutral-950">Quote Request Submitted!</h3>
                  <p className="text-xs text-neutral-600">
                    Thank you for your inquiry for <span className="font-bold text-neutral-950">{concernName}</span>. Our industrial sales manager will email you an official proforma quote within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="border-b border-current/15 pb-3">
                    <span className="uppercase font-bold" style={{ color: accentColor }}>Commercial Inquiry</span>
                    <h3 className="text-lg font-bold text-neutral-950 mt-0.5">{concernName}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Company / Business Name</label>
                      <input
                        type="text"
                        required
                        placeholder="ABC Builders Ltd"
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Contact Person Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Md. Alim Hossain"
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>
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
                      <label className="block uppercase opacity-70">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="procurement@abc.com"
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Est. Order Quantity</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 50,000 Units"
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Delivery Location</label>
                      <input
                        type="text"
                        required
                        placeholder="Project Site / City"
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Specific Product &amp; Spec Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Detail product code, required dimensions, custom specifications..."
                      className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 font-bold uppercase tracking-[0.2em] transition-all shadow-md mt-2 cursor-pointer hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: accentColor }}
                  >
                    <FaTruck />
                    <span>Submit Wholesale Quote Request</span>
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
