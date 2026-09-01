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
  title: "Sampan Taj | Boutique Luxury Residential Apartments",
  description:
    "Boutique luxury residential apartment building offering single-unit-per-floor privacy, premium finishings, and dedicated parking.",
};

const facts = [
  { value: "Boutique", label: "Luxury Residence" },
  { value: "1 Unit/Floor", label: "Maximum Privacy" },
  { value: "2,100 sq ft", label: "Palatial Suites" },
  { value: "Prime Zone", label: "Dhaka Residential" },
];

const units = [
  {
    id: "taj-a",
    name: "Sampan Taj Palatial Suite — 2,100 sq ft",
    category: "4-Bedroom Luxury",
    sizeSqFt: "2,100 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 4,
    priceRange: "BDT 1.45 Crore",
    orientation: "South-Facing Corner",
    highlights: ["Single Unit Per Floor Confidentiality", "Private Foyer & Elevator Card", "Imported Marble Flooring & Bath Fittings"],
  },
];

const landShareTiers = [
  {
    title: "Boutique Land Share",
    shareSize: "1.8 Katha Undivided",
    equityRatio: "1 Full Floor Suite Share",
    deedRegistration: "Sub-Kabala Registered",
    keyBenefits: ["Direct Sub-Kabala Land Deed", "Exclusive Single Floor Ownership", "High Value Preservation"],
  },
];

const progressMilestones = [
  { stage: "Land Deed Mutation & Clearances", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2025)", notes: "100% Mutation & Deed Registration Cleared" },
  { stage: "Boutique Design Approval", completionPercent: 60, status: "In Progress" as const, targetDate: "Q4 2026", notes: "Architectural plan clearance" },
  { stage: "Piling & Groundwork", completionPercent: 0, status: "Upcoming" as const, targetDate: "Q1 2027", notes: "Groundbreaking start" },
];

const floorPlans = [
  {
    id: "fp-taj-1",
    name: "Single Floor Palatial Layout",
    category: "Full Floor Plan",
    sizeSqFt: "2,100 sq ft Single Unit",
    image: "/images/concerns/sampan-development-ltd.png",
    description: "360-degree ventilation layout covering the entire floor plate.",
    features: ["4 Open Balconies", "Private Elevator Hall", "Staff Room & Bath"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land",
    approvalTitle: "Clear Sub-Kabala Title Deed",
    referenceNumber: "Khatian No. 1104/Boutique",
    status: "100% Cleared",
    description: "Verified clear land deed title.",
  },
];

const renders = [
  {
    id: "r-taj-1",
    title: "Sampan Taj Boutique Elevation",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/concerns/sampan-development-ltd.png",
    type: "image" as const,
    description: "Elegant boutique luxury facade.",
  },
];

const landmarks = [
  { landmark: "Gulshan / Banani Diplomatic Belt", distance: "5 km", driveTime: "10 Mins" },
];

export default function SampanTajPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#ca8a04] selection:text-neutral-950">
      
      {/* 1. Hero Overview — Dark for Transparent Navbar */}
      <RealEstateHero
        title="Sampan Taj"
        subtitle="Boutique Luxury Residential Apartment Building"
        divisionName="Sampan Development Ltd"
        statusBadge="Upcoming Project"
        statusType="coming-soon"
        description="Boutique luxury residential apartments offering single-unit-per-floor privacy, palatial 2,100 sq ft floor plans, and imported luxury finishes."
        image="/images/concerns/sampan-development-ltd.png"
        facts={facts}
        theme="dark-slate"
      />

      {/* 2. Unit Configurations — DivisionsSection Green bg-[#f3f6f2] */}
      <UnitTypesAndSizes
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Land Share Model — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <LandShareStructure
        totalLandArea="10 Katha"
        totalSharesCount="10 Boutique Land Shares"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map — DivisionsSection Green bg-[#f3f6f2] */}
      <RealEstateLocationMap
        projectName="Sampan Taj"
        address="Dhaka Residential Corridor, Bangladesh."
        gpsCoordinates="23.7912° N, 90.4154° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.6!2d90.4154!3d23.7912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzI4LjMiTiA5MMKwMjQnNTUuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <ConstructionProgressTracker
        overallCompletionPercentage={20}
        expectedHandoverDate="Q4 2028"
        currentPhase="Boutique Architectural Design"
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
        defaultPropertyPriceBDT={14500000}
        bgTheme="about-ivory"
      />

      {/* 10. Brochure Download — DivisionsSection Green bg-[#f3f6f2] */}
      <DownloadableBrochureCTA
        projectName="Sampan Taj"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <SiteVisitBookingForm
        projectName="Sampan Taj"
        bgTheme="about-ivory"
      />

    </main>
  );
}
