"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FaBed, 
  FaUtensils, 
  FaGlassCheers, 
  FaCar, 
  FaBolt, 
  FaPrayingHands, 
  FaHeadset, 
  FaStore,
  FaCheck,
  FaClock
} from "react-icons/fa";

const facilityCategories = ["All", "Accommodations", "White Hall & Events", "Dining", "Traveler Services"];

const facilitiesData = [
  {
    id: "suites",
    title: "Deluxe Soundproof Motel Suites",
    category: "Accommodations",
    tagline: "Uninterrupted quiet rest just off the highway",
    description: "Designed with double-glazed acoustic windows and plush bedding, allowing travelers to nap or sleep peacefully away from vehicle noise.",
    icon: FaBed,
    image: "/images/concerns/highway-motel.png",
    hours: "24 Hours Check-in",
    highlights: ["Individual Climate Control", "Hot Rain Shower", "High-Speed Wi-Fi", "Daily Sanitized Linens"],
  },
  {
    id: "white-hall",
    title: "White Hall Grand Banquet Ballroom",
    category: "White Hall & Events",
    tagline: "Premier venue for weddings, corporate offsites & reunions",
    description: "A column-free, high-ceiling grand celebration hall equipped with acoustic stage lighting, crystal chandeliers, and banquet catering up to 300+ guests.",
    icon: FaGlassCheers,
    image: "/images/facilities/highway_inn/party_reservation.png",
    hours: "Morning & Evening Slots",
    highlights: ["300+ Guest Capacity", "HD Audio/Visual Staging", "Bridal Changing Suite", "Custom Banquet Menus"],
  },
  {
    id: "garden-restaurant",
    title: "24/7 Garden Restaurant & Cafe",
    category: "Dining",
    description: "Multi-cuisine highway kitchen serving traditional Bengali delicacies, Chinese sizzling dishes, fresh grill kebabs, and barista coffees.",
    icon: FaUtensils,
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    hours: "Always Open 24/7",
    highlights: ["Express 20-Min Serving", "Farm-Fresh Organic Ingredients", "Outdoor Lawn Seating", "Takeaway Travel Packs"],
  },
  {
    id: "family-lounge",
    title: "Family Rest & Children's Play Lounge",
    category: "Accommodations",
    description: "Dedicated safe space for traveling families with infant diaper-changing facilities, kid-friendly play areas, and relaxing seating.",
    icon: FaBed,
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    hours: "24 Hours Accessible",
    highlights: ["Child Safe Environment", "Nursing & Baby Care Station", "Comfortable Sofa Seating", "Filtered Drinking Water"],
  },
  {
    id: "parking-ev",
    title: "Gated Secure Parking & EV Charging",
    category: "Traveler Services",
    description: "Spacious compound with 150+ parking slots for sedans, SUVs, and high-capacity tourist coaches with round-the-clock CCTV and security guards.",
    icon: FaCar,
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    hours: "24/7 Guarded Entry",
    highlights: ["150+ Gated Vehicle Bays", "DC Fast EV Charging", "Tourist Coach Friendly", "24/7 Armed Security"],
  },
  {
    id: "prayer-hall",
    title: "Air-Conditioned Serene Prayer Hall",
    category: "Traveler Services",
    description: "Immaculate, air-conditioned prayer hall with separate prayer areas for ladies and gents, equipped with modern wudu (ablution) facilities.",
    icon: FaPrayingHands,
    image: "/images/facilities/express_highway_inn/11.Prayers-Room.png",
    hours: "Always Open",
    highlights: ["Gender-Separated Halls", "Clean Marble Wudu Zone", "Air-Conditioned Comfort", "Adhan Audio Broadcast"],
  },
  {
    id: "concierge",
    title: "Traveler Concierge & Route Assistance Desk",
    category: "Traveler Services",
    description: "On-site front desk team ready to assist with highway navigation, regional emergency towing, route conditions, and onward travel planning.",
    icon: FaHeadset,
    image: "/images/facilities/highway_inn/Official-Outing.png",
    hours: "24/7 Concierge",
    highlights: ["Live Highway Updates", "Emergency Travel Support", "Luggage Storage", "Local Tourism Advice"],
  },
  {
    id: "mart",
    title: "24/7 Convenience Mart & Quick Takeaway",
    category: "Dining",
    description: "Fully stocked highway retail shop providing snacks, chilled beverages, bakery treats, personal grooming essentials, and car accessories.",
    icon: FaStore,
    image: "/images/facilities/express_highway_inn/4.Sampan-Mart.png",
    hours: "24 Hours Open",
    highlights: ["Travel Essentials & Snacks", "Hot Tea & Bottled Water", "Emergency Grooming Kits", "Digital & Mobile Payment"],
  },
];

export default function FacilitiesList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFacilities = activeCategory === "All"
    ? facilitiesData
    : facilitiesData.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" className="bg-white py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e8b84b]"></span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                02 / Facilities &amp; Offerings
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Everything you need <br />
              <span className="text-[#ca8a04]">for a comfortable journey.</span>
            </h2>
          </div>
          
          <p className="max-w-md text-sm text-neutral-500 leading-relaxed font-normal">
            Whether taking a brief driving intermission or hosting an unforgettable banquet in White Hall, we offer complete comfort on the road.
          </p>
        </div>

        {/* Category Tabs (Square) */}
        <div className="flex flex-wrap gap-2 pb-4 mb-12 border-b border-neutral-200">
          {facilityCategories.map((cat) => (
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

        {/* Facilities Grid (Square Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <article
                key={facility.id}
                className="group relative flex flex-col rounded-none overflow-hidden bg-[#F5F5F2] border border-neutral-200 hover:border-[#e8b84b] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1"
              >
                {/* Top Gold Hover Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#e8b84b] transition-all duration-500 group-hover:w-full z-10" />

                {/* Facility Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-none border border-neutral-200 font-mono text-[9px] font-bold uppercase tracking-widest text-[#ca8a04]">
                    {facility.category}
                  </div>

                  <div className="absolute bottom-3.5 right-3.5 bg-black/80 px-2.5 py-1 rounded-none text-white text-[10px] font-mono flex items-center gap-1.5">
                    <FaClock className="text-[#e8b84b]" />
                    <span>{facility.hours}</span>
                  </div>
                </div>

                {/* Facility Content */}
                <div className="flex flex-1 flex-col p-6 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-sm text-[#ca8a04]" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 group-hover:text-[#ca8a04] transition-colors leading-snug">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed flex-1">
                    {facility.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                    {facility.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-600">
                        <FaCheck className="text-[#ca8a04] text-[9px] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
