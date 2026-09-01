"use client";

import { useState } from "react";
import { FaCheck, FaStar, FaBolt, FaCoffee, FaBed, FaCrown } from "react-icons/fa";

const pricingCategories = [
  { id: "transit", label: "Short Transit Breaks" },
  { id: "stay", label: "Day Pass & Overnight Stays" },
  { id: "events", label: "Events & Corporate Outings" },
];

const packagesData = {
  transit: [
    {
      id: "quick-refresh",
      name: "Quick Transit Refresh",
      duration: "Up to 2 Hours",
      price: "৳1,200",
      period: "per room",
      badge: "Fast Rest",
      highlight: false,
      description: "Ideal for drivers and travelers needing a rapid shower, power nap, and vehicle security.",
      features: [
        "Private soundproof shower & restroom",
        "Air-conditioned rest room",
        "Complimentary high-speed fiber Wi-Fi",
        "Secure reserved parking",
        "Express takeaway coffee / mineral water",
      ],
      cta: "Book Transit Rest",
    },
    {
      id: "highway-recharge",
      name: "Highway Recharge Pass",
      duration: "Up to 4 Hours",
      price: "৳2,200",
      period: "per room",
      badge: "Most Popular",
      highlight: true,
      description: "Complete rest experience with in-room dining and complimentary EV charger bay access.",
      features: [
        "Deluxe King Bed with fresh luxury linens",
        "Full private bathroom with rain shower & toiletries",
        "Complimentary EV fast-charging bay access",
        "15% dining discount at Highway Restaurant",
        "Complimentary tea / barista espresso",
        "High-speed fiber Wi-Fi & Smart IPTV",
      ],
      cta: "Reserve Recharge Pass",
    },
    {
      id: "executive-lounge-pass",
      name: "Executive Lounge Pass",
      duration: "Up to 4 Hours",
      price: "৳1,800",
      period: "per guest",
      badge: "Business Traveler",
      highlight: false,
      description: "Access to private business lounge, quiet workstation, printer, and gourmet refreshments.",
      features: [
        "Executive business lounge seating",
        "Dedicated quiet work desk with multi-plug power",
        "Unlimited gourmet coffee & artisanal snacks",
        "High-speed fiber optic internet (50 Mbps)",
        "Priority parking & vehicle security",
      ],
      cta: "Book Lounge Pass",
    },
  ],
  stay: [
    {
      id: "day-stay",
      name: "Day Pass Suite",
      duration: "6–8 Hours (Day Use)",
      price: "৳3,800",
      period: "per suite",
      badge: "Family & Business",
      highlight: false,
      description: "Comfortable midday sanctuary for families and traveling executives before evening destinations.",
      features: [
        "Spacious Deluxe Suite with king bed",
        "Full in-room dining service",
        "Access to family lounge & kids play area",
        "Complimentary vehicle wash & wipe service",
        "High-speed Wi-Fi & streaming Smart TV",
        "Secure parking with CCTV surveillance",
      ],
      cta: "Reserve Day Pass",
    },
    {
      id: "deluxe-overnight",
      name: "Deluxe Overnight Suite",
      duration: "Full 24-Hour Stay",
      price: "৳6,500",
      period: "per night",
      badge: "Top Choice",
      highlight: true,
      description: "Uncompromised 5-star standard highway comfort with complimentary farm-fresh buffet breakfast.",
      features: [
        "Soundproof VVIP Deluxe King Suite",
        "Organic farm-fresh buffet breakfast included",
        "Complimentary overnight EV charging (Full charge)",
        "Free touchless automated car wash",
        "24/7 dedicated room service & butler desk",
        "Late checkout upon highway availability",
      ],
      cta: "Book Overnight Suite",
    },
    {
      id: "presidential-suite",
      name: "Presidential Family Suite",
      duration: "Full 24-Hour Stay",
      price: "৳11,500",
      period: "per night (Up to 6 Guests)",
      badge: "Luxury Group",
      highlight: false,
      description: "Dual interconnected bedrooms, private living lounge, and personalized VIP host services.",
      features: [
        "2 Connected Master Bedrooms + Living Lounge",
        "Full buffet breakfast for up to 6 guests",
        "2 Dedicated parking & EV supercharger bays",
        "Complimentary full interior car detailing",
        "VIP lounge access with continuous refreshments",
        "Priority early check-in & late checkout",
      ],
      cta: "Reserve Presidential",
    },
  ],
  events: [
    {
      id: "official-outing-pkg",
      name: "Corporate Offsite & Outing",
      duration: "Full Day (8 Hours)",
      price: "৳18,000",
      period: "base up to 15 executives",
      badge: "Corporate Choice",
      highlight: false,
      description: "Tailored for team meetings, strategic sessions, and leadership retreats away from city noise.",
      features: [
        "Private air-conditioned conference hall",
        "High-definition AV projection & conference mic set",
        "2-Course executive buffet lunch + 2 tea breaks",
        "Stationery, high-speed fiber internet & flipcharts",
        "Dedicated corporate host & event coordinator",
      ],
      cta: "Plan Corporate Outing",
    },
    {
      id: "celebration-banquet",
      name: "Grand Celebration & Reunion",
      duration: "Half-Day / Evening Gala",
      price: "৳35,000",
      period: "base up to 50 guests",
      badge: "Celebrations",
      highlight: true,
      description: "Unforgettable venue for birthdays, family reunions, alumni meets, and anniversary galas.",
      features: [
        "Grand Banquet Hall with acoustic staging & lighting",
        "Traditional 4-course royal Bengali banquet",
        "Photo booth backdrop & celebration setup",
        "Dedicated sound engineer & service team",
        "VIP guest lounge & bridal / changing suite",
        "Ample parking for 50+ guest vehicles",
      ],
      cta: "Reserve Celebration",
    },
    {
      id: "highway-club-gathering",
      name: "Highway Club Meetup",
      duration: "Custom Duration",
      price: "Custom",
      period: "based on requirements",
      badge: "Automobile & Clubs",
      highlight: false,
      description: "Designed for supercar rallies, EV owner clubs, biker groups, and traveler associations.",
      features: [
        "Reserved convoy parking plaza & photo zone",
        "Simultaneous multi-car EV charging coordination",
        "Buffet BBQ & live tandoor grill on the lawn",
        "Special group discounts on overnight suites",
        "Express wash & quick check station",
      ],
      cta: "Enquire Club Package",
    },
  ],
};

export default function PricingOverview({ onSelectPackage }: { onSelectPackage?: (name: string) => void }) {
  const [activeTab, setActiveTab] = useState<"transit" | "stay" | "events">("stay");

  const packages = packagesData[activeTab];

  return (
    <section id="pricing" className="bg-white py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 border border-emerald-700/30 bg-emerald-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-800 mb-4">
            <FaCrown />
            <span>06 / Transparent Pricing</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Choose the pause that fits your route.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Transparent rates with zero hidden highway surcharges. All bookings include high-speed Wi-Fi, round-the-clock security, and pristine hygiene.
          </p>
        </div>

        {/* Category Switcher Tabs (Square) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-none bg-[#F5F5F2] border border-neutral-300">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id as "transit" | "stay" | "events")}
                className={`px-6 py-3 rounded-none font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "text-neutral-700 hover:text-black hover:bg-neutral-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid (Square Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-none p-8 transition-all duration-500 ${
                pkg.highlight
                  ? "bg-[#F5F5F2] border-2 border-emerald-700 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] lg:-translate-y-2"
                  : "bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
              }`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 h-[3px] w-full ${pkg.highlight ? "bg-emerald-700" : "bg-neutral-200"}`} />

              {/* Badge */}
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-700 text-white font-mono text-[9px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-none shadow-sm flex items-center gap-1">
                    <FaStar className="text-[8px]" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                {!pkg.highlight && (
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-neutral-950 mt-1">{pkg.name}</h3>
                <p className="text-xs text-neutral-500 font-mono mt-1">{pkg.duration}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-neutral-200 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-neutral-950">{pkg.price}</span>
                <span className="font-mono text-xs text-neutral-500 uppercase">/{pkg.period}</span>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                {pkg.description}
              </p>

              {/* Inclusions checklist */}
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                    <FaCheck className="text-emerald-700 text-xs mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button (Square) */}
              <a
                href="#booking-widget"
                className={`w-full text-center py-4 rounded-none font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 block cursor-pointer ${
                  pkg.highlight
                    ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm"
                    : "bg-neutral-950 hover:bg-emerald-700 text-white"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-12 text-center font-mono text-xs text-neutral-500">
          * Standard government taxes applicable. Special corporate contracts and highway fleet discounts available upon request.
        </p>

      </div>
    </section>
  );
}
