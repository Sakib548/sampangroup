"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiAnchor,
  FiLayers,
  FiTrendingUp,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiDownload,
  FiDollarSign,
  FiChevronDown,
  FiEye,
  FiPhoneCall,
  FiMessageCircle,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Reusable Data Arrays ---

const introHighlights = [
  {
    num: "01",
    title: "Fractional Ownership",
    desc: "Own a verified share of a commercial vessel.",
  },
  {
    num: "02",
    title: "Asset-Backed Security",
    desc: "Investments tied to physical maritime assets.",
  },
  {
    num: "03",
    title: "Logistics Growth",
    desc: "Capitalize on the expanding global shipping sector.",
  },
  {
    num: "04",
    title: "Passive Income",
    desc: "Potential regular yields from shipping operations.",
  },
];

const investmentModels = [
  {
    icon: FiAnchor,
    title: "Cargo Vessels",
    desc: "Invest in bulk carriers and cargo ships that form the backbone of global trade, offering steady operational yields.",
    brochure: "/brochures/cargo-vessels.pdf",
  },
  {
    icon: FiLayers,
    title: "Fleet Expansion",
    desc: "Co-invest in expanding our commercial fleet, purchasing newer, more efficient vessels to meet market demand.",
    brochure: "/brochures/fleet-expansion.pdf",
  },
  {
    icon: FiTrendingUp,
    title: "Logistics Share",
    desc: "Maritime logistics assets tied to port operations and supply chain infrastructure for diversified growth.",
    brochure: "/brochures/logistics-share.pdf",
  },
];

const openOpportunities = [
  {
    project: "MV Sampan Carrier",
    size: "Bulk Carrier 20,000 DWT",
    status: "Active Operation",
    entry: "15 Million BDT",
  },
  {
    project: "Coastal Fleet Expansion",
    size: "Multi-Vessel Fractional",
    status: "Booking Open",
    entry: "6 Million BDT",
  },
  {
    project: "Port Logistics Asset",
    size: "Infrastructure Share",
    status: "Planning Phase",
    entry: "11 Million BDT",
  },
];

const testimonials = [
  {
    name: "Captain Rahman",
    role: "Maritime Investor",
    quote:
      "Ship Share allowed me to invest in maritime assets without the headache of full ownership. The operational transparency is exceptional.",
  },
  {
    name: "Ayesha Khan",
    role: "Logistics Partner",
    quote:
      "A unique asset class that diversifies my portfolio. Sampan’s expertise in shipping makes this a secure and profitable venture.",
  },
  {
    name: "Global Trade Ltd.",
    role: "Corporate Investor",
    quote:
      "Investing in their cargo vessels has provided consistent returns. A trustworthy entry into the maritime sector.",
  },
];

const trustItems = [
  {
    icon: FiAnchor,
    title: "Maritime Expertise",
    desc: "Backed by experienced shipping professionals and maritime operators.",
  },
  {
    icon: FiShield,
    title: "Asset Verification",
    desc: "Every vessel is independently surveyed, certified, and legally verified.",
  },
  {
    icon: FiEye,
    title: "Operational Tracking",
    desc: "Regular updates on vessel routing, maintenance, and operational yields.",
  },
  {
    icon: FiCheckCircle,
    title: "Clear Documentation",
    desc: "Transparent fractional ownership contracts and registry transfers.",
  },
];

const faqs = [
  {
    q: "What exactly is Ship Share?",
    a: "Ship Share is a fractional investment model where you purchase a verified percentage of a commercial vessel, allowing you to earn potential income from its operations without the full capital burden of sole ownership.",
  },
  {
    q: "How are returns generated from shipping assets?",
    a: "Returns are generated from the operational revenue of the vessels, including chartering, cargo transport, and logistics contracts. Yields are distributed to investors based on their fractional share.",
  },
  {
    q: "What are the risks associated with maritime investment?",
    a: "Like all investments, maritime assets carry risks including market fluctuations, maintenance costs, and weather-related delays. We mitigate these through comprehensive insurance, professional management, and strict maintenance schedules.",
  },
  {
    q: "How is the vessel's value maintained?",
    a: "Our fleet undergoes rigorous, scheduled maintenance and Class Society surveys to ensure seaworthiness and asset value preservation over the vessel's operational lifespan.",
  },
  {
    q: "Can I sell my Ship Share?",
    a: "Yes. Your fractional share is a transferable asset. Subject to our right of first refusal and legal transfer protocols, you can liquidate your share to other qualified investors.",
  },
  {
    q: "What legal documents do I receive upon investment?",
    a: "You will receive a fractional ownership agreement, vessel registry documentation, and a stake in the specific holding company or SPV associated with the vessel.",
  },
];

// --- Main Component ---

export default function ShipSharePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // --- PREMIUM CINEMATIC SCROLL ANIMATIONS ---
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Entrance
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl
          .fromTo(
            ".hero-eyebrow",
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" },
          )
          .fromTo(
            ".hero-title-line",
            { y: 60, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              stagger: 0.15,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .fromTo(
            ".hero-desc",
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out" },
            "-=0.6",
          )
          .fromTo(
            ".hero-ctas > *",
            { y: 20, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.4",
          )
          .fromTo(
            ".hero-scroll",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 1, ease: "power2.out" },
            "-=0.2",
          );

        // 2. Hero Background Parallax
        gsap.to(".hero-bg-img", {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // 3. Cinematic Image Reveals (Clip-path + Scale)
        gsap.utils
          .toArray<HTMLElement>(".cinematic-img-wrap")
          .forEach((wrap) => {
            gsap.fromTo(
              wrap,
              { clipPath: "inset(10% 0% 10% 0%)" },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: { trigger: wrap, start: "top 85%", once: true },
              },
            );
          });

        // 4. Image Parallax (Moves physically with scroll)
        const parallaxMovement = window.innerWidth > 768 ? 12 : 5;
        gsap.utils.toArray<HTMLElement>(".cinematic-img").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -parallaxMovement, scale: 1.15 },
            {
              yPercent: parallaxMovement,
              ease: "none",
              scale: 1.05,
              scrollTrigger: {
                trigger: img.closest(".cinematic-img-wrap"),
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });

        // 5. Giant Section Number Parallax
        gsap.utils.toArray<HTMLElement>(".section-number").forEach((num) => {
          gsap.to(num, {
            yPercent: -25,
            ease: "none",
            scrollTrigger: {
              trigger: num.closest("section"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        // 6. Layered Text Parallax
        const textMoveFast = window.innerWidth > 768 ? -30 : -10;
        const textMoveSlow = window.innerWidth > 768 ? -15 : -5;

        gsap.utils
          .toArray<HTMLElement>(".parallax-text-fast")
          .forEach((text) => {
            gsap.to(text, {
              y: textMoveFast,
              ease: "none",
              scrollTrigger: {
                trigger: text.closest("section"),
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          });
        gsap.utils
          .toArray<HTMLElement>(".parallax-text-slow")
          .forEach((text) => {
            gsap.to(text, {
              y: textMoveSlow,
              ease: "none",
              scrollTrigger: {
                trigger: text.closest("section"),
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          });

        // 7. Staggered Card Entrance
        gsap.utils.toArray<HTMLElement>(".stagger-group").forEach((group) => {
          gsap.fromTo(
            group.children,
            { y: 50, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: { trigger: group, start: "top 80%", once: true },
            },
          );
        });

        // 8. Background Image Parallax
        gsap.utils.toArray<HTMLElement>(".bg-parallax").forEach((bg) => {
          gsap.to(bg, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: bg.closest("section"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });

      // --- ACCESSIBILITY: Reduced Motion Fallback ---
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [
            ".hero-eyebrow",
            ".hero-title-line",
            ".hero-desc",
            ".hero-ctas > *",
            ".hero-scroll",
            ".stagger-group > *",
          ],
          { autoAlpha: 1, y: 0 },
        );
        gsap.set([".cinematic-img-wrap"], { clipPath: "none" });
        gsap.set([".cinematic-img"], { scale: 1, y: 0 });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  // Angle styles for sharp architectural cuts
  const angleTR = {
    clipPath: "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)",
  };
  const angleBL = {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 60px 100%, 0 calc(100% - 60px))",
  };
  const angleTL = {
    clipPath: "polygon(60px 0, 100% 0, 100% 100%, 0 100%, 0 60px)",
  };
  const angleBR = {
    clipPath:
      "polygon(0 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%)",
  };

  return (
    <main
      ref={containerRef}
      className="overflow-x-hidden bg-white text-neutral-950"
    >
      {/* HERO (Dark - Cinematic Intro) */}
      <section
        data-no-reveal
        className="hero-section relative flex min-h-screen items-end overflow-hidden bg-black"
      >
        <div className="absolute inset-0">
          <div className="hero-bg-img absolute inset-0 scale-110">
            <Image
              src="/images/projects/ship-share-hero.png"
              alt="Maritime shipping and commercial vessels"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-20 pt-32 lg:px-12 lg:pb-32">
          <p className="hero-eyebrow mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-emerald-300">
            <span className="h-px w-8 bg-emerald-300" /> Sampan Maritime
            Investments
          </p>
          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
            <span className="hero-title-line block">Invest in the</span>
            <span className="hero-title-line block text-emerald-400">
              Commerce of
            </span>
            <span className="hero-title-line block">the Seas.</span>
          </h1>
          <p className="hero-desc mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Secure your share in the global maritime logistics sector. Ship
            Share offers fractional ownership in commercial vessels, backed by
            physical assets and professional management.
          </p>
          <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#models"
              className="group inline-flex items-center gap-3 bg-emerald-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-emerald-500"
            >
              Explore Investment Models{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#opportunities"
              className="inline-flex items-center gap-3 border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors hover:bg-white hover:text-neutral-950"
            >
              View Active Vessels
            </Link>
          </div>
        </div>
        <div className="hero-scroll absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* SECTION 01 — INTRODUCTION (White) */}
      <section data-no-reveal className="relative bg-white py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative">
            <div
              className="cinematic-img-wrap relative aspect-[4/5] w-full overflow-hidden"
              style={angleTR}
            >
              <Image
                src="/images/projects/ship-overview.png"
                alt="Commercial cargo ship at port"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="cinematic-img object-cover"
                style={{ willChange: "transform" }}
              />
            </div>
            <div className="section-number absolute -left-4 -top-4 -z-10 text-[12rem] font-bold leading-none text-neutral-100">
              01
            </div>
            <p className="parallax-text-slow mt-4 text-xs uppercase tracking-[0.2em] text-neutral-400">
              Maritime Asset Class
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              The Ship Share Model
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Fractional Ownership of Commercial Vessels.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              For centuries, maritime trade has been the backbone of the global
              economy. Ship Share opens this historically exclusive market to
              modern investors. By dividing ownership of commercial vessels into
              verified fractions, we allow you to invest in physical shipping
              assets with manageable capital, backed by professional operational
              management.
            </p>
            <div className="stagger-group mt-10 grid grid-cols-2 gap-6">
              {introHighlights.map((item) => (
                <div
                  key={item.num}
                  className="border-t border-neutral-200 pt-4"
                >
                  <span className="text-xs font-bold text-neutral-400">
                    {item.num}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — INVESTMENT MODELS EXPLAINER (Off-White) */}
      <section
        id="models"
        data-no-reveal
        className="bg-[#f8f8f8] py-20 text-neutral-950 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Investment Portfolio
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Maritime Investment Models.
            </h2>
            <p className="parallax-text-slow mt-4 text-base leading-7 text-neutral-600">
              Choose from a variety of asset classes designed to match your
              investment capacity and risk profile.
            </p>
          </div>
          <div className="stagger-group grid gap-6 lg:grid-cols-3">
            {investmentModels.map((model, index) => (
              <div
                key={model.title}
                className="group relative flex flex-col border border-neutral-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-xl"
                style={index % 2 === 0 ? angleTR : angleBL}
              >
                <model.icon className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {model.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-neutral-600">
                  {model.desc}
                </p>
                <a
                  href={model.brochure}
                  download
                  className="mt-8 inline-flex w-fit items-center gap-2 border border-neutral-900 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                >
                  <FiDownload className="h-4 w-4" /> Download Brochure
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 — OPEN OPPORTUNITIES LIST (White) */}
      <section
        id="opportunities"
        data-no-reveal
        className="bg-white py-20 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Current Open Opportunities
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Active Vessel Listings.
            </h2>
          </div>

          <div className="hidden border-b border-neutral-300 pb-4 lg:block">
            <div className="grid grid-cols-4 gap-4 text-xs font-bold uppercase tracking-widest text-neutral-500">
              <span>Vessel / Project</span>
              <span>Asset Size</span>
              <span>Status</span>
              <span className="text-right">Entry Point</span>
            </div>
          </div>

          <div className="stagger-group divide-y divide-neutral-200 border-b border-neutral-200">
            {openOpportunities.map((opp) => (
              <div
                key={opp.project}
                className="group grid grid-cols-1 gap-2 py-6 transition-colors hover:bg-neutral-50 lg:grid-cols-4 lg:gap-4 lg:py-8"
              >
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 lg:text-2xl">
                  {opp.project}
                </h3>
                <p className="text-sm text-neutral-600 lg:text-base lg:leading-8">
                  {opp.size}
                </p>
                <p className="flex items-center gap-2 text-sm text-neutral-600 lg:text-base lg:leading-8">
                  <span className="h-2 w-2 bg-emerald-500"></span> {opp.status}
                </p>
                <div className="flex items-center justify-between lg:justify-end">
                  <span className="text-lg font-bold text-neutral-900 lg:text-xl">
                    {opp.entry}
                  </span>
                  <Link
                    href="#enquiry"
                    className="ml-4 inline-flex h-10 w-10 items-center justify-center border border-neutral-300 transition-colors group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white"
                  >
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — ROI / CASE STUDY (Off-White) */}
      <section
        data-no-reveal
        className="bg-[#f8f8f8] py-20 text-neutral-950 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Illustrative Case Study
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Understanding Voyage Yields.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Maritime investments generate returns through chartering contracts
              and operational yields. This is an illustrative model of a past
              cargo vessel investment.
            </p>
          </div>
          <div className="stagger-group grid grid-cols-2 gap-6">
            <div
              className="border border-neutral-200 bg-white p-8"
              style={angleTL}
            >
              <FiDollarSign className="h-8 w-8 text-emerald-600" />
              <p className="mt-6 text-xs uppercase tracking-widest text-neutral-500">
                Initial Share Cost
              </p>
              <p className="mt-2 text-2xl font-bold">15 Million BDT</p>
            </div>
            <div
              className="border border-neutral-200 bg-white p-8"
              style={angleBR}
            >
              <FiTrendingUp className="h-8 w-8 text-emerald-600" />
              <p className="mt-6 text-xs uppercase tracking-widest text-neutral-500">
                Value After 3 Yrs
              </p>
              <p className="mt-2 text-2xl font-bold">22 Million BDT</p>
            </div>
            <div
              className="col-span-2 border border-neutral-200 bg-white p-8"
              style={angleTR}
            >
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Illustrative Growth Rate
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-600">
                ~45% Asset Appreciation
              </p>
              <p className="mt-4 text-xs text-neutral-400">
                *Excludes annual operational charter yields. This is an
                illustrative case study based on historical maritime market
                trends. Actual returns are not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — TESTIMONIALS (White) */}
      <section data-no-reveal className="bg-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Investor Testimonials
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Trusted by Maritime Partners.
            </h2>
          </div>
          <div className="stagger-group grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="flex flex-col justify-between border border-neutral-200 bg-neutral-50 p-8"
                style={i % 2 === 0 ? angleTR : angleBL}
              >
                <p className="text-lg font-light leading-8 text-neutral-800">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-neutral-200 pt-6">
                  <p className="text-sm font-semibold tracking-tight text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-emerald-600">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — TRUST & TRANSPARENCY (DARK) */}
      <section
        data-no-reveal
        className="bg-[#080808] py-20 text-white lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Investment Trust Signals
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Confidence on the High Seas.
            </h2>
          </div>
          <div className="stagger-group grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, i) => (
              <div
                key={item.title}
                className="group border border-white/10 bg-white/[0.03] p-8 transition-colors hover:bg-white/[0.06]"
                style={i % 2 === 0 ? angleTL : angleBR}
              >
                <item.icon className="h-6 w-6 text-emerald-400" />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — CRM ENQUIRY FORM & WHATSAPP (White) */}
      <section id="enquiry" data-no-reveal className="bg-white py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Enquire Now
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Speak to a Maritime Advisor.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Fill out the form to receive vessel brochures, operational
              histories, and legal documentation. Our team will contact you
              within 24 hours.
            </p>

            <div
              className="mt-10 border border-neutral-200 bg-neutral-50 p-8"
              style={angleTR}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-900">
                Prefer to chat instantly?
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                Talk directly to our investment advisor on WhatsApp.
              </p>
              <a
                href="https://wa.me/8801711459387"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-3 bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
              >
                <FiMessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div
            className="border border-neutral-200 bg-neutral-50 p-8 lg:p-10"
            style={angleBL}
          >
            <form className="space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 outline-none transition-colors focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 outline-none transition-colors focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+8801XXX-XXXXXX"
                  className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 outline-none transition-colors focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Investment Interest
                </label>
                <select className="mt-2 w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 outline-none transition-colors focus:border-emerald-600">
                  <option>Cargo Vessels</option>
                  <option>Fleet Expansion</option>
                  <option>Logistics Share</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-emerald-600"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 08 — FAQ (Off-White) */}
      <section data-no-reveal className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto w-full max-w-[1000px] px-6 lg:px-12">
          <div className="mb-16 text-center">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Frequently Asked Questions
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Maritime Investment Insights
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-neutral-200 bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="pr-8 text-lg font-medium tracking-tight text-neutral-900">
                    {faq.q}
                  </span>
                  <FiChevronDown
                    className={`h-5 w-5 shrink-0 text-emerald-700 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: openFaq === index ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-neutral-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 09 — FINAL CTA (Dark - Cinematic Outro) */}
      <section
        id="final-cta"
        data-no-reveal
        className="relative overflow-hidden bg-[#080808] py-24 text-white lg:py-32"
      >
        <div
          className="bg-parallax absolute -right-32 -bottom-32 h-[500px] w-[500px] bg-emerald-900/20"
          style={angleTR}
        ></div>
        <div
          className="bg-parallax absolute -left-20 -top-20 h-[300px] w-[300px] border border-white/10"
          style={angleBL}
        ></div>
        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center lg:px-12">
          <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Set Sail
          </p>
          <h2 className="parallax-text-fast text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
            Your Maritime Investment Starts Here.
          </h2>
          <p className="parallax-text-slow mx-auto mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Connect with Sampan Maritime to secure your share in our active and
            upcoming commercial vessels.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+8801711459387"
              className="group inline-flex w-full items-center justify-center gap-3 bg-emerald-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-emerald-500 sm:w-auto"
            >
              Call Now{" "}
              <FiPhoneCall className="transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="#enquiry"
              className="inline-flex w-full items-center justify-center gap-3 border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-neutral-950 sm:w-auto"
            >
              Request Vessel Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
