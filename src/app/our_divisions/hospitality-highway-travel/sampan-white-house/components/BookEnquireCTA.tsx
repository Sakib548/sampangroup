"use client";

import { useState } from "react";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaCheckCircle,
  FaHeadset
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

export default function BookEnquireCTA({ onOpenBookingWidget }: { onOpenBookingWidget: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Motel Room Stay",
    travelDate: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact-enquire" className="bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 relative overflow-hidden border-t border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/30 bg-amber-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ca8a04]">
              <FaHeadset />
              <span>04 / 24/7 Front Desk &amp; Event Concierge</span>
            </div>

            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Make the pause <br />
              <span className="text-[#ca8a04]">part of your plan.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-normal">
              Whether you are organizing a corporate offsite in White Hall, reserving a soundproof family motel room, or arranging an EV stopover, our front desk is ready 24/7.
            </p>

            {/* Direct Contact Cards (Square & Light) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <a
                href="tel:+8801929918408"
                className="group p-5 rounded-none bg-white border border-neutral-200 hover:border-[#e8b84b] transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 rounded-none bg-amber-50 text-[#ca8a04] group-hover:bg-[#e8b84b] group-hover:text-neutral-950 transition-colors">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">Front Desk Hotline</p>
                  <p className="text-sm font-bold text-neutral-950 mt-0.5 group-hover:text-[#ca8a04] transition-colors">+880 1929-918408</p>
                  <p className="text-[10px] text-neutral-400 mt-1 font-mono">24/7 Immediate Line</p>
                </div>
              </a>

              <a
                href="https://wa.me/8801929918408?text=Hello%20Sampan%20White%20House,%20I%20would%20like%20to%20enquire%20about%20a%20motel%20stay%20or%20White%20Hall%20booking."
                target="_blank"
                rel="noreferrer"
                className="group p-5 rounded-none bg-white border border-neutral-200 hover:border-[#e8b84b] transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 rounded-none bg-amber-50 text-[#ca8a04] group-hover:bg-[#e8b84b] group-hover:text-neutral-950 transition-colors">
                  <FaWhatsapp className="text-base" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">WhatsApp Concierge</p>
                  <p className="text-sm font-bold text-neutral-950 mt-0.5 group-hover:text-[#ca8a04] transition-colors">Chat Instantly</p>
                  <p className="text-[10px] text-neutral-400 mt-1 font-mono">Fast 2-Minute Reply</p>
                </div>
              </a>

              <a
                href="mailto:info@sampangroup.com.bd"
                className="group p-5 rounded-none bg-white border border-neutral-200 hover:border-[#e8b84b] transition-all duration-300 flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 rounded-none bg-amber-50 text-[#ca8a04] group-hover:bg-[#e8b84b] group-hover:text-neutral-950 transition-colors">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">Event Proposals</p>
                  <p className="text-xs font-bold text-neutral-950 mt-0.5 group-hover:text-[#ca8a04] transition-colors truncate">info@sampangroup.com.bd</p>
                  <p className="text-[10px] text-neutral-400 mt-1 font-mono">White Hall RFP &amp; Galas</p>
                </div>
              </a>

              <div className="p-5 rounded-none bg-white border border-neutral-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-none bg-amber-50 text-[#ca8a04]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">Corridor Location</p>
                  <p className="text-xs font-bold text-neutral-950 mt-0.5">KM 78, Dhaka-Khulna Highway</p>
                  <p className="text-[10px] text-neutral-400 mt-1 font-mono">Zero Detour Entry Ramp</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Instant Enquiry Form (Square & Light) */}
          <div className="lg:col-span-6">
            <div className="rounded-none border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm relative">
              <div className="absolute top-0 left-0 h-[3px] w-full bg-[#e8b84b]" />
              
              {!isSubmitted ? (
                <>
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-200 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-950">Send an Enquiry</h3>
                      <p className="text-xs text-neutral-500 mt-1">Our front desk officer will call you back within 15 minutes.</p>
                    </div>
                    <div className="w-10 h-10 rounded-none bg-amber-50 border border-amber-300 text-[#ca8a04] flex items-center justify-center">
                      <HiSparkles />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mahfuzar Rahman"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3.5 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#e8b84b]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+880 1XXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3.5 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#e8b84b]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Enquiry Type
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3.5 text-neutral-950 focus:outline-none focus:border-[#e8b84b] cursor-pointer"
                        >
                          <option value="Motel Room Stay">Soundproof Motel Room Stay</option>
                          <option value="Day Pass Transit">Day Pass / Quick Refresh</option>
                          <option value="White Hall Banquet">White Hall Banquet &amp; Wedding</option>
                          <option value="Corporate Seminar">Corporate Seminar &amp; Offsite</option>
                          <option value="Tour Coach Group">Tour Coach / Group Stopover</option>
                          <option value="General Question">General Highway Inquiries</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Date of Visit / Event
                        </label>
                        <input
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                          className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3.5 text-neutral-950 focus:outline-none focus:border-[#e8b84b] cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3.5 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#e8b84b]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Specific Requirements / Group Size
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Booking 2 rooms for a family stay, or inquiring for 150 guests in White Hall..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#F5F5F2] border border-neutral-300 rounded-none p-3.5 text-neutral-950 placeholder-neutral-400 focus:outline-none focus:border-[#e8b84b]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-none bg-[#e8b84b] hover:bg-[#d4a43e] text-neutral-950 font-mono font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      Submit Instant Request
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-none bg-amber-50 text-[#ca8a04] text-3xl flex items-center justify-center mx-auto border border-amber-300">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950">Enquiry Successfully Dispatched!</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you <strong className="text-[#ca8a04]">{formData.name}</strong>. Our front desk officer has received your request for <strong>{formData.serviceType}</strong> and will call <span className="text-neutral-950 font-mono font-bold">{formData.phone}</span> shortly.
                  </p>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/8801929918408?text=Hello%20Sampan%20White%20House,%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.serviceType)})`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none bg-[#e8b84b] hover:bg-[#d4a43e] text-neutral-950 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Ping on WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-none bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-mono text-xs font-semibold uppercase tracking-wider cursor-pointer border border-neutral-300"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
