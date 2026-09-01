"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  FaAppleAlt, 
  FaBed, 
  FaUtensils, 
  FaFish, 
  FaPaw, 
  FaStore, 
  FaUsers, 
  FaSpa,
  FaCheckCircle,
  FaFilter
} from "react-icons/fa";

interface Facility {
  id: string;
  name: string;
  category: "farm" | "stay" | "dining" | "activities" | "events";
  categoryLabel: string;
  description: string;
  image: string;
  highlights: string[];
  icon: any;
}

const facilitiesData: Facility[] = [
  {
    id: "organic-orchard",
    name: "Organic Fruit & Vegetable Orchards",
    category: "farm",
    categoryLabel: "Organic Farm",
    description: "50+ acres of chemical-free orchards growing seasonal mangoes, guavas, papayas, lychees, and organic winter vegetables.",
    image: "/images/our_divisions/eco_agro/fruits.jpg",
    highlights: ["Pick-Your-Own Harvest Experience", "100% Chemical & Pesticide Free", "Guided Agri-Tours"],
    icon: FaAppleAlt,
  },
  {
    id: "lakeview-cottages",
    name: "Lakeview Luxury Eco-Cottages",
    category: "stay",
    categoryLabel: "Accommodations",
    description: "Crafted with eco-friendly natural wood and bamboo, equipped with modern air conditioning, plush bedding, and private lake balconies.",
    image: "/images/concerns/3-sampan-eco-agro.png",
    highlights: ["Private Waterfront Veranda", "Modern Climate Control", "24/7 Room Service"],
    icon: FaBed,
  },
  {
    id: "farm-restaurant",
    name: "Farm-to-Table Garden Restaurant",
    category: "dining",
    categoryLabel: "Dining & Harvest",
    description: "Authentic cuisine prepared daily with freshly harvested farm produce, local lake fish, organic poultry, and cold-pressed juices.",
    image: "/images/our_divisions/eco_agro/veg.jpg",
    highlights: ["Organic Breakfast Buffet", "Live Clay-Oven BBQ", "Fresh Cold-Pressed Juices"],
    icon: FaUtensils,
  },
  {
    id: "lake-fishing",
    name: "Lakefront Fishing & Boating Deck",
    category: "activities",
    categoryLabel: "Activities & Recreation",
    description: "Natural freshwater lake stocked with local fish species. Features pedal boats, wooden rowboats, and comfortable angling spots.",
    image: "/images/concerns/eco-agro.png",
    highlights: ["Angling Equipment Rental", "Wooden Boat Rides", "Sunset Lake Pier"],
    icon: FaFish,
  },
  {
    id: "agro-petting-zoo",
    name: "Agro-Educational Zone & Petting Zoo",
    category: "activities",
    categoryLabel: "Activities & Recreation",
    description: "Family-friendly agricultural learning area where children can interact with farm animals, learn seed germination, and explore soil biology.",
    image: "/images/our_divisions/eco_agro/seasonal.jpg",
    highlights: ["Interactive Farm Animal Visits", "Kids Planting Workshops", "Nature Trail Walk"],
    icon: FaPaw,
  },
  {
    id: "farm-bazaar",
    name: "Expressway Farm Fresh Bazaar",
    category: "dining",
    categoryLabel: "Dining & Harvest",
    description: "Direct highway-side produce market offering daily harvested fruits, organic honey, mustard oil, and eco-certified packaged goods for travelers.",
    image: "/images/concerns/eco-agro.png",
    highlights: ["Daily Direct Harvest Sales", "Pure Farm Honey & Ghee", "Traveler Refreshment Corner"],
    icon: FaStore,
  },
  {
    id: "event-lawns",
    name: "Open-Air Green Lawns & Event Pavilion",
    category: "events",
    categoryLabel: "Event Grounds",
    description: "Lush multi-acre open lawns designed for destination eco-weddings, corporate retreats, team-building sessions, and family picnics.",
    image: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    highlights: ["Capacity for Up to 1,000 Guests", "Stage & Catering Setup", "Ample Highway Parking"],
    icon: FaUsers,
  },
  {
    id: "herbal-garden",
    name: "Herbal & Botanical Healing Garden",
    category: "farm",
    categoryLabel: "Organic Farm",
    description: "Curated collection of over 80 medicinal plants, aromatic herbs, and traditional flora with informative botanical placards.",
    image: "/images/our_divisions/eco_agro/fruits.jpg",
    highlights: ["Guided Botanical Walks", "Organic Herbal Teas", "Traditional Wellness Flora"],
    icon: FaSpa,
  },
];

export default function FacilitiesList() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFacilities = activeCategory === "all"
    ? facilitiesData
    : facilitiesData.filter(f => f.category === activeCategory);

  return (
    <section id="facilities" className="py-24 bg-white text-[#173326] relative overflow-hidden border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2f6b45]/30 bg-[#2f6b45]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f6b45] mb-4">
              <span>02 • What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#173326]">
              Resort Facilities &amp; <span className="font-semibold text-[#2f6b45]">Agro Offerings</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#173326]/75 leading-relaxed font-normal">
            Immerse yourself in 50+ acres of natural beauty, organic agriculture, serene lakefront stays, and refreshing countryside dining.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#173326]/15 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#173326]/60 mr-4">
            <FaFilter className="text-[#2f6b45]" />
            <span>Filter:</span>
          </div>

          {[
            { id: "all", label: "All Facilities" },
            { id: "farm", label: "Organic Farm" },
            { id: "stay", label: "Accommodations" },
            { id: "dining", label: "Dining & Harvest" },
            { id: "activities", label: "Activities & Recreation" },
            { id: "events", label: "Event Grounds" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#173326] text-white shadow-md"
                  : "bg-[#f4f1e8] text-[#173326] hover:bg-[#2f6b45] hover:text-white border border-[#173326]/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div 
                key={facility.id}
                className="group border border-[#173326]/20 bg-[#fbfdfa] hover:border-[#2f6b45] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-200">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    
                    <span className="absolute top-4 left-4 bg-white/95 border border-[#2f6b45]/30 text-[#2f6b45] font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 backdrop-blur-md shadow-sm">
                      {facility.categoryLabel}
                    </span>

                    <div className="absolute bottom-4 left-4 h-10 w-10 bg-[#173326] text-white flex items-center justify-center font-bold shadow-lg">
                      <Icon className="text-lg text-[#b9e583]" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#173326] group-hover:text-[#2f6b45] transition-colors leading-snug">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-[#173326]/70 mt-3 leading-relaxed font-normal">
                      {facility.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="mt-5 space-y-2 border-t border-[#173326]/10 pt-4">
                      {facility.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#173326]/85">
                          <FaCheckCircle className="text-[#2f6b45] text-[11px] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#booking-widget"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2f6b45] hover:text-[#173326] transition-colors mt-2"
                  >
                    <span>Inquire Package</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
