"use client";

import { useState, useEffect, useRef } from "react";
import { 
  FaUsers, 
  FaStar, 
  FaParking, 
  FaGlassCheers, 
  FaUtensils, 
  FaShieldAlt 
} from "react-icons/fa";

const milestones = [
  {
    icon: FaUsers,
    target: 85000,
    suffix: "+",
    label: "Travelers & Guests Hosted",
    description: "Families, highway travelers & wedding parties welcomed with warmth",
  },
  {
    icon: FaStar,
    target: 4.8,
    isDecimal: true,
    suffix: " ★",
    label: "Guest Satisfaction",
    description: "Rated highly for soundproof room quietness & event hosting",
  },
  {
    icon: FaGlassCheers,
    target: 300,
    suffix: "+",
    label: "White Hall Banquet Capacity",
    description: "Grand ballroom configured for corporate conferences & grand weddings",
  },
  {
    icon: FaParking,
    target: 150,
    suffix: "+",
    label: "Gated Parking & Coach Bays",
    description: "Secured round-the-clock with CCTV surveillance & night security",
  },
  {
    icon: FaUtensils,
    target: 20,
    suffix: " Min",
    label: "Highway Express Dining",
    description: "Freshly prepared traditional meals and hot teas served swiftly",
  },
  {
    icon: FaShieldAlt,
    target: 365,
    suffix: " Days",
    label: "24/7 Always Open",
    description: "Dependable stopover facility open non-stop throughout the year",
  },
];

export default function MilestoneCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(milestones.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = easeOutExpo(frame / totalFrames);

      setCounts(
        milestones.map((m) => {
          if (m.isDecimal) {
            return Number((m.target * progress).toFixed(1));
          }
          return Math.round(m.target * progress);
        })
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(milestones.map((m) => m.target));
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  return (
    <section ref={containerRef} className="relative bg-[#F5F5F2] py-20 lg:py-28 overflow-hidden text-neutral-950 border-y border-neutral-200">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#ca8a04]/30 bg-amber-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ca8a04] mb-4">
            <span>09 / Key Milestones &amp; Scale</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Dependable hospitality in numbers.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600">
            A softer place to stop where highway safety, comfortable rest, and celebratory occasions meet.
          </p>
        </div>

        {/* Milestone Cards Grid (Square & Light) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-none border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-[#e8b84b] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Top Gold Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#e8b84b] transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-none border border-[#ca8a04]/30 bg-amber-50 text-[#ca8a04]">
                    <Icon className="text-lg" />
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 group-hover:text-[#ca8a04] transition-colors">
                    {item.isDecimal ? counts[index].toFixed(1) : counts[index].toLocaleString()}
                  </span>
                  <span className="text-2xl font-bold text-[#ca8a04]">
                    {item.suffix}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-neutral-950 tracking-tight">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
