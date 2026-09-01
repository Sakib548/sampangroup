import type { Metadata } from "next";
import RealEstateHero from "../components/RealEstateHero";
import UnitTypesAndSizes from "../components/UnitTypesAndSizes";
import LandShareStructure from "../components/LandShareStructure";
import ConstructionProgressTracker from "../components/ConstructionProgressTracker";
import FloorPlansViewer from "../components/FloorPlansViewer";
import LegalCredentialsModule from "../components/LegalCredentialsModule";
import WalkthroughRenderGallery from "../components/WalkthroughRenderGallery";
import PaymentPlanCalculator from "../components/PaymentPlanCalculator";
import SiteVisitBookingForm from "../components/SiteVisitBookingForm";
import DownloadableBrochureCTA from "../components/DownloadableBrochureCTA";
import RealEstateLocationMap from "../components/RealEstateLocationMap";

export const metadata: Metadata = {
  title: "Sampan 21st Century | Eco-Centric Master Planned Estate",
  description:
    "Eco-centric master-planned residential housing estate engineered for 21st-century modern living with smart infrastructure.",
};

const facts = [
  { value: "Eco-Centric", label: "Master Estate" },
  { value: "21st Century", label: "Smart Infrastructure" },
  { value: "1,400+ sq ft", label: "Modern Homes" },
  { value: "Gated", label: "Security & Parks" },
];

const units = [
  {
    id: "21st-a",
    name: "21st Century Smart Home — 1,400 sq ft",
    category: "3-Bedroom Eco Suite",
    sizeSqFt: "1,400 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "BDT 62 Lacs",
    orientation: "South Facing Park View",
    highlights: ["Solar-Assist Power Grid", "Rainwater Harvesting Integration", "Smart Lock & Security"],
  },
];

const landShareTiers = [
  {
    title: "Eco Estate Land Share",
    shareSize: "1.25 Katha Undivided",
    equityRatio: "1 Smart Home Share",
    deedRegistration: "Sub-Kabala Registered",
    keyBenefits: ["Direct Sub-Kabala Land Title", "Access to Community Eco Park", "High Sustainability Value"],
  },
];

const progressMilestones = [
  { stage: "Land Purchase & Title Deed Mutation", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2025)", notes: "100% Mutation complete" },
  { stage: "Master Infrastructure Planning", completionPercent: 40, status: "In Progress" as const, targetDate: "Q4 2026", notes: "Road & utility master layout" },
  { stage: "Development Launch", completionPercent: 0, status: "Upcoming" as const, targetDate: "Q2 2027", notes: "Piling & construction start" },
];

const floorPlans = [
  {
    id: "fp-21st-1",
    name: "Sampan 21st Century Master Plan",
    category: "Master Estate Layout",
    sizeSqFt: "20 Katha Footprint",
    image: "/images/concerns/sampan-development-ltd.png",
    description: "Eco-centric master housing estate featuring central parks and solar power grids.",
    features: ["Solar-Powered Street Lights", "Central Park & Jogging Track", "Gated Entry"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land",
    approvalTitle: "Clear Title Deed Mutation",
    referenceNumber: "Khatian No. 902/Growth",
    status: "100% Cleared",
    description: "Verified clear land deed title.",
  },
];

const renders = [
  {
    id: "r-21st-1",
    title: "Sampan 21st Century Estate Rendering",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/concerns/sampan-development-ltd.png",
    type: "image" as const,
    description: "Modern eco-centric housing architecture.",
  },
];

const landmarks = [
  { landmark: "Greater Dhaka Growth Corridor", distance: "4 km", driveTime: "8 Mins" },
  { landmark: "Expressway Exit", distance: "2 km", driveTime: "4 Mins" },
];

export default function Sampan21stCenturyPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#25633a] selection:text-white">
      
      {/* 1. Hero Overview — Custom Deep Emerald Green (#25633a) from Logo */}
      <RealEstateHero
        title="Sampan 21st Century"
        subtitle="Eco-Centric Master Planned Housing Estate"
        divisionName="Sampan Development Ltd"
        statusBadge="Upcoming Phase"
        statusType="coming-soon"
        description="An eco-centric master-planned housing community engineered for 21st-century modern living, solar power integration, and smart infrastructure."
        image="/images/concerns/sampan-development-ltd.png"
        facts={facts}
        accentColor="#25633a"
        badgeColor="#00a651"
      />

      {/* 2. Unit Configurations */}
      <UnitTypesAndSizes
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Land Share Model */}
      <LandShareStructure
        totalLandArea="20 Katha"
        totalSharesCount="60 Land Shares"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map */}
      <RealEstateLocationMap
        projectName="Sampan 21st Century"
        address="Greater Dhaka Growth Belt, Bangladesh."
        gpsCoordinates="23.8212° N, 90.3554° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14599.6!2d90.3554!3d23.8212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzE2LjMiTiA5MMKwMjEnMTkuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress */}
      <ConstructionProgressTracker
        overallCompletionPercentage={15}
        expectedHandoverDate="Q4 2029"
        currentPhase="Infrastructure & Road Layout Planning"
        milestones={progressMilestones}
        bgTheme="about-ivory"
      />

      {/* 6. Floor Plans */}
      <FloorPlansViewer
        plans={floorPlans}
        bgTheme="divisions-green"
      />

      {/* 7. Legal Credentials */}
      <LegalCredentialsModule
        credentials={legalCredentials}
        bgTheme="about-ivory"
      />

      {/* 8. 3D Renders */}
      <WalkthroughRenderGallery
        items={renders}
        bgTheme="divisions-green"
      />

      {/* 9. Payment Calculator */}
      <PaymentPlanCalculator
        defaultPropertyPriceBDT={6200000}
        bgTheme="about-ivory"
      />

      {/* 10. Brochure Download */}
      <DownloadableBrochureCTA
        projectName="Sampan 21st Century"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form */}
      <SiteVisitBookingForm
        projectName="Sampan 21st Century"
        bgTheme="about-ivory"
      />

    </main>
  );
}
