"use client";

import { useState } from "react";
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaEnvelope, FaCar, FaCheckCircle, FaTimes } from "react-icons/fa";

export interface SiteVisitBookingFormProps {
  title?: string;
  subtitle?: string;
  projectName: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
}

export default function SiteVisitBookingForm({
  title = "Book VIP Site Visit & Consultation",
  subtitle = "Schedule a guided site tour with our property team. Complimentary vehicle transport available upon request.",
  projectName,
  bgTheme = "about-ivory",
}: SiteVisitBookingFormProps) {
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
    <section id="site-visit" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        <div className="border border-current/15 bg-white p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[#ca8a04]" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04]">
                <FaCalendarAlt className="text-xs" />
                <span>VIP Site Inspection</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current leading-tight">
                {title}
              </h2>

              <p className="text-sm leading-relaxed opacity-80 font-normal max-w-xl">
                {subtitle}
              </p>

              <div className="space-y-2 font-mono text-xs opacity-90 pt-2">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#ca8a04]" />
                  <span>Complimentary AC Transport Pickup (Dhaka City)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#ca8a04]" />
                  <span>Dedicated Senior Property Consultant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#ca8a04]" />
                  <span>Legal Deed Clearance Verification On-Site</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#f3f6f2] border border-current/15 p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <FaCheckCircle className="text-5xl text-emerald-700 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-neutral-950">Site Visit Confirmed!</h3>
                  <p className="text-xs text-neutral-600">
                    Our team will contact you within 30 minutes to confirm vehicle pickup details for <span className="font-bold text-[#ca8a04]">{projectName}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="border-b border-current/15 pb-3">
                    <span className="text-[#ca8a04] uppercase font-bold">Schedule Inspection</span>
                    <h3 className="text-lg font-bold text-neutral-950 mt-0.5">{projectName}</h3>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1711..."
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Preferred Visit Date</label>
                      <input
                        type="date"
                        required
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Transport Pickup Needed?</label>
                    <select className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-[#ca8a04] focus:outline-none">
                      <option>Yes — Request AC Car Pickup</option>
                      <option>No — Self Driving to Site</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 py-4 font-bold uppercase tracking-[0.2em] transition-all shadow-md mt-2 cursor-pointer"
                  >
                    Confirm VIP Site Visit Slot
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
