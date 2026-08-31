"use client";

import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaCarSide, 
  FaRoute, 
  FaClock, 
  FaCompass, 
  FaShieldAlt,
  FaBolt,
  FaCheckCircle
} from "react-icons/fa";

const routeCorridor = [
  {
    id: "dhaka",
    name: "Dhaka Zero Point",
    km: 0,
    timeFromDhaka: "0 min",
    type: "Origin Gateway",
    detail: "Mayor Hanif Flyover & Postogola Bridge Exit",
  },
  {
    id: "padma-toll",
    name: "Padma Bridge Toll Plaza",
    km: 35,
    timeFromDhaka: "32 min",
    type: "National Landmark",
    detail: "Mawa Toll Plaza & Expressway Interchange",
  },
  {
    id: "bhanga",
    name: "Bhanga Junction Interchange",
    km: 58,
    timeFromDhaka: "50 min",
    type: "Expressway Flyover",
    detail: "Tri-directional Cloverleaf connecting Barishal & Khulna",
  },
  {
    id: "sampan-inn",
    name: "SAMPAN HIGHWAY INN",
    km: 74,
    timeFromDhaka: "65 min",
    isDestination: true,
    type: "★ Premier Rest Stop",
    detail: "Direct Highway Frontage • Zero Detour • Dual Slipway Entry",
  },
  {
    id: "gopalganj",
    name: "Gopalganj District Hub",
    km: 110,
    timeFromDhaka: "1h 35m",
    type: "Regional Hub",
    detail: "Connecting Southern Agricultural Corridors",
  },
  {
    id: "khulna",
    name: "Khulna Divisional City",
    km: 180,
    timeFromDhaka: "2h 40m",
    type: "Terminal Gateway",
    detail: "Khan Jahan Ali Bridge & Southern Port Gateways",
  },
];

const origins = [
  { id: "dhaka", name: "Dhaka (Motijheel / Gulshan)", distanceToInn: "74 km", estTime: "1h 05m", advice: "Ideal halfway breakfast / lunch stop before continuing south." },
  { id: "narayanganj", name: "Narayanganj / Keraniganj", distanceToInn: "62 km", estTime: "55m", advice: "Smooth expressway driving directly into our private deceleration lane." },
  { id: "padma", name: "Padma Bridge (Jajira Side)", distanceToInn: "39 km", estTime: "30m", advice: "Quick EV top-up and coffee break right after crossing the bridge." },
  { id: "khulna", name: "Khulna City (Heading to Dhaka)", distanceToInn: "106 km", estTime: "1h 35m", advice: "Perfect evening dinner and vehicle wash before entering Dhaka traffic." },
  { id: "barishal", name: "Barishal (via Bhanga)", distanceToInn: "52 km", estTime: "45m", advice: "Direct link via the Bhanga interchange with zero city congestion." },
];

export default function HighwayRouteVisualizer() {
  const [selectedOrigin, setSelectedOrigin] = useState("dhaka");
  const currentOrigin = origins.find((o) => o.id === selectedOrigin) || origins[0];

  return (
    <section id="route-map" className="relative bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-emerald-700/30 bg-emerald-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 mb-4">
            <FaCompass />
            <span>14 / Corridor Navigation</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Where we sit on the highway.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Positioned at the golden halfway marker of the N8 National Corridor. 
            Engineered with dedicated dual deceleration ramps so you never have to make a detour.
          </p>
        </div>

        {/* Interactive Origin Selector (Square Tabs) */}
        <div className="mb-12 rounded-none border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800">
              Where are you driving from?
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Click your starting hub to calculate transit times:
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
                <p className={`text-sm font-bold mt-1 ${selectedOrigin === orig.id ? "text-emerald-400" : "text-emerald-700"}`}>
                  {orig.distanceToInn} • {orig.estTime}
                </p>
              </button>
            ))}
          </div>

          {/* Traveler Recommendation Pill */}
          <div className="mt-4 flex items-center gap-3 bg-emerald-50 border border-emerald-300 rounded-none p-3.5 text-xs text-emerald-900">
            <FaCheckCircle className="text-emerald-700 flex-shrink-0 text-base" />
            <span><strong>Trip Recommendation:</strong> {currentOrigin.advice}</span>
          </div>
        </div>

        {/* Visual Highway Route Line (Square & Light) */}
        <div className="relative rounded-none border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm">
          
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-none bg-emerald-50 border border-emerald-300 text-emerald-800">
                <FaRoute className="text-lg" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                  Dhaka – Padma Bridge – Bhanga – Khulna Highway Corridor (N8)
                </h3>
                <p className="text-xs text-neutral-500 font-mono mt-0.5">Total Length: 180 KM • 4-Lane High-Speed Controlled Access</p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-neutral-600">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-none bg-emerald-700"></span> Sampan Highway Inn (KM 74)</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-none bg-neutral-400"></span> Interchanges</span>
            </div>
          </div>

          {/* Horizontal Desktop Route / Vertical Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 relative">
            {/* Connecting Track Line behind items */}
            <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-neutral-300 via-emerald-700 to-neutral-300 z-0" />

            {routeCorridor.map((stop) => (
              <div
                key={stop.id}
                className={`relative z-10 flex flex-col p-5 rounded-none border transition-all duration-300 ${
                  stop.isDestination
                    ? "bg-[#F5F5F2] border-2 border-emerald-700 shadow-md scale-105"
                    : "bg-white border-neutral-200 hover:border-neutral-300"
                }`}
              >
                {/* Mile Marker Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-9 h-9 rounded-none flex items-center justify-center font-mono font-bold text-xs ${
                      stop.isDestination
                        ? "bg-emerald-700 text-white shadow-sm"
                        : "bg-neutral-100 text-neutral-900 border border-neutral-300"
                    }`}
                  >
                    {stop.km}k
                  </div>

                  <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                    stop.isDestination ? "text-emerald-800" : "text-neutral-500"
                  }`}>
                    {stop.timeFromDhaka}
                  </span>
                </div>

                <p className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                  stop.isDestination ? "text-amber-800" : "text-emerald-700"
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
                    <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-800 font-bold">You Are Here</span>
                    <a
                      href="#location"
                      className="font-mono text-xs font-bold text-neutral-950 underline hover:text-emerald-700"
                    >
                      Directions →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Highway Access Key Advantages */}
          <div className="mt-10 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-none bg-emerald-50 text-emerald-800 mt-0.5 border border-emerald-200">
                <FaCarSide />
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-950">Direct Slipway Deceleration</h5>
                <p className="text-xs text-neutral-500 mt-1">Wide 150m deceleration lane allows safe speed reduction right off the expressway.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-none bg-amber-50 text-amber-800 mt-0.5 border border-amber-200">
                <FaBolt />
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-950">Instant EV Charging Access</h5>
                <p className="text-xs text-neutral-500 mt-1">Plug into 120kW DC power within 60 seconds of pulling into the plaza.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-none bg-emerald-50 text-emerald-800 mt-0.5 border border-emerald-200">
                <FaShieldAlt />
              </div>
              <div>
                <h5 className="text-sm font-bold text-neutral-950">Safe Dual Entry &amp; Exit</h5>
                <p className="text-xs text-neutral-500 mt-1">Separated lanes for personal family vehicles, coaches, and electric vehicles.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
