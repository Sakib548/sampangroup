"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCoffee, FaCar, FaShower, FaCalendarCheck, FaUtensils, FaClock, FaCheckCircle, FaStar, FaFilter } from "react-icons/fa";

export interface VehicleItem {
  id: string;
  name: string;
  brand: string;
  type: "sedan" | "suv" | "hybrid" | "luxury";
  year: string;
  priceBDT: string;
  image: string;
  mileage: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: "coffee" | "meals" | "snacks";
  priceBDT: string;
  description: string;
}

export interface CarWashPackage {
  id: string;
  name: string;
  priceBDT: string;
  duration: string;
  inclusions: string[];
}

const mockVehicles: VehicleItem[] = [
  {
    id: "v-1",
    name: "Toyota Harrier Progress Advanced",
    brand: "Toyota",
    type: "suv",
    year: "2021",
    priceBDT: "68,50,000",
    image: "/images/concerns/sampan-auto.png",
    mileage: "18,000 km",
  },
  {
    id: "v-2",
    name: "Honda Vezel Z Play Hybrid",
    brand: "Honda",
    type: "hybrid",
    year: "2022",
    priceBDT: "39,80,000",
    image: "/images/concerns/sampan-auto.png",
    mileage: "12,500 km",
  },
  {
    id: "v-3",
    name: "Toyota Premio F-EX Package",
    brand: "Toyota",
    type: "sedan",
    year: "2020",
    priceBDT: "34,50,000",
    image: "/images/concerns/sampan-auto.png",
    mileage: "24,000 km",
  },
];

const mockMenu: MenuItem[] = [
  { id: "m-1", name: "Artisanal Espresso & Cappuccino", category: "coffee", priceBDT: "280", description: "Freshly roasted single-origin Arabica beans." },
  { id: "m-2", name: "Sampan Club Sandwich & Fries", category: "meals", priceBDT: "450", description: "Triple-decker smoked chicken & egg sandwich." },
  { id: "m-3", name: "Clay Oven Sizzling Chicken Grill", category: "meals", priceBDT: "680", description: "Marinated overnight and served with naan." },
];

const mockCarWash: CarWashPackage[] = [
  { id: "cw-1", name: "Express Hydro Wash", priceBDT: "500", duration: "20 Mins", inclusions: ["High-Pressure Exterior Foam Wash", "Tire Shine & Rim Degrease", "Windshield Cleaning"] },
  { id: "cw-2", name: "Premium Detailing & Interior Steam", priceBDT: "1,800", duration: "45 Mins", inclusions: ["Full Body Foam Wash & Clay Bar", "Vacuum & Interior Steam Sanitization", "Dashboard Polish & Leather Care", "Complimentary Cafe Beverage"] },
];

export default function CafeMetroSpecial() {
  const [activeTab, setActiveTab] = useState<"carwash" | "cafe" | "vehicles">("carwash");
  const [bookedSuccess, setBookedSuccess] = useState<boolean>(false);

  return (
    <section id="cafe-metro-special" className="py-24 bg-[#f3f6f2] text-[#183b2b] relative border-b border-[#183b2b]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
              <FaCoffee className="text-xs" />
              <span>Sampan Cafe Metro • Auto &amp; Hospitality Integration</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#183b2b]">
              Car Wash, Cafe Menu &amp; <span className="font-semibold text-[#ca8a04]">Auto Inventory</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs opacity-80">
            <FaClock className="text-[#ca8a04]" />
            <span>Hours: 08:00 AM – 11:00 PM Daily</span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-[#183b2b]/15 pb-6">
          <button
            onClick={() => setActiveTab("carwash")}
            className={`flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "carwash"
                ? "bg-[#183b2b] text-white shadow-md"
                : "bg-white text-[#183b2b] hover:bg-[#ca8a04] hover:text-neutral-950 border border-[#183b2b]/20"
            }`}
          >
            <FaShower />
            <span>Car Wash Slots &amp; Pricing</span>
          </button>

          <button
            onClick={() => setActiveTab("cafe")}
            className={`flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "cafe"
                ? "bg-[#183b2b] text-white shadow-md"
                : "bg-white text-[#183b2b] hover:bg-[#ca8a04] hover:text-neutral-950 border border-[#183b2b]/20"
            }`}
          >
            <FaUtensils />
            <span>Cafe Menu Overview</span>
          </button>

          <button
            onClick={() => setActiveTab("vehicles")}
            className={`flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "vehicles"
                ? "bg-[#183b2b] text-white shadow-md"
                : "bg-white text-[#183b2b] hover:bg-[#ca8a04] hover:text-neutral-950 border border-[#183b2b]/20"
            }`}
          >
            <FaCar />
            <span>Sampan Auto Vehicle Inventory</span>
          </button>
        </div>

        {/* Tab 1: Car Wash */}
        {activeTab === "carwash" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {mockCarWash.map((pkg) => (
                <div key={pkg.id} className="border border-[#183b2b]/15 bg-white p-6 space-y-4 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-[#183b2b]">{pkg.name}</h3>
                    <span className="font-mono text-xs text-[#ca8a04] font-bold bg-[#ca8a04]/10 px-2 py-0.5 border border-[#ca8a04]/30">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="text-3xl font-mono font-bold text-[#ca8a04]">
                    BDT {pkg.priceBDT}
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#183b2b]/10 text-xs opacity-90">
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#ca8a04] text-[10px]" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Car Wash Booking Form */}
            <div className="lg:col-span-5 border border-[#183b2b]/15 bg-white p-8 space-y-4 font-mono text-xs shadow-sm">
              <span className="text-[#ca8a04] uppercase font-bold">Online Car Wash Slot Booking</span>
              <h3 className="text-xl font-bold text-[#183b2b]">Reserve Your Slot</h3>

              {bookedSuccess ? (
                <div className="py-8 text-center space-y-2 bg-[#f3f6f2] p-4 border border-[#183b2b]/20">
                  <FaCheckCircle className="text-3xl text-emerald-700 mx-auto" />
                  <p className="font-bold text-[#183b2b]">Car Wash Slot Reserved!</p>
                  <p className="text-[11px] opacity-75">Enjoy a free espresso at Cafe Metro while your car gets serviced.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setBookedSuccess(true); }} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-[#f3f6f2] border border-[#183b2b]/20 p-3 text-xs text-[#183b2b]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    className="w-full bg-[#f3f6f2] border border-[#183b2b]/20 p-3 text-xs text-[#183b2b]"
                  />
                  <select className="w-full bg-[#f3f6f2] border border-[#183b2b]/20 p-3 text-xs text-[#183b2b]">
                    <option>Select Slot Time Today</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>02:00 PM - 03:00 PM</option>
                    <option>05:00 PM - 06:00 PM</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 py-3.5 font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    Confirm Slot Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Cafe Menu */}
        {activeTab === "cafe" && (
          <div className="grid md:grid-cols-3 gap-6">
            {mockMenu.map((item) => (
              <div key={item.id} className="border border-[#183b2b]/15 bg-white p-6 space-y-3 shadow-sm">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-bold text-[#183b2b]">{item.name}</h3>
                  <span className="font-mono text-sm font-bold text-[#ca8a04]">BDT {item.priceBDT}</span>
                </div>
                <p className="text-xs opacity-75">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Vehicles */}
        {activeTab === "vehicles" && (
          <div className="grid md:grid-cols-3 gap-6">
            {mockVehicles.map((v) => (
              <div key={v.id} className="border border-[#183b2b]/15 bg-white overflow-hidden group shadow-sm">
                <div className="relative h-48 w-full bg-neutral-200">
                  <Image src={v.image} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                  <span className="absolute top-3 left-3 bg-[#ca8a04] text-neutral-950 font-mono text-[10px] font-bold px-2 py-0.5 uppercase">
                    {v.year} Model
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-sm font-bold text-[#183b2b]">{v.name}</h3>
                  <div className="flex justify-between font-mono text-xs opacity-80">
                    <span>{v.mileage}</span>
                    <span className="text-[#ca8a04] font-bold">BDT {v.priceBDT}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
