"use client";

import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaCar, FaTruck, FaGasPump, FaBolt } from "react-icons/fa";

export interface MobilityOnlineRequestFormProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  whatsappNumber?: string;
  phoneHotline?: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function MobilityOnlineRequestForm({
  title = "Live Availability & Online Service Request",
  subtitle = "Dispatch emergency towing, reserve an EV charging slot, order bulk fuel delivery, or request direct call back.",
  concernName,
  whatsappNumber = "+8801929918408",
  phoneHotline = "+8801929918408",
  bgTheme = "about-ivory",
  accentColor = "#dc2626",
}: MobilityOnlineRequestFormProps) {
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
    <section id="online-request" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
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
                <FaCar className="text-xs" />
                <span>Instant Service Dispatch</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current leading-tight">
                {title}
              </h2>

              <p className="text-sm leading-relaxed opacity-80 font-normal max-w-xl">
                {subtitle}
              </p>

              {/* Instant Call & WhatsApp Buttons */}
              <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 font-bold uppercase tracking-wider shadow-md transition-all"
                >
                  <FaWhatsapp className="text-base" />
                  <span>WhatsApp Dispatch</span>
                </a>

                <a
                  href={`tel:${phoneHotline}`}
                  className="inline-flex items-center gap-2 bg-[#090d16] hover:bg-neutral-800 text-white px-6 py-3.5 font-bold uppercase tracking-wider shadow-md transition-all"
                >
                  <FaPhoneAlt className="text-xs" style={{ color: accentColor }} />
                  <span>Call Hotline</span>
                </a>
              </div>

              <div className="space-y-2 font-mono text-xs opacity-90 pt-2">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>24/7 Live Operator Dispatch &amp; Highway Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>GPS Tracked Towing Vehicles &amp; Fuel Tankers</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#f3f6f2] border border-current/15 p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <FaCheckCircle className="text-5xl text-emerald-700 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-neutral-950">Request Dispatched!</h3>
                  <p className="text-xs text-neutral-600">
                    Your request for <span className="font-bold text-neutral-950">{concernName}</span> has been routed to our live operator desk. Confirmation call incoming within 5 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="border-b border-current/15 pb-3">
                    <span className="uppercase font-bold" style={{ color: accentColor }}>Online Request Form</span>
                    <h3 className="text-lg font-bold text-neutral-950 mt-0.5">{concernName}</h3>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Md. Rafiqul Islam"
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
                      <label className="block uppercase opacity-70">Vehicle Reg / Type</label>
                      <input
                        type="text"
                        placeholder="Dhaka Metro-GA-11..."
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Requested Service</label>
                    <select className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none">
                      <option>Emergency Flatbed Towing Dispatch</option>
                      <option>EV Fast Charging Slot Reservation</option>
                      <option>Octane / Diesel Bulk Tanker Order</option>
                      <option>Auto LPG Filling / Cylinder Supply</option>
                      <option>Japanese Car Import Quote</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Current Location / Details</label>
                    <textarea
                      rows={3}
                      placeholder="Specify your highway location, nearest landmark, or specific request details..."
                      className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 font-bold uppercase tracking-[0.2em] transition-all shadow-md mt-2 cursor-pointer hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: accentColor }}
                  >
                    <FaTruck />
                    <span>Submit Online Service Request</span>
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
