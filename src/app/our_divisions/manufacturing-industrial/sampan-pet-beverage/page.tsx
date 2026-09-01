import type { Metadata } from "next";
import ManufacturingHero from "../components/ManufacturingHero";
import IndustrialProductCatalog from "../components/IndustrialProductCatalog";
import FactorySpecsAndCapacity from "../components/FactorySpecsAndCapacity";
import CertificationsAndQuality from "../components/CertificationsAndQuality";
import B2BQuoteEnquiryForm from "../components/B2BQuoteEnquiryForm";
import IndustrialLocationNote from "../components/IndustrialLocationNote";

export const metadata: Metadata = {
  title: "Sampan Pet & Beverage | Automated PET Preforms & Beverage Bottling",
  description:
    "High-speed automated PET bottle preform injection molding, purified mineral water bottling, and beverage packaging plant supplying food-grade packaging across Bangladesh.",
};

const heroFacts = [
  { value: "100,000 Bottling", label: "Daily Output" },
  { value: "ISO 22000", label: "Food Safety Grade" },
  { value: "Food Grade", label: "Virgin PET Resin" },
  { value: "High-Speed", label: "Blow Molding Line" },
];

const productRange = [
  {
    id: "spb-1",
    name: "500ml Mineral Water PET Preforms & Bottles",
    category: "PET Preforms & Bottles",
    dimensions: "28mm PCO 1881 Neck Finish",
    weightOrVolume: "13.5g Preform Weight",
    materialGrade: "100% Virgin Food Grade PET Resin",
    moq: "10,000 Units",
    description: "High-clarity 500ml PET bottle preforms designed for high-speed stretch blow molding with pressure resistance.",
    highlights: ["Ultra-Clear Crystal Clarity", "Zero BPA & FDA Food Contact Approved", "Uniform Wall Thickness Distribution"],
  },
  {
    id: "spb-2",
    name: "250ml & 500ml Carbonated Soft Drink (CSD) Bottles",
    category: "Carbonated Beverage Packaging",
    dimensions: "28mm 1881 Short Neck",
    weightOrVolume: "18.0g Heavy Preform Weight",
    materialGrade: "High CO2 Barrier PET",
    moq: "10,000 Units",
    description: "Pressure-tested PET bottle containers engineered to withstand carbonation pressure without base stress cracking.",
    highlights: ["Resists Up to 4.5 Volumes of CO2 Pressure", "Petaloid Base Bottom Design for Stability", "High Gas Barrier Coating"],
  },
  {
    id: "spb-3",
    name: "2-Litre & 5-Litre Bulk Purified Water Jugs",
    category: "Bulk Packaging Containers",
    dimensions: "38mm Threaded Neck",
    weightOrVolume: "42.0g Heavy Duty Preform",
    materialGrade: "High Toughness PET",
    moq: "5,000 Units",
    description: "Heavy-duty bulk water containers with ergonomic handle grips for home and commercial dispenser distribution.",
    highlights: ["Drop-Impact Resistant Base", "Includes Tamper-Evident Cap Seals", "100% Recyclable Polyethylene Terephthalate"],
  },
  {
    id: "spb-4",
    name: "Sampan Natural Purified Mineral Water",
    category: "Bottled Beverage",
    dimensions: "500ml / 1.5L / 2L Bottles",
    weightOrVolume: "Purified Ozonated Water",
    materialGrade: "BSTI Grade A Mineral Spec",
    moq: "100 Cases",
    description: "Micro-filtered, reverse osmosis purified, and ozonated bottled mineral water for retail and hospitality distribution.",
    highlights: ["Multi-Stage Reverse Osmosis & UV Filtration", "Balanced Essential Mineral Profile", "Bottled Under ISO 22000 Cleanroom Conditions"],
  },
];

const capacityStats = [
  { value: "100,000", label: "Daily Bottling Capacity", metric: "Bottles / Day" },
  { value: "99.9%", label: "Pure Cleanroom Grade", metric: "Class 10,000 Cleanroom" },
  { value: "ISO 22000", label: "Food Safety Management", metric: "Certified Plant" },
  { value: "100%", label: "Food Grade Virgin PET", metric: "BPA Free" },
];

const factoryPhotos = [
  "/images/brand/petandbeverage.png",
  "/images/concerns/sampan-auto.png",
  "/images/projects/sampanmetrosquare.jpg",
  "/images/concerns/sampan-development-ltd.png",
];

const clientList = [
  { name: "Express Highway Inn & Resorts", category: "Hospitality Bottled Water" },
  { name: "Sampan Cafe Metro Outlets", category: "Retail Beverage Supply" },
  { name: "Super Shop & Grocery Networks", category: "Retail FMCG Distribution" },
  { name: "Regional Beverage Bottlers", category: "PET Preform Supply" },
];

const certifications = [
  {
    title: "ISO 22000:2018 Food Safety Management System",
    issuingBody: "International Food Safety Certification",
    referenceNo: "ISO-22000/FSMS-9941",
    standardDetails: "Certified cleanroom bottling operations, HACCP hazard control, and ozonated water purification.",
  },
  {
    title: "BSTI Certified Purified Drinking Water License",
    issuingBody: "Bangladesh Standards and Testing Institution",
    referenceNo: "BSTI/FOOD/WATER-4412",
    standardDetails: "100% compliance with national drinking water quality standards and chemical purity parameters.",
  },
  {
    title: "US-FDA Approved Virgin PET Resin Certification",
    issuingBody: "Food & Drug Administration Compliance",
    referenceNo: "FDA/PET-RESIN/2024/09",
    standardDetails: "Certified non-toxic, BPA-free, 100% virgin food contact polymer resin.",
  },
];

const logisticsCorridors = [
  { corridor: "Dhaka-Mymensingh Highway Expressway", distance: "1.5 km", travelTime: "3 Mins" },
  { corridor: "Expressway Freight Interchange", distance: "4.0 km", travelTime: "6 Mins" },
  { corridor: "Dhaka Commercial Distribution Hubs", distance: "22 km", travelTime: "25 Mins" },
];

export default function SampanPetBeveragePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#ea580c] selection:text-white">
      
      {/* 1. Hero Overview — Orange (#ea580c) & Chocolate Brown (#582e14) Accent from Logo */}
      <ManufacturingHero
        title="Sampan Pet & Beverage"
        subtitle="Automated PET Bottle Preforms & Beverage Bottling Plant"
        divisionName="Manufacturing & Industrial Division"
        statusBadge="Active Bottling Line"
        statusType="active"
        description="High-speed automated plant producing food-grade virgin PET bottle preforms, purified mineral water bottling, and beverage packaging under ISO 22000 cleanroom standards."
        image="/images/brand/petandbeverage.png"
        facts={heroFacts}
        accentColor="#ea580c"
        badgeColor="#ea580c"
      />

      {/* 2. Section 2: Product Range */}
      <IndustrialProductCatalog
        title="PET Preforms, Bottling & Beverage Range"
        subtitle="Explore our food-grade PET preforms, mineral water bottling sizes, and custom packaging specifications."
        products={productRange}
        bgTheme="divisions-green"
        accentColor="#ea580c"
      />

      {/* 3. Section 3 & 9: B2B Quote Enquiry Form & Downloadable Spec Sheet */}
      <B2BQuoteEnquiryForm
        title="Request B2B Wholesale Pricing & Spec Sheets"
        subtitle="Request wholesale preform pricing, custom blow-molding specifications, or download product catalog PDF."
        concernName="Sampan Pet & Beverage"
        catalogDownloadUrl="#"
        bgTheme="about-ivory"
        accentColor="#ea580c"
      />

      {/* 4. Section 4: Certifications / Quality Standards */}
      <CertificationsAndQuality
        title="ISO 22000 & BSTI Food Safety Certifications"
        subtitle="Bottled under Class 10,000 cleanroom standards with strict ozone and UV sterilizing procedures."
        certifications={certifications}
        bgTheme="divisions-green"
        accentColor="#ea580c"
      />

      {/* 5. Section 5, 6, 7, 10: Capacity Stats, Video Production Line, Photos & Client List */}
      <FactorySpecsAndCapacity
        title="Bottling Line Capacity, Video & Client Roster"
        subtitle="Automated high-speed blow molding and bottling lines delivering 100,000 units daily."
        stats={capacityStats}
        factoryPhotos={factoryPhotos}
        clientList={clientList}
        productionVideoTitle="Automated PET Preform Injection & Bottling Video"
        productionVideoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        bgTheme="about-ivory"
        accentColor="#ea580c"
      />

      {/* 6. Section 8: "Located At" Note & Logistical Map */}
      <IndustrialLocationNote
        title="Plant Location & Logistics"
        subtitle="Located at Sampan Industrial Park in Mawna with direct highway links for nationwide FMCG distribution."
        concernName="Sampan Pet & Beverage"
        factoryAddress="Sampan Industrial Park, Mawna Industrial Belt, Gazipur, Dhaka, Bangladesh."
        gpsCoordinates="24.2312° N, 90.3954° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.6!2d90.3954!3d24.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEzJzUyLjMiTiA5MMKwMjMnNDMuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        logisticsCorridors={logisticsCorridors}
        bgTheme="divisions-green"
        accentColor="#ea580c"
      />

    </main>
  );
}
