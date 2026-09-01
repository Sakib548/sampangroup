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
  title: "Sampan Metro Square | Ashulia Land-Share Residential Project",
  description:
    "A 12-katha footprint, 14-storey land-share residential project in Ashulia, Dhaka. Own a piece of high-growth land share with clear RAJUK legal clearance.",
};

const facts = [
  { value: "12 Katha", label: "Land Footprint" },
  { value: "14 Storeys", label: "Planned Tower" },
  { value: "1,300+ sq ft", label: "Planned Units" },
  { value: "20 Mins", label: "To Uttara Metro" },
];

const units = [
  {
    id: "type-a",
    name: "Type A — 1,350 sq ft Suite",
    category: "3-Bedroom Layout",
    sizeSqFt: "1,350 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    priceRange: "BDT 58 Lacs",
    orientation: "South-East Facing",
    highlights: ["Spacious Master Suite with Balcony", "Open Concept Living & Dining", "Separate Servant Toilet"],
  },
  {
    id: "type-b",
    name: "Type B — 1,480 sq ft Luxury Suite",
    category: "3-Bedroom Deluxe",
    sizeSqFt: "1,480 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "BDT 64 Lacs",
    orientation: "Corner Lake View",
    highlights: ["Corner Unit with 3-Side Ventilation", "Fitted Kitchen & Utility Veranda", "Dedicated Car Parking Slot"],
  },
];

const landShareTiers = [
  {
    title: "Standard Residential Land Share",
    shareSize: "1.2 Katha Undivided",
    equityRatio: "1 Apartment Unit Share",
    deedRegistration: "Direct Sub-Kabala Deed",
    keyBenefits: ["Direct Mutual Land Deed Registration", "Zero Middleman Profit Margin", "Transparent Construction Cost Sharing"],
  },
  {
    title: "Commercial & Corner Land Share",
    shareSize: "1.5 Katha Undivided",
    equityRatio: "1 Unit + Parking Share",
    deedRegistration: "Direct Sub-Kabala Deed",
    keyBenefits: ["Priority Floor & Unit Selection", "Includes Covered Ground Parking Share", "High Capital Appreciation Potential"],
  },
];

const progressMilestones = [
  { stage: "Land Acquisition & Mutation", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2024)", notes: "100% Mutation & Clear Deed Title Secured" },
  { stage: "Soil Testing & Architectural Approval", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2025)", notes: "Soil test reports & structural engineering clearance passed" },
  { stage: "Piling & Foundation Work", completionPercent: 75, status: "In Progress" as const, targetDate: "Q3 2026", notes: "Deep cast-in-situ piling in progress" },
  { stage: "Structural Casting & Handover", completionPercent: 0, status: "Upcoming" as const, targetDate: "Q4 2028", notes: "14-storey structural frame & interior finishing" },
];

const floorPlans = [
  {
    id: "fp-master",
    name: "Master Site Plan & Plot Grid",
    category: "Site Plan",
    sizeSqFt: "12 Katha Footprint",
    image: "/images/metro-square/tower-home.webp",
    description: "Architectural plot boundary layout featuring 40 ft front road, gated entry, and ground parking bays.",
    features: ["40 ft Wide Road Access", "100% Sound Foundation Grid", "Gated Security Guard Post"],
  },
  {
    id: "fp-[#",
    name: "Typical Floor Layout (Floors 3-12)",
    category: "Typical Floor",
    sizeSqFt: "4 Units Per Floor",
    image: "/images/concerns/sampan-development-ltd.png",
    description: "Optimal 4-unit symmetrical floor layout maximizing natural ventilation, light wells, and dual staircases.",
    features: ["Dual High-Speed Passenger Lifts", "Fire Fighting Stairwells", "Central Light Court"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land / AC Land",
    approvalTitle: "Mutated Land Deed & Khatian Clearance",
    referenceNumber: "Khatian No. 892/Ashulia",
    status: "100% Cleared",
    description: "Full CS, SA, RS, and City Jorip khatian verified with zero legal disputes or encumbrances.",
  },
  {
    authority: "RAJUK / Local Municipality",
    approvalTitle: "Structural Building Layout Approval",
    referenceNumber: "Memo: RJ/DEV/2025/1124",
    status: "Approved",
    description: "Approved structural height and setback clearances under urban development guidelines.",
  },
];

const renders = [
  {
    id: "r-1",
    title: "Sampan Metro Square Exterior Elevation",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/metro-square/tower-home.webp",
    type: "image" as const,
    description: "14-storey modern glass & louver facade designed for contemporary urban living.",
  },
  {
    id: "r-2",
    title: "Living Room Interior Render",
    category: "interior" as const,
    categoryLabel: "Interior Vistas",
    image: "/images/concerns/sampan-development-ltd.png",
    type: "image" as const,
    description: "Expansive 3-bedroom living and dining area with ambient false ceiling lighting.",
  },
];

const landmarks = [
  { landmark: "Uttara Metro Rail Station", distance: "6.5 km", driveTime: "15 Mins" },
  { landmark: "Hazrat Shahjalal Int'l Airport", distance: "12 km", driveTime: "25 Mins" },
  { landmark: "Ashulia Highway Interchange", distance: "2 km", driveTime: "5 Mins" },
];

export default function SampanMetroSquarePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#dc2626] selection:text-white">
      
      {/* 1. Hero Overview — Custom Red (#dc2626) & Forest Green (#047857) from Logo */}
      <RealEstateHero
        title="Sampan Metro Square"
        subtitle="Ashulia Land-Share Residential Project"
        divisionName="Sampan Development Ltd"
        statusBadge="Ongoing Land-Share Project"
        statusType="ongoing"
        description="Own a piece of Ashulia's next address—a land-share residential project for people who want to invest in a future home, not only a plot."
        image="/images/metro-square/tower-home.webp"
        facts={facts}
        accentColor="#dc2626"
        badgeColor="#047857"
      />

      {/* 2. Unit Types & Sizes Breakdown */}
      <UnitTypesAndSizes
        title="Apartment Unit Configurations"
        subtitle="Explore available 3-bedroom unit layouts, square footage dimensions, and estimated pricing."
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Land Share Structure */}
      <LandShareStructure
        title="Land Share Ownership Structure"
        subtitle="Direct Sub-Kabala land deed registration with zero middleman markups."
        totalLandArea="12 Katha"
        totalSharesCount="48 Land Shares"
        registrationStatus="Sub-Kabala Deed Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map */}
      <RealEstateLocationMap
        title="Ashulia Location & Accessibility"
        subtitle="Positioned right next to the Ashulia growth corridor, minutes from Uttara Metro."
        projectName="Sampan Metro Square"
        address="Ashulia Metro Corridor, Dhaka, Bangladesh."
        gpsCoordinates="23.8712° N, 90.3254° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14595.6!2d90.3254!3d23.8712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzE2LjMiTiA5MMKwMTknMzEuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress */}
      <ConstructionProgressTracker
        title="Live Construction Progress"
        subtitle="Track live site developments and foundation milestones for Sampan Metro Square."
        overallCompletionPercentage={42}
        expectedHandoverDate="Q4 2028"
        currentPhase="Piling & Substructure Casting"
        milestones={progressMilestones}
        bgTheme="about-ivory"
      />

      {/* 6. Floor Plans Viewer */}
      <FloorPlansViewer
        title="Floor Plans & Site Layouts"
        subtitle="Inspect structural blueprints and floor plan arrangements."
        plans={floorPlans}
        bgTheme="divisions-green"
      />

      {/* 7. Legal Credentials */}
      <LegalCredentialsModule
        title="Legal & Regulatory Clearances"
        subtitle="100% clear land title deed mutation and municipality approvals."
        credentials={legalCredentials}
        bgTheme="about-ivory"
      />

      {/* 8. 3D Walkthrough Gallery */}
      <WalkthroughRenderGallery
        title="3D Render Gallery"
        subtitle="Photorealistic architectural renders of Sampan Metro Square tower."
        items={renders}
        bgTheme="divisions-green"
      />

      {/* 9. Payment Plan Calculator */}
      <PaymentPlanCalculator
        title="Payment Plan & Installment Calculator"
        subtitle="Estimate down payment and monthly installment schedules."
        defaultPropertyPriceBDT={5800000}
        bgTheme="about-ivory"
      />

      {/* 10. Downloadable Brochure */}
      <DownloadableBrochureCTA
        projectName="Sampan Metro Square"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Booking Form */}
      <SiteVisitBookingForm
        title="Book VIP Site Visit to Ashulia"
        subtitle="Schedule a guided site tour with our property team. Complimentary vehicle pickup available."
        projectName="Sampan Metro Square"
        bgTheme="about-ivory"
      />

    </main>
  );
}
