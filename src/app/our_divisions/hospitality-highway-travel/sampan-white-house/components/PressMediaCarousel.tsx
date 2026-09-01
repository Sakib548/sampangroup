"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaNewspaper } from "react-icons/fa";

const pressQuotes = [
  {
    id: 1,
    publication: "The Daily Star • Travel & Living",
    headline: "Sampan White House Redefines Southern Highway Hospitality",
    quote:
      "A much-needed softer stop on the expressway. With the grandeur of White Hall for regional wedding events and quiet soundproof motel suites for tired drivers, Sampan White House delivers exceptional quality.",
    date: "November 2024",
    author: "Hospitality Review Desk",
  },
  {
    id: 2,
    publication: "Dhaka Tribune • Lifestyle",
    headline: "The Grandeur of White Hall: Where Highway Banquets Shine",
    quote:
      "Hosting a 300-person banquet on the highway used to be impossible. Sampan White House has created a full-service celebration destination with grand crystal chandeliers, generator backup, and farm-fresh cuisine.",
    date: "January 2025",
    author: "Corporate Events Column",
  },
  {
    id: 3,
    publication: "Bangladesh Travel & Leisure Journal",
    headline: "Top 5 Highway Stopovers Every Southern Traveler Should Know",
    quote:
      "From spotless washroom cleanliness to instant 20-minute hot kitchen service, Sampan Motel & White House is an oasis of comfort for families driving toward Barishal and Khulna.",
    date: "February 2025",
    author: "Editorial Feature",
  },
  {
    id: 4,
    publication: "The Business Standard • Infrastructure",
    headline: "Highway Corridors Spurring Regional Tourism Infrastructure",
    quote:
      "Sampan Group's integrated hospitality ecosystem along the N8 Expressway demonstrates how modern motels and event venues can bring urban standard services directly to the rural highway.",
    date: "March 2025",
    author: "National Business Analysis",
  },
];

export default function PressMediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pressQuotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + pressQuotes.length) % pressQuotes.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pressQuotes.length);
  };

  const current = pressQuotes[currentIndex];

  return (
    <section className="bg-white py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 border border-[#ca8a04]/30 bg-amber-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ca8a04] mb-4">
            <FaNewspaper />
            <span>08 / Press &amp; Media Mentions</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Recognized by national media.
          </h2>
          <p className="mt-4 text-sm text-neutral-500">
            What national travel critics and lifestyle journalists have to say about our motel and White Hall.
          </p>
        </div>

        {/* Carousel Card (Square & Crisp) */}
        <div className="relative mx-auto max-w-4xl rounded-none border border-neutral-200 bg-[#F5F5F2] p-8 sm:p-14 shadow-sm">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 h-[3px] w-full bg-[#e8b84b]" />
          
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-none bg-amber-50 border border-amber-200 text-[#ca8a04] flex items-center justify-center text-lg">
                <FaQuoteLeft />
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950">
                  {current.publication}
                </p>
                <p className="text-[11px] text-neutral-400 font-mono">{current.date} • {current.author}</p>
              </div>
            </div>

            {/* Navigation Buttons (Square) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous mention"
                className="w-9 h-9 rounded-none border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-800 transition-colors cursor-pointer"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next mention"
                className="w-9 h-9 rounded-none border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-800 transition-colors cursor-pointer"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug">
            &ldquo;{current.headline}&rdquo;
          </h3>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal italic">
            &ldquo;{current.quote}&rdquo;
          </p>

          {/* Dots Indicator */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-center gap-2">
            {pressQuotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Jump to slide ${i + 1}`}
                className={`h-1.5 transition-all cursor-pointer ${
                  currentIndex === i ? "w-8 bg-[#e8b84b]" : "w-2 bg-neutral-300"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
