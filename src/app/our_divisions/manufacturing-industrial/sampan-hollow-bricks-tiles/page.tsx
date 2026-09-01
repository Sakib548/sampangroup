import type { Metadata } from "next";
import ManufacturingHero from "../components/ManufacturingHero";
import IndustrialProductCatalog from "../components/IndustrialProductCatalog";
import FactorySpecsAndCapacity from "../components/FactorySpecsAndCapacity";
import CertificationsAndQuality from "../components/CertificationsAndQuality";
import B2BQuoteEnquiryForm from "../components/B2BQuoteEnquiryForm";
import IndustrialLocationNote from "../components/IndustrialLocationNote";

export const metadata: Metadata = {
  title: "Sampan Hollow Bricks & Tiles | Eco-Friendly Building Materials Manufacturer",
  description:
    "Automated eco-friendly hollow concrete block, paving brick, and ceramic tile manufacturing plant supplying high-compressive strength building materials across Bangladesh.",
};

const heroFacts = [
  { value: "50,000 Units", label: "Daily Output" },
  { value: "BSTI Certified", label: "Quality Grade" },
  { value: "35% Thermal", label: "Insulation Saving" },
  { value: "Eco Green", label: "Carbon Reduction" },
];

const productRange = [
  {
    id: "shbt-1",
    name: "8-Inch Standard Hollow Concrete Block",
    category: "Hollow Concrete Blocks",
    dimensions: "390 x 190 x 190 mm",
    weightOrVolume: "14.5 kg / Block",
    materialGrade: "Compressive Strength > 10 MPa",
    moq: "2,000 Blocks",
    description: "High-density load-bearing hollow concrete block designed for exterior perimeter walls and soundproof partition walls.",
    highlights: ["35% Reduction in Building Thermal Transfer", "Fire Resistance Rating > 4 Hours", "Zero Clay Burning (100% Eco-Friendly)"],
  },
  {
    id: "shbt-2",
    name: "6-Inch Lightweight Partition Hollow Block",
    category: "Hollow Concrete Blocks",
    dimensions: "390 x 140 x 190 mm",
    weightOrVolume: "11.2 kg / Block",
    materialGrade: "Compressive Strength > 8.5 MPa",
    moq: "3,000 Blocks",
    description: "Precision-molded interior wall block offering fast mortar laying and low dead load for multi-storey high-rises.",
    highlights: ["Reduces Structural Dead Load by 30%", "Uniform Mortar Keying Grooves", "Smooth Surface Finish Ready for Plaster"],
  },
  {
    id: "shbt-3",
    name: "Heavy-Duty Interlocking Paving Bricks",
    category: "Paving Bricks & Pavers",
    dimensions: "200 x 100 x 80 mm",
    weightOrVolume: "3.8 kg / Block",
    materialGrade: "Compressive Strength > 35 MPa",
    moq: "5,000 Pieces",
    description: "High-traffic interlocking concrete pavers engineered for industrial driveways, parking lots, and municipal walkways.",
    highlights: ["Extreme Abrasion & Skid Resistance", "UV Resistant Color Pigmentation", "Supports Heavy Truck Axle Loads"],
  },
  {
    id: "shbt-4",
    name: "Architectural Ceramic Facing Tiles",
    category: "Wall & Cladding Tiles",
    dimensions: "240 x 60 x 12 mm",
    weightOrVolume: "0.35 kg / Tile",
    materialGrade: "Water Absorption < 3%",
    moq: "1,000 Sq Ft",
    description: "Weatherproof terracotta and glazed ceramic exterior wall tiles providing timeless architectural facade aesthetics.",
    highlights: ["Weatherproof & Acid Rain Resistant", "Zero Fading under UV Sunlight", "Thermal Expansion Compatible"],
  },
];

const capacityStats = [
  { value: "50,000", label: "Daily Block Output", metric: "Blocks / Day" },
  { value: "100%", label: "German Technology", metric: "Automated Press" },
  { value: "> 10 MPa", label: "Compressive Strength", metric: "BSTI Grade A" },
  { value: "0% Clay", label: "Topsoil Preservation", metric: "Eco Certified" },
];

const factoryPhotos = [
  "/images/concerns/sampan-development-ltd.png",
  "/images/projects/sampanmetrosquare.jpg",
  "/images/concerns/sampan-auto.png",
  "/images/brand/sampanhollowbricksandtiles.png",
];

const clientList = [
  { name: "Sampan Development Ltd", category: "Real Estate & Infrastructure" },
  { name: "RAJUK Approved Contractors", category: "Urban Infrastructure" },
  { name: "Expressway Transit Hubs", category: "Highway Paving" },
  { name: "National Housing Authority", category: "Public Infrastructure" },
];

const certifications = [
  {
    title: "BSTI Quality Mark & Standard Certificate",
    issuingBody: "Bangladesh Standards and Testing Institution",
    referenceNo: "BSTI/CE/2024/9918",
    standardDetails: "Verified compliance with BDS 1258 standards for hollow concrete masonry units.",
  },
  {
    title: "ISO 9001:2015 Quality Management System",
    issuingBody: "International Organization for Standardization",
    referenceNo: "ISO-9001/QMS-88120",
    standardDetails: "Certified quality management across automated raw material batching and curing.",
  },
  {
    title: "Green Building Eco-Friendly Accreditation",
    issuingBody: "Ministry of Environment & Forests",
    referenceNo: "MOEF/GREEN-BUILD/2025",
    standardDetails: "Certified 0% topsoil clay usage, preventing agricultural land degradation.",
  },
];

const logisticsCorridors = [
  { corridor: "Dhaka-Mymensingh Highway", distance: "1.5 km", travelTime: "3 Mins" },
  { corridor: "Expressway Freight Corridor", distance: "4.0 km", travelTime: "6 Mins" },
  { corridor: "Dhaka Ring Road Access", distance: "18 km", travelTime: "20 Mins" },
];

export default function SampanHollowBricksTilesPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#991b1b] selection:text-white">
      
      {/* 1. Hero Overview — Brick Red (#991b1b) Accent from SHBT Logo */}
      <ManufacturingHero
        title="Sampan Hollow Bricks & Tiles"
        subtitle="Eco-Friendly Building Materials & Automated Concrete Block Plant"
        divisionName="Manufacturing & Industrial Division"
        statusBadge="Active Operational Plant"
        statusType="active"
        description="Automated manufacturing plant producing high-compressive strength hollow concrete blocks, interlocking paving bricks, and ceramic facing tiles engineered for eco-friendly green building construction."
        image="/images/brand/sampanhollowbricksandtiles.png"
        facts={heroFacts}
        accentColor="#991b1b"
        badgeColor="#991b1b"
      />

      {/* 2. Section 2: Product Range */}
      <IndustrialProductCatalog
        title="Eco Building Materials Product Range"
        subtitle="Explore our hollow concrete block sizes, interlocking pavers, and technical strength grades."
        products={productRange}
        bgTheme="divisions-green"
        accentColor="#991b1b"
      />

      {/* 3. Section 3 & 9: B2B Quote Enquiry Form & Downloadable Spec Sheet */}
      <B2BQuoteEnquiryForm
        title="Request B2B Wholesale Pricing & Spec Sheets"
        subtitle="Get direct factory wholesale pricing, bulk delivery schedules, or download the full product spec sheet PDF."
        concernName="Sampan Hollow Bricks & Tiles"
        catalogDownloadUrl="#"
        bgTheme="about-ivory"
        accentColor="#991b1b"
      />

      {/* 4. Section 4: Certifications / Quality Standards */}
      <CertificationsAndQuality
        title="BSTI & ISO Quality Certifications"
        subtitle="Every batch undergoes rigorous compressive strength and water absorption testing."
        certifications={certifications}
        bgTheme="divisions-green"
        accentColor="#991b1b"
      />

      {/* 5. Section 5, 6, 7, 10: Capacity Stats, Video Production Line, Photos & Client List */}
      <FactorySpecsAndCapacity
        title="Production Capacity, Video Footage & Client Roster"
        subtitle="High-output German block pressing technology delivering 50,000 units daily for major construction projects."
        stats={capacityStats}
        factoryPhotos={factoryPhotos}
        clientList={clientList}
        productionVideoTitle="Automated German Block Pressing & Curing Video"
        productionVideoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        bgTheme="about-ivory"
        accentColor="#991b1b"
      />

      {/* 6. Section 8: "Located At" Note & Logistical Map */}
      <IndustrialLocationNote
        title="Plant Location & Delivery Access"
        subtitle="Located at Sampan Industrial Park in Mawna for fast freight dispatch across Bangladesh."
        concernName="Sampan Hollow Bricks & Tiles"
        factoryAddress="Sampan Industrial Park, Mawna Industrial Zone, Gazipur, Dhaka, Bangladesh."
        gpsCoordinates="24.2312° N, 90.3954° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.6!2d90.3954!3d24.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEzJzUyLjMiTiA5MMKwMjMnNDMuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        logisticsCorridors={logisticsCorridors}
        bgTheme="divisions-green"
        accentColor="#991b1b"
      />

    </main>
  );
}
