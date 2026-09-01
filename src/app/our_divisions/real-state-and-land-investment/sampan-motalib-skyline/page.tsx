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
  title: "Sampan Motalib Skyline | Pre-Launch High-Rise Residential Tower",
  description:
    "Pre-launch luxury residential skyline tower featuring panoramic urban views, smart automation, and pre-construction land share pricing.",
};

const facts = [
  { value: "Pre-Launch", label: "Early Booking" },
  { value: "18 Storeys", label: "Skyline Tower" },
  { value: "1,550+ sq ft", label: "Planned Suites" },
  { value: "Central Dhaka", label: "Prime Location" },
];

const units = [
  {
    id: "sky-a",
    name: "Skyline Suite Type A — 1,550 sq ft",
    category: "3-Bedroom Luxury",
    sizeSqFt: "1,550 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "Pre-launch Rate: BDT 78 Lacs",
    orientation: "South-Facing Panorama",
    highlights: ["Smart Home Automation Ready", "High-Ceiling Architecture", "Master Bed En-suite Bath & Dresser"],
  },
  {
    id: "sky-b",
    name: "Skyline Penthouse Unit — 2,200 sq ft",
    category: "4-Bedroom Penthouse",
    sizeSqFt: "2,200 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 4,
    priceRange: "Pre-launch Rate: BDT 1.25 Crore",
    orientation: "360 Skyline View",
    highlights: ["Top-Floor Penthouse Terrace", "Private Jacuzzi Provision", "Dual Basement Car Parking"],
  },
];

const landShareTiers = [
  {
    title: "Pre-Launch Skyline Land Share",
    shareSize: "1.4 Katha Undivided",
    equityRatio: "1 Penthouse / Suite Share",
    deedRegistration: "Sub-Kabala Direct Transfer",
    keyBenefits: ["Pre-Construction Discount", "Guaranteed Floor Selection Priority", "High Growth Appreciation"],
  },
];

const progressMilestones = [
  { stage: "Land Acquisition & Title Deed Verification", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2025)", notes: "100% Cleared Land Mutation Title" },
  { stage: "Architectural Master Plan & Soil Test", completionPercent: 90, status: "In Progress" as const, targetDate: "Q3 2026", notes: "18-storey structural design submitted" },
  { stage: "Construction Groundbreaking", completionPercent: 0, status: "Upcoming" as const, targetDate: "Q1 2027", notes: "Groundbreaking & piling start" },
];

const floorPlans = [
  {
    id: "fp-sky-1",
    name: "Typical Skyline Floor Plan",
    category: "Typical Floor",
    sizeSqFt: "3 Units Per Floor",
    image: "/images/concerns/sampan-development-ltd.png",
    description: "Low-density 3-unit per floor layout ensuring maximum privacy and light.",
    features: ["Low Density Design", "3 Passenger Lifts", "Rooftop Sky Garden"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land",
    approvalTitle: "Clear Title Deed Clearance",
    referenceNumber: "Khatian No. 1290/Central",
    status: "100% Cleared",
    description: "Verified clear land deed title.",
  },
];

const renders = [
  {
    id: "r-sky-1",
    title: "Sampan Motalib Skyline Architectural Rendering",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    type: "image" as const,
    description: "18-storey luxury residential tower overlooking the Dhaka skyline.",
  },
];

const landmarks = [
  { landmark: "Central Commercial Hub", distance: "3 km", driveTime: "5 Mins" },
  { landmark: "Dhaka Airport Highway", distance: "10 km", driveTime: "18 Mins" },
];

export default function SampanMotalibSkylinePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#0284c7] selection:text-white">
      
      {/* 1. Hero Overview — Skyline Blue (#0284c7) Accent */}
      <RealEstateHero
        title="Sampan Motalib Skyline"
        subtitle="Pre-Launch 18-Storey High-Rise Residential Tower"
        divisionName="Sampan Development Ltd"
        statusBadge="Coming Soon — Pre-Launch Bookings"
        statusType="coming-soon"
        description="Experience pre-launch pricing on an 18-storey high-rise luxury residential tower featuring smart home automation and panoramic urban views."
        image="/images/projects/Sampan-White-House-&-Motel.png"
        facts={facts}
        accentColor="#0284c7"
        badgeColor="#0284c7"
      />

      {/* 2. Unit Configurations */}
      <UnitTypesAndSizes
        title="Pre-Launch Suite Configurations"
        subtitle="Explore 3 & 4 bedroom skyline suites and top-floor penthouses."
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Land Share Model */}
      <LandShareStructure
        totalLandArea="15 Katha"
        totalSharesCount="54 Pre-Launch Shares"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map */}
      <RealEstateLocationMap
        projectName="Sampan Motalib Skyline"
        address="Central Dhaka Urban Corridor, Bangladesh."
        gpsCoordinates="23.7412° N, 90.3754° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.6!2d90.3754!3d23.7412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ0JzI4LjMiTiA5MMKwMjInMzEuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress */}
      <ConstructionProgressTracker
        overallCompletionPercentage={25}
        expectedHandoverDate="Q4 2029"
        currentPhase="Architectural Design & Soil Testing"
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
        defaultPropertyPriceBDT={7800000}
        bgTheme="about-ivory"
      />

      {/* 10. Brochure Download */}
      <DownloadableBrochureCTA
        projectName="Sampan Motalib Skyline"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form */}
      <SiteVisitBookingForm
        projectName="Sampan Motalib Skyline"
        bgTheme="about-ivory"
      />

    </main>
  );
}
