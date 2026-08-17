"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiCheckCircle,
  FiShield,
  FiZap,
  FiChevronDown,
  FiArrowRight,
  FiLayers,
  FiHome,
  FiPhoneCall,
  FiAward,
  FiFileText,
  FiEye,
  FiDownload,
  FiMapPin,
  FiPlayCircle,
  FiMessageCircle,
  FiDollarSign,
  FiTrendingUp,
  FiAnchor,
} from "react-icons/fi";
import { RiFileAiFill } from "react-icons/ri";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Reusable Data Arrays ---

const philosophyPoints = [
  "Modern architecture and thoughtful design",
  "Strategic locations for urban living",
  "Eco-friendly materials and construction",
  "Energy-efficient technologies integrated",
  "From luxurious residential to commercial spaces",
];

const coreFeatures = [
  {
    icon: FiLayers,
    title: "Innovative Design",
    desc: "Modern architecture that redefines urban living and working environments.",
  },
  {
    icon: RiFileAiFill,
    title: "Sustainable Communities",
    desc: "Integrating eco-friendly materials to ensure positive environmental contributions.",
  },
  {
    icon: FiZap,
    title: "Modern Infrastructure",
    desc: "Energy-efficient technologies and state-of-the-art functional layouts.",
  },
  {
    icon: FiHome,
    title: "Exceptional Living",
    desc: "Blending luxury and functionality to enhance communities and living standards.",
  },
];

const completedProjects = [
  "Express Highway Inn, Club & Lounge",
  "Sampan White House & Motel",
  "Sampan Highway Inn, Restaurant & Party Center",
  "Sampan Taj Bashundhara",
  "Sampan Niketon",
  "Sampan 21st Century Inn",
];

const investmentModels = [
  {
    icon: FiLayers,
    title: "Land Share",
    desc: "Own a fraction of prime real estate. Secure your piece of land in our upcoming developments with clear documentation and long-term appreciation potential.",
    brochure: "/brochures/land-share.pdf",
  },
  {
    icon: FiAward,
    title: "Club Membership",
    desc: "Invest in a lifestyle. Access premium hospitality and leisure destinations while holding a valuable membership asset in a growing ecosystem.",
    brochure: "/brochures/club-membership.pdf",
  },
  {
    icon: FiAnchor,
    title: "Ship Share",
    desc: "A unique maritime investment opportunity. Participate in the commercial shipping and logistics growth sector with verified asset backing.",
    brochure: "/brochures/ship-share.pdf",
  },
];

const openOpportunities = [
  {
    project: "Sampan Residency",
    size: "1,200 - 1,800 sqft",
    status: "Under Construction",
    entry: "BDT 1.2 Crore",
  },
  {
    project: "Agro & Golf Resort",
    size: "Variable Plots",
    status: "Booking Open",
    entry: "BDT 45 Lakh",
  },
  {
    project: "Sampan Imperial",
    size: "1,000 - 1,500 sqft",
    status: "Planning Phase",
    entry: "BDT 95 Lakh",
  },
];

const testimonials = [
  {
    name: "Rahul Ahmed",
    role: "Diaspora Investor, USA",
    quote:
      "Sampan made the land share investment incredibly simple. The transparency and legal clarity gave me total peace of mind from abroad.",
  },
  {
    name: "Sarah Karim",
    role: "Club Member",
    quote:
      "The Club Membership is worth every penny. Not just an investment, but a lifestyle upgrade for my entire family.",
  },
  {
    name: "Imran Hossain",
    role: "Commercial Investor",
    quote:
      "Their commercial spaces and ship share models offer diversified growth. Sampan is a trustworthy partner for long-term assets.",
  },
];

const nrbFeatures = [
  "Dedicated NRB investment desk for remote processing",
  "Digital documentation and verifications",
  "Secure online payment gateways & remittance assistance",
  "Tax compliance guidance and legal support",
];

const trustItems = [
  {
    icon: FiAward,
    title: "15+ Years Active",
    desc: "Over a decade of consistent performance in real estate and hospitality development.",
  },
  {
    icon: FiLayers,
    title: "20+ Delivered Parcels",
    desc: "A proven track record of successfully handing over residential and commercial spaces.",
  },
  {
    icon: FiShield,
    title: "Legal Credentials",
    desc: "100% clear titles, verified surveys, and transparent documentation for every investment.",
  },
  {
    icon: FiEye,
    title: "Project Communication",
    desc: "Regular, clear updates regarding construction milestones and asset performance.",
  },
];

const faqs = [
  {
    q: "What is the expected return on investment (ROI) timeline?",
    a: "Typically, our real estate and land share investments are designed for medium to long-term growth (3-5 years), while club memberships offer immediate lifestyle returns alongside asset appreciation.",
  },
  {
    q: "What is the legal process for securing an investment?",
    a: "It begins with submitting an Expression of Interest (EOI), followed by documentation verification, payment scheduling, and finally, the legal registry transfer under your name or company.",
  },
  {
    q: "Are there installment payment options available?",
    a: "Yes, we offer flexible payment plans tailored to different investment models. Our team can structure a schedule that aligns with your financial planning.",
  },
  {
    q: "How do I verify the legal status of the land or property?",
    a: "We provide complete transparency. All land ownership documents, survey reports, and master plans are available for legal verification before any financial commitment.",
  },
  {
    q: "Can Non-Resident Bangladeshis (NRBs) invest remotely?",
    a: "Absolutely. We have a dedicated NRB desk that handles digital documentation, secure remittances, and power of attorney (POA) processing so you can invest from anywhere in the world.",
  },
  {
    q: "What happens after I submit the enquiry form?",
    a: "An investment advisor from Sampan will contact you within 24 hours to understand your goals, share project brochures, and schedule a physical or virtual site visit.",
  },
];

const upcomingProjectsData = [
  {
    title: "Sampan Residency",
    subtitle: "Amin Mohammad Ashulia Model Town",
    desc: "Experience modern living just 20 minutes from Uttara North Metro Station. This project offers a unique opportunity to own a flat by securing a portion of land, ensuring both property ownership and long-term value.",
    phone1: "+88 01711-459387",
    phone2: "+88 01767-703661",
    image: "/images/projects/land-gallery-2.png",
  },
  {
    title: "Sampan Imperial",
    subtitle: "Aftab Nagar Chayana Project (Gate Adjacent)",
    desc: "Located right beside the main gate of Aftab Nagar Chayana, this project brings you closer to premium urban living with the advantage of land share ownership and thoughtfully planned residential spaces.",
    phone1: "+88 01711-459387",
    phone2: "+88 01767-703661",
    image: "/images/projects/land-gallery-3.png",
  },
];

// --- Main Component ---

export default function SampanDevelopmentsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProject, setActiveProject] = useState<number>(0);

  const animateProjectIn = (index: number) => {
    if (!stageRef.current) return;
    gsap.to(".default-stage-text", { autoAlpha: 0, duration: 0.3 });

    [0, 1].map((i) => {
      const visual = stageRef.current?.querySelector(`.project-visual-${i}`);
      const panel = stageRef.current?.querySelector(`.info-panel-${i}`);
      const img = visual?.querySelector("img");
      if (!visual || !panel || !img) return;

      if (i === index) {
        gsap.set(visual, { zIndex: 10 });
        gsap.fromTo(
          visual,
          { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "power4.out",
          },
        );
        gsap.to(img, { scale: 1, duration: 1.5, ease: "power2.out" });
        gsap.to(panel, { y: 0, duration: 0.8, delay: 0.4, ease: "power3.out" });
      } else {
        gsap.set(visual, { zIndex: 0 });
        gsap.to(img, { scale: 1.1, duration: 0.5, ease: "power2.in" });
        gsap.to(panel, { y: "100%", duration: 0.5, ease: "power2.in" });
      }
    });
  };

  const handleProjectClick = (index: number) => {
    if (activeProject === index) return;
    setActiveProject(index);
    animateProjectIn(index);
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: stage,
        start: "top 80%",
        once: true,
        onEnter: () => animateProjectIn(0),
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
        // Desktop gets more movement, mobile gets less for performance
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

        // 5. Giant Section Number Parallax (Moves faster than content)
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

        // 6. Layered Text Parallax (Text moves at different speeds)
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

        // 8. Background Image Parallax (For sections with absolute bg)
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
        // Make sure everything is visible immediately
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

  return (
    <main
      ref={containerRef}
      className="overflow-x-hidden bg-white text-neutral-950"
    >
      {/* HERO */}
      <section
        data-no-reveal
        className="hero-section relative flex min-h-screen items-end overflow-hidden bg-black"
      >
        <div className="absolute inset-0">
          <div className="hero-bg-img absolute inset-0 scale-110">
            <Image
              src="/images.jpg"
              alt="Innovative real estate by Sampan Developments"
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
            <span className="h-px w-8 bg-emerald-300" /> Sampan Developments
            Limited
          </p>
          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
            <span className="hero-title-line block">
              Innovative Real Estate.
            </span>
            <span className="hero-title-line block text-emerald-400">
              Redefining Urban
            </span>
            <span className="hero-title-line block">Living.</span>
          </h1>
          <p className="hero-desc mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Creating sustainable communities with modern infrastructure and
            exceptional living standards.
          </p>
          <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#models"
              className="group inline-flex items-center gap-3 bg-emerald-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-emerald-500"
            >
              Explore Investment Portfolio{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#opportunities"
              className="inline-flex items-center gap-3 border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors hover:bg-white hover:text-neutral-950"
            >
              View Open Opportunities
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

      {/* SECTION 01 — OUR APPROACH */}
      <section data-no-reveal className="relative bg-white py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative">
            <div className="cinematic-img-wrap relative aspect-[4/5] w-full overflow-hidden ">
              <Image
                src="/images.jpg"
                alt="Modern urban infrastructure"
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
              Real Estate Excellence
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Our Approach
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Setting New Standards in the Real Estate Industry.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              SAMPAN Developments Ltd. is a leader in innovative real estate
              projects, redefining urban living and commercial spaces. With a
              commitment to quality and sustainable development, we create
              residential and commercial properties that blend luxury and
              functionality, enhancing communities and setting new standards.
            </p>
            <div className="stagger-group mt-10 space-y-6">
              {[
                "Commitment to quality",
                "Sustainable development focus",
                "Blend of luxury and functionality",
                "Enhancing communities",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 border-t border-neutral-200 pt-6"
                >
                  <FiCheckCircle className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-neutral-800">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — CUSTOMIZE YOUR SPACE */}
      <section data-no-reveal className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Philosophy
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Customize Your Space.
            </h2>
            <div className="relative mt-4">
              <div className="section-number absolute -left-4 -top-8 -z-10 text-[10rem] font-bold leading-none text-neutral-200">
                02
              </div>
            </div>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              SAMPAN Developments Ltd. stands at the forefront of innovation in
              the real estate sector, dedicated to creating exceptional
              properties that redefine urban living and working environments.
              With a focus on quality, sustainability, and community
              enhancement, we have established ourselves as a trusted name.
            </p>
            <div className="stagger-group mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {philosophyPoints.map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm font-medium text-neutral-800"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />{" "}
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className="cinematic-img-wrap relative aspect-[4/5] w-full overflow-hidden ">
            <Image
              src="/images.jpg"
              alt="Thoughtful architectural design"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="cinematic-img object-cover"
              style={{ willChange: "transform" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 03 — DARK — WHY SAMPAN DEVELOPMENTS */}
      <section
        data-no-reveal
        className="bg-[#080808] py-20 text-white lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Core Capabilities
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Built Around Sustainable Excellence.
            </h2>
          </div>
          <div className="stagger-group grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.06]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-emerald-500/50">
                    <feature.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {feature.desc}
                  </p>
                </div>
                <div className="mt-6 h-px w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHITE — COMPLETED PROJECTS */}
      <section
        id="completed"
        data-no-reveal
        className="bg-white py-20 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Our Track Record
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Projects We Completed Successfully.
            </h2>
          </div>
          <div className="stagger-group grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {completedProjects.map((project, index) => (
              <div
                key={project}
                className="group flex items-center gap-5 border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold tracking-tight text-neutral-800">
                  {project}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — INVESTMENT MODELS EXPLAINER (Dark) */}
      <section
        id="models"
        data-no-reveal
        className="bg-[#080808] py-20 text-white lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Investment Portfolio
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Diversified Investment Models.
            </h2>
            <p className="parallax-text-slow mt-4 text-base leading-7 text-white/60">
              Choose from a variety of asset classes designed to match your
              lifestyle and financial goals.
            </p>
          </div>
          <div className="stagger-group grid gap-6 lg:grid-cols-3">
            {investmentModels.map((model) => (
              <div
                key={model.title}
                className="group relative flex flex-col border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/50"
              >
                <model.icon className="h-8 w-8 text-emerald-400" />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                  {model.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-white/60">
                  {model.desc}
                </p>
                <a
                  href={model.brochure}
                  download
                  className="mt-8 inline-flex w-fit items-center gap-2 border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-neutral-950"
                >
                  <FiDownload className="h-4 w-4" /> Download Brochure
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — OPEN OPPORTUNITIES LIST (White) */}
      <section
        id="opportunities"
        data-no-reveal
        className="bg-[#f8f8f8] py-20 lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Current Open Opportunities
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Active Investment Listings.
            </h2>
          </div>

          <div className="hidden border-b border-neutral-300 pb-4 lg:block">
            <div className="grid grid-cols-4 gap-4 text-xs font-bold uppercase tracking-widest text-neutral-500">
              <span>Project</span>
              <span>Size</span>
              <span>Status</span>
              <span className="text-right">Entry Point</span>
            </div>
          </div>

          <div className="stagger-group divide-y divide-neutral-200 border-b border-neutral-200">
            {openOpportunities.map((opp) => (
              <div
                key={opp.project}
                className="group grid grid-cols-1 gap-2 py-6 transition-colors hover:bg-white lg:grid-cols-4 lg:gap-4 lg:py-8"
              >
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900 lg:text-2xl">
                  {opp.project}
                </h3>
                <p className="text-sm text-neutral-600 lg:text-base lg:leading-8">
                  {opp.size}
                </p>
                <p className="flex items-center gap-2 text-sm text-neutral-600 lg:text-base lg:leading-8">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>{" "}
                  {opp.status}
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

      {/* SECTION 07 — ROI / CASE STUDY (Dark) */}
      <section
        data-no-reveal
        className="bg-[#080808] py-20 text-white lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Illustrative Case Study
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Understanding Asset Growth.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-white/70">
              While real estate markets fluctuate, strategic land acquisitions
              in developing corridors have historically shown strong resilience.
              This is an illustrative model of a past land-share investment.
            </p>
          </div>
          <div className="stagger-group grid grid-cols-2 gap-6">
            <div className="border border-white/10 p-8">
              <FiDollarSign className="h-8 w-8 text-emerald-400" />
              <p className="mt-6 text-xs uppercase tracking-widest text-white/50">
                Initial Investment
              </p>
              <p className="mt-2 text-2xl font-bold">BDT 50 Lakh</p>
            </div>
            <div className="border border-white/10 p-8">
              <FiTrendingUp className="h-8 w-8 text-emerald-400" />
              <p className="mt-6 text-xs uppercase tracking-widest text-white/50">
                Projected Value (5 Yrs)
              </p>
              <p className="mt-2 text-2xl font-bold">BDT 1.1 Crore</p>
            </div>
            <div className="col-span-2 border border-white/10 p-8">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Illustrative Growth Rate
              </p>
              <p className="mt-2 text-3xl font-bold text-emerald-400">
                ~120% Appreciation
              </p>
              <p className="mt-4 text-xs text-white/40">
                *This is an illustrative case study based on historical local
                market trends. Actual returns are not guaranteed and depend on
                market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — VIDEO WALKTHROUGH (White) */}
      <section data-no-reveal className="bg-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-12 text-center">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Project Walkthrough
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              See the Development Firsthand.
            </h2>
          </div>
          <div className="cinematic-img-wrap relative aspect-video w-full overflow-hidden  border border-neutral-200 bg-neutral-900">
            <Image
              src="/images.jpg"
              alt="Video walkthrough thumbnail"
              fill
              sizes="100vw"
              className="cinematic-img object-cover opacity-60"
              style={{ willChange: "transform" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex flex-col items-center gap-4 text-white">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-white group-hover:text-neutral-900">
                  <FiPlayCircle className="h-10 w-10" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Play Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — TESTIMONIALS (Dark) */}
      <section
        data-no-reveal
        className="bg-[#080808] py-20 text-white lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Investor Testimonials
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Trusted by Our Community.
            </h2>
          </div>
          <div className="stagger-group grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between border border-white/10 p-8"
              >
                <p className="text-lg font-light leading-8 text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold tracking-tight">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-emerald-400">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — NRB / DIASPORA SECTION (White) */}
      {/* Applied overlapping effect: negative margin bottom and z-index to overlap next section */}
      <section data-no-reveal className="bg-[#f8f8f8] py-20 lg:py-32 lg:pb-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative z-10 -mb-40 lg:-mb-32">
            <div className="cinematic-img-wrap relative aspect-[4/3] w-full overflow-hidden  shadow-2xl">
              <Image
                src="/images.jpg"
                alt="Global NRB investment"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="cinematic-img object-cover"
                style={{ willChange: "transform" }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Non-Resident Bangladeshis (NRB)
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Investing from Abroad, Made Simple.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              We understand the challenges of managing investments remotely. Our
              dedicated NRB desk ensures a seamless, transparent, and secure
              process so you can invest in Bangladesh from anywhere in the
              world.
            </p>
            <div className="stagger-group mt-8 grid gap-4 sm:grid-cols-2">
              {nrbFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm text-neutral-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — AGRO & GOLF (Existing Dark) */}
      <section
        data-no-reveal
        className="relative overflow-hidden bg-[#080808] py-20 pt-32 text-white lg:py-32 lg:pt-48"
      >
        <div className="bg-parallax absolute inset-0 opacity-20 scale-110">
          <Image
            src="/images.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/70" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Premium Lifestyle
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Sampan Agro & Golf Resort.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-white/70">
              Escape the city and experience a perfect blend of nature, leisure,
              and luxury. Designed as a serene getaway, the project offers lush
              green landscapes, agricultural experiences, and premium
              recreational facilities.
            </p>
          </div>
          <div className="flex items-center">
            <div className="cinematic-img-wrap w-full overflow-hidden  border border-white/10">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images.jpg"
                  alt="Sampan Agro & Golf Resort"
                  fill
                  className="cinematic-img object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ willChange: "transform" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — MAP OF LOCATIONS (White) */}
      <section data-no-reveal className="bg-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Strategic Locations
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Map of Investment Zones.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="cinematic-img-wrap lg:col-span-2 relative aspect-[16/9] overflow-hidden  border border-neutral-200 bg-neutral-50">
              <Image
                src="/images.jpg"
                alt="Map of investment locations"
                fill
                className="cinematic-img object-cover"
                style={{ willChange: "transform" }}
              />
            </div>
            <div className="stagger-group flex flex-col justify-center space-y-6">
              {[
                "Ashulia Model Town",
                "Aftab Nagar, Dhaka",
                "Agro Resort Zone",
              ].map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-4 border-b border-neutral-200 pb-4"
                >
                  <FiMapPin className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="text-lg font-semibold tracking-tight text-neutral-900">
                      {loc}
                    </p>
                    <p className="text-xs text-neutral-500">
                      Prime development zone
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 — TRUST & TRANSPARENCY (Updated Existing) */}
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
              Confidence Begins With Transparency.
            </h2>
          </div>
          <div className="stagger-group grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="group border border-white/10 p-8 transition-colors hover:bg-white/[0.03]"
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

      {/* SECTION 14 — CRM ENQUIRY FORM & WHATSAPP (White) */}
      <section
        id="enquiry"
        data-no-reveal
        className="bg-[#f8f8f8] py-20 lg:py-32"
      >
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Enquire Now
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Speak to an Investment Advisor.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Fill out the form to receive project brochures, pricing details,
              and legal documentation. Our CRM team will contact you within 24
              hours.
            </p>

            <div className="mt-10  border border-neutral-200 bg-white p-8">
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

          <div className="border border-neutral-200 bg-white p-8 lg:p-10">
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
                  <option>Land Share</option>
                  <option>Club Membership</option>
                  <option>Ship Share</option>
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

      {/* SECTION 15 — FAQ */}
      <section data-no-reveal className="bg-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-[1000px] px-6 lg:px-12">
          <div className="mb-16 text-center">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Frequently Asked Questions
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Investment Insights
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-neutral-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between py-6 text-left"
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
                    <p className="pb-6 text-sm leading-7 text-neutral-600">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16 — FINAL CTA */}
      <section
        id="final-cta"
        data-no-reveal
        className="relative overflow-hidden bg-[#080808] py-24 text-white lg:py-32"
      >
        <div className="bg-parallax absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-emerald-900/20" />
        <div className="bg-parallax absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />
        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center lg:px-12">
          <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Get Started
          </p>
          <h2 className="parallax-text-fast text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
            Your Next Investment Starts Here.
          </h2>
          <p className="parallax-text-slow mx-auto mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Connect with Sampan Developments to secure your place in our
            upcoming residential, commercial, and lifestyle projects.
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
              Request Project Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
