import type { Metadata } from "next";
import MobilityHero from "../components/MobilityHero";
import MobilityServiceOverview from "../components/MobilityServiceOverview";
import MobilityPricingRateCard from "../components/MobilityPricingRateCard";
import MobilityLocationAndNearby from "../components/MobilityLocationAndNearby";
import MobilityOnlineRequestForm from "../components/MobilityOnlineRequestForm";

export const metadata: Metadata = {
  title: "Sampan EV Car Charging Station | Ultra-Fast 120kW DC & AC Chargers",
  description:
    "Ultra-fast 120kW DC fast charging station and Type 2 AC chargers for electric vehicles beside Express Highway Inn. 24/7 plug reservation available.",
};

const heroFacts = [
  { value: "120 kW", label: "DC Fast Charger" },
  { value: "20 Mins", label: "80% Charge Time" },
  { value: "CCS2 & Type 2", label: "Universal Plug" },
  { value: "24 / 7", label: "Station Access" },
];

const offeredServices = [
  {
    title: "120kW Dual-Gun DC Fast Charger",
    description: "Ultra-high speed DC fast charger supplying up to 120kW output. Charge your EV battery from 10% to 80% in just 20 minutes while relaxing at Cafe Metro.",
    highlights: ["Dual CCS2 Guns for Simultaneous Fast Charge", "Dynamic Load Balancing Technology", "Compatible with BYD, MG, Hyundai & Tesla"],
  },
  {
    title: "22kW AC Type 2 Destination Chargers",
    description: "Overnight and long-stop AC charging stations designed for guests staying at Express Highway Inn or dining at Cafe Metro.",
    highlights: ["22kW Three-Phase AC Output", "Universal Type 2 Cable Connectors", "Safe Constant Current Smart Controller"],
  },
  {
    title: "EV Battery Health & Thermal Inspection",
    description: "Complimentary thermal camera scanning and OBD-II EV battery health diagnostic reports provided during your charging session.",
    highlights: ["Cell Voltage Balance Scan", "Coolant Temperature Verification", "Digital Battery Health Report PDF"],
  },
];

const evRates = [
  { fuelOrServiceType: "120kW DC Fast Charge", unitPriceBDT: "BDT 38.00", unitMeasure: "Per kWh", availability: "In Stock & Ready" as const, notes: "Ultra-fast charging rate. Charge 50 kWh battery (~350 km range) for BDT 1,900." },
  { fuelOrServiceType: "22kW AC Type 2 Charge", unitPriceBDT: "BDT 22.00", unitMeasure: "Per kWh", availability: "In Stock & Ready" as const, notes: "Destination charger rate for overnight hotel guests." },
  { fuelOrServiceType: "EV Plug Reservation Fee", unitPriceBDT: "BDT 0.00", unitMeasure: "Free Reservation", availability: "Live Available" as const, notes: "Reserve plug slot up to 30 mins in advance via app or WhatsApp." },
];

const photoGallery = [
  "/images/brand/evc.png",
  "/images/brand/sampanfillingstation.png",
  "/images/projects/sampanmetrosquare.jpg",
  "/images/concerns/sampan-auto.png",
];

const nearbyFacilities = [
  { name: "Express Highway Inn & Resort", category: "Hospitality & Rooms", distance: "Next Door (100m)", link: "/our_divisions/hospitality-highway-travel/express-highway-inn" },
  { name: "Sampan Cafe Metro", category: "Dining & Hydro Wash", distance: "Adjacent (50m)", link: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro" },
  { name: "Sampan Filling Station", category: "24/7 Octane & Diesel", distance: "Same Complex", link: "/our_divisions/automotive-fuel-mobility/sampan-filling-station" },
];

export default function SampanEvCarChargingStationPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#10b981] selection:text-white">
      
      {/* 1. Hero Overview — Electric Green (#10b981) Accent from EV Logo */}
      <MobilityHero
        title="Sampan EV Car Charging Station"
        subtitle="Ultra-Fast 120kW DC Fast Charging & Destination Chargers"
        divisionName="Automotive, Fuel & Mobility Division"
        statusBadge="Coming Soon — App Plug Reservation"
        statusType="coming-soon"
        description="Ultra-fast 120kW DC fast charging station located beside Express Highway Inn. Charge your electric vehicle to 80% in 20 minutes while enjoying dining at Cafe Metro."
        image="/images/brand/evc.png"
        facts={heroFacts}
        accentColor="#10b981"
        badgeColor="#059669"
        actionText="Reserve EV Charger Plug Slot"
      />

      {/* 2. Section 1, 6, 7: Service Offered, Photo Gallery & Hours of Operation */}
      <MobilityServiceOverview
        title="EV Chargers Offered & Station Operations"
        subtitle="Explore our 120kW DC fast chargers, Type 2 AC chargers, and EV battery health inspection."
        operatingHours="24 Hours / 7 Days a Week (Open 365 Days)"
        liveStatus="24/7 EV Chargers Online"
        services={offeredServices}
        photoGallery={photoGallery}
        bgTheme="divisions-green"
        accentColor="#10b981"
      />

      {/* 3. Section 4: Pricing or Rate Card */}
      <MobilityPricingRateCard
        title="Official EV Charging Tariff Card"
        subtitle="Transparent per-kWh charging rates for DC Fast Charging and AC Destination Charging."
        rates={evRates}
        bgTheme="about-ivory"
        accentColor="#10b981"
      />

      {/* 4. Section 2, 8: Location + Map & "Nearby at this location" Module */}
      <MobilityLocationAndNearby
        title="Station Location & Nearby Amenities"
        subtitle="Positioned beside Express Highway Inn and Sampan Cafe Metro."
        concernName="Sampan EV Car Charging Station"
        stationAddress="Expressway Transit Corridor Hub, Beside Highway Inn, Dhaka, Bangladesh."
        gpsCoordinates="23.7512° N, 90.3845° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.6!2d90.3845!3d23.7512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzA0LjMiTiA5MMKwMjMnMDQuMiJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        nearbyFacilities={nearbyFacilities}
        bgTheme="divisions-green"
        accentColor="#10b981"
      />

      {/* 5. Section 3, 5: Contact/CTA & Live Availability / Online Request */}
      <MobilityOnlineRequestForm
        title="Reserve Plug Slot & EV Dispatch Hotline"
        subtitle="Reserve an EV charger slot in advance or contact our 24/7 station operator."
        concernName="Sampan EV Car Charging Station"
        whatsappNumber="+8801929918408"
        phoneHotline="+8801929918408"
        bgTheme="about-ivory"
        accentColor="#10b981"
      />

    </main>
  );
}
