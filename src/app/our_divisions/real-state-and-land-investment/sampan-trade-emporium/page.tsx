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
  title: "Sampan Trade Emporium | Commercial Trade Center & Office Hub",
  description:
    "Multi-storey commercial trade emporium offering retail outlets, executive corporate office suites, and high capital appreciation potential.",
};

const facts = [
  { value: "Commercial", label: "Trade Emporium" },
  { value: "12 Storeys", label: "Corporate Tower" },
  { value: "500–3,000 sq ft", label: "Office Spaces" },
  { value: "24/7 Security", label: "CCTV & Valet" },
];

const units = [
  {
    id: "trade-a",
    name: "Ground Floor Retail Outlet",
    category: "Commercial Retail",
    sizeSqFt: "650 sq ft",
    bedrooms: 0,
    bathrooms: 1,
    balconies: 0,
    priceRange: "BDT 1.2 Crore",
    orientation: "Front Expressway View",
    highlights: ["High-Footfall Entrance Location", "Full Glass Showroom Display", "Central Air Conditioning Integration"],
  },
  {
    id: "trade-b",
    name: "Executive Corporate Suite",
    category: "Office Floor",
    sizeSqFt: "1,850 sq ft",
    bedrooms: 0,
    bathrooms: 2,
    balconies: 1,
    priceRange: "BDT 1.85 Crore",
    orientation: "Panoramic Urban View",
    highlights: ["Column-Free Open Layout", "Dedicated Executive Restroom & Kitchenette", "High-Speed Fiber Optic Wiring"],
  },
];

const landShareTiers = [
  {
    title: "Commercial Unit Share",
    shareSize: "0.8 Katha Undivided",
    equityRatio: "1 Commercial Unit Share",
    deedRegistration: "Sub-Kabala Registered",
    keyBenefits: ["Commercial Zoning Approval", "High Lease Rental Yield", "Dedicated Underground Parking"],
  },
];

const progressMilestones = [
  { stage: "Commercial Zoning Clearance", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2024)", notes: "Full commercial clearance approved" },
  { stage: "Piling & Basement Foundation", completionPercent: 65, status: "In Progress" as const, targetDate: "Q3 2026", notes: "Dual basement parking excavation complete" },
  { stage: "Superstructure & Handover", completionPercent: 0, status: "Upcoming" as const, targetDate: "Q4 2028", notes: "12-storey corporate tower handover" },
];

const floorPlans = [
  {
    id: "fp-trade-1",
    name: "Ground Floor Retail Arcade Layout",
    category: "Retail Floor",
    sizeSqFt: "Ground Floor",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    description: "Wide pedestrian atrium with high-visibility glass shopfronts.",
    features: ["Central Atrium", "Escalator Access", "Valet Drop-off Zone"],
  },
];

const legalCredentials = [
  {
    authority: "RAJUK / Municipality",
    approvalTitle: "Commercial Building Plan Approval",
    referenceNumber: "Memo: RJ/COMM/2025/778",
    status: "100% Cleared",
    description: "Approved for high-density commercial trade activity.",
  },
];

const renders = [
  {
    id: "r-trade-1",
    title: "Sampan Trade Emporium Exterior Facade",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    type: "image" as const,
    description: "Modern commercial glass tower facade with corporate branding areas.",
  },
];

const landmarks = [
  { landmark: "Express Highway Interchange", distance: "2 km", driveTime: "3 Mins" },
  { landmark: "Dhaka Financial District", distance: "25 km", driveTime: "25 Mins" },
];

export default function SampanTradeEmporiumPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#026597] selection:text-white">
      
      {/* 1. Hero Overview — Trade Emporium Blue (#026597) Accent from Logo */}
      <RealEstateHero
        title="Sampan Trade Emporium"
        subtitle="Commercial Trade Center & Corporate Office Hub"
        divisionName="Sampan Development Ltd"
        statusBadge="Ongoing Commercial Project"
        statusType="ongoing"
        description="A 12-storey commercial trade emporium engineered for retail outlets, executive corporate office suites, and high lease yields."
        image="/images/projects/Sampan-White-House-&-Motel.png"
        facts={facts}
        accentColor="#026597"
        badgeColor="#026597"
      />

      {/* 2. Unit Configurations */}
      <UnitTypesAndSizes
        title="Retail Outlets & Office Configurations"
        subtitle="Explore commercial space dimensions, floor areas, and pricing."
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Land Share Model */}
      <LandShareStructure
        totalLandArea="14 Katha"
        totalSharesCount="42 Commercial Shares"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location + Map */}
      <RealEstateLocationMap
        projectName="Sampan Trade Emporium"
        address="Commercial Corridor Hub, Dhaka, Bangladesh."
        gpsCoordinates="23.7812° N, 90.3954° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.6!2d90.3954!3d23.7812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ6JzUyLjMiTiA5MMKwMjMnNDMuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Construction Progress */}
      <ConstructionProgressTracker
        overallCompletionPercentage={55}
        expectedHandoverDate="Q4 2028"
        currentPhase="Basement Excavation & Foundation"
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
        defaultPropertyPriceBDT={12000000}
        bgTheme="about-ivory"
      />

      {/* 10. Brochure Download */}
      <DownloadableBrochureCTA
        projectName="Sampan Trade Emporium"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form */}
      <SiteVisitBookingForm
        projectName="Sampan Trade Emporium"
        bgTheme="about-ivory"
      />

    </main>
  );
}
