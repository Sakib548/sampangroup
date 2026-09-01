import type { Metadata } from "next";
import MobilityHero from "../components/MobilityHero";
import MobilityServiceOverview from "../components/MobilityServiceOverview";
import AutoInventoryBrowser from "../components/AutoInventoryBrowser";
import MobilityLocationAndNearby from "../components/MobilityLocationAndNearby";
import MobilityOnlineRequestForm from "../components/MobilityOnlineRequestForm";

export const metadata: Metadata = {
  title: "Sampan Auto | Japanese Recondition Car Imports & Genuine Parts",
  description:
    "Official Japanese recondition vehicle importer and genuine spare parts dealer. Browse Toyota, Nissan, and Honda inventory, order Japan auction pre-orders, and visit adjacent Sampan Cafe Metro.",
};

const heroFacts = [
  { value: "Grade 4.5+", label: "Auction Standard" },
  { value: "50+ Cars", label: "Showroom Inventory" },
  { value: "100% Genuine", label: "Japanese Spare Parts" },
  { value: "Expressway", label: "Showroom Hub" },
];

const offeredServices = [
  {
    title: "Direct Japanese Auction Pre-Orders",
    description: "Access live USS Tokyo & CAA Japan auction sheets. Transparent bidding, verified auction sheets, and direct shipping to Chittagong Port.",
    highlights: ["Verified Auction Sheet Inspection", "C&F Clearing & Registration", "6 Months Warranty Support"],
  },
  {
    title: "Ready Showroom Vehicle Inventory",
    description: "Browse high-spec Toyota Harrier, Prado, Noah, Premio, and Honda Grace ready for immediate delivery in our Expressway showroom.",
    highlights: ["Ready Sub-Kabala Tax Token & Smart Card", "Zero Mileage In-Country Drive", "Complimentary First Service"],
  },
  {
    title: "Genuine OEM Japanese Spare Parts",
    description: "Authorized importer of genuine Toyota, Nissan, Honda OEM filters, brake pads, suspension bushings, and Mobil lubricants.",
    highlights: ["100% Genuine Imported OEM Parts", "Express Delivery to Workshops", "Wholesale & Retail Counter"],
  },
];

const vehicleList = [
  {
    id: "v-1",
    name: "Toyota Harrier Z Leather Package 2021",
    make: "Toyota",
    modelYear: "2021",
    priceBDT: "BDT 88 Lacs",
    importStatus: "Ready in Showroom" as const,
    auctionGrade: "4.5 / A",
    mileageKm: "28,000 km",
    engineCc: "2000 cc Hybrid",
    fuelType: "Octane Hybrid",
    image: "/images/concerns/sampan-auto.png",
    highlights: ["Panoramic Sunroof & JBL Audio", "Modellista Full Body Aerokit", "360-Degree Surround Camera"],
  },
  {
    id: "v-2",
    name: "Toyota Land Cruiser Prado TX-L 2020",
    make: "Toyota",
    modelYear: "2020",
    priceBDT: "BDT 1.65 Crore",
    importStatus: "Ready in Showroom" as const,
    auctionGrade: "4.5 / B",
    mileageKm: "34,000 km",
    engineCc: "2700 cc Petrol",
    fuelType: "Octane Petrol",
    image: "/images/projects/sampanmetrosquare.jpg",
    highlights: ["7 Seater Beige Leather Interior", "Sunroof & Roof Railing", "4WD Low/High Transfer Case"],
  },
  {
    id: "v-3",
    name: "Toyota Noah Hybrid WxB 2022",
    make: "Toyota",
    modelYear: "2022",
    priceBDT: "BDT 52 Lacs",
    importStatus: "In-Transit (Ship)" as const,
    auctionGrade: "5.0 / A",
    mileageKm: "12,000 km",
    engineCc: "1800 cc Hybrid",
    fuelType: "Octane Hybrid",
    image: "/images/concerns/sampan-development-ltd.png",
    highlights: ["Dual Power Sliding Doors", "Dual Air Conditioning Units", "Safety Sense Collision Avoidance"],
  },
];

const partsList = [
  { id: "p-1", partName: "Toyota Genuine Oil Filter (90915-YZZD2)", category: "Filters", compatibility: "Harrier, Premio, Allion, RAV4", priceBDT: "BDT 1,250", stockStatus: "In Stock" },
  { id: "p-2", partName: "Toyota OEM Front Brake Pads", category: "Braking", compatibility: "Prado 150, Harrier XU60", priceBDT: "BDT 8,500", stockStatus: "In Stock" },
  { id: "p-3", partName: "Mobil 1 Advanced Fuel Economy 0W-20 (4L)", category: "Lubricants", compatibility: "All Hybrid & Japanese Petrol Engines", priceBDT: "BDT 5,800", stockStatus: "In Stock" },
  { id: "p-4", partName: "Denso Iridium Power Spark Plugs (Set of 4)", category: "Ignition", compatibility: "Toyota & Honda i-VTEC", priceBDT: "BDT 4,400", stockStatus: "In Stock" },
];

const photoGallery = [
  "/images/concerns/sampan-auto.png",
  "/images/projects/sampanmetrosquare.jpg",
  "/images/concerns/sampan-development-ltd.png",
  "/images/brand/sampanauto.png",
];

const nearbyFacilities = [
  { name: "Sampan Cafe Metro", category: "Dining & Hydro Wash", distance: "Adjacent (50m)", link: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro" },
  { name: "Sampan Filling Station", category: "24/7 Octane & Diesel", distance: "Next Door (100m)", link: "/our_divisions/automotive-fuel-mobility/sampan-filling-station" },
  { name: "Express Highway Inn", category: "Hotel & Lodging", distance: "Same Complex", link: "/our_divisions/hospitality-highway-travel/express-highway-inn" },
];

export default function SampanAutoPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#4c2a85] selection:text-white">
      
      {/* 1. Hero Overview — Purple (#4c2a85) Accent from Logo */}
      <MobilityHero
        title="Sampan Auto"
        subtitle="Japanese Vehicle Imports, Recondition Cars & Genuine Parts"
        divisionName="Automotive, Fuel & Mobility Division"
        statusBadge="Active Showroom Hub"
        statusType="active"
        description="Official importer of Japanese recondition vehicles, luxury SUVs, sedans, and genuine Toyota/Nissan spare parts. Offering auction sheet transparency and direct bidding."
        image="/images/concerns/sampan-auto.png"
        facts={heroFacts}
        accentColor="#4c2a85"
        badgeColor="#b91c1c"
        actionText="Browse Vehicle Inventory"
      />

      {/* 2. Section 1, 6, 7: What's Offered, Photo Gallery & Hours of Operation */}
      <MobilityServiceOverview
        title="What We Offer & Showroom Hours"
        subtitle="Browse our Japanese import services, certified auction grades, and genuine OEM parts counter."
        operatingHours="Sat – Thu: 09:30 AM – 08:30 PM (Fri: 03:00 PM – 08:30 PM)"
        liveStatus="Showroom Open"
        services={offeredServices}
        photoGallery={photoGallery}
        bgTheme="divisions-green"
        accentColor="#4c2a85"
      />

      {/* 3. Section 4, 5, 8, 9, 10: Vehicle Inventory Browser, Parts Catalog, Import Form & Nearby Link */}
      <AutoInventoryBrowser
        vehicles={vehicleList}
        parts={partsList}
        accentColor="#4c2a85"
      />

      {/* 4. Section 2, 10: Location + Map & "Nearby" Link to Sampan Cafe Metro */}
      <MobilityLocationAndNearby
        title="Showroom Location & Transit Amenities"
        subtitle="Located at the Expressway Transit Corridor right beside Sampan Cafe Metro and Highway Inn."
        concernName="Sampan Auto Showroom"
        stationAddress="Expressway Transit Hub Exit, Dhaka, Bangladesh."
        gpsCoordinates="23.7512° N, 90.3845° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.6!2d90.3845!3d23.7512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzA0LjMiTiA5MMKwMjMnMDQuMiJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        nearbyFacilities={nearbyFacilities}
        bgTheme="divisions-green"
        accentColor="#4c2a85"
      />

      {/* 5. Section 3: Contact / CTA — Call or WhatsApp */}
      <MobilityOnlineRequestForm
        title="Contact Sales Desk or Request Import Quote"
        subtitle="Call our sales team directly or send us a message on WhatsApp for instant auction sheet verification."
        concernName="Sampan Auto"
        whatsappNumber="+8801929918408"
        phoneHotline="+8801929918408"
        bgTheme="about-ivory"
        accentColor="#4c2a85"
      />

    </main>
  );
}
