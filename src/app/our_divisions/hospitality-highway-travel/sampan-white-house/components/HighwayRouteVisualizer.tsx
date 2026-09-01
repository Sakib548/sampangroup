"use client";

import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaCarSide, 
  FaRoute, 
  FaCompass, 
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaHotel
} from "react-icons/fa";

const routeCorridor = [
  {
    id: "dhaka",
    name: "Dhaka Central Gateway",
    km: 0,
    timeFromDhaka: "0 min",
    type: "Departure Point",
    detail: "Mayor Hanif Flyover & Postogola Highway Exit",
  },
  {
    id: "padma-toll",
    name: "Padma Bridge Toll Plaza",
    km: 35,
    timeFromDhaka: "32 min",
    type: "Major Landmark",
    detail: "Expressway link to Southern Divisions",
  },
  {
    id: "bhanga",
    name: "Bhanga Mega Interchange",
    km: 58,
    timeFromDhaka: "50 min",
    type: "Cloverleaf Junction",
    detail: "Direct connection to Barishal, Khulna & Faridpur",
  },
  {
    id: "sampan-white-house",
    name: "SAMPAN HIGHWAY MOTEL & WHITE HALL",
    km: 78,
    timeFromDhaka: "68 min",
    isDestination: true,
    type: "★ Hotel, Motel & Banquet",
    detail: "Highway Frontage • Quiet Soundproof Zone • Gated 150+ Parking",
  },
  {
    id: "gopalganj",
    name: "Gopalganj City Terminal",
    km: 110,
    timeFromDhaka: "1h 35m",
    type: "Regional Hub",
    detail: "Gateway to Southern Agri & Heritage Zones",
  },
  {
    id: "khulna",
    name: "Khulna Divisional Hub",
    km: 180,
    timeFromDhaka: "2h 40m",
    type: "Southern Port Hub",
    detail: "Terminal connection to Mongla & Sundarbans",
  },
];

const origins = [
  { id: "dhaka", name: "Dhaka (Motijheel / Gulshan)", distanceToInn: "78 km", estTime: "1h 08m", advice: "Ideal midday rest and garden lunch before continuing down south." },
  { id: "narayanganj", name: "Narayanganj / Postogola", distanceToInn: "66 km", estTime: "58m", advice: "Smooth straight drive down the N8 corridor into our dedicated deceleration ramp." },
  { id: "padma", name: "Padma Bridge (Jajira Side)", distanceToInn: "43 km", estTime: "34m", advice: "Quick comfort stop right after crossing the bridge for family refreshment." },
  { id: "khulna", name: "Khulna City (Heading North)", distanceToInn: "102 km", estTime: "1h 30m", advice: "Perfect evening stopover for dinner and soundproof motel sleep before Dhaka." },
  { id: "barishal", name: "Barishal (via Bhanga)", distanceToInn: "56 km", estTime: "48m", advice: "Convenient event destination and stopover point for cross-divisional travelers." },
];

export default function HighwayRouteVisualizer() {
  const [selectedOrigin, setSelectedOrigin] = useState("dhaka");
  const currentOrigin = origins.find((o) => o.id === selectedOrigin) || origins[0];

  return (
    <section id="route-map" className="relative bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#ca8a04]/30 bg-amber-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ca8a04] mb-4">
            <FaCompass />
            <span>14 / Corridor Navigation &amp; Mile Markers</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Dedicated highway route guide.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Positioned right off the high-speed National Corridor with wide entry lanes for personal cars, buses, and event guests.
          </p>
        </div>

        {/* Origin Selector (Square Tabs) */}
        <div className="mb-12 rounded-none border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ca8a04]">
              Select Your Travel Departure Origin:
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Live estimated transit calculations:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
            {origins.map((orig) => (
              <button
                key={orig.id}
                type="button"
                onClick={() => setSelectedOrigin(orig.id)}
                className={`p-3.5 rounded-none text-left border transition-all duration-300 cursor-pointer ${
                  selectedOrigin === orig.id
                    ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                    : "bg-[#F5F5F2] text-neutral-800 border-neutral-200 hover:bg-neutral-100"
                }`}
              >
                <p className="font-mono text-[11px] font-semibold">{orig.name}</p>
                <p className={`text-sm font-bold mt-1 ${selectedOrigin === orig.id ? "text-[#e8b84b]" : "text-[#ca8a04]"}`}>
                  {orig.distanceToInn} • {orig.estTime}
                </p>
              </button>
            ))}
          </div>

          {/* Traveler Recommendation Pill */}
          <div className="mt-4 flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-none p-3.5 text-xs text-amber-950">
            <FaCheckCircle className="text-[#ca8a04] flex-shrink-0 text-base" />
            <span><strong>Trip Advice:</strong> {currentOrigin.advice}</span>
          </div>
        </div>

        {/* Visual Highway Route Line (Square & Light) */}
        <div className="relative rounded-none border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm">
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-none bg-amber-50 border border-amber-200 text-[#ca8a04]">
                <FaRoute className="text-lg" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                  National Corridor Transit Map (N8 Expressway)
                </h3>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">KM 78 Marker • Zero Detour Slipway Ramp</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-neutral-600">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-none bg-[#e8b84b]"></span> Sampan White House (KM 78)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-none bg-neutral-400"></span> Interchange Hubs</span>
            </div>
          </div>

          {/* Horizontal Desktop Route / Vertical Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 relative">
            {/* Connecting Track Line */}
            <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-neutral-300 via-[#e8b84b] to-neutral-300 z-0" />

            {routeCorridor.map((stop) => (
              <div
                key={stop.id}
                className={`relative z-10 flex flex-col p-5 rounded-none border transition-all duration-300 ${
                  stop.isDestination
                    ? "bg-[#F5F5F2] border-2 border-[#e8b84b] shadow-md scale-105"
                    : "bg-white border-neutral-200 hover:border-neutral-300"
                }`}
              >
                {/* Mile Marker Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-9 h-9 rounded-none flex items-center justify-center font-mono font-bold text-xs ${
                      stop.isDestination
                        ? "bg-[#e8b84b] text-neutral-950 shadow-sm"
                        : "bg-neutral-100 text-neutral-900 border border-neutral-300"
                    }`}
                  >
                    {stop.km}k
                  </div>

                  <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                    stop.isDestination ? "text-[#ca8a04]" : "text-neutral-500"
                  }`}>
                    {stop.timeFromDhaka}
                  </span>
                </div>

                <p className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                  stop.isDestination ? "text-[#ca8a04]" : "text-neutral-400"
                }`}>
                  {stop.type}
                </p>

                <h4 className={`text-base font-bold mt-1 ${
                  stop.isDestination ? "text-neutral-950 text-lg" : "text-neutral-900"
                }`}>
                  {stop.name}
                </h4>

                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  {stop.detail}
                </p>

                {stop.isDestination && (
                  <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#ca8a04] font-bold">You Are Here</span>
                    <a
                      href="#location"
                      className="font-mono text-xs font-bold text-neutral-950 underline hover:text-[#ca8a04]"
                    >
                      Directions →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Advantages Cards */}
          <div className="mt-10 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-none bg-amber-50 text-[#ca8a04] mt-0.5 border border-amber-200">
                <FaCarSide />
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-950">Gated Highway Deceleration</h5>
                <p className="text-xs text-neutral-500 mt-1">Wide slipway ensures peaceful entry without road interference.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-none bg-amber-50 text-[#ca8a04] mt-0.5 border border-amber-200">
                <FaHotel />
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-950">Motel &amp; White Hall Wing</h5>
                <p className="text-xs text-neutral-500 mt-1">Separated quiet lodging rooms and vibrant banquet spaces.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-none bg-amber-50 text-[#ca8a04] mt-0.5 border border-amber-200">
                <FaShieldAlt />
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-950">Safe 24/7 Gated Security</h5>
                <p className="text-xs text-neutral-500 mt-1">Dedicated patrol officers, perimeter lighting, and CCTV monitoring.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
