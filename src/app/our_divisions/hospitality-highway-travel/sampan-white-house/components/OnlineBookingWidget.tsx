"use client";

import { useState } from "react";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUserFriends, 
  FaBed, 
  FaCar, 
  FaCheckCircle, 
  FaWhatsapp, 
  FaTimes,
  FaPhoneAlt,
  FaGlassCheers
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

const stayTiers = [
  { id: "quick", name: "Quick Rest (1–2 Hrs)", price: 1500, desc: "Quick shower, refreshing bath & power nap between drives." },
  { id: "daystay", name: "Day Stay (6–8 Hrs)", price: 4000, desc: "Comfortable motel room + in-room dining + secure parking." },
  { id: "overnight", name: "Overnight Stay", price: 7000, desc: "Full 24-hour soundproof accommodation + hot breakfast." },
  { id: "whitehall", name: "White Hall Event", price: 25000, desc: "Grand banquet hall for weddings, meetings & family galas." },
];

const roomTypes = [
  { id: "deluxe-double", name: "Deluxe Double Motel Room", multiplier: 1 },
  { id: "king-suite", name: "Executive King Motel Suite", multiplier: 1.2 },
  { id: "family-suite", name: "Family Interconnected Room (4–6 Guests)", multiplier: 1.6 },
  { id: "whitehall-suite", name: "White Hall VIP Suite & Banquet Access", multiplier: 2.2 },
];

const vehicleOptions = [
  { id: "car", name: "Standard Car / Sedan / SUV", perk: "Complimentary Reserved Parking" },
  { id: "ev", name: "Electric Vehicle (EV)", perk: "Priority EV Charging Bay" },
  { id: "coach", name: "Tourist Coach / Microbus", perk: "Dedicated High-Capacity Bay" },
  { id: "bike", name: "Touring Motorcycle", perk: "Covered Security Bay" },
];

export default function OnlineBookingWidget({
  onClose,
}: {
  onClose?: () => void;
}) {
  const [stayType, setStayType] = useState("daystay");
  const [roomType, setRoomType] = useState("deluxe-double");
  const [vehicle, setVehicle] = useState("car");
  const [guests, setGuests] = useState(2);
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("13:00");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedTier = stayTiers.find((t) => t.id === stayType) || stayTiers[1];
  const selectedRoom = roomTypes.find((r) => r.id === roomType) || roomTypes[0];
  const selectedVehicle = vehicleOptions.find((v) => v.id === vehicle) || vehicleOptions[0];

  const estimatedTotal = Math.round(selectedTier.price * selectedRoom.multiplier);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    if (onClose) onClose();
  };

  return (
    <div id="booking-widget" className="relative z-20 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 -mt-10 sm:-mt-14 mb-16">
      <div className="rounded-none border border-neutral-200 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] text-neutral-950 relative">
        <div className="absolute top-0 left-0 h-[3px] w-full bg-[#e8b84b]" />
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#ca8a04] mb-1.5">
              <HiSparkles />
              <span>Instant Motel &amp; White Hall Stopover Calculator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
              Plan Your Stay at Sampan White House
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 hidden sm:inline">24/7 Front Desk Help:</span>
            <a
              href="tel:+8801929918408"
              className="inline-flex items-center gap-2 rounded-none bg-[#F5F5F2] hover:bg-neutral-200 border border-neutral-300 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 transition-colors"
            >
              <FaPhoneAlt className="text-[#ca8a04] text-xs" />
              <span>+880 1929-918408</span>
            </a>
          </div>
        </div>

        {/* Stay Type Selector Tabs (Square) */}
        <div className="mt-8">
          <label className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
            1. Select Stopover / Event Duration
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stayTiers.map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setStayType(tier.id)}
                className={`p-4 rounded-none text-left border transition-all duration-300 cursor-pointer ${
                  stayType === tier.id
                    ? "bg-neutral-950 border-neutral-950 text-white shadow-sm"
                    : "bg-[#F5F5F2] border-neutral-200 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-300"
                }`}
              >
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider">{tier.name}</p>
                <p className={`text-xl font-bold mt-1 ${stayType === tier.id ? "text-[#e8b84b]" : "text-[#ca8a04]"}`}>
                  ৳{tier.price.toLocaleString()}
                </p>
                <p className={`text-[11px] mt-1 line-clamp-1 ${stayType === tier.id ? "text-neutral-400" : "text-neutral-500"}`}>
                  {tier.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Booking Fields Form */}
        <form onSubmit={handleBookingSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Room / Suite Type */}
          <div className="bg-[#F5F5F2] border border-neutral-300 rounded-none p-4 focus-within:border-[#e8b84b] transition-colors">
            <label className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
              <FaBed className="text-[#ca8a04]" />
              <span>Motel Room / Suite Type</span>
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-neutral-950 focus:outline-none cursor-pointer"
            >
              {roomTypes.map((room) => (
                <option key={room.id} value={room.id} className="bg-white text-neutral-950">
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date & Arrival Time */}
          <div className="bg-[#F5F5F2] border border-neutral-300 rounded-none p-4 focus-within:border-[#e8b84b] transition-colors">
            <label className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
              <FaCalendarAlt className="text-[#ca8a04]" />
              <span>Arrival Date &amp; Time</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="date"
                required
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-1/2 bg-transparent text-sm font-medium text-neutral-950 focus:outline-none cursor-pointer"
              />
              <span className="text-neutral-400">|</span>
              <input
                type="time"
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                className="w-1/2 bg-transparent text-sm font-medium text-neutral-950 focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Guests Count */}
          <div className="bg-[#F5F5F2] border border-neutral-300 rounded-none p-4 focus-within:border-[#e8b84b] transition-colors">
            <label className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
              <FaUserFriends className="text-[#ca8a04]" />
              <span>Travelers / Attendees</span>
            </label>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-950">{guests} Guest{guests > 1 ? "s" : ""}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-7 h-7 rounded-none bg-neutral-200 hover:bg-neutral-300 text-neutral-950 font-bold flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => setGuests(guests + 1)}
                  className="w-7 h-7 rounded-none bg-neutral-200 hover:bg-neutral-300 text-neutral-950 font-bold flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Vehicle Type */}
          <div className="bg-[#F5F5F2] border border-neutral-300 rounded-none p-4 focus-within:border-[#e8b84b] transition-colors">
            <label className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
              <FaCar className="text-[#ca8a04]" />
              <span>Vehicle / Coach Bay</span>
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-neutral-950 focus:outline-none cursor-pointer"
            >
              {vehicleOptions.map((v) => (
                <option key={v.id} value={v.id} className="bg-white text-neutral-950">
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          {/* Guest Name & Phone */}
          <div className="sm:col-span-2 bg-[#F5F5F2] border border-neutral-300 rounded-none p-4 focus-within:border-[#e8b84b] transition-colors">
            <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
              Primary Guest Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Mahfuzar Rahman"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-neutral-950 placeholder-neutral-400 focus:outline-none"
            />
          </div>

          <div className="sm:col-span-2 bg-[#F5F5F2] border border-neutral-300 rounded-none p-4 focus-within:border-[#e8b84b] transition-colors">
            <label className="block font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-600 mb-2">
              Contact Mobile / WhatsApp
            </label>
            <input
              type="tel"
              required
              placeholder="+880 1XXXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-neutral-950 placeholder-neutral-400 focus:outline-none"
            />
          </div>

          {/* Total & Submit Button (Square) */}
          <div className="sm:col-span-2 lg:col-span-4 mt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-neutral-200">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">Estimated Total:</span>
              <span className="text-3xl font-extrabold text-neutral-950">৳{estimatedTotal.toLocaleString()}</span>
              <span className="text-xs text-[#ca8a04] font-medium font-mono">({selectedTier.name} • {selectedVehicle.perk})</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-none bg-[#e8b84b] hover:bg-[#d4a43e] px-10 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span>Confirm Reservation</span>
                <FiArrowRight />
              </button>
            </div>
          </div>

        </form>

        {/* Confirmation Modal */}
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-none border border-neutral-300 bg-white p-8 text-neutral-950 shadow-2xl">
              <button
                onClick={resetForm}
                className="absolute top-6 right-6 text-neutral-500 hover:text-black p-2"
              >
                <FaTimes />
              </button>

              <div className="w-16 h-16 rounded-none bg-amber-50 border border-amber-300 flex items-center justify-center text-[#ca8a04] text-3xl mb-6 mx-auto">
                <FaCheckCircle />
              </div>

              <h3 className="text-2xl font-bold text-center text-neutral-950">
                Reservation Request Received!
              </h3>
              <p className="text-sm text-neutral-600 text-center mt-2 leading-relaxed">
                Thank you <strong className="text-[#ca8a04]">{name}</strong>! Your stopover request for{" "}
                <span className="text-neutral-950 font-semibold">{selectedTier.name}</span> on{" "}
                <span className="text-neutral-950 font-semibold">{arrivalDate || "Today"} at {arrivalTime}</span> has been logged.
              </p>

              <div className="mt-6 rounded-none bg-[#F5F5F2] p-4 border border-neutral-200 space-y-2 text-xs text-neutral-700 font-mono">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Selected Space:</span>
                  <span className="font-semibold text-neutral-950">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Vehicle Parking:</span>
                  <span className="font-semibold text-[#ca8a04]">{selectedVehicle.perk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Estimated Total:</span>
                  <span className="font-bold text-neutral-950 text-sm">৳{estimatedTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`https://wa.me/8801929918408?text=Hello%20Sampan%20White%20House,%20I%20would%20like%20to%20confirm%20my%20reservation%20for%20${encodeURIComponent(name)}%20on%20${encodeURIComponent(arrivalDate)}%20(${encodeURIComponent(selectedTier.name)})`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-none bg-[#e8b84b] hover:bg-[#d4a43e] py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 transition-colors"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>
                
                <button
                  onClick={resetForm}
                  className="w-full rounded-none bg-[#F5F5F2] hover:bg-neutral-200 border border-neutral-300 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-800 transition-colors cursor-pointer"
                >
                  Close &amp; Continue Browsing
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
