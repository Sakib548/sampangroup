"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCamera, FaExpand, FaTimes } from "react-icons/fa";

export interface GalleryPhotoItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface RetailPhotosGalleryProps {
  title?: string;
  subtitle?: string;
  photos: GalleryPhotoItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function RetailPhotosGallery({
  title = "Store Photos & Ambiance Gallery",
  subtitle = "Explore our air-conditioned store lounge, live sweet counter displays, and super shop aisles.",
  photos,
  bgTheme = "about-ivory",
  accentColor = "#dc2626",
}: RetailPhotosGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhotoItem | null>(null);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="store-photos" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(245,158,11,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(220,38,38,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaCamera className="text-xs" />
              <span>Store Photography</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group border border-current/15 bg-white overflow-hidden cursor-pointer relative shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="h-10 w-10 bg-white text-neutral-950 flex items-center justify-center shadow-lg">
                    <FaExpand className="text-sm" />
                  </div>
                </div>

                <span
                  className="absolute top-3 left-3 font-mono text-[10px] font-bold uppercase px-2.5 py-0.5 text-white shadow-sm"
                  style={{ backgroundColor: accentColor }}
                >
                  {photo.category}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="text-sm font-bold text-current group-hover:text-amber-700 transition-colors">{photo.title}</h3>
                <p className="text-[11px] opacity-75 line-clamp-1">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-black border border-white/20 p-6 shadow-2xl text-white space-y-4">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/60 p-2 border border-white/20"
            >
              <FaTimes className="text-lg" />
            </button>

            <span className="font-mono text-xs uppercase text-amber-400 font-bold block">{selectedPhoto.category}</span>
            <h3 className="text-2xl font-bold text-white">{selectedPhoto.title}</h3>

            <div className="relative aspect-[16/10] w-full border border-white/20 overflow-hidden">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <p className="text-xs text-white/80 font-mono leading-relaxed">{selectedPhoto.caption}</p>
          </div>
        </div>
      )}

    </section>
  );
}
