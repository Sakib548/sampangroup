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
  title: "Sampan Niketon | Serene Family Community Housing Complex",
  description:
    "Serene residential housing complex designed for multi-generational families with landscaped green courtyards near Niketon.",
};

const facts = [
  { value: "Niketon Vicinity", label: "Prime Address" },
  { value: "Family Housing", label: "Multi-Generational" },
  { value: "1,600+ sq ft", label: "Spacious Suites" },
  { value: "Courtyard", label: "Landscaped Gardens" },
];

const units = [
  {
    id: "nik-a",
    name: "Niketon Family Suite — 1,600 sq ft",
    category: "3-Bedroom Family Suite",
    sizeSqFt: "1,600 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "BDT 85 Lacs",
    orientation: "South Courtyard Facing",
    highlights: ["Landscaped Courtyard Overlook", "Kid-Safe Balcony Grills", "Underground Parking & Driver Restroom"],
  },
];

const landShareTiers = [
  {
    title: "Niketon Family Land Share",
    shareSize: "1.35 Katha Undivided",
    equityRatio: "1 Family Suite Share",
    deedRegistration: "Sub-Kabala Registered",
    keyBenefits: ["Direct Mutual Sub-Kabala Deed", "High Resale Liquidity", "Gated Security Protection"],
  },
];

const progressMilestones = [
  { stage: "Land Mutation & Deed Clearances", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2025)", notes: "100% Cleared Land Mutation Title" },
  { stage: "Architectural & Soil Testing", completionPercent: 50, status: "In Progress" as const, targetDate: "Q4 2026", notes: "Soil test reports passed" },
  { stage: "Piling Start", completionPercent: 0, status: "Upcoming" as const, targetDate: "Q1 2027", notes: "Foundation groundwork" },
];

const floorPlans = [
  {
    id: "fp-nik-1",
    name: "Niketon Family Complex Layout",
    category: "Complex Master Plan",
    sizeSqFt: "14 Katha Footprint",
    image: "/images/concerns/sampan-development-ltd.png",
    description: "Central courtyard residential layout promoting community living.",
    features: ["Central Green Courtyard", "Children's Play Area", "24/7 CCTV Monitoring"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land",
    approvalTitle: "Clear Title Deed Mutation",
    referenceNumber: "Khatian No. 804/Niketon",
    status: "100% Cleared",
    description: "Verified clear land deed title.",
  },
];

const renders = [
  {
    id: "r-nik-1",
    title: "Sampan Niketon Courtyard Rendering",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/concerns/sampan-development-ltd.png",
    type: "image" as const,
    description: "Serene residential housing complex with landscaped courtyards.",
  },
];

const landmarks = [
  { landmark: "Niketon Gate / Gulshan Avenue", distance: "1.5 km", driveTime: "4 Mins" },
  { landmark: "Hatirjheel Promenade", distance: "1 km", driveTime: "3 Mins" },
];

export default function SampanNiketonPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#ca8a04] selection:text-neutral-950">
      
      {/* 1. Hero Overview — Dark for Transparent Navbar */}
      <RealEstateHero
        title="Sampan Niketon"
        subtitle="Serene Family Community Housing Complex"
        divisionName="Sampan Development Ltd"
        statusBadge="Upcoming Project"
        statusType="coming-soon"
        description="A serene residential housing complex designed for multi-generational families with landscaped green courtyards in the Niketon vicinity."
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
        totalLandArea="14 Katha"
        totalSharesCount="42 Family Shares"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map — DivisionsSection Green bg-[#f3f6f2] */}
      <RealEstateLocationMap
        projectName="Sampan Niketon"
        address="Niketon Vicinity, Dhaka, Bangladesh."
        gpsCoordinates="23.7712° N, 90.4104° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.6!2d90.4104!3d23.7712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzE2LjMiTiA5MMKwMjQnMzcuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <ConstructionProgressTracker
        overallCompletionPercentage={20}
        expectedHandoverDate="Q4 2028"
        currentPhase="Architectural Layout Planning"
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
        defaultPropertyPriceBDT={8500000}
        bgTheme="about-ivory"
      />

      {/* 10. Brochure Download — DivisionsSection Green bg-[#f3f6f2] */}
      <DownloadableBrochureCTA
        projectName="Sampan Niketon"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <SiteVisitBookingForm
        projectName="Sampan Niketon"
        bgTheme="about-ivory"
      />

    </main>
  );
}
