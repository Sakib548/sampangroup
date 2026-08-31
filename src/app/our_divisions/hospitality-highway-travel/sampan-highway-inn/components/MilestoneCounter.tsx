"use client";

import { useState, useEffect, useRef } from "react";
import { 
  FaUsers, 
  FaStar, 
  FaParking, 
  FaLeaf, 
  FaUtensils, 
  FaShieldAlt 
} from "react-icons/fa";

const milestones = [
  {
    icon: FaUsers,
    target: 120000,
    suffix: "+",
    label: "Travelers Welcomed",
    description: "Families, executives & road trippers served across the corridor",
  },
  {
    icon: FaStar,
    target: 4.9,
    isDecimal: true,
    suffix: " ★",
    label: "Guest Satisfaction",
    description: "Over 2,400+ verified Google & Tripadvisor 5-star ratings",
  },
  {
    icon: FaParking,
    target: 200,
    suffix: "+",
    label: "Secure Parking & EV Bays",
    description: "Equipped with round-the-clock armed security & CCTV monitoring",
  },
  {
    icon: FaLeaf,
    target: 100,
    suffix: "%",
    label: "Farm-Fresh Sourcing",
    description: "Produce directly supplied daily from Sampan Organic Agro farms",
  },
  {
    icon: FaUtensils,
    target: 15,
    suffix: " Min",
    label: "Express Dining Guarantee",
    description: "Fresh, hygienic, piping-hot dishes prepared without delay",
  },
  {
    icon: FaShieldAlt,
    target: 365,
    suffix: " Days",
    label: "24/7 Non-Stop Hospitality",
    description: "Always open, lighted, and staffed rain or shine every day",
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

    const duration = 2000; // ms
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
          <div className="inline-flex items-center gap-2 border border-emerald-700/30 bg-emerald-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 mb-4">
            <span>Our Track Record</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Excellence by the numbers.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600">
            Engineered to deliver unmatched consistency, hygiene, and peace of mind on every single trip.
          </p>
        </div>

        {/* Milestone Cards Grid (Square & Light) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-none border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-emerald-700 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Top Emerald Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-700 transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-none border border-emerald-700/30 bg-emerald-50 text-emerald-800">
                    <Icon className="text-lg" />
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 group-hover:text-emerald-800 transition-colors">
                    {item.isDecimal ? counts[index].toFixed(1) : counts[index].toLocaleString()}
                  </span>
                  <span className="text-2xl font-bold text-emerald-700">
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
