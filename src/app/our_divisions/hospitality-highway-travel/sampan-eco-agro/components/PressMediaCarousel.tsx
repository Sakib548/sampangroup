"use client";

import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaNewspaper, FaAward } from "react-icons/fa";

interface PressMention {
  id: string;
  publication: string;
  badge: string;
  headline: string;
  quote: string;
  date: string;
}

const pressItems: PressMention[] = [
  {
    id: "press-1",
    publication: "The Daily Star",
    badge: "Eco-Tourism Feature",
    headline: "Transforming Highway Tourism with Sustainable Organic Agriculture",
    quote: "Sampan Eco & Agro stands out as a benchmark model where highway travelers can pause, pick chemical-free fruits straight from trees, and dine on authentic local harvests.",
    date: "October 2025",
  },
  {
    id: "press-[#",
    publication: "Prothom Alo",
    badge: "Agritourism Spotlight",
    headline: "ঢাকার কাছে পরিবেশবান্ধব এগ্রো-রিসোর্ট ও তাজা ফসলের সমারোহ",
    quote: "ঢাকা-মাওয়া এক্সপ্রেসওয়ের কাছে ৫০ একরের বেশি জমিতে গড়ে ওঠা সাম্পান ইকো অ্যান্ড এগ্রো রিসোর্ট ভ্রমণপিপাসুদের জন্য এনেছে প্রকৃতির নির্ভেজাল স্বাদ।",
    date: "August 2025",
  },
  {
    id: "press-3",
    publication: "Financial Express",
    badge: "Green Investment Award",
    headline: "Integrating Agro-Forestry with Modern Hospitality Services",
    quote: "Sampan Group's eco-agro division successfully bridges rural agricultural economy with modern corporate retreat facilities and sustainable land stewardship.",
    date: "May 2025",
  },
];

export default function PressMediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pressItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + pressItems.length) % pressItems.length);
  };

  const currentItem = pressItems[currentIndex];

  return (
    <section id="press-media" className="py-24 bg-[#10251b] text-white relative border-b border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#b9e583] mb-4">
              <FaNewspaper className="text-xs" />
              <span>08 • National Press &amp; Recognition</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Media Features &amp; <span className="font-semibold text-[#b9e583]">Press Mentions</span>
            </h2>
          </div>

          {/* Carousel Control Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Press Slide"
              className="h-12 w-12 border border-white/20 bg-[#0c1c14] hover:bg-[#b9e583] hover:text-[#0c1c14] hover:border-[#b9e583] flex items-center justify-center transition-all cursor-pointer"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Press Slide"
              className="h-12 w-12 border border-white/20 bg-[#0c1c14] hover:bg-[#b9e583] hover:text-[#0c1c14] hover:border-[#b9e583] flex items-center justify-center transition-all cursor-pointer"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Highlighted Quote Card */}
        <div className="border border-[#b9e583]/30 bg-[#0c1c14] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[#b9e583]" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b9e583] bg-[#b9e583]/15 border border-[#b9e583]/40 px-3 py-1">
                  {currentItem.publication}
                </span>
                <span className="font-mono text-xs text-white/50">{currentItem.date}</span>
                <span className="hidden sm:inline-block font-mono text-[10px] uppercase text-white/40 border border-white/10 px-2 py-0.5">
                  {currentItem.badge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                "{currentItem.headline}"
              </h3>

              <div className="relative pl-6 border-l-2 border-[#b9e583]">
                <FaQuoteLeft className="text-lg text-[#b9e583]/40 absolute -left-3 -top-2" />
                <p className="text-base text-white/80 leading-relaxed font-normal italic">
                  {currentItem.quote}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3">
                <FaAward className="text-3xl text-[#b9e583]" />
                <div>
                  <h4 className="font-mono text-xs font-bold text-white uppercase">Certified Eco Tourism</h4>
                  <p className="text-[11px] text-white/60">National Agritourism Excellence</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4">
                {pressItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 transition-all cursor-pointer ${
                      currentIndex === idx ? "w-8 bg-[#b9e583]" : "w-2 bg-white/30 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
