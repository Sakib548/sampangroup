"use client";

import { FaMapMarkerAlt, FaDirections, FaClock, FaCompass, FaExternalLinkAlt, FaCheck } from "react-icons/fa";

export default function LocationAndMap() {
  return (
    <section id="location-map" className="py-24 bg-[#f4f1e8] text-[#173326] relative border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2f6b45]/30 bg-[#2f6b45]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f6b45] mb-4">
              <span>03 • Location &amp; Accessibility</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#173326]">
              Where to Find <span className="font-semibold text-[#2f6b45]">Sampan Eco &amp; Agro</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#173326]/75 leading-relaxed font-normal">
            Located directly accessible from the main Dhaka expressway arterial corridor, positioned gracefully within the serene countryside green belt.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Details & GPS Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="border border-[#173326]/20 bg-white p-8 space-y-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#2f6b45]" />
              
              <div className="flex items-center gap-3 text-[#2f6b45]">
                <FaMapMarkerAlt className="text-2xl" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Official Address &amp; GPS</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#173326]">Sampan Eco &amp; Agro Resort</h3>
                <p className="text-xs text-[#173326]/75 mt-1 leading-relaxed">
                  Dhaka–Mawa Expressway Corridor Exit, Munshiganj / Gazipur Eco Belt, Bangladesh.
                </p>
              </div>

              <div className="p-4 bg-[#f4f1e8] border border-[#173326]/15 font-mono text-xs space-y-2">
                <div className="flex justify-between text-[#173326]/75">
                  <span>GPS Coordinates:</span>
                  <span className="text-[#2f6b45] font-bold">23.5412° N, 90.3289° E</span>
                </div>
                <div className="flex justify-between text-[#173326]/75">
                  <span>Highway Access:</span>
                  <span className="text-[#173326] font-bold">Direct Deceleration Slip Road</span>
                </div>
              </div>

              {/* Distance Matrix */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#173326]/80 border-b border-[#173326]/10 pb-2">
                  Drive Time &amp; Distances
                </h4>
                
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#173326]/10">
                  <div className="flex items-center gap-2 text-[#173326]/75">
                    <FaClock className="text-[#2f6b45]" />
                    <span>Dhaka City Center (Zero Point)</span>
                  </div>
                  <span className="font-mono font-bold text-[#173326]">35 Mins (32 km)</span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#173326]/10">
                  <div className="flex items-center gap-2 text-[#173326]/75">
                    <FaCompass className="text-[#2f6b45]" />
                    <span>Padma Bridge Toll Plaza</span>
                  </div>
                  <span className="font-mono font-bold text-[#173326]">20 Mins (18 km)</span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5">
                  <div className="flex items-center gap-2 text-[#173326]/75">
                    <FaDirections className="text-[#2f6b45]" />
                    <span>Nimtoli Expressway Exit</span>
                  </div>
                  <span className="font-mono font-bold text-[#173326]">10 Mins (8 km)</span>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href="https://maps.google.com/?q=23.5412,90.3289"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#173326] hover:bg-[#2f6b45] py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-md"
              >
                <FaDirections className="text-base text-[#b9e583]" />
                <span>Open Google Maps Directions</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

            {/* Parking & Transit Guarantee */}
            <div className="border border-[#173326]/20 bg-white p-6 grid grid-cols-2 gap-4 text-xs shadow-sm">
              <div className="flex items-start gap-2.5">
                <FaCheck className="text-[#2f6b45] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-[#173326]">Secure Gated Parking</p>
                  <p className="text-[11px] text-[#173326]/60 mt-0.5">200+ car &amp; bus bays</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <FaCheck className="text-[#2f6b45] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-[#173326]">EV Charging Ready</p>
                  <p className="text-[11px] text-[#173326]/60 mt-0.5">Dual 120kW fast chargers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map View */}
          <div className="lg:col-span-7 border border-[#173326]/20 bg-[#10251b] relative min-h-[420px] overflow-hidden shadow-sm">
            <iframe
              title="Sampan Eco & Agro Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14618.361907689943!2d90.3289!3d23.5412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzI4LjMiTiA5MMKwMTknNDQuMCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              className="w-full h-full min-h-[480px] border-0 filter saturate-90 brightness-90 grayscale-[20%]"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute bottom-4 right-4 bg-[#0c1c14]/90 border border-white/20 p-3 font-mono text-[11px] text-white backdrop-blur-md">
              <span className="text-[#b9e583] font-bold">Live GPS Stream:</span> Munshiganj Expressway Green Zone
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
