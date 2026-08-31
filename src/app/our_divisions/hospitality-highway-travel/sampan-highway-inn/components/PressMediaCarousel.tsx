"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft, FaNewspaper, FaChevronLeft, FaChevronRight, FaAward } from "react-icons/fa";

const pressMentions = [
  {
    id: 1,
    outlet: "The Daily Star",
    tagline: "National Daily",
    headline: "Redefining Highway Hospitality Along the Padma Bridge Corridor",
    quote:
      "Sampan Highway Inn sets a benchmark for modern expressway transit. With triple-glazed soundproof suites and high-capacity EV charging, it turns a grueling road trip into an effortless retreat.",
    date: "Travel & Infrastructure Feature",
    badge: "Special Report",
  },
  {
    id: 2,
    outlet: "Dhaka Tribune",
    tagline: "National English Daily",
    headline: "Pioneering Sustainable Green Mobility on Southern Highway Routes",
    quote:
      "The integration of a 120kW DC EV supercharger plaza combined with 100% farm-to-table organic dining showcases how private hospitality groups can champion environmental sustainability and road safety.",
    date: "Green Tech & Logistics",
    badge: "Eco Leadership",
  },
  {
    id: 3,
    outlet: "Bangladesh Travel & Leisure",
    tagline: "Travel Magazine",
    headline: "The Undisputed Favorite Stopover for Southern Roadtrippers",
    quote:
      "From piping-hot traditional mutton rezala to spotless air-conditioned prayer halls and executive meeting suites, Sampan Highway Inn delivers unmatched hygiene and hospitality 24 hours a day.",
    date: "Corridor Review",
    badge: "Critic's Choice",
  },
  {
    id: 4,
    outlet: "The Business Standard",
    tagline: "Business & Economy",
    headline: "How Sampan Group is Elevating Regional Highway Infrastructure",
    quote:
      "More than a restaurant—it is an economic hub supporting regional logistics, offering executives productive workspaces midway between the capital and southern divisional headquarters.",
    date: "Corporate Insights",
    badge: "Infrastructure Focus",
  },
];

export default function PressMediaCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev < pressMentions.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const current = pressMentions[activeSlide];

  return (
    <section 
      id="press"
      className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a] border-t border-neutral-200 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
                08 — Press &amp; Media Mentions
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Recognized for <br />
              <span className="text-emerald-700">highway hospitality excellence.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed">
            See what leading national news publications, travel journalists, and automobile critics have written about Sampan Highway Inn.
          </p>
        </div>

        {/* Featured Editorial Carousel Card */}
        <div className="relative rounded-3xl bg-white border border-neutral-200/80 shadow-xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Quote Section */}
            <div className="lg:col-span-8">
              
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                  <FaAward className="text-emerald-600" />
                  {current.badge}
                </span>
                <span className="text-xs text-neutral-400 font-medium">{current.date}</span>
              </div>

              <div className="text-emerald-600 mb-6 opacity-30 text-4xl">
                <FaQuoteLeft />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] leading-snug tracking-tight">
                &ldquo;{current.headline}&rdquo;
              </h3>

              <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                {current.quote}
              </p>

              {/* Publication Outlet Signature */}
              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#070b09] text-white flex items-center justify-center font-serif font-bold text-sm">
                  {current.outlet.charAt(0)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#111111]">{current.outlet}</h4>
                  <p className="text-xs text-neutral-500">{current.tagline}</p>
                </div>
              </div>

            </div>

            {/* Right Interactive Outlets Selector */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                Select Media Feature:
              </span>

              {pressMentions.map((mention, idx) => (
                <button
                  key={mention.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? "bg-[#070b09] text-white border-[#070b09] shadow-lg scale-[1.02]"
                      : "bg-[#faf9f6] text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold">{mention.outlet}</span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${
                      activeSlide === idx ? "text-emerald-400" : "text-neutral-400"
                    }`}>
                      0{idx + 1}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 line-clamp-1 ${
                    activeSlide === idx ? "text-neutral-300" : "text-neutral-500"
                  }`}>
                    {mention.headline}
                  </p>
                </button>
              ))}
            </div>

          </div>

          {/* Carousel Arrows */}
          <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {pressMentions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === i ? "w-8 bg-emerald-600" : "w-2 bg-neutral-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : pressMentions.length - 1))}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-neutral-200 hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev < pressMentions.length - 1 ? prev + 1 : 0))}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-neutral-200 hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
