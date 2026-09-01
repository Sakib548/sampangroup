"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaExpand, FaTimes, FaCamera, FaVideo, FaCube } from "react-icons/fa";

export interface RenderGalleryItem {
  id: string;
  title: string;
  category: "exterior" | "interior" | "amenities" | "video";
  categoryLabel: string;
  image: string;
  type: "image" | "video";
  videoUrl?: string;
  description: string;
}

export interface WalkthroughRenderGalleryProps {
  title?: string;
  subtitle?: string;
  items: RenderGalleryItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
}

export default function WalkthroughRenderGallery({
  title = "3D Walkthrough & Render Showcase",
  subtitle = "Experience photorealistic 3D architectural renders, interior vistas, and video walkthroughs.",
  items,
  bgTheme = "divisions-green",
}: WalkthroughRenderGalleryProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedMedia, setSelectedMedia] = useState<RenderGalleryItem | null>(null);

  const filteredItems = activeTab === "all"
    ? items
    : items.filter(item => item.category === activeTab);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="render-gallery" className={`py-24 relative ${containerClasses}`}>
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
              <FaCube className="text-xs" />
              <span>3D Visuals &amp; Walkthrough</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-current/15 pb-6">
          {[
            { id: "all", label: "View All Visuals" },
            { id: "exterior", label: "Exterior Renders" },
            { id: "interior", label: "Interior Spaces" },
            { id: "amenities", label: "Amenities & Facilities" },
            { id: "video", label: "Video Walkthroughs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#183b2b] text-white shadow-md"
                  : "bg-white text-current hover:bg-[#ca8a04] hover:text-neutral-950 border border-current/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="group border border-current/15 bg-white relative overflow-hidden cursor-pointer hover:border-[#ca8a04] transition-all duration-500 shadow-sm hover:shadow-md"
            >
              <div className="relative h-64 w-full overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                <span className="absolute top-4 left-4 bg-white/95 text-[#ca8a04] border border-[#ca8a04]/40 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-md shadow-sm">
                  {item.categoryLabel}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="h-12 w-12 bg-[#ca8a04] text-neutral-950 flex items-center justify-center font-bold shadow-xl">
                    {item.type === "video" ? <FaPlay className="ml-1 text-base" /> : <FaExpand className="text-base" />}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-sm font-bold text-current group-hover:text-[#ca8a04] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs opacity-75 mt-2 line-clamp-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-black border border-[#ca8a04]/40 p-6 shadow-2xl text-white">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors bg-black/60 p-2 border border-white/20"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="space-y-4">
              <span className="font-mono text-xs text-[#ca8a04] uppercase tracking-wider">
                {selectedMedia.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedMedia.title}</h3>

              {selectedMedia.type === "video" && selectedMedia.videoUrl ? (
                <div className="aspect-video w-full border border-white/20 bg-black overflow-hidden">
                  <iframe
                    className="h-full w-full"
                    src={`${selectedMedia.videoUrl}?autoplay=1`}
                    title={selectedMedia.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/10] w-full border border-white/20 overflow-hidden bg-black">
                  <Image
                    src={selectedMedia.image}
                    alt={selectedMedia.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-xs text-white/80 leading-relaxed font-normal pt-2">
                {selectedMedia.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
