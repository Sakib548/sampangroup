"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCamera, FaExpand, FaTimes } from "react-icons/fa";

export interface AgroPhotoItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface AgroPhotosGalleryProps {
  title?: string;
  subtitle?: string;
  photos: AgroPhotoItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function AgroPhotosGallery({
  title = "Photo Gallery & Field Operations",
  subtitle = "Take a visual tour of our organic cultivation fields, bio-secure hatcheries, harvesting scenes, and cold storage units.",
  photos,
  bgTheme = "about-ivory",
  accentColor = "#15803d",
}: AgroPhotosGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<AgroPhotoItem | null>(null);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="photo-gallery" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div
            className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
          >
            <FaCamera className="text-xs" />
            <span>Field Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative h-72 border border-neutral-300 bg-black overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition duration-500"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  {photo.category}
                </span>
                <h3 className="text-lg font-bold text-white flex items-center justify-between">
                  <span>{photo.title}</span>
                  <FaExpand className="text-xs text-white/70 group-hover:text-emerald-400 transition-colors" />
                </h3>
                <p className="text-xs text-white/80 font-normal mt-1 line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-6 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0a120c] border border-white/20 p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-xl p-2"
            >
              <FaTimes />
            </button>

            <div className="relative h-[450px] w-full border border-white/10">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <div>
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                {selectedPhoto.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-white/80 mt-2">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
