"use client";

import { useState } from "react";
import { 
  FaCalendarAlt, 
  FaUserFriends, 
  FaCalculator, 
  FaCheckCircle, 
  FaLeaf, 
  FaFish, 
  FaGift, 
  FaUtensils,
  FaPhoneAlt
} from "react-icons/fa";

export default function OnlineBookingWidget() {
  const [packageType, setPackageType] = useState<string>("day-pass");
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [addBBQ, setAddBBQ] = useState<boolean>(true);
  const [addHarvestBox, setAddHarvestBox] = useState<boolean>(true);
  const [addFishing, setAddFishing] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  // Price Calculation Logic
  const getBaseRate = () => {
    switch (packageType) {
      case "day-pass":
        return 1850;
      case "eco-cottage":
        return 6500;
      case "family-suite":
        return 12000;
      case "corporate":
        return 2200;
      default:
        return 1850;
    }
  };

  const baseRate = getBaseRate();
  const guestCount = packageType === "day-pass" || packageType === "corporate" ? adults : 1;
  const packageTotal = baseRate * guestCount;

  const bbqAddon = addBBQ ? 650 * (adults + children) : 0;
  const harvestBoxAddon = addHarvestBox ? 500 : 0;
  const fishingAddon = addFishing ? 400 : 0;

  const totalEstimatedBDT = packageTotal + bbqAddon + harvestBoxAddon + fishingAddon;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <section id="booking-widget" className="py-24 bg-[#f4f1e8] text-[#173326] relative border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2f6b45]/30 bg-[#2f6b45]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f6b45] mb-4">
              <FaCalculator className="text-xs" />
              <span>10 • Instant Calculator &amp; Reservation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#173326]">
              Online Booking <span className="font-semibold text-[#2f6b45]">Cost Estimator</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#173326]/75 leading-relaxed font-normal">
            Customize your experience parameters below to see an instant transparent cost breakdown. No pre-payment required.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selector Controls */}
          <div className="lg:col-span-7 border border-[#173326]/20 bg-white p-8 space-y-6 shadow-sm">
            
            {/* Step 1: Package Type */}
            <div className="space-y-3">
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2f6b45]">
                1. Select Package Type
              </label>
              
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                {[
                  { id: "day-pass", name: "Day Long Harvest Pass", price: "BDT 1,850/guest" },
                  { id: "eco-cottage", name: "Eco-Cottage Overnighter", price: "BDT 6,500/night" },
                  { id: "family-suite", name: "Family Agro-Suite (2D/1N)", price: "BDT 12,000/night" },
                  { id: "corporate", name: "Corporate Eco Retreat", price: "BDT 2,200/delegate" },
                ].map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setPackageType(pkg.id)}
                    className={`p-4 border text-left transition-all cursor-pointer ${
                      packageType === pkg.id
                        ? "border-[#2f6b45] bg-[#eef4ea] text-[#173326] font-bold shadow-sm"
                        : "border-[#173326]/15 bg-[#fbfdfa] text-[#173326]/70 hover:border-[#2f6b45]/40"
                    }`}
                  >
                    <div className="font-bold text-sm text-[#173326]">{pkg.name}</div>
                    <div className="text-[11px] text-[#2f6b45] mt-1 font-semibold">{pkg.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Guest Counters */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2 border-t border-[#173326]/10">
              
              <div className="space-y-2">
                <label className="block font-mono text-xs font-bold uppercase text-[#173326]/80">
                  Check-In Date
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full bg-[#f4f1e8] border border-[#173326]/20 px-3 py-2.5 text-xs text-[#173326] focus:border-[#2f6b45] focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs font-bold uppercase text-[#173326]/80">
                  Adult Guests
                </label>
                <div className="flex items-center border border-[#173326]/20 bg-[#f4f1e8]">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="px-3 py-2 text-[#173326] hover:bg-[#2f6b45]/10 font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-mono text-xs font-bold">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="px-3 py-2 text-[#173326] hover:bg-[#2f6b45]/10 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs font-bold uppercase text-[#173326]/80">
                  Children (Under 10)
                </label>
                <div className="flex items-center border border-[#173326]/20 bg-[#f4f1e8]">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="px-3 py-2 text-[#173326] hover:bg-[#2f6b45]/10 font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-mono text-xs font-bold">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(children + 1)}
                    className="px-3 py-2 text-[#173326] hover:bg-[#2f6b45]/10 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Step 3: Optional Experience Add-Ons */}
            <div className="space-y-3 pt-2 border-t border-[#173326]/10">
              <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#2f6b45]">
                3. Optional Farm Perks &amp; Add-ons
              </label>

              <div className="space-y-2 text-xs">
                <label className="flex items-center justify-between p-3 border border-[#173326]/15 bg-[#fbfdfa] cursor-pointer hover:border-[#2f6b45]/40">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addBBQ}
                      onChange={(e) => setAddBBQ(e.target.checked)}
                      className="accent-[#2f6b45]"
                    />
                    <div className="flex items-center gap-2">
                      <FaUtensils className="text-[#2f6b45]" />
                      <span className="font-bold text-[#173326]">Live Garden Clay-Oven BBQ Dinner</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#2f6b45] font-bold">+BDT 650/guest</span>
                </label>

                <label className="flex items-center justify-between p-3 border border-[#173326]/15 bg-[#fbfdfa] cursor-pointer hover:border-[#2f6b45]/40">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addHarvestBox}
                      onChange={(e) => setAddHarvestBox(e.target.checked)}
                      className="accent-[#2f6b45]"
                    />
                    <div className="flex items-center gap-2">
                      <FaGift className="text-[#2f6b45]" />
                      <span className="font-bold text-[#173326]">Organic Farm Harvest Gift Box (2.5 kg produce)</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#2f6b45] font-bold">+BDT 500</span>
                </label>

                <label className="flex items-center justify-between p-3 border border-[#173326]/15 bg-[#fbfdfa] cursor-pointer hover:border-[#2f6b45]/40">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addFishing}
                      onChange={(e) => setAddFishing(e.target.checked)}
                      className="accent-[#2f6b45]"
                    />
                    <div className="flex items-center gap-2">
                      <FaFish className="text-[#2f6b45]" />
                      <span className="font-bold text-[#173326]">Lake Angling Equipment &amp; Bait Set</span>
                    </div>
                  </div>
                  <span className="font-mono text-[#2f6b45] font-bold">+BDT 400</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Price Summary Card */}
          <div className="lg:col-span-5 border border-[#173326]/30 bg-[#10251b] text-white p-8 relative overflow-hidden shadow-xl space-y-6">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[#b9e583]" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#b9e583]">
                Calculation Summary
              </span>
              <span className="font-mono text-[10px] text-white/60 bg-white/10 px-2.5 py-1">
                Zero Pre-payment
              </span>
            </div>

            {/* Breakdown Items */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between text-white/80">
                <span>Base Package:</span>
                <span className="text-white font-bold">BDT {packageTotal.toLocaleString()}</span>
              </div>

              {addBBQ && (
                <div className="flex justify-between text-white/70">
                  <span>Garden BBQ ({adults + children} guests):</span>
                  <span className="text-[#b9e583]">BDT {bbqAddon.toLocaleString()}</span>
                </div>
              )}

              {addHarvestBox && (
                <div className="flex justify-between text-white/70">
                  <span>Organic Harvest Box:</span>
                  <span className="text-[#b9e583]">BDT {harvestBoxAddon.toLocaleString()}</span>
                </div>
              )}

              {addFishing && (
                <div className="flex justify-between text-white/70">
                  <span>Lake Angling Gear:</span>
                  <span className="text-[#b9e583]">BDT {fishingAddon.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Total Highlight */}
            <div className="border-y border-[#b9e583]/30 bg-[#0c1c14] p-5 my-4 text-center">
              <span className="font-mono text-xs uppercase tracking-wider text-white/70 block">
                Total Estimated Cost
              </span>
              <div className="text-4xl font-mono font-bold text-[#b9e583] mt-1">
                BDT {totalEstimatedBDT.toLocaleString()}
              </div>
              <span className="text-[10px] text-white/50 block mt-1">
                Includes all resort taxes, organic breakfast &amp; lake access.
              </span>
            </div>

            {/* Confirmation Box or Submit Button */}
            {isConfirmed ? (
              <div className="p-4 bg-[#0c1c14] border border-[#b9e583] text-center space-y-2">
                <FaCheckCircle className="text-3xl text-[#b9e583] mx-auto" />
                <h4 className="font-bold text-white">Reservation Request Sent!</h4>
                <p className="text-xs text-white/70">
                  Ref Code: <span className="font-mono text-[#b9e583]">#EAGRO-2026-892</span>
                </p>
                <p className="text-[11px] text-white/50">
                  Our front desk team will call you to finalize check-in details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <button
                  type="submit"
                  className="w-full bg-[#b9e583] hover:bg-[#a6db6c] py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0c1c14] transition-all duration-300 shadow-xl shadow-[#b9e583]/20 cursor-pointer"
                >
                  Confirm Instant Booking Inquiry
                </button>

                <a
                  href="tel:+8801929918408"
                  className="w-full inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white py-3 font-mono text-xs text-white transition-colors"
                >
                  <FaPhoneAlt className="text-xs text-[#b9e583]" />
                  <span>Call Desk: +880 1929-918408</span>
                </a>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
