"use client";

import { FaMapMarkerAlt, FaDirections, FaPhoneAlt, FaClock, FaCheck } from "react-icons/fa";

const mapEmbedUrl = "https://www.google.com/maps?q=23.2604651,89.7659791&hl=en&z=14&output=embed";
const googleMapsDeepLink = "https://www.google.com/maps/dir/?api=1&destination=23.2604651,89.7659791";

const hubDistances = [
  { hub: "Dhaka Zero Point / Jatrabari", distance: "74 km", time: "1h 05m" },
  { hub: "Padma Bridge Toll Plaza (Mawa)", distance: "39 km", time: "30m" },
  { hub: "Bhanga Junction Expressway Interchange", distance: "16 km", time: "15m" },
  { hub: "Gopalganj District HQ", distance: "36 km", time: "32m" },
  { hub: "Khulna Divisional City Hub", distance: "106 km", time: "1h 35m" },
  { hub: "Barishal Divisional Airport Hub", distance: "68 km", time: "55m" },
];

export default function LocationAndMap() {
  return (
    <section id="location" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
                03 — Strategic Location
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Easy to access. <br />
              <span className="text-emerald-700">Seamless to continue.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed">
            Positioned directly along the primary south-bound highway with dedicated acceleration and deceleration ramps for effortless stopping.
          </p>
        </div>

        {/* Map & Distance Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Details & Distances */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Coordinates Pill */}
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-neutral-200 shadow-sm text-xs">
                <FaMapMarkerAlt className="text-emerald-600" />
                <span className="font-mono font-bold text-neutral-800">23.260465° N, 89.765979° E</span>
                <span className="text-neutral-400">|</span>
                <span className="text-neutral-600">Dhaka–Khulna Highway</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#111111]">Direct Highway Access</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Located right on the main corridor. No narrow link roads, no rural detours, and no bridge bottlenecks. Turn in seamlessly and re-enter the highway within seconds.
                </p>
              </div>

              {/* Distance Matrix Table */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">
                  Distance Matrix from Major Regional Gateways
                </h4>
                <div className="divide-y divide-neutral-100 text-sm">
                  {hubDistances.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                      <span className="text-neutral-700 font-medium text-xs sm:text-sm">{item.hub}</span>
                      <div className="flex items-center gap-3 text-xs font-bold text-right">
                        <span className="text-emerald-700">{item.distance}</span>
                        <span className="text-neutral-400 font-normal">({item.time})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={googleMapsDeepLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-emerald-700/20 transition-all duration-300"
              >
                <FaDirections className="text-base" />
                <span>Open Google Navigation</span>
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-800 transition-colors"
              >
                <FaPhoneAlt className="text-emerald-600 text-xs" />
                <span>Route Concierge</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe Frame */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
              <iframe
                title="Sampan Highway Inn Live Map Location"
                src={mapEmbedUrl}
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-[#070b09]/90 text-white backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-lg text-xs flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold">Sampan Highway Inn Plaza</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
