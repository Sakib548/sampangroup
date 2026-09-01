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
  title: "Sampan Development Ltd | Master Architectural & Land Development",
  description:
    "Flagship real estate and urban development company of Sampan Group. Developing commercial hubs, land-share residential towers, and sustainable infrastructure across Bangladesh.",
};

const facts = [
  { value: "Flagship", label: "Group Division" },
  { value: "10+ Projects", label: "Ongoing & Planned" },
  { value: "100% Cleared", label: "Land Deed Titles" },
  { value: "Dhaka & Beyond", label: "Prime Corridors" },
];

const units = [
  {
    id: "sdl-flagship-1",
    name: "Sampan Metro Square Residential Share",
    category: "Residential Land Share",
    sizeSqFt: "1,350+ sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    priceRange: "BDT 58 Lacs",
    orientation: "Ashulia Metro Corridor",
    highlights: ["14-Storey Planned Residential Tower", "Sub-Kabala Land Deed Registration", "20 Mins to Uttara Metro Station"],
  },
  {
    id: "sdl-flagship-2",
    name: "Sampan Trade Emporium Commercial Suite",
    category: "Commercial Trade Center",
    sizeSqFt: "650–3,000 sq ft",
    bedrooms: 0,
    bathrooms: 2,
    balconies: 1,
    priceRange: "BDT 1.2 Crore+",
    orientation: "Commercial Highway Hub",
    highlights: ["Multi-Storey Trade Outlets & Executive Offices", "High Lease Rental Opportunities", "Ample Underground Valet Parking"],
  },
];

const landShareTiers = [
  {
    title: "Master Division Land Share Portfolio",
    shareSize: "1.0 - 1.5 Katha Undivided",
    equityRatio: "1 Unit Ownership Share",
    deedRegistration: "Direct Sub-Kabala Deed",
    keyBenefits: ["Direct Government Registered Sub-Kabala Deed", "Zero Intermediary Profit Margins", "Transparent Construction Cost Schedule"],
  },
];

const progressMilestones = [
  { stage: "Land Acquisition & Title Deed Verification", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2024)", notes: "100% Mutation & Clear Sub-Kabala Titles Secured" },
  { stage: "Architectural Engineering & RAJUK Approvals", completionPercent: 90, status: "In Progress" as const, targetDate: "Q3 2026", notes: "Soil test reports & structural engineering clearance complete" },
  { stage: "Piling, Construction & Handover", completionPercent: 45, status: "In Progress" as const, targetDate: "Q4 2028", notes: "Ongoing structural frame casting across project sites" },
];

const floorPlans = [
  {
    id: "fp-sdl-master",
    name: "Sampan Development Portfolio Master Plan",
    category: "Division Master Plan",
    sizeSqFt: "Multi-Acre Development Grid",
    image: "/images/concerns/sampan-development-ltd.png",
    description: "Master architectural planning incorporating green zones, commercial facades, and residential towers.",
    features: ["Sustainable Green Corridors", "100% Sound Earthquake Resistant Grid", "Gated Security Control"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land / AC Land",
    approvalTitle: "Clear Sub-Kabala Land Deed Titles",
    referenceNumber: "CS, SA, RS & City Jorip Cleared",
    status: "100% Verified",
    description: "All division land parcels mutated with zero legal encumbrances.",
  },
  {
    authority: "RAJUK / Local Municipalities",
    approvalTitle: "Urban Development & Setback Clearances",
    referenceNumber: "RAJUK / Municipality Approved Plans",
    status: "Approved",
    description: "Approved structural height and setback clearances under urban development guidelines.",
  },
];

const renders = [
  {
    id: "r-sdl-1",
    title: "Sampan Development Architectural Vision",
    category: "exterior" as const,
    categoryLabel: "Exterior Architecture",
    image: "/images/concerns/sampan-development-ltd.png",
    type: "image" as const,
    description: "Flagship urban architecture and land-share developments across prime transit corridors.",
  },
];

const landmarks = [
  { landmark: "Ashulia Metro Corridor", distance: "6 km", driveTime: "15 Mins" },
  { landmark: "Expressway Transit Hub", distance: "4 km", driveTime: "8 Mins" },
  { landmark: "Hazrat Shahjalal Int'l Airport", distance: "12 km", driveTime: "25 Mins" },
];

export default function SampanDevelopmentLtdPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#ca8a04] selection:text-neutral-950">
      
      {/* 1. Hero Overview — Dark for Transparent Navbar Contrast */}
      <RealEstateHero
        title="Sampan Development Ltd"
        subtitle="Master Architectural & Land Development Flagship"
        divisionName="Real Estate & Land Investment Division"
        statusBadge="Division Flagship"
        statusType="flagship"
        description="The flagship real estate company of Sampan Group. Engineering commercial trade emporiums, residential land-share towers, and sustainable infrastructure across Bangladesh."
        image="/images/concerns/sampan-development-ltd.png"
        facts={facts}
        theme="dark-slate"
      />

      {/* 2. Unit Configurations — DivisionsSection Soft Green bg-[#f3f6f2] */}
      <UnitTypesAndSizes
        title="Featured Division Developments"
        subtitle="Explore flagship apartment layouts, commercial spaces, and estimated pricing."
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Land Share Model — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <LandShareStructure
        title="Flagship Land Share Ownership Model"
        subtitle="Direct Sub-Kabala land deed registration with zero middleman markups across all project sites."
        totalLandArea="50+ Katha Portfolio"
        totalSharesCount="200+ Land Shares"
        registrationStatus="Sub-Kabala Deed Cleared"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map — DivisionsSection Soft Green bg-[#f3f6f2] */}
      <RealEstateLocationMap
        title="Strategic Corridor Locations"
        subtitle="Positioned along high-growth transit corridors in Ashulia, Dhaka, and Expressway Hubs."
        projectName="Sampan Development Ltd"
        address="Flagship Division Headquarters & Project Sites, Dhaka, Bangladesh."
        gpsCoordinates="23.8103° N, 90.4125° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.0!2d90.4125!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzM3LjEiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <ConstructionProgressTracker
        title="Division Project Development Status"
        subtitle="Track live site developments, architectural milestones, and expected handover timelines."
        overallCompletionPercentage={65}
        expectedHandoverDate="2026 - 2028 Phases"
        currentPhase="Multi-Site Piling & Superstructure Framing"
        milestones={progressMilestones}
        bgTheme="about-ivory"
      />

      {/* 6. Floor Plans — DivisionsSection Soft Green bg-[#f3f6f2] */}
      <FloorPlansViewer
        title="Master Blueprints & Plot Layouts"
        subtitle="Examine precision engineered architectural floor plan layouts and master site plans."
        plans={floorPlans}
        bgTheme="divisions-green"
      />

      {/* 7. Legal Credentials — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <LegalCredentialsModule
        title="Regulatory Approvals & Legal Clearances"
        subtitle="100% verified clear land title deeds and government municipal sanctions."
        credentials={legalCredentials}
        bgTheme="about-ivory"
      />

      {/* 8. 3D Renders — DivisionsSection Soft Green bg-[#f3f6f2] */}
      <WalkthroughRenderGallery
        title="3D Renders & Architectural Showcase"
        subtitle="Explore photorealistic 3D architectural renders of flagship division developments."
        items={renders}
        bgTheme="divisions-green"
      />

      {/* 9. Payment Calculator — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <PaymentPlanCalculator
        title="Investment Payment Plan Estimator"
        subtitle="Estimate down payments, flexible monthly installment schedules, and handover balances."
        defaultPropertyPriceBDT={5800000}
        bgTheme="about-ivory"
      />

      {/* 10. Brochure Download — DivisionsSection Soft Green bg-[#f3f6f2] */}
      <DownloadableBrochureCTA
        projectName="Sampan Development Ltd"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form — AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <SiteVisitBookingForm
        title="Book VIP Site Visit & Property Consultation"
        subtitle="Schedule a guided site tour with our property team. Complimentary vehicle transport available upon request."
        projectName="Sampan Development Ltd"
        bgTheme="about-ivory"
      />

    </main>
  );
}
