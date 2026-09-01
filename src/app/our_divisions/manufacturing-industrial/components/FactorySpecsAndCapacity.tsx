"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCogs, FaVideo, FaIndustry, FaUsers, FaPlay, FaCheckCircle, FaCamera } from "react-icons/fa";

export interface CapacityStat {
  value: string;
  label: string;
  metric: string;
}

export interface ClientItem {
  name: string;
  category: string;
}

export interface FactorySpecsAndCapacityProps {
  title?: string;
  subtitle?: string;
  stats: CapacityStat[];
  factoryPhotos: string[];
  clientList: ClientItem[];
  productionVideoTitle?: string;
  productionVideoUrl?: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function FactorySpecsAndCapacity({
  title = "Factory Production Capacity & Operations",
  subtitle = "High-velocity automated manufacturing lines, rigorous quality controls, and established B2B industrial partnerships.",
  stats,
  factoryPhotos,
  clientList,
  productionVideoTitle = "Automated Production Line Video",
  productionVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
  bgTheme = "divisions-green",
  accentColor = "#047857",
}: FactorySpecsAndCapacityProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="factory-capacity" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaIndustry className="text-xs" />
              <span>Production Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Capacity Output Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((st, idx) => (
            <div key={idx} className="border border-current/15 bg-white p-6 space-y-2 shadow-sm">
              <span className="text-[10px] font-mono uppercase opacity-60 block">{st.label}</span>
              <p className="text-3xl font-mono font-bold" style={{ color: accentColor }}>{st.value}</p>
              <span className="text-xs font-mono opacity-80 block">{st.metric}</span>
            </div>
          ))}
        </div>

        {/* Production Line Video + Factory Gallery */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Production Video Showcase */}
          <div className="lg:col-span-7 border border-current/15 bg-neutral-900 text-white relative min-h-[380px] overflow-hidden shadow-sm flex flex-col justify-between p-6">
            {isPlayingVideo ? (
              <iframe
                title={productionVideoTitle}
                src={`${productionVideoUrl}?autoplay=1`}
                className="w-full h-full min-h-[360px] border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1">
                    Live Production Video
                  </span>
                  <span className="font-mono text-xs text-white/60">HD 1080p Footage</span>
                </div>

                <div className="text-center py-8">
                  <button
                    onClick={() => setIsPlayingVideo(true)}
                    className="h-16 w-16 bg-[#047857] hover:scale-110 text-white rounded-full inline-flex items-center justify-center shadow-lg transition-transform duration-300 cursor-pointer"
                    style={{ backgroundColor: accentColor }}
                  >
                    <FaPlay className="text-xl ml-1" />
                  </button>
                  <h3 className="text-xl font-bold mt-4">{productionVideoTitle}</h3>
                  <p className="text-xs text-white/70 mt-1">Click to watch automated production line in full operation</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-white/60 border-t border-white/10 pt-3">
                  <FaVideo />
                  <span>Fully Automated German / Italian Production Line Machinery</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Factory Photos Grid */}
          <div className="lg:col-span-5 border border-current/15 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
              <FaCamera />
              <span>Factory &amp; Assembly Photos</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {factoryPhotos.map((photo, i) => (
                <div key={i} className="relative aspect-[4/3] border border-current/15 overflow-hidden bg-neutral-200 shadow-sm">
                  <Image
                    src={photo}
                    alt={`Factory Photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* B2B Client List Strip */}
        <div className="border border-current/15 bg-white p-8 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-current/15 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
              <FaUsers />
              <span>Established B2B Industrial Clients &amp; Partners</span>
            </div>
            <span className="font-mono text-[10px] opacity-60">Wholesale Distribution Network</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            {clientList.map((client, idx) => (
              <div key={idx} className="p-3 bg-[#f3f6f2] border border-current/10 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-700 text-xs shrink-0" />
                <div>
                  <span className="font-bold block text-current">{client.name}</span>
                  <span className="text-[10px] opacity-60 block">{client.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
