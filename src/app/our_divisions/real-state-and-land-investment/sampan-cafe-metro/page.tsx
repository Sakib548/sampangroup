import type { Metadata } from "next";
import RealEstateHero from "../components/RealEstateHero";
import CafeMetroSpecial from "../components/CafeMetroSpecial";
import WalkthroughRenderGallery from "../components/WalkthroughRenderGallery";
import SiteVisitBookingForm from "../components/SiteVisitBookingForm";
import RealEstateLocationMap from "../components/RealEstateLocationMap";

export const metadata: Metadata = {
  title: "Sampan Cafe Metro | Auto, Hydro Car Wash & Cafe Lounge",
  description:
    "Integrated expressway transit hub featuring premium hydro car wash, artisanal cafe dining, and Sampan Auto luxury vehicle inventory browser.",
};

const facts = [
  { value: "24/7", label: "Hydro Car Wash" },
  { value: "08 AM - 11 PM", label: "Cafe Dining Hours" },
  { value: "50+ Vehicles", label: "Auto Inventory" },
  { value: "Expressway Exit", label: "Transit Location" },
];

const landmarks = [
  { landmark: "Expressway Toll Plaza", distance: "4 km", driveTime: "5 Mins" },
  { landmark: "Sampan Highway Inn", distance: "6 km", driveTime: "7 Mins" },
  { landmark: "Dhaka Zero Point", distance: "32 km", driveTime: "35 Mins" },
];

export default function SampanCafeMetroPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#4c2a85] selection:text-white">

      {/* 1. Hero Overview — Custom Purple (#4c2a85) Accent & Red (#b21f24) Badge from Logo */}
      <RealEstateHero
        title="Sampan Cafe Metro"
        subtitle="Auto Service, Hydro Car Wash & Garden Cafe"
        divisionName="Real Estate & Hospitality Concern"
        statusBadge="Ongoing Operation"
        statusType="ongoing"
        description="A premier highway stopover combining high-pressure hydro car washing, organic coffee dining, and a curated Sampan Auto vehicle showroom."
        image="/images/projects/sampanmetrosquare.jpg"
        facts={facts}
        accentColor="#4c2a85"
        badgeColor="#b21f24"
      />

      {/* 2. Cafe Metro Special Component */}
      <CafeMetroSpecial />

      {/* 3. Location + Map */}
      <RealEstateLocationMap
        title="Expressway Location & Access"
        subtitle="Positioned along the main arterial corridor for fast stopovers."
        projectName="Sampan Cafe Metro"
        address="Expressway Transit Corridor Exit, Dhaka, Bangladesh."
        gpsCoordinates="23.7512° N, 90.3845° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.6!2d90.3845!3d23.7512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzA0LjMiTiA5MMKwMjMnMDQuMiJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="about-ivory"
      />

      {/* 4. Site Visit / Slot Enquiry */}
      <SiteVisitBookingForm
        title="Inquire Auto Service & VIP Lounge"
        subtitle="Schedule a vehicle inspection or reserve a private dining table at Cafe Metro."
        projectName="Sampan Cafe Metro"
        bgTheme="divisions-green"
      />

    </main>
  );
}
