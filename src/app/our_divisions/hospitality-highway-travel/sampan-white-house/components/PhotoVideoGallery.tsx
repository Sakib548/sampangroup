"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FaCamera, 
  FaPlay, 
  FaExpand, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight 
} from "react-icons/fa";

const galleryCategories = ["All", "White Hall Banquet", "Motel Suites", "Dining & Veranda", "Compound & Aerial"];

const galleryItems = [
  {
    id: 1,
    title: "Sampan White House & Motel Frontage",
    category: "Compound & Aerial",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    type: "photo",
    aspect: "landscape",
  },
  {
    id: 2,
    title: "White Hall Grand Celebration Ballroom",
    category: "White Hall Banquet",
    image: "/images/facilities/highway_inn/party_reservation.png",
    type: "photo",
    aspect: "portrait",
  },
  {
    id: 3,
    title: "Deluxe Soundproof Motel Bedding",
    category: "Motel Suites",
    image: "/images/concerns/highway-motel.png",
    type: "photo",
    aspect: "square",
  },
  {
    id: 4,
    title: "Garden Restaurant & Outdoor Dining",
    category: "Dining & Veranda",
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    type: "photo",
    aspect: "landscape",
  },
  {
    id: 5,
    title: "Official Corporate Offsite Setup",
    category: "White Hall Banquet",
    image: "/images/facilities/highway_inn/Official-Outing.png",
    type: "photo",
    aspect: "square",
  },
  {
    id: 6,
    title: "DC Fast EV Charging & Gated Compound",
    category: "Compound & Aerial",
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    type: "photo",
    aspect: "landscape",
  },
];

export default function PhotoVideoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="bg-white py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e8b84b]"></span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                05 / Photo &amp; Video Showcase
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Visual glimpses of <br />
              <span className="text-[#ca8a04]">White House &amp; Motel.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2.5 rounded-none bg-neutral-950 hover:bg-[#e8b84b] hover:text-neutral-950 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <FaPlay className="text-[10px] text-[#e8b84b]" />
              <span>Watch Aerial Film</span>
            </button>
          </div>
        </div>

        {/* Category Tabs (Square) */}
        <div className="flex flex-wrap gap-2 pb-4 mb-10 border-b border-neutral-200">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-neutral-950 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-700 hover:bg-[#e8b84b] hover:text-neutral-950 border border-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid (Square Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative aspect-[16/11] overflow-hidden rounded-none bg-neutral-100 border border-neutral-200 hover:border-[#e8b84b] cursor-pointer shadow-sm transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#e8b84b] transition-all duration-500 group-hover:w-full z-10" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <span className="self-end bg-white/95 text-neutral-950 p-2 rounded-none shadow-sm">
                  <FaExpand className="text-xs" />
                </span>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#e8b84b] font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FaChevronLeft className="text-lg" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FaChevronRight className="text-lg" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-black"
            >
              <Image
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-none border border-white/10 text-white">
                <p className="text-sm font-bold">{filteredItems[selectedImageIndex].title}</p>
                <p className="text-xs text-[#e8b84b] font-mono">{filteredItems[selectedImageIndex].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Video Film Preview Modal */}
        {isVideoModalOpen && (
          <div
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-video rounded-none overflow-hidden border border-white/20 shadow-2xl bg-neutral-950 flex items-center justify-center p-8 text-center"
            >
              <div>
                <div className="w-16 h-16 rounded-none bg-[#e8b84b] text-neutral-950 flex items-center justify-center text-2xl mx-auto mb-4">
                  <FaPlay />
                </div>
                <h3 className="text-2xl font-bold text-white">Sampan White House Drone Film</h3>
                <p className="text-sm text-neutral-400 mt-2 max-w-md mx-auto">
                  Cinematic 4K aerial overview of the highway frontage, White Hall banquet hall, soundproof suites, and garden dining.
                </p>
                <p className="font-mono text-xs text-[#e8b84b] mt-4 uppercase tracking-wider">
                  Full 4K Video Streaming Ready
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
