import type { Metadata } from "next";
import RealEstateHero from "@/components/real-estate/RealEstateHero";
import UnitTypesAndSizes from "@/components/real-estate/UnitTypesAndSizes";
import LandShareStructure from "@/components/real-estate/LandShareStructure";
import ConstructionProgressTracker from "@/components/real-estate/ConstructionProgressTracker";
import FloorPlansViewer from "@/components/real-estate/FloorPlansViewer";
import LegalCredentialsModule from "@/components/real-estate/LegalCredentialsModule";
import WalkthroughRenderGallery from "@/components/real-estate/WalkthroughRenderGallery";
import PaymentPlanCalculator from "@/components/real-estate/PaymentPlanCalculator";
import SiteVisitBookingForm from "@/components/real-estate/SiteVisitBookingForm";
import DownloadableBrochureCTA from "@/components/real-estate/DownloadableBrochureCTA";
import RealEstateLocationMap from "@/components/real-estate/RealEstateLocationMap";

export const metadata: Metadata = {
  title: "Sampan Residency Tower 1 & 2 | Luxury Highway Corridor Residential Complex",
  description:
    "Twin-tower luxury residential complex integrated with Express Highway Inn hospitality perks, soundproof suites, and land share ownership options.",
};

const facts = [
  { value: "Twin Towers", label: "Tower 1 & Tower 2" },
  { value: "16 Storeys", label: "High-Rise Design" },
  { value: "1,450+ sq ft", label: "Luxury Suites" },
  { value: "Express Highway", label: "Direct Location" },
];

const units = [
  {
    id: "res-a",
    name: "Tower 1 — 1,450 sq ft Executive Suite",
    category: "3-Bedroom Deluxe",
    sizeSqFt: "1,450 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "BDT 72 Lacs",
    orientation: "South-West Highway View",
    highlights: ["Integrated Highway Inn Concierge Access", "Double-Glazed Soundproof Glass", "Covered Basement Parking"],
  },
  {
    id: "res-b",
    name: "Tower 2 — 1,650 sq ft Presidential Suite",
    category: "4-Bedroom Luxury",
    sizeSqFt: "1,650 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    priceRange: "BDT 88 Lacs",
    orientation: "Corner Garden View",
    highlights: ["Corner Unit with Panoramic Balcony", "Servant Room & En-suite Bath", "Private Elevator Card Access"],
  },
];

const landShareTiers = [
  {
    title: "Residency Land Share Tier A",
    shareSize: "1.3 Katha Undivided",
    equityRatio: "1 Suite Unit Share",
    deedRegistration: "Sub-Kabala Registered",
    keyBenefits: ["Direct Land Mutation Title", "Access to Express Highway Inn Swimming Pool & Gym", "High Rental Yield Potential"],
  },
];

const progressMilestones = [
  { stage: "Land Approval & Deed Mutation", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2024)", notes: "100% Mutation & Deed Registration Cleared" },
  { stage: "Piling & Substructure Casting", completionPercent: 60, status: "In Progress" as const, targetDate: "Q4 2026", notes: "Twin tower foundation piling underway" },
  { stage: "Superstructure Frame & Handover", completionPercent: 0, status: "Upcoming" as const, targetDate: "Q3 2028", notes: "16-storey structural frame & handover" },
];

const floorPlans = [
  {
    id: "fp-res-1",
    name: "Tower 1 Typical Floor Layout",
    category: "Typical Floor",
    sizeSqFt: "4 Units Per Floor",
    image: "/images/projects/sampan-highway-inn.png",
    description: "4-unit per floor symmetrical layout with central high-speed lifts and acoustic insulation.",
    features: ["Dual High-Speed Passenger Lifts", "Soundproof Double Glass", "Fire Escape Stairs"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land",
    approvalTitle: "Mutated Land Title Deed",
    referenceNumber: "Deed No. 4412/Express Corridor",
    status: "100% Cleared",
    description: "Verified clear land title with zero disputes.",
  },
];

const renders = [
  {
    id: "r-res-1",
    title: "Sampan Residency Twin Towers Elevation",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/projects/sampan-highway-inn.png",
    type: "image" as const,
    description: "Twin-tower modern architectural skyline on the express highway corridor.",
  },
];

const landmarks = [
  { landmark: "Express Highway Inn", distance: "0 km", driveTime: "Adjacent" },
  { landmark: "Padma Bridge Toll Plaza", distance: "14 km", driveTime: "15 Mins" },
  { landmark: "Dhaka City Center", distance: "30 km", driveTime: "30 Mins" },
];

export default function SampanResidencyTowerPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#ca8a04] selection:text-neutral-950">
      
      {/* 1. Hero Overview — Dark for Transparent Navbar */}
      <RealEstateHero
        title="Sampan Residency Tower 1 & 2"
        subtitle="Luxury Highway Corridor Twin Residential Towers"
        divisionName="Sampan Development Ltd"
        statusBadge="Ongoing Development"
        statusType="ongoing"
        description="Twin 16-storey luxury residential towers integrated with Express Highway Inn hospitality perks and direct corridor connectivity."
        image="/images/projects/sampan-highway-inn.png"
        facts={facts}
        theme="dark-slate"
      />

      {/* 2. Unit Configurations — DivisionsSection Green bg-[#f3f6f2] */}
      <UnitTypesAndSizes
        title="Residency Unit Configurations"
        subtitle="Explore 3 & 4 bedroom executive suites with double-glazed soundproof glass."
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Land Share Model — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <LandShareStructure
        totalLandArea="18 Katha"
        totalSharesCount="64 Land Shares"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map — DivisionsSection Green bg-[#f3f6f2] */}
      <RealEstateLocationMap
        projectName="Sampan Residency Tower 1 & 2"
        address="Express Highway Corridor Exit, Bangladesh."
        gpsCoordinates="23.6412° N, 90.3154° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14618.361907689943!2d90.3154!3d23.6412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM8JzI4LjMiTiA5MMKwMTknNTUuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <ConstructionProgressTracker
        overallCompletionPercentage={50}
        expectedHandoverDate="Q3 2028"
        currentPhase="Piling & Substructure Casting"
        milestones={progressMilestones}
        bgTheme="about-ivory"
      />

      {/* 6. Floor Plans — DivisionsSection Green bg-[#f3f6f2] */}
      <FloorPlansViewer
        plans={floorPlans}
        bgTheme="divisions-green"
      />

      {/* 7. Legal Credentials — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <LegalCredentialsModule
        credentials={legalCredentials}
        bgTheme="about-ivory"
      />

      {/* 8. 3D Renders — DivisionsSection Green bg-[#f3f6f2] */}
      <WalkthroughRenderGallery
        items={renders}
        bgTheme="divisions-green"
      />

      {/* 9. Payment Calculator — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <PaymentPlanCalculator
        defaultPropertyPriceBDT={7200000}
        bgTheme="about-ivory"
      />

      {/* 10. Brochure Download — DivisionsSection Green bg-[#f3f6f2] */}
      <DownloadableBrochureCTA
        projectName="Sampan Residency Tower 1 & 2"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <SiteVisitBookingForm
        projectName="Sampan Residency Tower 1 & 2"
        bgTheme="about-ivory"
      />

    </main>
  );
}
