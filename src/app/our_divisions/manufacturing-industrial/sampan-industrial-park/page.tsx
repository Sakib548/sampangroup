import type { Metadata } from "next";
import ManufacturingHero from "../components/ManufacturingHero";
import IndustrialParkOverview from "../components/IndustrialParkOverview";
import B2BQuoteEnquiryForm from "../components/B2BQuoteEnquiryForm";
import IndustrialLocationNote from "../components/IndustrialLocationNote";

export const metadata: Metadata = {
  title: "Sampan Industrial Park | Master Planned Industrial Zone & Plot Leasing",
  description:
    "Master-planned industrial park in Mawna offering serviced factory plots, 33/11kV power substation access, central ETP, and resident manufacturing hubs.",
};

const heroFacts = [
  { value: "50+ Acres", label: "Master Footprint" },
  { value: "33/11 kV", label: "Dedicated Substation" },
  { value: "60 ft", label: "Arterial Freight Road" },
  { value: "Mawna Belt", label: "Industrial Hub" },
];

const residentManufacturers = [
  { name: "Sampan Hollow Bricks & Tiles Plant", sector: "Eco Building Materials", allocatedArea: "12 Acres", status: "Operational Anchor" },
  { name: "Sampan Pet & Beverage Packaging Plant", sector: "PET Preforms & Bottling", allocatedArea: "8 Acres", status: "Operational Anchor" },
  { name: "Sampan Agro Processing Unit", sector: "Fresh Food Packaging", allocatedArea: "6 Acres", status: "Planned Expansion" },
];

const industrialPlots = [
  { plotNo: "Plot A-01", sizeKatha: "30 Katha (0.5 Acre)", zoneType: "Heavy Industrial / ETP Linked", powerCapacity: "500 kVA Substation", roadFrontage: "60 ft Main Road", status: "Available" as const },
  { plotNo: "Plot A-02", sizeKatha: "45 Katha (0.75 Acre)", zoneType: "Light Manufacturing & Assembly", powerCapacity: "750 kVA Substation", roadFrontage: "40 ft Side Access", status: "Available" as const },
  { plotNo: "Plot B-01", sizeKatha: "60 Katha (1.0 Acre)", zoneType: "Warehousing & Logistics Hub", powerCapacity: "1,000 kVA Substation", roadFrontage: "60 ft Main Road", status: "Reserved" as const },
  { plotNo: "Plot B-02", sizeKatha: "30 Katha (0.5 Acre)", zoneType: "Food Processing & Bottling", powerCapacity: "500 kVA Substation", roadFrontage: "40 ft Side Access", status: "Available" as const },
];

const logisticsCorridors = [
  { corridor: "Dhaka-Mymensingh Highway Expressway", distance: "1.5 km", travelTime: "3 Mins" },
  { corridor: "Mawna Industrial Junction Interchange", distance: "3.0 km", travelTime: "5 Mins" },
  { corridor: "Dhaka Outer Ring Freight Highway", distance: "18 km", travelTime: "20 Mins" },
];

export default function SampanIndustrialParkPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#047857] selection:text-white">
      
      {/* 1. Hero Overview — Forest Green (#047857) Accent from Gear Logo */}
      <ManufacturingHero
        title="Sampan Industrial Park"
        subtitle="Master Planned Industrial Hub & Factory Plot Leasing"
        divisionName="Manufacturing & Industrial Division"
        statusBadge="Coming Soon — Plot Allocation Open"
        statusType="coming-soon"
        description="A 50+ acre master-planned industrial zone in Mawna engineered for high-capacity manufacturing, heavy power substations, central effluent treatment, and direct freight logistics."
        image="/images/brand/industrialpark.png"
        facts={heroFacts}
        accentColor="#047857"
        badgeColor="#008f68"
      />

      {/* 2. Section 1-5: Park Concept Overview, Resident List, Site Map & Plot Matrix */}
      <IndustrialParkOverview
        title="Master Concept, Resident Plants & Available Plots"
        subtitle="Examine park utility infrastructure, resident manufacturing anchors, and available plot sizes."
        parkConceptDescription="Sampan Industrial Park is engineered as Bangladesh’s premier sustainable industrial ecosystem. Designed to house eco-friendly building materials production, PET & beverage bottling, agro-processing, and third-party manufacturing units with shared high-voltage power grids, central ETP, and 24/7 security."
        residentManufacturers={residentManufacturers}
        plots={industrialPlots}
        prospectusUrl="#"
        bgTheme="divisions-green"
        accentColor="#047857"
      />

      {/* 3. Section 6: B2B / Leasing Enquiry CTA & Form */}
      <B2BQuoteEnquiryForm
        title="Inquire Industrial Land Lease & Plot Allocation"
        subtitle="Submit your manufacturing facility specifications to receive an official plot allocation prospectus and lease rate card."
        concernName="Sampan Industrial Park"
        catalogDownloadUrl="#"
        bgTheme="about-ivory"
        accentColor="#047857"
      />

      {/* 4. Section 7: "Located At" Note & Logistical Map */}
      <IndustrialLocationNote
        title="Park Location & Logistical Access"
        subtitle="Positioned right on the Mawna industrial belt with immediate access to major national freight highways."
        concernName="Sampan Industrial Park"
        factoryAddress="Mawna Industrial Zone Corridor, Gazipur, Dhaka, Bangladesh."
        gpsCoordinates="24.2312° N, 90.3954° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.6!2d90.3954!3d24.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEzJzUyLjMiTiA5MMKwMjMnNDMuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        logisticsCorridors={logisticsCorridors}
        bgTheme="divisions-green"
        accentColor="#047857"
      />

    </main>
  );
}
