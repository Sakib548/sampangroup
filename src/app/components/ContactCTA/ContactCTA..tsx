"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function ContactCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
  });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".cta-header > *", ".cta-form-container", ".cta-reassurance"],
          {
            opacity: 1,
            y: 0,
          },
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 75%",
            once: true,
          },
        });

        tl.fromTo(
          ".cta-header > *",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" },
        )
          .fromTo(
            ".cta-form-container",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.6",
          )
          .fromTo(
            ".cta-reassurance",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
            "-=0.8",
          );
      });
    },
    { scope: containerRef },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      ref={containerRef}
      className="cta-section relative w-full overflow-hidden bg-[#050505] py-24 lg:py-32"
    >
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute -left-6 bottom-0 select-none text-[12rem] font-black leading-none text-white opacity-[0.02] md:text-[18rem]">
        Connect
      </span>

      <div className="relative mx-auto max-w-[1400px] px-[5vw]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          {/* ====== LEFT: FORM ====== */}
          <div className="cta-form-container lg:col-span-7">
            {/* Header */}
            <div className="cta-header mb-12 max-w-xl">
              <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-600">
                09 / Get in Touch
              </p>
              <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                Have a question? Tell us what you&apos;re interested in and
                we&apos;ll point you the right way.
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {/* Name Field */}
                <div className="relative flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border-b border-white/20 bg-transparent pb-3 text-lg text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none transition-colors duration-500"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone Field */}
                <div className="relative flex flex-col">
                  <label
                    htmlFor="phone"
                    className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="border-b border-white/20 bg-transparent pb-3 text-lg text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none transition-colors duration-500"
                    placeholder="+880 1XXX XXXXXX"
                  />
                </div>
              </div>

              {/* Interest Field (Dropdown) */}
              <div className="relative flex flex-col">
                <label
                  htmlFor="interest"
                  className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40"
                >
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  required
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  className="cursor-pointer appearance-none border-b border-white/20 bg-transparent pb-3 text-lg text-white focus:border-emerald-500 focus:outline-none transition-colors duration-500"
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#050505] text-white/50"
                  >
                    Select an option...
                  </option>
                  <option value="booking" className="bg-[#050505] text-white">
                    Booking / Hospitality
                  </option>
                  <option
                    value="investment"
                    className="bg-[#050505] text-white"
                  >
                    Investment Portfolio
                  </option>
                  <option value="careers" className="bg-[#050505] text-white">
                    Careers
                  </option>
                  <option value="general" className="bg-[#050505] text-white">
                    General Inquiry
                  </option>
                </select>
                {/* Custom Dropdown Arrow */}
                <span className="pointer-events-none absolute bottom-3 right-0 text-white/50">
                  ↓
                </span>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-5 border-b border-white/40 pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-emerald-400 hover:text-emerald-400"
                >
                  Send Message
                  <FiSend className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12" />
                </button>
              </div>
            </form>
          </div>

          {/* ====== RIGHT: REASSURANCE ====== */}
          <div className="cta-reassurance flex flex-col justify-center border-t border-white/10 pt-12 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-12">
            <p className="max-w-sm text-base leading-[1.8] text-white/50">
              Prefer a direct conversation? Reach out via WhatsApp, and our team
              will assist you immediately with bookings, investments, or any
              corporate inquiries.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex w-fit items-center gap-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-500 transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-400 group-hover:bg-emerald-400 group-hover:text-white">
                <FaWhatsapp className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Chat instantly
                </span>
                <span className="mt-1 text-lg font-semibold tracking-tight text-white transition-colors duration-500 group-hover:text-emerald-400">
                  WhatsApp Us
                </span>
              </div>
            </a>

            {/* Bottom Architectural Detail */}
            <div className="mt-16 hidden items-center gap-4 lg:flex">
              <span className="h-px w-12 bg-emerald-500/50" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                Sampan Group HQ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
