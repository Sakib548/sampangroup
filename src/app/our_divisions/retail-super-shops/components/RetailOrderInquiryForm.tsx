"use client";

import { useState } from "react";
import { FaShoppingBag, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaLock } from "react-icons/fa";

export interface RetailOrderInquiryFormProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
  badgeColor?: string;
}

export default function RetailOrderInquiryForm({
  title = "Order Inquiry & Direct Store Delivery",
  subtitle = "Submit your order or inquiry directly to our store manager. Fast delivery or ready for in-store pickup.",
  concernName,
  bgTheme = "about-ivory",
  accentColor = "#dc2626",
  badgeColor = "#f59e0b",
}: RetailOrderInquiryFormProps) {
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
    <section id="catalog-inquiry" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(245,158,11,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(220,38,38,0.07),transparent_23%)]"
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
                <FaShoppingBag className="text-xs" />
                <span>Store Desk Inquiry</span>
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
                  <span>30-Minute Rapid Delivery across Dhaka &amp; Highway Corridors</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>Custom Corporate Sweet Box &amp; Festival Hampers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-700 shrink-0" />
                  <span>Zero-Fee In-Store Drive-Thru Pickup Option</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#f3f6f2] border border-current/15 p-8 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <FaCheckCircle className="text-5xl text-emerald-700 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-neutral-950">Inquiry Logged Successfully!</h3>
                  <p className="text-xs text-neutral-600">
                    Our <span className="font-bold text-neutral-950">{concernName}</span> store manager will contact you via WhatsApp / phone in under 10 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                  <div className="border-b border-current/15 pb-3">
                    <span className="uppercase font-bold" style={{ color: accentColor }}>Submit Order Inquiry</span>
                    <h3 className="text-lg font-bold text-neutral-950 mt-0.5">{concernName}</h3>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="+880 1711..."
                        className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block uppercase opacity-70">Delivery Type</label>
                      <select className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none">
                        <option>30-Min Home Express Delivery</option>
                        <option>In-Store Drive-Thru Pickup</option>
                        <option>Bulk Corporate Gift Hampers</option>
                        <option>Pre-Launch VIP Registration</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Delivery Address / Nearest Outlet</label>
                    <input
                      type="text"
                      required
                      placeholder="Area, Road No, District..."
                      className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block uppercase opacity-70">Order Items / Special Instructions</label>
                    <textarea
                      rows={3}
                      placeholder="Specify sweet box items, quantities, or specific grocery products required..."
                      className="w-full bg-white border border-neutral-300 p-3 text-xs text-neutral-950 focus:border-current focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 font-bold uppercase tracking-[0.2em] transition-all shadow-md mt-2 cursor-pointer hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: accentColor }}
                  >
                    <FaShoppingBag />
                    <span>Submit Order Inquiry</span>
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
