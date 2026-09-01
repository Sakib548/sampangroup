"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCar, FaCogs, FaSearch, FaCheckCircle, FaExternalLinkAlt, FaTag, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export interface VehicleItem {
  id: string;
  name: string;
  make: string;
  modelYear: string;
  priceBDT: string;
  importStatus: "Ready in Showroom" | "In-Transit (Ship)" | "Japan Auction Pre-Order";
  auctionGrade: string;
  mileageKm: string;
  engineCc: string;
  fuelType: string;
  image: string;
  highlights: string[];
}

export interface AutoPartItem {
  id: string;
  partName: string;
  category: string;
  compatibility: string;
  priceBDT: string;
  stockStatus: string;
}

export interface AutoInventoryBrowserProps {
  vehicles: VehicleItem[];
  parts: AutoPartItem[];
  accentColor?: string;
  onImportRequest?: (vehicleModel: string) => void;
}

export default function AutoInventoryBrowser({
  vehicles,
  parts,
  accentColor = "#4c2a85",
  onImportRequest,
}: AutoInventoryBrowserProps) {
  const [selectedMake, setSelectedMake] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<"vehicles" | "parts">("vehicles");
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [requestedModel, setRequestedModel] = useState("");
  const [importSubmitted, setImportSubmitted] = useState(false);

  const makes = ["all", ...Array.from(new Set(vehicles.map((v) => v.make)))];

  const filteredVehicles = vehicles.filter((v) => {
    const makeMatch = selectedMake === "all" || v.make === selectedMake;
    const statusMatch = selectedStatus === "all" || v.importStatus === selectedStatus;
    return makeMatch && statusMatch;
  });

  const handleImportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setImportSubmitted(true);
  };

  return (
    <section id="auto-inventory" className="py-24 relative overflow-hidden bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60">
      
      {/* Signature DivisionsSection Radial Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
            >
              <FaCar className="text-xs" />
              <span>Japanese Vehicle &amp; Parts Showroom</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-neutral-950">
              Vehicle Inventory &amp; Parts Browser
            </h2>
          </div>

          {/* Toggle Vehicle vs Parts Catalog */}
          <div className="flex gap-2 bg-neutral-200 p-1.5 font-mono text-xs border border-neutral-300">
            <button
              onClick={() => setActiveTab("vehicles")}
              className={`px-5 py-2.5 font-bold uppercase transition-all cursor-pointer ${
                activeTab === "vehicles" ? "bg-[#090d16] text-white shadow-sm" : "text-neutral-700 hover:text-neutral-950"
              }`}
            >
              Vehicle Inventory ({vehicles.length})
            </button>
            <button
              onClick={() => setActiveTab("parts")}
              className={`px-5 py-2.5 font-bold uppercase transition-all cursor-pointer ${
                activeTab === "parts" ? "bg-[#090d16] text-white shadow-sm" : "text-neutral-700 hover:text-neutral-950"
              }`}
            >
              Genuine Parts Catalog ({parts.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Vehicle Inventory */}
        {activeTab === "vehicles" && (
          <div className="space-y-8">
            
            {/* Filter Bar */}
            <div className="bg-white border border-neutral-300 p-6 flex flex-wrap items-center justify-between gap-4 shadow-sm font-mono text-xs">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-bold uppercase text-neutral-600">Filter Make:</span>
                <div className="flex flex-wrap gap-1.5">
                  {makes.map((mk) => (
                    <button
                      key={mk}
                      onClick={() => setSelectedMake(mk)}
                      className={`px-3 py-1.5 border transition-all cursor-pointer font-bold ${
                        selectedMake === mk
                          ? "bg-[#090d16] text-white border-[#090d16]"
                          : "border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-neutral-800"
                      }`}
                    >
                      {mk === "all" ? "All Makes" : mk}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold uppercase text-neutral-600">Import Status:</span>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-neutral-100 border border-neutral-300 px-3 py-1.5 text-xs font-bold text-neutral-950 focus:outline-none"
                >
                  <option value="all">All Import Statuses</option>
                  <option value="Ready in Showroom">Ready in Showroom</option>
                  <option value="In-Transit (Ship)">In-Transit (Ship)</option>
                  <option value="Japan Auction Pre-Order">Japan Auction Pre-Order</option>
                </select>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((car) => (
                <div
                  key={car.id}
                  className="border border-neutral-300 bg-white flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-neutral-200">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-neutral-900/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                        Grade {car.auctionGrade}
                      </span>
                      <span className="absolute top-4 right-4 bg-emerald-500/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                        {car.importStatus}
                      </span>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <span className="font-mono text-[10px] uppercase font-bold text-neutral-500 block">{car.make} • {car.modelYear} Model</span>
                        <h3 className="text-2xl font-bold text-neutral-950 mt-0.5">{car.name}</h3>
                      </div>

                      <div className="grid grid-cols-3 gap-2 p-3 bg-[#f3f6f2] border border-neutral-200 font-mono text-[11px] text-center">
                        <div>
                          <span className="block opacity-60 text-[9px] uppercase">Engine</span>
                          <span className="font-bold text-neutral-950">{car.engineCc}</span>
                        </div>
                        <div>
                          <span className="block opacity-60 text-[9px] uppercase">Mileage</span>
                          <span className="font-bold text-neutral-950">{car.mileageKm}</span>
                        </div>
                        <div>
                          <span className="block opacity-60 text-[9px] uppercase">Fuel</span>
                          <span className="font-bold text-neutral-950">{car.fuelType}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-xs">
                        {car.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 opacity-90 text-neutral-700">
                            <FaCheckCircle className="text-emerald-700 text-[10px] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-neutral-200 flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase block text-neutral-500">Showroom Price</span>
                      <span className="font-mono font-bold text-lg" style={{ color: accentColor }}>{car.priceBDT}</span>
                    </div>

                    <button
                      onClick={() => {
                        setRequestedModel(car.name);
                        setImportModalOpen(true);
                      }}
                      className="bg-[#090d16] hover:bg-neutral-800 text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                    >
                      Inquire / Book
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Genuine Parts Catalog */}
        {activeTab === "parts" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parts.map((pt) => (
              <div key={pt.id} className="border border-neutral-300 bg-white p-6 flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold uppercase text-emerald-700 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/30 inline-block">
                    {pt.category}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950">{pt.partName}</h3>
                  <p className="text-xs font-mono text-neutral-600">Fits: {pt.compatibility}</p>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex justify-between items-center font-mono">
                  <span className="font-bold text-sm" style={{ color: accentColor }}>{pt.priceBDT}</span>
                  <span className="text-[10px] text-emerald-700 font-bold">{pt.stockStatus}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* "Nearby" Link to Sampan Cafe Metro */}
        <div className="mt-16 border border-neutral-300 bg-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500">Adjacent Station Amenity</span>
            <h3 className="text-2xl font-bold text-neutral-950">Visiting Sampan Auto Showroom?</h3>
            <p className="text-xs text-neutral-600">Enjoy artisanal coffee, hydro car wash, and garden grill dining right next door at Sampan Cafe Metro.</p>
          </div>

          <Link
            href="/our_divisions/real-state-and-land-investment/sampan-cafe-metro"
            className="inline-flex items-center gap-2 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-md transition-all cursor-pointer hover:opacity-90 shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            <span>Visit Sampan Cafe Metro</span>
            <FaExternalLinkAlt className="text-xs" />
          </Link>
        </div>

      </div>

      {/* Import Request Modal */}
      {importModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white border border-neutral-300 p-8 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => {
                setImportModalOpen(false);
                setImportSubmitted(false);
              }}
              className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-950 font-bold text-lg cursor-pointer"
            >
              ✕
            </button>

            {importSubmitted ? (
              <div className="py-8 text-center space-y-4 font-mono">
                <FaCheckCircle className="text-5xl text-emerald-700 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-neutral-950">Import Inquiry Submitted!</h3>
                <p className="text-xs text-neutral-600">
                  Our Japanese auction desk will contact you with live auction sheet grade details for <span className="font-bold text-neutral-950">{requestedModel}</span> within 1 hour.
                </p>
              </div>
            ) : (
              <form onSubmit={handleImportSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <span className="uppercase text-neutral-500 font-bold text-[10px]">Japanese Vehicle Import Request</span>
                  <h3 className="text-xl font-bold text-neutral-950 mt-0.5">{requestedModel || "Custom Vehicle Import"}</h3>
                </div>

                <div className="space-y-1">
                  <label className="block uppercase opacity-70">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Md. Tanvir Ahmed"
                    className="w-full border border-neutral-300 p-3 text-xs text-neutral-950 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block uppercase opacity-70">Phone Number / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1711..."
                    className="w-full border border-neutral-300 p-3 text-xs text-neutral-950 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block uppercase opacity-70">Preferred Year / Color / Package</label>
                  <input
                    type="text"
                    placeholder="e.g. 2021 Pearl White G Package"
                    className="w-full border border-neutral-300 p-3 text-xs text-neutral-950 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 font-bold uppercase tracking-[0.2em] shadow-md cursor-pointer hover:opacity-90 mt-2"
                  style={{ backgroundColor: accentColor }}
                >
                  Submit Vehicle Import Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
