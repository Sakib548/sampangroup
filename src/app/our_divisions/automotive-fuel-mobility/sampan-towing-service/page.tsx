import type { Metadata } from "next";
import MobilityHero from "../components/MobilityHero";
import MobilityServiceOverview from "../components/MobilityServiceOverview";
import MobilityPricingRateCard from "../components/MobilityPricingRateCard";
import MobilityLocationAndNearby from "../components/MobilityLocationAndNearby";
import MobilityOnlineRequestForm from "../components/MobilityOnlineRequestForm";

export const metadata: Metadata = {
  title: "Sampan Towing Service | 24/7 Highway Emergency Flatbed Towing",
  description:
    "24/7 emergency flatbed towing and highway vehicle recovery service covering the expressway and surrounding highways in Bangladesh. Damage-free hydraulic tilt beds.",
};

const heroFacts = [
  { value: "24 / 7", label: "Emergency Dispatch" },
  { value: "< 20 Mins", label: "Highway Response Time" },
  { value: "Hydraulic Flatbed", label: "Zero-Damage Towing" },
  { value: "Expressway", label: "Patrol Corridor" },
];

const offeredServices = [
  {
    title: "24/7 Hydraulic Flatbed Emergency Towing",
    description: "Fully hydraulic tilt-bed tow trucks designed for damage-free transportation of luxury cars, low-clearance sedans, SUVs, and EV vehicles.",
    highlights: ["Soft-Strap Wheel Lash Security (Zero Frame Scratch)", "Full Deck Tilt to Ground Level", "All-Weather Emergency Highway Response"],
  },
  {
    title: "Highway Breakdown & Accident Recovery",
    description: "Heavy winch recovery equipment for off-road ditch retrieval, rollover extraction, and multi-vehicle highway accident clearance.",
    highlights: ["10-Ton Hydraulic Winch Pull Capacity", "Police Highway Patrol Clearance Coordination", "Safe Transport to Authorized Workshop / Home"],
  },
  {
    title: "On-Site Jumpstart & Emergency Fuel Delivery",
    description: "Emergency roadside assistance team providing 12V battery jumpstarts, tire inflation, and 5-litre emergency fuel delivery on the highway.",
    highlights: ["Instant Jumpstart Booster Pack", "Emergency Fuel Canister Delivery", "Highway Tire Change Support"],
  },
];

const towingRates = [
  { fuelOrServiceType: "Flatbed Towing (First 5 KM)", unitPriceBDT: "BDT 2,500.00", unitMeasure: "Base Fee (Up to 5 KM)", availability: "In Stock & Ready" as const, notes: "Includes hydraulic loading, wheel lashing, and 5 KM transport." },
  { fuelOrServiceType: "Additional Distance Tariff", unitPriceBDT: "BDT 120.00", unitMeasure: "Per Additional KM", availability: "In Stock & Ready" as const, notes: "Calculated per KM beyond the initial 5 KM base distance." },
  { fuelOrServiceType: "Roadside Jumpstart / Fuel Delivery", unitPriceBDT: "BDT 1,200.00", unitMeasure: "Per Emergency Callout", availability: "Live Available" as const, notes: "On-site battery jumpstart or 5L fuel delivery on highway." },
];

const photoGallery = [
  "/images/concerns/sampan-auto.png",
  "/images/brand/sampanfillingstation.png",
  "/images/projects/sampanmetrosquare.jpg",
  "/images/concerns/sampan-development-ltd.png",
];

const nearbyFacilities = [
  { name: "Express Highway Inn & Resort", category: "Hospitality & Rooms", distance: "Next Door (100m)", link: "/our_divisions/hospitality-highway-travel/express-highway-inn" },
  { name: "Sampan Cafe Metro", category: "Dining & Hydro Wash", distance: "Adjacent (50m)", link: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro" },
  { name: "Sampan Filling Station", category: "24/7 Octane & Diesel", distance: "Same Complex", link: "/our_divisions/automotive-fuel-mobility/sampan-filling-station" },
];

export default function SampanTowingServicePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#1d4ed8] selection:text-white">
      
      {/* 1. Hero Overview — Royal Blue (#1d4ed8) Accent */}
      <MobilityHero
        title="Sampan Towing Service"
        subtitle="24/7 Emergency Highway Flatbed Towing & Recovery"
        divisionName="Automotive, Fuel & Mobility Division"
        statusBadge="Coming Soon — 24/7 Dispatch Hotline"
        statusType="coming-soon"
        description="24/7 emergency flatbed towing and highway vehicle recovery service. Equipped with hydraulic tilt-bed trucks for damage-free transportation of luxury cars, SUVs, and commercial vehicles."
        image="/images/concerns/sampan-auto.png"
        facts={heroFacts}
        accentColor="#1d4ed8"
        badgeColor="#dc2626"
        actionText="Dispatch Tow Truck Now"
      />

      {/* 2. Section 1, 6, 7: Service Offered, Photo Gallery & Hours of Operation */}
      <MobilityServiceOverview
        title="Towing Services Offered & Response Times"
        subtitle="Explore our hydraulic flatbed towing options, roadside emergency assistance, and 24/7 dispatch hotline."
        operatingHours="24 Hours / 7 Days a Week (Emergency Dispatch)"
        liveStatus="24/7 Tow Trucks On Standby"
        services={offeredServices}
        photoGallery={photoGallery}
        bgTheme="divisions-green"
        accentColor="#1d4ed8"
      />

      {/* 3. Section 4: Pricing or Rate Card */}
      <MobilityPricingRateCard
        title="Official Towing Rate Card & Distance Tariff"
        subtitle="Transparent base rate and per-kilometer distance pricing."
        rates={towingRates}
        bgTheme="about-ivory"
        accentColor="#1d4ed8"
      />

      {/* 4. Section 2, 8: Location + Map & "Nearby at this location" Module */}
      <MobilityLocationAndNearby
        title="Patrol Base Location & Highway Network"
        subtitle="Stationed at the Expressway Transit Hub for rapid response to highway breakdown calls."
        concernName="Sampan Towing Service Base"
        stationAddress="Expressway Transit Corridor Patrol Base, Beside Highway Inn, Dhaka, Bangladesh."
        gpsCoordinates="23.7512° N, 90.3845° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.6!2d90.3845!3d23.7512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzA0LjMiTiA5MMKwMjMnMDQuMiJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        nearbyFacilities={nearbyFacilities}
        bgTheme="divisions-green"
        accentColor="#1d4ed8"
      />

      {/* 5. Section 3, 5: Contact/CTA & Live Availability / Online Request */}
      <MobilityOnlineRequestForm
        title="Dispatch Tow Truck & Hotline Operator"
        subtitle="Call our 24/7 hotline operator directly or send us a WhatsApp location drop for immediate towing dispatch."
        concernName="Sampan Towing Service"
        whatsappNumber="+8801929918408"
        phoneHotline="+8801929918408"
        bgTheme="about-ivory"
        accentColor="#1d4ed8"
      />

    </main>
  );
}
