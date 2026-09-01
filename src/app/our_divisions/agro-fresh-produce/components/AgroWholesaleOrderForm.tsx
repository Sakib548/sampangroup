"use client";

import { useState } from "react";
import { FaTractor, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaBoxes, FaLock } from "react-icons/fa";

export interface AgroWholesaleOrderFormProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function AgroWholesaleOrderForm({
  title = "Wholesale & B2B Bulk Order Inquiry",
  subtitle = "Direct farmgate supply for supermarket chains, hotel groups, exporter houses, and wholesale market distributors.",
  concernName,
  bgTheme = "white",
  accentColor = "#15803d",
}: AgroWholesaleOrderFormProps) {
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
    <section id="wholesale-inquiry" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Contract Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaBoxes className="text-xs" />
              <span>B2B &amp; Contract Farming</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              {subtitle}
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-200 font-mono text-xs text-neutral-700">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-600 text-sm shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Direct Farmgate Pricing:</strong>
                  <span>Bypass middlemen with direct contract harvest supply contracts.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-600 text-sm shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Cold-Chain Temperature Control:</strong>
                  <span>Insulated reefer truck delivery straight to your warehouse or store.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-emerald-600 text-sm shrink-0 mt-0.5" />
                <div>
                  <strong className="text-neutral-900 block">Hygienic Washing &amp; Sorting:</strong>
                  <span>Custom grading, bio-secure packaging, and lab phytosanitary certifications.</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-900 space-y-2">
              <span className="font-bold uppercase tracking-wider block text-emerald-800">
                Direct Agro Manager Hotline
              </span>
              <p>For urgent daily truckload dispatches or contract farming deals:</p>
              <p className="text-base font-bold text-emerald-950">+880 1700-999888</p>
              <p>wholesale@{concernName.toLowerCase().replace(/\s+/g, "")}.com.bd</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="border border-neutral-300 bg-[#f8f9fa] p-8 sm:p-10 shadow-lg">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <FaCheckCircle className="text-5xl text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-bold text-neutral-950">Inquiry Submitted Successfully!</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Thank you. Our B2B Procurement Desk for <strong>{concernName}</strong> will call your provided number within 2 hours with price quotes and delivery schedules.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 px-6 py-2.5 bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="border-b border-neutral-200 pb-4">
                    <h3 className="text-xl font-bold text-neutral-950">B2B Wholesale Procurement Request</h3>
                    <p className="text-xs text-neutral-500 font-mono mt-1">Please fill in your company details for bulk price quotes.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Buyer / Organization Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                        <input
                          required
                          type="text"
                          placeholder="e.g. Agora Supermarkets / Hotel Westin"
                          className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 bg-white text-xs text-neutral-900 focus:outline-none focus:border-emerald-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Buyer Type *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2.5 border border-neutral-300 bg-white text-xs text-neutral-900 focus:outline-none focus:border-emerald-700"
                      >
                        <option value="supermarket">Supermarket / Retail Chain</option>
                        <option value="hotel-restaurant">Hotel, Restaurant &amp; Catering (HoReCa)</option>
                        <option value="exporter">Export House / International Buyer</option>
                        <option value="wholesale-distributor">Wholesale Merchant / Aratdar</option>
                        <option value="other">Other Commercial Buyer</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <FaPhoneAlt className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                        <input
                          required
                          type="tel"
                          placeholder="+880 1711-XXXXXX"
                          className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 bg-white text-xs text-neutral-900 focus:outline-none focus:border-emerald-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                        Email Address
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3.5 top-3.5 text-neutral-400 text-xs" />
                        <input
                          type="email"
                          placeholder="procurement@company.com"
                          className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 bg-white text-xs text-neutral-900 focus:outline-none focus:border-emerald-700"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                      Delivery Location &amp; Required Quantities *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Specify required produce (e.g. 2 Tons Organic Tomatoes daily, 500kg Hilsa Fish weekly), destination warehouse, and frequency."
                      className="w-full p-4 border border-neutral-300 bg-white text-xs text-neutral-900 focus:outline-none focus:border-emerald-700"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-500">
                      <FaLock className="text-emerald-600 text-xs" />
                      <span>Direct B2B Confidential Inquiry</span>
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md transition duration-300"
                    >
                      Submit Wholesale Request
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
