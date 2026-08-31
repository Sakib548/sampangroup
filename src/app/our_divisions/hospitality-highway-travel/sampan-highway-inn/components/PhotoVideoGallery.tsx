"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FaImages, 
  FaPlay, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaExpand,
  FaVideo
} from "react-icons/fa";

const galleryCategories = [
  { id: "all", label: "All Media" },
  { id: "suites", label: "Suites & Rooms" },
  { id: "dining", label: "Dining & Barista" },
  { id: "events", label: "Events & Meetings" },
  { id: "exterior", label: "Plaza & Exterior" },
];

const galleryItems = [
  {
    id: 1,
    title: "Sampan Highway Inn Illuminated Night View",
    category: "exterior",
    src: "/images/projects/sampan-highway-inn.png",
    aspect: "col-span-2 row-span-2",
    caption: "Architectural night facade showing direct highway frontage and lighted entry.",
  },
  {
    id: 2,
    title: "Gourmet Highway Restaurant & Lounge",
    category: "dining",
    src: "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png",
    aspect: "col-span-1",
    caption: "Warm ambiance, live culinary stations, and family dining tables.",
  },
  {
    id: 3,
    title: "VVIP Soundproof Rest Suite",
    category: "suites",
    src: "/images/facilities/highway_inn/all_day_comfort.png",
    aspect: "col-span-1",
    caption: "King orthopaedic bed with acoustic triple-glazing for peaceful sleep.",
  },
  {
    id: 4,
    title: "120kW DC EV Ultra-Fast Charging Plaza",
    category: "exterior",
    src: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    aspect: "col-span-1",
    caption: "Covered high-output dual-gun DC superchargers for all EV models.",
  },
  {
    id: 5,
    title: "Executive Outings & Corporate Sessions",
    category: "events",
    src: "/images/facilities/highway_inn/Official-Outing.png",
    aspect: "col-span-1",
    caption: "Dedicated conference and banquet suite with complete audio-visual tech.",
  },
  {
    id: 6,
    title: "Celebration Party Center & Banquet Hall",
    category: "events",
    src: "/images/facilities/highway_inn/party_reservation.png",
    aspect: "col-span-1",
    caption: "Versatile banquet hall setup ready for reunions, birthdays, and official galas.",
  },
  {
    id: 7,
    title: "VVIP Executive Private Lounge",
    category: "suites",
    src: "/images/facilities/express_highway_inn/5.VVIP-Lounge.png",
    aspect: "col-span-1",
    caption: "Exclusive private waiting lounge with continuous barista coffee.",
  },
  {
    id: 8,
    title: "Automated Touchless Car Wash Plaza",
    category: "exterior",
    src: "/images/facilities/express_highway_inn/7.Automatic-Car-Wash.png",
    aspect: "col-span-1",
    caption: "High-pressure underbody rinse and detailing while guests dine.",
  },
];

export default function PhotoVideoGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredItems.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < filteredItems.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
                05 — Photo &amp; Video Gallery
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              A visual journey <br />
              <span className="text-emerald-700">into highway luxury.</span>
            </h2>
          </div>

          {/* Video Flyover Trigger Button */}
          <div>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-3 rounded-2xl bg-[#070b09] hover:bg-emerald-950 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-black flex items-center justify-center">
                <FaPlay className="text-[10px] ml-0.5" />
              </div>
              <span>Watch Drone Tour Video</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pb-4 mb-10 border-b border-neutral-200">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#070b09] text-white shadow-md"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 hover:text-black border border-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-sm border border-neutral-200 cursor-pointer ${
                index === 0 ? "aspect-[4/3] sm:col-span-2 sm:row-span-2 sm:aspect-auto min-h-[320px]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Click to Expand
                </span>
                <h3 className="text-sm font-bold text-white mt-1">{item.title}</h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-1">{item.caption}</p>
              </div>

              {/* Expand Icon Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaExpand className="text-xs" />
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:flex items-center justify-center"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Lightbox Image Stage */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-end"
            >
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />

              <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{filteredItems[lightboxIndex].title}</h3>
                    <p className="text-xs text-neutral-300 mt-1">{filteredItems[lightboxIndex].caption}</p>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">
                    {lightboxIndex + 1} / {filteredItems.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:flex items-center justify-center"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        )}

        {/* Drone Footage Video Modal */}
        {isVideoModalOpen && (
          <div
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#070b09] border border-white/15 p-8 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <FaVideo />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Sampan Highway Inn — Aerial Flyover &amp; Experience</h3>
                    <p className="text-xs text-neutral-400">4K Drone Inspection • Corridor Frontage View</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="text-neutral-400 hover:text-white p-2"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 mt-6 flex items-center justify-center">
                <Image
                  src="/images/projects/sampan-highway-inn.png"
                  alt="Aerial Drone Video Cover"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="relative z-10 text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto mb-4 text-xl shadow-xl shadow-emerald-500/30">
                    <FaPlay className="ml-1" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Full HD Stopover Experience</h4>
                  <p className="text-xs text-neutral-300 mt-2 max-w-md mx-auto leading-relaxed">
                    Watch traveler arrivals, VVIP soundproof suites, live restaurant grilling, and 120kW EV charging in motion.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Close Video
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
