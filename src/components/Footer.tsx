"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiArrowRight, FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  SITEMAP DATA (Matching 9-Division IA)                              */
/* ------------------------------------------------------------------ */

const sitemap = [
    {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Investment Portfolio",
      "Newsroom",
      "Accreditation & Awards",
      "Contact Us",
    ],
  },
  {
    title: "Real Estate",
    links: [
      "SDL",
      "Metro Square",
      "Motalib Skyline",
      "Nexus",
      "Residency Tower 1 & 2",
      "Taj",
      "Niketon",
      "21st Century",
    ],
  },
  {
    title: "Hospitality & Travel",
    links: [
      "Highway Inn",
      "Express Highway Inn",
      "EHCL",
      "White Hall",
      "Eco & Agro Resort",
    ],
  },
  {
    title: "Golf Zone",
    links: [
      "Agro & Golf Resort",
      "Golf Academy",
      "Short Drive Range",
    ],
  },
  {
    title: "Education",
    links: [
      "LSHS",
    ],
  },
  {
    title: "Agro & Retail",
    links: [
      "Eco & Agro",
      "Sampan Mart",
      "Mini Sampan",
      "Trade Emporium",
      "Sweet Box",
    ],
  },
  {
    title: "Manufacturing & Auto",
    links: [
      "Hollow Bricks & Tile",
      "Pet & Beverage",
      "Industrial Park",
      "Sampan Auto",
      "Cafe Metro",
      "Filling Station",
      "LPG / EV Charging",
      "Towing",
    ],
  },
  {
    title: "Defense & Maritime",
    links: [
      "Fire Arms Co.",
      "Nagar Arms",
      "Floating Pearl",
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/sampangroup/", Icon: FaFacebookF },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sampangroup/", Icon: FaLinkedinIn },
  { label: "YouTube", href: "https://www.youtube.com/@SampanGroupbangladesh", Icon: FaYoutube },
  { label: "WhatsApp", href: "https://wa.me/8801XXXXXXXXX", Icon: FaWhatsapp },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([".footer-top", ".footer-col", ".footer-bottom"], { opacity: 1, y: 0 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* TOP SECTION ENTRANCE */
        gsap.fromTo(
          ".footer-top > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: ".footer-top", start: "top 90%", once: true },
          }
        );

        /* SITEMAP COLUMNS STAGGER */
        gsap.fromTo(
          ".footer-col",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: ".footer-sitemap", start: "top 95%", once: true },
          }
        );
      });
    },
    { scope: containerRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer ref={containerRef} className="relative w-full overflow-hidden bg-[#050505] text-white">
      {/* Giant Ghost Background Text */}
      <span className="pointer-events-none absolute -bottom-10 left-0 select-none text-[12rem] font-black leading-none text-white opacity-[0.015] md:text-[18rem] lg:-bottom-20">
        Sampan
      </span>

      <div className="relative z-10 mx-auto max-w-[1600px] px-[5vw] py-24 lg:py-32">

        {/* ====== TOP: BRAND & NEWSLETTER ====== */}
        <div className="footer-top flex flex-col gap-12 border-b border-white/10 pb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-16">

          {/* Brand Statement */}
          <div className="max-w-2xl">
            <Link href="/" className="mb-8 inline-flex items-center gap-3">
              <img src={'/images/Sampan-Group.png'} />
            </Link>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white">
              The village will be
              <br />
              <span className="text-emerald-500">the city.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-[1.8] text-white/50">
              A diversified group building opportunities across industries, communities, and generations.
            </p>
          </div>

          {/* Architectural Newsletter */}
          <div className="w-full max-w-md">
            <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Stay Connected
            </p>
            <p className="mb-8 text-sm leading-7 text-white/60">
              Stories, progress, and news from the Sampan ecosystem.
            </p>
            <form onSubmit={handleSubmit} className="relative flex border-b border-white/20 focus-within:border-emerald-500 transition-colors duration-500">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubmitted(false);
                }}
                placeholder="Your email address"
                className="w-full flex-1 bg-transparent py-3 pr-4 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex items-center gap-3 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors duration-500 hover:text-emerald-400"
              >
                Subscribe
                <FiArrowRight className="h-4 w-4" />
              </button>
            </form>
            {submitted && (
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                ✓ Subscription request received.
              </p>
            )}
          </div>
        </div>

        {/* ====== MIDDLE: SITEMAP DIRECTORY ====== */}
        <div className="footer-sitemap grid grid-cols-2 gap-x-8 gap-y-12 py-20 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
          {sitemap.map((section) => (
            <div key={section.title} className="footer-col">
              <h3 className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="group inline-flex items-center text-sm text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      <span className="mr-0 h-px w-0 bg-emerald-500 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ====== BOTTOM: CONTACT, SOCIALS & LEGAL ====== */}
        <div className="footer-bottom flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">

          {/* Contact Info */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <a href="mailto:info@sampangroup.com.bd" className="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
              <FiMail className="h-4 w-4 text-emerald-500" />
              info@sampangroup.com.bd
            </a>
            <a href="tel:+8801XXXXXXXXX" className="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white">
              <FiPhone className="h-4 w-4 text-emerald-500" />
              +880 1XXX XXXXXX
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.Icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Sampan Group on ${social.label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-500 hover:border-emerald-500 hover:text-emerald-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3 text-xs text-white/40 sm:flex-row sm:items-center sm:gap-6">
            <p>© {new Date().getFullYear()} Sampan Group. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}