import type { Metadata } from "next";
import MobilityHero from "../components/MobilityHero";
import MobilityServiceOverview from "../components/MobilityServiceOverview";
import MobilityPricingRateCard from "../components/MobilityPricingRateCard";
import MobilityLocationAndNearby from "../components/MobilityLocationAndNearby";
import MobilityOnlineRequestForm from "../components/MobilityOnlineRequestForm";

export const metadata: Metadata = {
  title: "Sampan LPG Filling Station | 24/7 High-Pressure Auto LPG & Gas Refill",
  description:
    "24/7 Auto LPG dispensing station beside Express Highway Inn supplying high-pressure liquefied petroleum gas for vehicles and commercial cylinder refilling.",
};

const heroFacts = [
  { value: "24 / 7", label: "Auto LPG Service" },
  { value: "High Pressure", label: "Safety Dispenser" },
  { value: "BERC Approved", label: "Regulated Tariff" },
  { value: "Highway Hub", label: "Beside Highway Inn" },
];

const offeredServices = [
  {
    title: "High-Pressure Auto LPG Dispensing Nozzles",
    description: "Multi-nozzle high-pressure Auto LPG dispensing station designed for rapid vehicle tank fills with zero pressure drops.",
    highlights: ["Safety Inspected Auto LPG Nozzles", "High-Flow Rate for Commercial Fleet Vans", "Digital Volume & Price Display"],
  },
  {
    title: "Commercial & Domestic Cylinder Refilling",
    description: "12kg and 35kg LPG cylinder refilling counter for hospitality kitchens, restaurants, and residential users.",
    highlights: ["Tare Weight & Gas Quantity Audit", "Leak Testing & Valve Safety Cap", "Bulk Delivery Dispatch Available"],
  },
  {
    title: "LPG Conversion Kit Safety Inspection",
    description: "Complimentary safety leak checks and pressure regulator testing for LPG-converted private cars and commercial taxis.",
    highlights: ["Soap & Hydro-Leak Testing", "Pressure Regulator Calibration", "Safety Certificate Issued"],
  },
];

const lpgRates = [
  { fuelOrServiceType: "Auto LPG (Vehicle Fuel)", unitPriceBDT: "BDT 61.50", unitMeasure: "Per Litre", availability: "In Stock & Ready" as const, notes: "BERC regulated Auto LPG rate. High purity propane/butane mix." },
  { fuelOrServiceType: "12kg LPG Cylinder Refill", unitPriceBDT: "BDT 1,450.00", unitMeasure: "Per 12kg Cylinder", availability: "In Stock & Ready" as const, notes: "Standard domestic & restaurant kitchen cylinder refilling." },
  { fuelOrServiceType: "35kg Commercial LPG Refill", unitPriceBDT: "BDT 4,200.00", unitMeasure: "Per 35kg Cylinder", availability: "Live Available" as const, notes: "Heavy-duty commercial kitchens, hotels, and industrial burners." },
];

const photoGallery = [
  "/images/brand/lpg.png",
  "/images/brand/sampanfillingstation.png",
  "/images/projects/sampanmetrosquare.jpg",
  "/images/concerns/sampan-auto.png",
];

const nearbyFacilities = [
  { name: "Express Highway Inn & Resort", category: "Hospitality & Rooms", distance: "Next Door (100m)", link: "/our_divisions/hospitality-highway-travel/express-highway-inn" },
  { name: "Sampan Cafe Metro", category: "Dining & Hydro Wash", distance: "Adjacent (50m)", link: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro" },
  { name: "Sampan Filling Station", category: "24/7 Octane & Diesel", distance: "Same Complex", link: "/our_divisions/automotive-fuel-mobility/sampan-filling-station" },
];

export default function SampanLpgFillingStationPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#eab308] selection:text-neutral-950">
      
      {/* 1. Hero Overview — Amber/Yellow (#eab308) Accent from LPG Logo */}
      <MobilityHero
        title="Sampan LPG Filling Station"
        subtitle="24/7 High-Pressure Auto LPG & Cylinder Refilling"
        divisionName="Automotive, Fuel & Mobility Division"
        statusBadge="24/7 Open Non-Stop"
        statusType="24-7"
        description="24/7 Auto LPG dispensing station located beside Express Highway Inn. Supplying high-pressure clean Auto LPG for vehicles and commercial cylinder refilling under strict BERC safety standards."
        image="/images/brand/lpg.png"
        facts={heroFacts}
        accentColor="#eab308"
        badgeColor="#b91c1c"
        actionText="Request Bulk LPG Order"
      />

      {/* 2. Section 1, 6, 7: Service Offered, Photo Gallery & Hours of Operation */}
      <MobilityServiceOverview
        title="Auto LPG Services & Station Operations"
        subtitle="Explore our Auto LPG dispensing nozzles, cylinder refilling options, and 24/7 operational status."
        operatingHours="24 Hours / 7 Days a Week (Open 365 Days)"
        liveStatus="24/7 Gas Dispensing Active"
        services={offeredServices}
        photoGallery={photoGallery}
        bgTheme="divisions-green"
        accentColor="#eab308"
      />

      {/* 3. Section 4: Pricing or Rate Card */}
      <MobilityPricingRateCard
        title="BERC Regulated LPG Rate Card"
        subtitle="Official BERC regulated Auto LPG and cylinder refilling rates."
        rates={lpgRates}
        bgTheme="about-ivory"
        accentColor="#eab308"
      />

      {/* 4. Section 2, 8: Location + Map & "Nearby at this location" Module */}
      <MobilityLocationAndNearby
        title="Station Location & Nearby Amenities"
        subtitle="Positioned beside Express Highway Inn, Sampan Cafe Metro, and Sampan Filling Station."
        concernName="Sampan LPG Filling Station"
        stationAddress="Expressway Transit Corridor Hub, Beside Highway Inn, Dhaka, Bangladesh."
        gpsCoordinates="23.7512° N, 90.3845° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.6!2d90.3845!3d23.7512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzA0LjMiTiA5MMKwMjMnMDQuMiJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        nearbyFacilities={nearbyFacilities}
        bgTheme="divisions-green"
        accentColor="#eab308"
      />

      {/* 5. Section 3, 5: Contact/CTA & Live Availability / Online Request */}
      <MobilityOnlineRequestForm
        title="Online Request & Cylinder Delivery Orders"
        subtitle="Order bulk LPG cylinders for commercial kitchens or call our 24/7 hotline operator."
        concernName="Sampan LPG Filling Station"
        whatsappNumber="+8801929918408"
        phoneHotline="+8801929918408"
        bgTheme="about-ivory"
        accentColor="#eab308"
      />

    </main>
  );
}
