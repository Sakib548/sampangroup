"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FiUsers,
  FiStar,
  FiShield,
  FiCalendar,
  FiCoffee,
  FiHeart,
  FiZap,
  FiArrowRight,
  FiCheckCircle,
  FiSun,
  FiGrid,
  FiMessageSquare,
  FiHome,
  FiDownload,
  FiPlayCircle,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// --- Data Arrays ---

const introHighlights = [
  {
    num: "01",
    title: "Exclusive Access",
    desc: "Member-only facilities and experiences.",
  },
  {
    num: "02",
    title: "Hospitality",
    desc: "Premium services and lounge comfort.",
  },
  {
    num: "03",
    title: "Recreation",
    desc: "Leisure activities for all lifestyles.",
  },
  { num: "04", title: "Networking", desc: "Connect with a growing community." },
  {
    num: "05",
    title: "Member Events",
    desc: "Invitations to exclusive gatherings.",
  },
  {
    num: "06",
    title: "Lifestyle Privileges",
    desc: "Benefits across Sampan destinations.",
  },
];

const expressExperience = [
  {
    icon: FiCoffee,
    title: "Premium Lounge Access",
    desc: "Sophisticated environment for relaxation and meetings.",
  },
  {
    icon: FiStar,
    title: "Hospitality Privileges",
    desc: "Member benefits across hospitality facilities.",
  },
  {
    icon: FiUsers,
    title: "Business & Social Networking",
    desc: "Meet professionals and entrepreneurs.",
  },
  {
    icon: FiCalendar,
    title: "Member Events",
    desc: "Exclusive member-focused experiences.",
  },
  {
    icon: FiHeart,
    title: "Family Leisure",
    desc: "Memorable moments with family and friends.",
  },
];

const agroExperience = [
  {
    icon: FiZap,
    title: "Golf & Recreation",
    desc: "Access to recreational experiences and facilities.",
  },
  {
    icon: FiSun,
    title: "Nature & Open Spaces",
    desc: "Green landscapes and a relaxed environment.",
  },
  {
    icon: FiHome,
    title: "Club Lounge",
    desc: "Dedicated setting for conversations and gatherings.",
  },
  {
    icon: FiHeart,
    title: "Family Experiences",
    desc: "Leisure time with family and friends.",
  },
  {
    icon: FiCalendar,
    title: "Exclusive Club Events",
    desc: "Member-focused activities and gatherings.",
  },
];

const communityFeatures = [
  {
    num: "01",
    icon: FiShield,
    title: "Exclusive Access",
    desc: "Enjoy selected member-only facilities, experiences, and events.",
  },
  {
    num: "02",
    icon: FiStar,
    title: "Lifestyle Privileges",
    desc: "Experience specially designed benefits across Sampan destinations.",
  },
  {
    num: "03",
    icon: FiUsers,
    title: "Community",
    desc: "Become part of a growing network of professionals and families.",
  },
  {
    num: "04",
    icon: FiHeart,
    title: "Experiences",
    desc: "Create memorable moments through recreation and leisure.",
  },
];

const memberBenefits = [
  {
    num: "01",
    icon: FiStar,
    title: "Member Privileges",
    desc: "Access selected benefits reserved exclusively for members.",
  },
  {
    num: "02",
    icon: FiZap,
    title: "Preferred Experience",
    desc: "Enjoy a more personalized experience across facilities.",
  },
  {
    num: "03",
    icon: FiCalendar,
    title: "Event Invitations",
    desc: "Receive invitations to selected member events and activities.",
  },
  {
    num: "04",
    icon: FiUsers,
    title: "Networking Opportunities",
    desc: "Build relationships with the wider Sampan community.",
  },
  {
    num: "05",
    icon: FiHeart,
    title: "Family & Social Leisure",
    desc: "Enjoy quality time in engaging environments.",
  },
  {
    num: "06",
    icon: FiGrid,
    title: "Future Benefits",
    desc: "Benefits that evolve as the Sampan ecosystem grows.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Explore",
    desc: "Choose the membership that matches your lifestyle.",
  },
  {
    step: "02",
    title: "Enquire",
    desc: "Speak with our team to understand options and terms.",
  },
  {
    step: "03",
    title: "Apply",
    desc: "Submit your membership application and information.",
  },
  {
    step: "04",
    title: "Become a Member",
    desc: "Complete the process and enjoy your privileges.",
  },
];

// --- Main Component ---

export default function ClubAndMembershipPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const handleProjectClick = (index: number) => setActiveProject(index);

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

        // 4. Image Parallax
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
              alt="Sampan Club & Membership"
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
            <span className="h-px w-8 bg-emerald-300" /> Sampan Club &
            Membership
          </p>
          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-white">
            <span className="hero-title-line block">Belong to More.</span>
            <span className="hero-title-line block text-emerald-400">
              Experience More.
            </span>
          </h1>
          <p className="hero-desc mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Discover exclusive membership opportunities at Sampan&apos;s
            hospitality, leisure, and lifestyle destinations—designed around
            comfort, recreation, networking, and memorable experiences.
          </p>
          <div className="hero-ctas mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#intro"
              className="group inline-flex items-center gap-3 bg-emerald-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-emerald-500"
            >
              Explore Memberships{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors hover:bg-white hover:text-neutral-950"
            >
              Become a Member
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

      {/* SECTION 01 -  MEMBERSHIP INTRO */}
      <section data-no-reveal className="relative bg-white py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative">
            <div className="cinematic-img-wrap relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images.jpg"
                alt="Modern club infrastructure"
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
              Club Excellence
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              THE SAMPAN MEMBERSHIP
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Membership Designed Around the Way You Live.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Sampan Club & Membership brings together hospitality, leisure,
              recreation, networking, and lifestyle experiences under one
              membership platform.
            </p>
            <div className="stagger-group mt-10 space-y-6">
              {introHighlights.map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 border-t border-neutral-200 pt-4"
                >
                  <span className="text-xs font-bold text-neutral-400">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 -  EXPRESS HIGHWAY INN */}
      <section data-no-reveal className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-12">
          <div className="flex flex-col justify-center">
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              01 - EXPRESS HIGHWAY INN
            </p>
            <div className="relative mt-4">
              <div className="section-number absolute -left-4 -top-8 -z-10 text-[10rem] font-bold leading-none text-neutral-200">
                02
              </div>
            </div>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight">
              Your Private Gateway to Hospitality & Leisure.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-xl text-base leading-7 text-neutral-600">
              Designed for members who appreciate premium hospitality,
              comfortable social spaces, and a more personalized experience in a
              refined environment.
            </p>
            <div className="stagger-group mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {expressExperience.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-neutral-300 pt-5"
                >
                  <item.icon className="h-6 w-6 text-emerald-700" />
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="parallax-text-fast mt-12">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 border border-neutral-900 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                Explore Membership{" "}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="cinematic-img-wrap relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images.jpg"
              alt="Express Highway Inn"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="cinematic-img object-cover"
              style={{ willChange: "transform" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 03 -  DARK -  AGRO & GOLF */}
      <section
        data-no-reveal
        className="bg-[#080808] py-20 text-white lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              02 - AGRO & GOLF
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Where Leisure Meets Nature.
            </h2>
            <p className="parallax-text-slow mt-4 text-base leading-7 text-white/60">
              Brings together nature, recreation, hospitality, and social
              experiences in one distinctive destination for open spaces.
            </p>
          </div>
          <div className="stagger-group grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {agroExperience.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-5">
                <item.icon className="h-6 w-6 text-emerald-400" />
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="parallax-text-fast mt-12">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 border border-emerald-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-500 transition-colors hover:bg-emerald-500 hover:text-white"
            >
              Explore Membership{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 04 -  WHITE -  COMMUNITY */}
      <section data-no-reveal className="bg-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="relative mb-16 max-w-3xl">
            <div className="section-number absolute -left-8 -top-12 -z-10 text-[10rem] font-bold leading-none text-neutral-100">
              04
            </div>
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              THE COMMUNITY
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              More Than a Membership. A Community.
            </h2>
            <p className="parallax-text-slow mt-6 max-w-2xl text-base leading-7 text-neutral-600">
              Sampan membership is designed around experiences and
              relationships—not simply access. Connect, relax, and experience a
              growing ecosystem.
            </p>
          </div>
          <div className="stagger-group grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communityFeatures.map((item) => (
              <div
                key={item.num}
                className="group relative flex flex-col border border-neutral-200 bg-neutral-50 p-8 transition-all hover:-translate-y-1 hover:shadow-sm"
              >
                <span className="text-xs font-bold text-neutral-400">
                  {item.num}
                </span>
                <item.icon className="mt-6 h-7 w-7 text-neutral-800" />
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {item.desc}
                </p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* SECTION 05 -  WHITE -  CHOOSE YOUR EXPERIENCE (AWWWARDS) */}
      {/* --------------------------------------------------------- */}
      <section
        id="experience"
        data-no-reveal
        className="relative overflow-hidden bg-white py-20 lg:py-0 lg:min-h-screen"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          {/* Mobile Only Header */}
          <div className="parallax-text-fast mb-12 text-center lg:hidden">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Choose Your Experience
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Two Destinations. Different Ways to Belong.
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:min-h-[85vh] lg:grid-cols-[1fr_1.2fr] lg:gap-0">
            {/* LEFT COLUMN: Interactive Text List */}
            <div className="relative flex flex-col justify-center py-6 lg:border-r lg:border-neutral-200 lg:py-0 lg:pr-12">
              {/* Desktop Eyebrow */}
              <p className="parallax-text-fast mb-12 hidden text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 lg:block">
                <span className="text-emerald-700">05</span> / Choose Your
                Experience
              </p>

              {/* Giant Background Number */}
              <div className="pointer-events-none absolute -left-6 top-1/2 -z-10 -translate-y-1/2 text-[18rem] font-bold leading-none text-neutral-100 lg:block">
                05
              </div>

              <div className="flex flex-col">
                {[
                  {
                    title: "Express Highway Inn",
                    subtitle: "Club & Lounge",
                    desc: "Best for hospitality, business networking, lounge experiences, meetings, social gatherings, and convenient leisure. Designed for members who appreciate premium hospitality, comfortable social spaces, and a more personalized experience.",
                    image: "/images/land/urban.jfif",
                    cta: "View Details",
                  },
                  {
                    title: "Agro & Golf",
                    subtitle: "Club & Lounge",
                    desc: "Best for nature, recreation, family leisure, golf-oriented experiences, social gatherings, and destination-based relaxation. Brings together nature, recreation, hospitality, and social experiences in one distinctive destination.",
                    image: "/images/land/urban.jfif",
                    cta: "View Details",
                  },
                ].map((project, index) => (
                  <div
                    key={project.title}
                    onClick={() => handleProjectClick(index)}
                    className="group relative cursor-pointer py-6 lg:py-10"
                  >
                    {/* Active Indicator Bar (Desktop) */}
                    <div
                      className="absolute left-0 top-0 hidden h-full w-[3px] origin-top scale-y-0 rounded-full bg-emerald-600 transition-transform duration-500 ease-out lg:block"
                      style={{
                        transform:
                          activeProject === index ? "scaleY(1)" : "scaleY(0)",
                      }}
                    />

                    <div className="flex flex-col gap-1 lg:gap-3">
                      <span
                        className={`hidden text-xs font-mono font-medium uppercase tracking-widest transition-colors duration-300 lg:block ${
                          activeProject === index
                            ? "text-emerald-600"
                            : "text-neutral-400"
                        }`}
                      >
                        {project.subtitle}
                      </span>
                      <h3
                        className={`text-[clamp(1.8rem,5vw,5.5rem)] font-bold leading-[0.9] tracking-tighter transition-colors duration-500 lg:text-[clamp(2.5rem,5vw,5.5rem)] ${
                          activeProject === index
                            ? "text-neutral-950"
                            : "text-neutral-300"
                        }`}
                      >
                        {project.title.split(" ").map((word, i) => (
                          <span key={i} className="inline-block">
                            {word}&nbsp;
                          </span>
                        ))}
                      </h3>
                    </div>

                    {/* MOBILE ONLY: Expanded Content */}
                    <div
                      className="mt-4 block overflow-hidden lg:hidden"
                      style={{
                        maxHeight: activeProject === index ? "500px" : "0px",
                        transition:
                          "max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-neutral-200">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm leading-7 text-neutral-600">
                        {project.desc}
                      </p>
                      <div className="mt-6">
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-700"
                        >
                          {project.cta} <FiArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Visual Stage (Desktop) */}
            <div
              ref={stageRef}
              className="relative hidden h-[85vh] overflow-hidden lg:block"
            >
              <div className="default-stage-text absolute inset-0 z-0 flex items-center justify-center">
                <p className="text-center text-sm uppercase tracking-[0.3em] text-neutral-300">
                  Loading experience...
                </p>
              </div>

              {[
                {
                  desc: "Best for hospitality, business networking, lounge experiences, meetings, social gatherings, and convenient leisure. Designed for members who appreciate premium hospitality.",
                  image: "/images/land/urban.jfif",
                  cta: "View Details",
                },
                {
                  desc: "Best for nature, recreation, family leisure, golf-oriented experiences, social gatherings, and destination-based relaxation. Brings together nature, recreation, hospitality, and social experiences in one distinctive destination.",
                  image: "/images/land/urban.jfif",
                  cta: "View Details",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className={`project-visual-${index} absolute inset-0`}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={`Experience ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out"
                      style={{ transform: "scale(1.1)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <div
                    className={`info-panel-${index} absolute inset-x-0 bottom-0 z-10 translate-y-full p-10`}
                  >
                    <div className="w-full max-w-lg rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
                      <p className="text-sm leading-7 text-white/80">
                        {project.desc}
                      </p>
                      <div className="mt-6">
                        <Link
                          href="#contact"
                          className="group/btn inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
                        >
                          {project.cta}{" "}
                          <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 -  DARK -  MEMBER BENEFITS */}
      <section
        data-no-reveal
        className="bg-[#080808] py-20 text-white lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="mb-16 max-w-2xl">
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              MEMBER BENEFITS
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Privileges That Make Membership Worth Belonging To.
            </h2>
          </div>
          <div className="stagger-group grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {memberBenefits.map((benefit) => (
              <div
                key={benefit.num}
                className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.06]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-emerald-500/50">
                    <benefit.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {benefit.desc}
                  </p>
                </div>
                <div className="mt-6 h-px w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 -  WHITE -  PROCESS */}
      <section data-no-reveal className="bg-[#f8f8f8] py-20 lg:py-32">
        <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <div className="relative mb-16 max-w-2xl">
            <div className="section-number absolute -left-8 -top-12 -z-10 text-[10rem] font-bold leading-none text-neutral-200">
              07
            </div>
            <p className="parallax-text-fast mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              THE PROCESS
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-tight tracking-tight">
              Getting Started Is Simple.
            </h2>
          </div>
          <div className="stagger-group relative grid gap-12 lg:grid-cols-4">
            <div className="absolute left-0 top-8 hidden h-px w-full bg-neutral-300 lg:block" />
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-neutral-300 bg-[#f8f8f8] text-xl font-bold text-neutral-900">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="parallax-text-slow mt-16 border-l-2 border-neutral-300 pl-4 text-xs italic text-neutral-500">
            Membership benefits, facilities, terms, availability, and applicable
            fees may vary by membership category and club.
          </p>
        </div>
      </section>

      {/* SECTION 08 -  WHITE -  TRUST & TRANSPARENCY */}
      <section data-no-reveal className="bg-white py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div className="relative flex flex-col justify-center">
            <div className="section-number absolute -right-8 -top-8 -z-10 text-[10rem] font-bold leading-none text-neutral-100">
              08
            </div>
            <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              TRANSPARENCY
            </p>
            <h2 className="parallax-text-fast text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-neutral-950">
              Membership With Clarity.
            </h2>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              <span className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-neutral-900">
                CLEAR.
              </span>
              <span className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-neutral-400">
                SIMPLE.
              </span>
              <span className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-neutral-400">
                TRANSPARENT.
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="parallax-text-slow text-base leading-7 text-neutral-600">
              We ensure complete transparency in membership options, benefits,
              facilities, terms, and availability. Our team ensures clear
              communication throughout the entire membership process.
            </p>
            <div className="cinematic-img-wrap relative mt-10 aspect-[16/10] w-full overflow-hidden border border-neutral-200">
              <Image
                src="/images.jpg"
                alt="Transparency"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="cinematic-img object-cover"
                style={{ willChange: "transform" }}
              />
            </div>
            <div className="parallax-text-fast mt-10">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 border border-neutral-900 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                Request Membership Details{" "}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 -  DARK -  STATEMENT */}
      <section
        data-no-reveal
        className="bg-[#080808] py-20 text-white lg:py-32"
      >
        <div className="mx-auto w-full max-w-[1000px] px-6 text-center lg:px-12">
          <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            FIND YOUR PLACE
          </p>
          <h2 className="parallax-text-fast text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-tight">
            Find Your Place Within Sampan.
          </h2>
          <p className="parallax-text-slow mx-auto mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Choose the membership experience that fits your lifestyle,
            interests, and ambitions.
          </p>
          <div className="parallax-text-fast mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors hover:bg-white hover:text-neutral-950"
            >
              Express Highway Inn{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 border border-emerald-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-500 transition-colors hover:bg-emerald-500 hover:text-white"
            >
              Agro & Golf{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 -  WHITE -  FINAL CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-white py-24 lg:py-32"
      >
        <div className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-[#E8EFE9]" />
        <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full border border-neutral-200" />
        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center lg:px-12">
          <p className="parallax-text-fast mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
            YOUR MEMBERSHIP AWAITS
          </p>
          <h2 className="parallax-text-fast text-[clamp(2.2rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-neutral-950">
            Step Into a More Exclusive Experience.
          </h2>
          <p className="parallax-text-slow mx-auto mt-8 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            Explore the membership opportunities at Express Highway Inn Club &
            Lounge and Agro & Golf Club & Lounge. Speak with our team to
            discover the right membership for you.
          </p>
          <div className="parallax-text-fast mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 bg-neutral-950 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-emerald-700 sm:w-auto"
            >
              Become a Member{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 border border-neutral-300 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-neutral-950 transition-colors hover:border-neutral-950 sm:w-auto"
            >
              Talk to Membership Team{" "}
              <FiMessageSquare className="transition-transform group-hover:scale-110" />
            </Link>
          </div>
          <p className="parallax-text-slow mt-10 text-xs text-neutral-400">
            Membership availability and benefits are subject to applicable terms
            and conditions.
          </p>
        </div>
      </section>
    </main>
  );
}
