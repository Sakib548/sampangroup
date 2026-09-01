"use client";

import { useState } from "react";
import { FaCheck, FaStar, FaCrown, FaGlassCheers, FaBed, FaCoffee } from "react-icons/fa";

const pricingCategories = [
  { id: "transit", label: "Quick Breaks & Day Stays" },
  { id: "stay", label: "Overnight Motel Stays" },
  { id: "events", label: "White Hall Banquets & Events" },
];

const packagesData = {
  transit: [
    {
      id: "quick-rest",
      name: "Quick Transit Rest",
      duration: "1–2 Hours",
      price: "৳1,500",
      period: "per room",
      badge: "Fast Rest",
      highlight: false,
      description: "Designed for drivers and travelers needing a hot shower, clean bathroom, power nap, and secure vehicle parking.",
      features: [
        "Private air-conditioned motel room",
        "Clean, sanitized restroom with hot rain shower",
        "Complimentary high-speed Wi-Fi",
        "Secure reserved parking",
        "Express mineral water & hot tea",
      ],
      cta: "Book Quick Rest",
    },
    {
      id: "day-stay",
      name: "Day Pass Stay",
      duration: "6–8 Hours (Day Use)",
      price: "৳4,000",
      period: "per room",
      badge: "Most Popular",
      highlight: true,
      description: "Ideal for business travelers or families breaking their journey during midday before onward travel.",
      features: [
        "Spacious soundproof Double / King Room",
        "Full in-room dining service from Garden Kitchen",
        "Access to family lounge & children play area",
        "Complimentary high-speed Wi-Fi",
        "Safe gated parking with CCTV surveillance",
        "15% dining discount at Garden Restaurant",
      ],
      cta: "Reserve Day Pass",
    },
    {
      id: "executive-day-break",
      name: "Executive Day Suite",
      duration: "Up to 8 Hours",
      price: "৳5,500",
      period: "per suite",
      badge: "Business Comfort",
      highlight: false,
      description: "Quiet private workstation suite with premium bedding and meeting-ready connectivity.",
      features: [
        "Executive King Suite with work desk",
        "High-speed dedicated Wi-Fi connectivity",
        "Complimentary barista coffee / refreshments",
        "In-room dining & express room service",
        "Priority EV charging & reserved parking",
      ],
      cta: "Book Executive Day",
    },
  ],
  stay: [
    {
      id: "deluxe-overnight",
      name: "Deluxe Overnight Motel Stay",
      duration: "Full 24-Hour Stay",
      price: "৳7,000",
      period: "per night",
      badge: "Top Choice",
      highlight: true,
      description: "24-hour comfortable accommodation with zero highway disturbance, premium linens, and hot breakfast.",
      features: [
        "100% Soundproof Deluxe King Room",
        "Complimentary hot breakfast for 2 guests",
        "24/7 front desk support & concierge service",
        "High-speed fiber Wi-Fi & Smart TV",
        "Safe parking in gated compound",
        "Flexible check-in / check-out times",
      ],
      cta: "Book Overnight Motel",
    },
    {
      id: "family-suite-overnight",
      name: "Family Interconnected Suite",
      duration: "Full 24-Hour Stay",
      price: "৳10,500",
      period: "per night (Up to 5 Guests)",
      badge: "Family Favorite",
      highlight: false,
      description: "Two interconnected bedrooms with dual bathrooms, ideal for larger family road trips.",
      features: [
        "2 Interconnected Bedrooms + 2 Bathrooms",
        "Hot breakfast included for up to 5 guests",
        "Priority parking for family SUV / Van",
        "24/7 dedicated room service support",
        "Children play lounge privileges",
        "Extra bedding upon request",
      ],
      cta: "Reserve Family Suite",
    },
    {
      id: "whitehouse-vip-suite",
      name: "White House VIP Suite",
      duration: "Full 24-Hour Stay",
      price: "৳13,500",
      period: "per night",
      badge: "Luxury Stay",
      highlight: false,
      description: "Regal suite with separate living area, premium amenities, and personalized concierge hosting.",
      features: [
        "Master Bedroom + Private Living Salon",
        "Full gourmet breakfast + welcome refreshments",
        "Dedicated VIP parking bay right at the entrance",
        "Complimentary EV fast charge",
        "Express laundry & pressing service",
      ],
      cta: "Book VIP Suite",
    },
  ],
  events: [
    {
      id: "whitehall-meeting",
      name: "Corporate Seminar & Meeting",
      duration: "Half-Day / Full Day",
      price: "৳18,000",
      period: "base up to 25 attendees",
      badge: "Corporate Choice",
      highlight: false,
      description: "Equipped with HD projection, sound system, and executive catering for corporate retreats.",
      features: [
        "Air-conditioned White Hall conference setup",
        "HD projector, podium, wireless microphones",
        "2-Course executive buffet lunch + 2 tea breaks",
        "Dedicated event coordinator & audio tech",
        "Ample parking for all corporate vehicles",
      ],
      cta: "Plan Meeting Package",
    },
    {
      id: "whitehall-grand-banquet",
      name: "White Hall Grand Banquet Gala",
      duration: "Evening / Full Day Slot",
      price: "৳25,000",
      period: "base hall rental (Up to 300 Guests)",
      badge: "Grand Celebrations",
      highlight: true,
      description: "Iconic venue for weddings, anniversary galas, family reunions, and large celebratory banquets.",
      features: [
        "300+ Capacity column-free grand hall",
        "Chandelier illumination & acoustic staging",
        "Dedicated bridal changing & VIP dressing suite",
        "Traditional 4-course banquet catering options",
        "Gated parking for 100+ guest vehicles",
        "Complete event security & generator backup",
      ],
      cta: "Reserve White Hall",
    },
    {
      id: "highway-reunion",
      name: "Highway Reunion & Party",
      duration: "Custom Slot",
      price: "Custom",
      period: "tailored package",
      badge: "Reunions",
      highlight: false,
      description: "Ideal for alumni batches, automotive rallies, and community gatherings on the highway corridor.",
      features: [
        "Indoor banquet + Outdoor garden lawn access",
        "Live BBQ & kebab grilling stations",
        "Special group room discounts for attendees",
        "Custom photo zone & banner backdrop staging",
      ],
      cta: "Enquire Event Custom",
    },
  ],
};

export default function PricingOverview() {
  const [activeTab, setActiveTab] = useState<"transit" | "stay" | "events">("stay");

  const packages = packagesData[activeTab];

  return (
    <section id="pricing" className="bg-white py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 border border-[#ca8a04]/30 bg-amber-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ca8a04] mb-4">
            <FaCrown />
            <span>06 / Room &amp; Package Pricing</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Choose the pause that fits your route.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Transparent pricing with zero hidden highway surcharges. All bookings include high-speed Wi-Fi, gated security, and pristine hygiene.
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
                  ? "bg-[#F5F5F2] border-2 border-[#e8b84b] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] lg:-translate-y-2"
                  : "bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
              }`}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 h-[3px] w-full ${pkg.highlight ? "bg-[#e8b84b]" : "bg-neutral-200"}`} />

              {/* Badge */}
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#e8b84b] text-neutral-950 font-mono text-[9px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-none shadow-sm flex items-center gap-1">
                    <FaStar className="text-[8px]" />
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                {!pkg.highlight && (
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#ca8a04]">
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
                    <FaCheck className="text-[#ca8a04] text-xs mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button (Square) */}
              <a
                href="#booking-widget"
                className={`w-full text-center py-4 rounded-none font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 block cursor-pointer ${
                  pkg.highlight
                    ? "bg-[#e8b84b] hover:bg-[#d4a43e] text-neutral-950 shadow-sm"
                    : "bg-neutral-950 hover:bg-[#e8b84b] hover:text-neutral-950 text-white"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-12 text-center font-mono text-xs text-neutral-500">
          * On-site restaurant meals and special banquet catering menus available with advance reservation.
        </p>

      </div>
    </section>
  );
}
