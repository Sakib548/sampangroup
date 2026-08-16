"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaBuilding, FaLeaf, FaUsers } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const tabs = ["Who We Are", "Our Values", "Founders"];
const valueIcons = [FaBriefcase, FaLeaf, FaBuilding, FaUsers];

export default function AboutUsEditorial() {
  const sectionRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);
  const [isWideLayout, setIsWideLayout] = useState(false);

  const selectPanel = (index: number) => {
    if (window.innerWidth < 1024) {
      setActivePanel(index);
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY + index * window.innerHeight,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const nextPanel = Math.min(2, Math.round(self.progress * 2));
            setActivePanel((current) =>
              current === nextPanel ? current : nextPanel,
            );
          },
        },
      });

      timeline
        .to(track, { yPercent: -33.333333, duration: 1 })
        .to(track, { yPercent: -66.666667, duration: 1 })
        .to({}, { duration: 1 });

      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });

    return () => media.revert();
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const updateLayout = () => setIsWideLayout(desktopQuery.matches);

    updateLayout();
    desktopQuery.addEventListener("change", updateLayout);

    return () => desktopQuery.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    if (!isWideLayout && trackRef.current) {
      gsap.set(trackRef.current, { clearProps: "transform" });
    }
  }, [isWideLayout]);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    let timer: number | undefined;

    const startAutoplay = () => {
      if (!mobileQuery.matches || timer !== undefined) return;

      timer = window.setInterval(() => {
        setActivePanel((current) => (current + 1) % tabs.length);
      }, 5000);
    };

    const stopAutoplay = () => {
      if (timer === undefined) return;
      window.clearInterval(timer);
      timer = undefined;
    };

    const handleBreakpointChange = () => {
      if (mobileQuery.matches) startAutoplay();
      else stopAutoplay();
    };

    handleBreakpointChange();
    mobileQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      stopAutoplay();
      mobileQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#080808] text-white lg:h-[300vh]"
    >
      <div
        ref={storyRef}
        className="grid min-h-screen min-w-0 grid-cols-1 lg:sticky lg:top-0 lg:h-screen lg:grid-cols-2"
        style={{
          gridTemplateColumns: isWideLayout ? "repeat(2, minmax(0, 1fr))" : "1fr",
        }}
      >
        <div className="flex min-h-screen min-w-0 flex-col justify-center border-white/20 bg-[#080808] px-6 py-10 sm:px-10 lg:min-h-0 lg:border-r lg:px-12 lg:py-12">
          <h2 className="text-xl font-medium uppercase tracking-[0.15em] text-red-400 sm:text-2xl lg:text-3xl">
            About Us
          </h2>
          <h3 className="mt-7 max-w-2xl text-[clamp(2.5rem,3.8vw,4.25rem)] font-light leading-[1.04] tracking-[-0.04em]">
            Building a better future through purpose and progress.
          </h3>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
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
                onClick={() => selectPanel(index)}
                className="text-sm text-white/55 transition-colors hover:text-emerald-300"
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="min-h-screen min-w-0 overflow-visible px-6 py-10 sm:px-10 lg:h-screen lg:overflow-hidden lg:px-14 lg:py-12">
          <div ref={trackRef} className="flex min-w-0 flex-col">
            <section
              className={`min-h-screen shrink-0 lg:flex lg:flex-col ${
                activePanel === 0 ? "flex flex-col" : "hidden lg:flex lg:flex-col"
              }`}
            >
              <h2 className="text-[clamp(2rem,3.2vw,3.75rem)] font-medium uppercase tracking-[0.12em] text-red-400">
                Who We Are
              </h2>
              <div className="mt-12 grid gap-10 lg:grid-cols-2">
                <Stat value="20+" label="Years of experience" />
                <Stat value="16" label="Active concerns" />
                <Stat value="1000+" label="People and partners" />
                <Stat value="360°" label="Vision for growth" />
              </div>
            </section>

            <section
              className={`min-h-screen shrink-0 lg:flex lg:flex-col ${
                activePanel === 1 ? "flex flex-col" : "hidden lg:flex lg:flex-col"
              }`}
            >
              <h2 className="text-[clamp(2rem,3.2vw,3.75rem)] font-medium uppercase tracking-[0.12em] text-red-400">
                Our Values
              </h2>
              <div className="mt-12 overflow-hidden rounded-2xl border border-emerald-300/70 bg-[#211d1a]">
                {[
                  ["Sustainable Business", "Eco-friendly enterprise practices."],
                  ["Eco Friendly", "Green, clean, sustainable."],
                  ["Making village a City", "Urbanizing rural areas."],
                  ["Creating Work opportunities", "Generating employment opportunities."],
                ].map(([title, description], index) => {
                  const Icon = valueIcons[index];

                  return (
                    <div
                      key={title}
                      className="flex flex-col items-start justify-between gap-5 border-b border-white/10 px-6 py-6 last:border-b-0 sm:flex-row sm:items-center sm:px-8"
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
            </section>

            <section
              className={`min-h-screen shrink-0 lg:flex lg:flex-col ${
                activePanel === 2 ? "flex flex-col" : "hidden lg:flex lg:flex-col"
              }`}
            >
              <h2 className="text-[clamp(2rem,3.2vw,3.75rem)] font-medium uppercase tracking-[0.12em] text-red-400">
                Founders
              </h2>
              <h3 className="mt-8 text-[clamp(3rem,5vw,5.5rem)] font-light leading-none text-emerald-300">
                Meet our
                <br />
                founder
              </h3>
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                <div className="overflow-hidden bg-[#D6A400]">
                  <Image
                    src="/images/Boss-profile-1.png"
                    alt="Md. Emamul Hasan, Managing Director and CEO"
                    width={700}
                    height={875}
                    sizes="(min-width: 640px) 35vw, 80vw"
                    className="h-auto w-full object-cover object-top"
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
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[clamp(3rem,5vw,5.5rem)] font-light leading-none text-red-400">
        {value}
      </p>
      <p className="mt-4 max-w-[150px] text-lg leading-7 text-emerald-300">
        {label}
      </p>
    </div>
  );
}
