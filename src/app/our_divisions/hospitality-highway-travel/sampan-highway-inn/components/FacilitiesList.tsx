"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FaBed, 
  FaUtensils, 
  FaBolt, 
  FaCar, 
  FaGlassCheers, 
  FaHandsWash, 
  FaShoppingBag, 
  FaMoneyBillWave,
  FaCheck,
  FaArrowRight
} from "react-icons/fa";

const categories = [
  { id: "all", label: "All Facilities" },
  { id: "suites", label: "Suites & Rest", icon: FaBed },
  { id: "dining", label: "Dining & Bakery", icon: FaUtensils },
  { id: "ev", label: "EV & Auto Care", icon: FaBolt },
  { id: "events", label: "Events & Meetings", icon: FaGlassCheers },
  { id: "essentials", label: "Travel Essentials", icon: FaShoppingBag },
];

const facilitiesData = [
  {
    id: "vvip-suites",
    category: "suites",
    title: "VVIP Soundproof Suites & Rest Rooms",
    badge: "Premium Comfort",
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    description:
      "Acoustically engineered, triple-glazed soundproof suites offering plush king-size beds, private en-suite rain showers, smart IPTV, and climate control for quiet respite from highway rumble.",
    features: ["Acoustic Soundproofing", "King Orthopaedic Bedding", "High-Speed Fiber Wi-Fi", "In-Room Gourmet Service", "Hourly & Overnight Options"],
    hours: "24/7 Available",
  },
  {
    id: "dining-bakery",
    category: "dining",
    title: "24/7 Highway Multi-Cuisine Restaurant & Cafe",
    badge: "Farm-to-Table",
    image: "/images/facilities/express_highway_inn/1.Highway-Club-&-Lounge.png",
    description:
      "Indulge in authentic Bengali culinary specialties, live tandoor and kebabs, fresh bakery treats, and artisanal barista coffee prepared with organic farm ingredients.",
    features: ["Authentic Bengali Curries", "Live Grill & Barbecue", "Fresh Espresso Bar", "Family Dining Halls", "Express 15-min Takeaway"],
    hours: "24/7 All-Day Service",
  },
  {
    id: "ev-charging",
    category: "ev",
    title: "Ultra-Fast 120kW DC EV Supercharging Plaza",
    badge: "Green Mobility",
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    description:
      "High-output DC dual-gun rapid charging stations alongside Level 2 AC chargers compatible with Tesla, BYD, Audi, BMW, MG, Hyundai, and all EV models.",
    features: ["120kW High-Speed DC", "Dual CCS2 & Type 2 Connectors", "Canopied Charging Bays", "Priority Lounge Access", "App & Cashless Payment"],
    hours: "24/7 Continuous Power",
  },
  {
    id: "party-center",
    category: "events",
    title: "Celebration & Banquet Party Center",
    badge: "Events & Galas",
    image: "/images/facilities/highway_inn/party_reservation.png",
    description:
      "Magnificent event venue with modern acoustic treatment, flexible seating arrangements up to 250+ guests, tailored banquet catering, and celebratory decor.",
    features: ["250+ Seating Capacity", "Full Banquet Catering", "AV Sound & Stage Lighting", "Dedicated Event Coordinator", "Ample VIP Parking"],
    hours: "Advance Reservation",
  },
  {
    id: "official-outing",
    category: "events",
    title: "Executive Business Lounge & Meeting Suites",
    badge: "Corporate Ready",
    image: "/images/facilities/highway_inn/Official-Outing.png",
    description:
      "Conduct professional meetings, team debriefs, and corporate offsite retreats in our fully equipped conference rooms with high-speed presentation tech.",
    features: ["HD Projection & Video Tech", "Ergonomic Conference Seating", "High-Speed Fiber Network", "Coffee & Lunch Catering", "Private Secretariat Desk"],
    hours: "On Demand & Booking",
  },
  {
    id: "car-wash",
    category: "ev",
    title: "Automated Touchless Car Wash & Express Detailing",
    badge: "Vehicle Care",
    image: "/images/facilities/express_highway_inn/7.Automatic-Car-Wash.png",
    description:
      "High-pressure underbody rinse, foam wash, and rapid drying system that leaves your car immaculate while you dine or rest inside the lounge.",
    features: ["Touchless Jet Cleaning", "Underbody Mud Flush", "Ceramic Wax Gloss Coating", "Interior Quick Vacuum", "Tire Pressure & Air Station"],
    hours: "7:00 AM – 11:00 PM",
  },
  {
    id: "prayer-washrooms",
    category: "essentials",
    title: "Spotless Sanitized Restrooms & Dedicated Prayer Halls",
    badge: "Hygiene Standard",
    image: "/images/facilities/express_highway_inn/11.Prayers-Room.png",
    description:
      "Impeccably clean, air-conditioned prayer spaces with separated wudu facilities for ladies and gentlemen, plus spotless baby-care restrooms.",
    features: ["Separate Men & Women Halls", "Modern Wudu Ablution Area", "Baby Changing Facilities", "Wheelchair Accessible", "Continuous Sanitation Staff"],
    hours: "24/7 Spotless",
  },
  {
    id: "sampan-mart",
    category: "essentials",
    title: "24/7 Sampan Mart & Travel Convenience",
    badge: "Travel Essentials",
    image: "/images/facilities/express_highway_inn/4.Sampan-Mart.png",
    description:
      "Stock up on cold beverages, snacks, local confectionery, organic highway produce, road trip essentials, personal care, and vehicle accessories.",
    features: ["Cold Drinks & Mineral Water", "Snacks & Local Delights", "First-Aid & Pharmacy Essentials", "Car Accessories & Chargers", "ATM / CRM Banking Booth"],
    hours: "24/7 Open",
  },
];

export default function FacilitiesList({ onSelectFacility }: { onSelectFacility?: (title: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFacilities = activeCategory === "all"
    ? facilitiesData
    : facilitiesData.filter((item) => item.category === activeCategory);

  return (
    <section id="facilities" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
                02 — World-Class Facilities
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Thoughtfully curated <br />
              <span className="text-emerald-700">for every traveler.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-neutral-600 leading-relaxed">
            Whether you need a rapid 15-minute coffee break or a full celebratory weekend, our multi-acre complex provides complete comfort under one roof.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pb-4 mb-12 border-b border-neutral-200">
          {categories.map((cat) => (
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

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((item, index) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-neutral-800">
                  {item.hours}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-mono font-bold text-neutral-400 mb-2">
                  0{index + 1}
                </span>

                <h3 className="text-lg font-bold text-[#111111] group-hover:text-emerald-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Features Pill List */}
                <div className="mt-5 pt-4 border-t border-neutral-100 space-y-1.5">
                  {item.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-700">
                      <FaCheck className="text-[9px] text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href="#booking-widget"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 group-hover:text-emerald-900 transition-colors"
                  >
                    <span>Reserve Access</span>
                    <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
