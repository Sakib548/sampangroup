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
  title: "Sampan Nexus | Mawna Mixed-Use Growth Corridor Project",
  description:
    "Strategic mixed-use development integrating commercial spaces, retail zones, and residential land-share apartments in Mawna.",
};

const facts = [
  { value: "Mawna", label: "Industrial Green Belt" },
  { value: "Mixed-Use", label: "Commercial & Living" },
  { value: "1,250+ sq ft", label: "Apartments" },
  { value: "High Growth", label: "Appreciation" },
];

const units = [
  {
    id: "nex-a",
    name: "Nexus Residential Unit — 1,250 sq ft",
    category: "3-Bedroom Apartment",
    sizeSqFt: "1,250 sq ft",
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    priceRange: "BDT 42 Lacs",
    orientation: "Green View Facing",
    highlights: ["Affordable Growth Investment", "Cross Ventilation Layout", "Dedicated Parking Share"],
  },
];

const landShareTiers = [
  {
    title: "Nexus Growth Land Share",
    shareSize: "1.0 Katha Undivided",
    equityRatio: "1 Residential Unit Share",
    deedRegistration: "Sub-Kabala Registered",
    keyBenefits: ["Low Entry Capital", "High Industrial Corridor Demand", "Transparent Cost Model"],
  },
];

const progressMilestones = [
  { stage: "Land Acquisition & Survey", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2025)", notes: "Title deed verified & mutated" },
  { stage: "Master Layout & Soil Test", completionPercent: 50, status: "In Progress" as const, targetDate: "Q4 2026", notes: "Soil test & master plan design" },
  { stage: "Construction Start", completionPercent: 0, status: "Upcoming" as const, targetDate: "Q2 2027", notes: "Foundation piling start" },
];

const floorPlans = [
  {
    id: "fp-nex-1",
    name: "Sampan Nexus Master Site Layout",
    category: "Master Plan",
    sizeSqFt: "16 Katha Footprint",
    image: "/images/concerns/3-sampan-eco-agro.png",
    description: "Mixed-use layout integrating ground commercial retail with residential towers.",
    features: ["Mixed-Use Zoning", "Wide Internal Access Roads", "Green Landscaping"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land",
    approvalTitle: "Clear Title Deed Mutation",
    referenceNumber: "Khatian No. 554/Mawna",
    status: "100% Cleared",
    description: "Verified clear land deed title.",
  },
];

const renders = [
  {
    id: "r-nex-1",
    title: "Sampan Nexus Mixed-Use Render",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/concerns/3-sampan-eco-agro.png",
    type: "image" as const,
    description: "Modern mixed-use architecture in the Mawna growth hub.",
  },
];

const landmarks = [
  { landmark: "Mawna Highway Junction", distance: "3 km", driveTime: "5 Mins" },
  { landmark: "Dhaka-Mymensingh Expressway", distance: "1 km", driveTime: "2 Mins" },
];

export default function SampanNexusPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#ca8a04] selection:text-neutral-950">
      
      {/* 1. Hero Overview — Dark for Transparent Navbar */}
      <RealEstateHero
        title="Sampan Nexus"
        subtitle="Mawna Mixed-Use Industrial Corridor Project"
        divisionName="Sampan Development Ltd"
        statusBadge="Coming Soon — Early Inquiries"
        statusType="coming-soon"
        description="A strategic mixed-use project combining commercial spaces and residential land-share apartments in the rapidly growing Mawna industrial belt."
        image="/images/concerns/3-sampan-eco-agro.png"
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
        totalLandArea="16 Katha"
        totalSharesCount="48 Land Shares"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map — DivisionsSection Green bg-[#f3f6f2] */}
      <RealEstateLocationMap
        projectName="Sampan Nexus"
        address="Mawna Growth Hub Corridor, Bangladesh."
        gpsCoordinates="24.2312° N, 90.3954° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14545.6!2d90.3954!3d24.2312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEzJzUyLjMiTiA5MMKwMjMnNDMuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <ConstructionProgressTracker
        overallCompletionPercentage={20}
        expectedHandoverDate="Q4 2029"
        currentPhase="Master Layout & Soil Testing"
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
        defaultPropertyPriceBDT={4200000}
        bgTheme="about-ivory"
      />

      {/* 10. Brochure Download — DivisionsSection Green bg-[#f3f6f2] */}
      <DownloadableBrochureCTA
        projectName="Sampan Nexus"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <SiteVisitBookingForm
        projectName="Sampan Nexus"
        bgTheme="about-ivory"
      />

    </main>
  );
}
