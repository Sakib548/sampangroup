"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaLeaf, FaBuilding, FaUsers } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

const tabs = ["Who We Are", "Our Values", "Founders"];

export default function AboutUsEditorial() {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [activePanel, setActivePanel] = useState(0);
  const valueIcons = [FaBriefcase, FaLeaf, FaBuilding, FaUsers];
  const scrollToPanel = (index: number) => {
    if (window.innerWidth < 1024) {
      setActivePanel(index);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const targetTop =
      section.getBoundingClientRect().top +
      window.scrollY +
      index * window.innerHeight;

    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      const panels = panelsRef.current.filter(
        (panel): panel is HTMLDivElement => panel !== null,
      );

      gsap.set(panels, { autoAlpha: 1 });
      gsap.set(panels.slice(1), { yPercent: 100 });

      const pinTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: storyRef.current,
        pinSpacing: false,
        pinReparent: true,
        anticipatePin: 1,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const nextPanel = Math.min(2, Math.floor(self.progress * 3));
            setActivePanel((current) =>
              current === nextPanel ? current : nextPanel,
            );
          },
        },
      });

      timeline
        .to({}, { duration: 1 })
        .to(panels[0], { yPercent: -100, duration: 1 })
        .to(panels[1], { yPercent: 0, duration: 1 }, "<")
        .to(panels[1], { yPercent: -100, duration: 1 })
        .to(panels[2], { yPercent: 0, duration: 1 }, "<");

      return () => {
        pinTrigger.kill();
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    return () => media.revert();
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    const interval = window.setInterval(() => {
      setActivePanel((current) => (current + 1) % tabs.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#080808] text-white lg:h-[300vh]"
    >
      <div
        ref={storyRef}
        className="relative grid grid-cols-1 lg:h-screen lg:grid-cols-2 lg:overflow-hidden"
      >
        <div className="relative z-20 flex min-h-screen flex-col border-white/20 bg-[#080808] px-6 py-12 lg:min-h-0 lg:border-r lg:px-12 lg:py-16">
          <h2 className="absolute left-6 top-12 z-30 text-sm font-medium uppercase tracking-[0.15em] text-red-400 lg:left-12 lg:top-16">
            About Us
          </h2>
          <h3 className="mt-12 max-w-2xl text-5xl font-light leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:mt-16 lg:text-7xl">
            Building a better future through purpose and progress.
          </h3>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            SAMPAN Group is a diversified enterprise creating sustainable value
            across real estate, hospitality, construction, agriculture,
            automotive, retail, and more.
          </p>

          <nav
            className="mt-10 flex flex-wrap gap-x-8 gap-y-4"
            aria-label="About sections"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                onClick={() => scrollToPanel(index)}
                className={`flex items-center gap-3 text-sm transition-colors ${
                  activePanel === index ? "text-emerald-300" : "text-white/45"
                }`}
              >
                <span className="hidden text-red-400 lg:inline">▶</span>
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="relative px-6 py-12 sm:px-12 lg:min-h-0 lg:overflow-hidden lg:px-16 lg:py-16">
          <h2 className="pointer-events-none absolute left-6 top-12 z-30 text-sm uppercase tracking-[0.15em] text-red-400 sm:left-12 lg:left-16 lg:top-16">
            {tabs[activePanel]}
          </h2>
          <div
            ref={(element) => {
              panelsRef.current[0] = element;
            }}
            className={`relative px-0 py-0 lg:absolute lg:inset-0 lg:block lg:overflow-hidden lg:px-16 lg:py-16 ${activePanel === 0 ? "block" : "hidden"}`}
          >
            <div className="mt-16 grid gap-12 sm:grid-cols-2">
              <Stat value="20+" label="Years of experience" />
              <Stat value="16" label="Active concerns" />
              <Stat value="1000+" label="People and partners" />
              <Stat value="360°" label="Vision for growth" />
            </div>
          </div>

          <div
            ref={(element) => {
              panelsRef.current[1] = element;
            }}
            className={`relative mt-20 px-0 py-0 lg:absolute lg:inset-0 lg:mt-0 lg:block lg:overflow-hidden lg:px-16 lg:py-16 ${activePanel === 1 ? "block" : "hidden"}`}
          >
            <div className="mt-12 overflow-hidden rounded-2xl border border-emerald-300/70 bg-[#211d1a]">
              {[
                ["Sustainable Business", "Eco-friendly Enterprise Practices."],
                ["Eco Friendly", "Green, Clean, Sustainable."],
                ["Making village a City", "Urbanizing Rural Areas."],
                [
                  "Creating Work opportunities ",
                  "Generating Employment Opportunities.",
                ],
              ].map(([title, description], index) => {
                const Icon = valueIcons[index];

                return (
                  <div
                    key={title}
                    className="flex items-center justify-between gap-6 border-b border-white/10 px-6 py-6 last:border-b-0 sm:px-8"
                  >
                    <div>
                      <h3 className="text-xl text-emerald-300">{title}</h3>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/65">
                        {description}
                      </p>
                    </div>
                    <Icon
                      className="h-12 w-12 shrink-0 text-emerald-300 sm:h-14 sm:w-14"
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={(element) => {
              panelsRef.current[2] = element;
            }}
            className={`relative mt-20 px-0 py-0 lg:absolute lg:inset-0 lg:mt-0 lg:block lg:overflow-hidden lg:px-16 lg:py-16 ${activePanel === 2 ? "block" : "hidden"}`}
          >
            <h3 className="mt-10 text-6xl font-light leading-none text-emerald-300 sm:text-8xl">
              Meet our
              <br />
              founder
            </h3>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="relative aspect-[0.8] overflow-hidden bg-[#D6A400]">
                <Image
                  src="/images/Boss-profile-1.png"
                  alt="Md. Emamul Hasan, Managing Director and CEO"
                  fill
                  sizes="(min-width: 640px) 35vw, 80vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="self-end">
                <p className="text-xl font-medium">Md. Emamul Hasan</p>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/50">
                  Managing Director & CEO
                </p>
                <p className="mt-6 text-base leading-7 text-white/65">
                  A seasoned professional leading Sampan Group across a broad
                  spectrum of industries with vision, experience, and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-7xl font-light leading-none text-red-400 sm:text-8xl">
        {value}
      </p>
      <p className="mt-4 max-w-[150px] text-lg leading-7 text-emerald-300">
        {label}
      </p>
    </div>
  );
}
