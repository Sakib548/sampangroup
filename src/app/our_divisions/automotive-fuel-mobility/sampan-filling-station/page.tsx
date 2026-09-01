import type { Metadata } from "next";
import MobilityHero from "../components/MobilityHero";
import MobilityServiceOverview from "../components/MobilityServiceOverview";
import MobilityPricingRateCard from "../components/MobilityPricingRateCard";
import MobilityLocationAndNearby from "../components/MobilityLocationAndNearby";
import MobilityOnlineRequestForm from "../components/MobilityOnlineRequestForm";

export const metadata: Metadata = {
  title: "Sampan Filling Station | 24/7 Octane, Diesel & Mobil Lubricants",
  description:
    "24/7 fuel station beside Express Highway Inn supplying 100% calibrated Octane 95, Diesel, Mobil lubricants, and hydro vehicle washing.",
};

const heroFacts = [
  { value: "24 / 7", label: "Non-Stop Service" },
  { value: "100% Calibrated", label: "Digital Fuel Nozzles" },
  { value: "Octane 95 & Diesel", label: "Govt Grade Fuel" },
  { value: "Mobil 1 Bay", label: "Lube Change" },
];

const offeredServices = [
  {
    title: "100% Calibrated Octane 95 & Diesel Nozzles",
    description: "Digital flow-metered fuel dispensers calibrated weekly for exact volume accuracy. Zero adulteration guarantee.",
    highlights: ["Government Regulated Fuel Quality", "Digital Metered Accuracy", "High-Flow Diesel Nozzles for Commercial Trucks"],
  },
  {
    title: "Mobil 1 Lubricants & Express Oil Change Bay",
    description: "Dedicated lube bay offering genuine Mobil 1 synthetic engine oils, filter replacement, and tire pressure inflation.",
    highlights: ["Official Mobil Lubricants Distributor", "Free 10-Point Fluid Inspection", "Fast 15-Minute Service Time"],
  },
  {
    title: "High-Pressure Hydro Car Wash",
    description: "Deep underbody hydro washing, foam shampooing, and interior vacuum cleaning for long-distance highway travelers.",
    highlights: ["High-Pressure Underbody Wash", "Biodegradable Foam Shampoo", "24/7 Wash Bay Access"],
  },
];

const fuelRates = [
  { fuelOrServiceType: "Octane 95 (Premium)", unitPriceBDT: "BDT 125.00", unitMeasure: "Per Litre", availability: "In Stock & Ready" as const, notes: "Government regulated BPC Octane rate. 100% pure grade." },
  { fuelOrServiceType: "Diesel (Standard Highway)", unitPriceBDT: "BDT 105.50", unitMeasure: "Per Litre", availability: "In Stock & Ready" as const, notes: "High-flow nozzles for passenger cars, buses, and heavy trucks." },
  { fuelOrServiceType: "Mobil 1 Synthetic Oil Change", unitPriceBDT: "BDT 5,200.00", unitMeasure: "Package (4L + Filter)", availability: "Live Available" as const, notes: "Includes Mobil 1 0W-20 / 5W-30 oil, genuine filter, and labor." },
];

const photoGallery = [
  "/images/brand/sampanfillingstation.png",
  "/images/projects/sampanmetrosquare.jpg",
  "/images/concerns/sampan-auto.png",
  "/images/concerns/sampan-development-ltd.png",
];

const nearbyFacilities = [
  { name: "Express Highway Inn & Resort", category: "Hospitality & Rooms", distance: "Next Door (100m)", link: "/our_divisions/hospitality-highway-travel/express-highway-inn" },
  { name: "Sampan Cafe Metro", category: "Dining & Hydro Wash", distance: "Adjacent (50m)", link: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro" },
  { name: "Sampan LPG Filling Station", category: "Auto LPG Refill", distance: "Same Complex", link: "/our_divisions/automotive-fuel-mobility/sampan-lpg-filling-station" },
];

export default function SampanFillingStationPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#dc2626] selection:text-white">
      
      {/* 1. Hero Overview — Red (#dc2626) & Green (#047857) Accent from Logo */}
      <MobilityHero
        title="Sampan Filling Station"
        subtitle="24/7 Octane 95, Diesel & Mobil Lubricants Service"
        divisionName="Automotive, Fuel & Mobility Division"
        statusBadge="24/7 Open Non-Stop"
        statusType="24-7"
        description="24/7 digital-metered fuel station located beside Express Highway Inn. Supplying government-regulated Octane 95, Diesel, Mobil synthetic lubricants, and hydro vehicle washing."
        image="/images/brand/sampanfillingstation.png"
        facts={heroFacts}
        accentColor="#dc2626"
        badgeColor="#047857"
        actionText="Request Bulk Tanker Order"
      />

      {/* 2. Section 1, 6, 7: Service Offered, Photo Gallery & Hours of Operation */}
      <MobilityServiceOverview
        title="Fuel Services Offered & Station Operations"
        subtitle="Explore our fuel dispensing options, Mobil lube bays, and 24/7 operational status."
        operatingHours="24 Hours / 7 Days a Week (Open 365 Days)"
        liveStatus="24/7 Pumps Active"
        services={offeredServices}
        photoGallery={photoGallery}
        bgTheme="divisions-green"
        accentColor="#dc2626"
      />

      {/* 3. Section 4: Pricing or Rate Card */}
      <MobilityPricingRateCard
        title="Official Fuel & Service Rate Card"
        subtitle="Government regulated BPC fuel prices updated live."
        rates={fuelRates}
        bgTheme="about-ivory"
        accentColor="#dc2626"
      />

      {/* 4. Section 2, 8: Location + Map & "Nearby at this location" Module */}
      <MobilityLocationAndNearby
        title="Station Location & Nearby Amenities"
        subtitle="Positioned right beside Express Highway Inn and Sampan Cafe Metro."
        concernName="Sampan Filling Station"
        stationAddress="Expressway Transit Corridor Hub, Beside Highway Inn, Dhaka, Bangladesh."
        gpsCoordinates="23.7512° N, 90.3845° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.6!2d90.3845!3d23.7512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzA0LjMiTiA5MMKwMjMnMDQuMiJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        nearbyFacilities={nearbyFacilities}
        bgTheme="divisions-green"
        accentColor="#dc2626"
      />

      {/* 5. Section 3, 5: Contact/CTA & Live Availability / Online Request */}
      <MobilityOnlineRequestForm
        title="Online Service Request & Bulk Fuel Orders"
        subtitle="Order bulk fuel tankers for corporate fleets or contact our 24/7 hotline operator."
        concernName="Sampan Filling Station"
        whatsappNumber="+8801929918408"
        phoneHotline="+8801929918408"
        bgTheme="about-ivory"
        accentColor="#dc2626"
      />

    </main>
  );
}
