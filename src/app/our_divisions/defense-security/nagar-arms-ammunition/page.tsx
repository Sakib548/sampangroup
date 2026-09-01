import type { Metadata } from "next";
import DefenseHero from "../components/DefenseHero";
import ComplianceLicensingSection from "../components/ComplianceLicensingSection";
import DefenseProductCategories from "../components/DefenseProductCategories";
import LicensedEnquiryForm from "../components/LicensedEnquiryForm";
import RegulatoryAccreditationDisplay from "../components/RegulatoryAccreditationDisplay";
import DealerShowroomLocations from "../components/DealerShowroomLocations";

export const metadata: Metadata = {
  title: "Nagar Arms & Ammunition | Historic Defense Armory & Ammunition Supplier",
  description:
    "Nagar Arms & Ammunition is a historic government-enlisted arms dealer in Bangladesh supplying precision hunting rifles, Target shotguns, cartridges, and armorers services.",
};

const heroFacts = [
  { value: "Historic Armory", label: "Govt License #1878" },
  { value: "Precision Rifles", label: "Hunting & Target" },
  { value: "Ballistics Grade", label: "Cartridges & Shells" },
  { value: "Nagar Hub", label: "Armory Showroom" },
];

const complianceDirectives = [
  "Licensed sales restricted to purchasers presenting authentic Arms License booklets issued by District Magistrates or Government Licensing Authorities.",
  "Biometric NID matching and ledger entry mandatory prior to handing over firearms or ammunition.",
  "All hunting shotguns, target rifles, and cartridges comply with national ballistics testing procedures.",
  "Annual license quota checks enforced before releasing allotment shells or target rounds.",
];

const productItems = [
  {
    id: "naac-1",
    name: "12-Gauge Over/Under Sporting Shotgun",
    category: "Hunting & Target Shotguns",
    caliber: "12 Gauge (2.75 & 3 inch)",
    capacity: "2 Rounds (Over/Under)",
    origin: "Italy / EU Import",
    licenseRequirement: "Civilian Shotgun License",
    description: "Hand-engraved over/under double barrel shotgun featuring walnut stock and selectable chokes for clay target and game hunting.",
    features: ["Selected European Walnut Wood Stock", "Vented Rib Barrel with Fiber Optic Front Bead", "Single Selective Mechanical Trigger"],
  },
  {
    id: "naac-2",
    name: ".30-06 Springfield Precision Bolt-Action Rifle",
    category: "Precision Bolt-Action Rifles",
    caliber: ".30-06 Springfield",
    capacity: "4 + 1 Rounds",
    origin: "USA / EU Import",
    licenseRequirement: "Special Arms License (.30-06 Rifle)",
    description: "High-precision bolt-action rifle designed for long-range target shooting and big game hunting applications.",
    features: ["Sub-MOA Accuracy Guarantee", "Smooth 60-Degree Bolt Throw", "Adjustable Trigger Pull (2.5 – 4 lbs)"],
  },
  {
    id: "naac-3",
    name: ".22 Hornet Varmint & Target Rifle",
    category: "Target Rifles",
    caliber: ".22 Hornet",
    capacity: "5-Round Rotary Mag",
    origin: "Germany Import",
    licenseRequirement: "Target Shooting / Rifle License",
    description: "Flat-shooting lightweight precision rifle ideal for small game hunting and long-distance target practice.",
    features: ["Cold Hammer-Forged Free-Floating Barrel", "Integral Scope Mount Machining", "Checkered European Walnut Stock"],
  },
  {
    id: "naac-4",
    name: "Premium 12G Shotgun Shells & Target Cartridges",
    category: "Ammunition & Cartridges",
    caliber: "12G Birdshot / Buckshot / Slugs",
    capacity: "Box of 25 Shells",
    origin: "Italy / Spain Import",
    licenseRequirement: "Valid Ammo License Quota",
    description: "High-velocity shotgun shells engineered with uniform lead shot pellets and low-recoil wads.",
    features: ["Hardened Lead & Steel Pellet Options", "Primer Anti-Corrosion Protection", "Consistent Muzzle Velocity"],
  },
  {
    id: "naac-[#",
    name: "Armorers Maintenance & Cleaning Accessories",
    category: "Armory Accessories",
    categoryLabel: "Gun Care & Optics",
    caliber: "Universal Caliber Kits",
    capacity: "Complete Kit",
    origin: "USA Import",
    licenseRequirement: "General Purchase",
    description: "Professional grade brass cleaning rods, solvent oils, bore snakes, and padded tactical lock boxes.",
    features: ["Bore Cleaning Brushes & Solvent Solvents", "Waterproof Padded Gun Cases", "Optics Cleaning Solutions"],
  },
];

const accreditations = [
  {
    agency: "Ministry of Home Affairs (MOBA)",
    accreditationTitle: "Government Arms Dealer & Repair License",
    referenceNo: "MOBA/NAAC-ARM/1878-DH",
    scope: "Authorized government arms dealership for importing, stocking, selling, and repairing civilian sporting arms.",
    status: "Active & Certified",
  },
  {
    agency: "District Magistrate Armory Inspection",
    accreditationTitle: "Annual Ordnance Stock Clearance",
    referenceNo: "DM/ARM-AUDIT/2025/1102",
    scope: "Classified armory vault security inspection cleared with zero compliance discrepancies.",
    status: "Verified Clear",
  },
  {
    agency: "National Rifle Association of Bangladesh",
    accreditationTitle: "Official Sporting Equipment Partner",
    referenceNo: "NRAB/ENL-EQUIP/2024",
    scope: "Certified target shooting rifle and match cartridge supplier for national shooting competitions.",
    status: "Enlisted Partner",
  },
];

const showrooms = [
  {
    name: "Nagar Arms & Ammunition Armory Store",
    address: "Historic Armory District, Purana Paltan / Stadium Market Corridor, Dhaka, Bangladesh.",
    phone: "+880 1711 009988 / +880 2 9553311",
    hours: "Sat – Thu: 10:00 AM – 06:30 PM (Fri Closed)",
    securityProtocol: "Biometric Screening & Original Gun License Verification Required at Door.",
    gpsCoordinates: "23.7298° N, 90.4125° E",
  },
];

export default function NagarArmsAmmunitionPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#7c2d12] selection:text-white">
      
      {/* 1. Hero Overview — Bronze / Brown (#7c2d12) Accent from Crest Logo */}
      <DefenseHero
        title="Nagar Arms & Ammunition"
        subtitle="Historic Defense Armory & Ammunition Supplier"
        divisionName="Defense & Security Division"
        statusBadge="Govt Enlisted License #1878-DH"
        description="Historic government-certified armory dealer in Bangladesh. Specializing in precision hunting rifles, sporting shotguns, target cartridges, and armorers repair services under strict MOBA regulations."
        image="/images/brand/nagararmsand.png"
        facts={heroFacts}
        accentColor="#7c2d12"
        badgeColor="#ca8a04"
      />

      {/* 2. Section 1: Licensing & Compliance Statement */}
      <ComplianceLicensingSection
        title="Statutory Licensing & Compliance Statement"
        subtitle="All arms transactions, ammunition sales, and armory services strictly adhere to the Arms Act 1878 and Bangladesh Ministry of Home Affairs rules."
        licenseNumber="MOBA/NAAC-ARM/1878-DH"
        issuingAuthority="Ministry of Home Affairs & District Magistrate Dhaka"
        complianceStatement="Nagar Arms & Ammunition maintains an unbroken record of legal compliance. Every shotgun, target rifle, and cartridge box sold is registered under the buyer's official arms license allotment."
        keyDirectives={complianceDirectives}
        bgTheme="divisions-green"
        accentColor="#7c2d12"
      />

      {/* 3. Section 2: Product Categories Showcase */}
      <DefenseProductCategories
        title="Authorized Hunting Rifles, Shotguns & Cartridges"
        subtitle="Explore fine over/under shotguns, precision bolt rifles, and certified ballistics cartridges."
        products={productItems}
        bgTheme="about-ivory"
        accentColor="#7c2d12"
      />

      {/* 4. Section 3: Regulatory Accreditation Display */}
      <RegulatoryAccreditationDisplay
        title="Government Accreditations & Ordnance Certifications"
        subtitle="Audited and certified by District Magistrate inspectors and national shooting bodies."
        accreditations={accreditations}
        bgTheme="divisions-green"
        accentColor="#7c2d12"
      />

      {/* 5. Section 4: Contact for Licensed Enquiries Only */}
      <LicensedEnquiryForm
        title="Contact for Licensed Enquiries Only"
        subtitle="Restricted inquiry submission portal for valid Arms License holders and target shooting enthusiasts."
        concernName="Nagar Arms & Ammunition"
        bgTheme="about-ivory"
        accentColor="#7c2d12"
      />

      {/* 6. Section 5: Dealer / Showroom Location(s) */}
      <DealerShowroomLocations
        title="Flagship Armory Store Location"
        subtitle="Visit our historic armory showroom. Presentation of original government Arms License is required."
        projectName="Nagar Arms & Ammunition"
        showrooms={showrooms}
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14609.6!2d90.4125!3d23.7298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjCsNDMnNDcuMyJOIDkwwrAyNCc0NS4wIkU!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        bgTheme="divisions-green"
        accentColor="#7c2d12"
      />

    </main>
  );
}
