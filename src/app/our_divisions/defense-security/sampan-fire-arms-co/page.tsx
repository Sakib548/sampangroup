import type { Metadata } from "next";
import DefenseHero from "../components/DefenseHero";
import ComplianceLicensingSection from "../components/ComplianceLicensingSection";
import DefenseProductCategories from "../components/DefenseProductCategories";
import LicensedEnquiryForm from "../components/LicensedEnquiryForm";
import RegulatoryAccreditationDisplay from "../components/RegulatoryAccreditationDisplay";
import DealerShowroomLocations from "../components/DealerShowroomLocations";

export const metadata: Metadata = {
  title: "Sampan Fire Arms Co. | Government Licensed Firearms & Defense Importer",
  description:
    "Sampan Fire Arms Co. is a premier government-licensed defense importer in Bangladesh supplying civilian personal protection arms, sports shooting gear, and authorized defense supplies.",
};

const heroFacts = [
  { value: "Government Enlisted", label: "Arms Importer" },
  { value: "Ministry Approved", label: "Home Affairs License" },
  { value: "100% Verified", label: "Biometric Audit Ledger" },
  { value: "Dhaka Armory", label: "Secure Showroom" },
];

const complianceDirectives = [
  "Sales strictly restricted to individuals holding a valid Arms License issued by the Ministry of Home Affairs or District Magistrate.",
  "Mandatory physical inspection of original license documents and NID verification prior to armorers hand-over.",
  "All imported firearms and ammunition lots are batch-inspected by Bangladesh Police Ordnance and DGDP certified ballistics teams.",
  "Real-time biometric sales ledger logging synced directly with law enforcement arms registry databases.",
];

const productItems = [
  {
    id: "sfa-1",
    name: "9x19mm Personal Protection Pistol",
    category: "Handguns & Pistols",
    caliber: "9x19mm Parabellum",
    capacity: "15 + 1 Rounds",
    origin: "Austria / EU Import",
    licenseRequirement: "Personal Defense Arms License (9mm Pistol)",
    description: "Lightweight polymer-framed semi-automatic pistol engineered for personal security and concealed carry compliance.",
    features: ["Striker-Fired Action with Integrated Trigger Safety", "Cold Hammer-Forged Match Grade Barrel", "Includes 2 Factory Magazines & Hard Storage Case"],
  },
  {
    id: "sfa-2",
    name: ".32 ACP Concealed Carry Revolver",
    category: "Revolvers",
    caliber: ".32 ACP / 7.65mm",
    capacity: "6 Cylinder Shots",
    origin: "Germany Import",
    licenseRequirement: "Civilian Arms License (.32 Revolver)",
    description: "Ultra-compact snubnose revolver built with aerospace-grade alloy frame for reliable personal defense.",
    features: ["Double / Single Action Trigger Mechanism", "Smooth Anti-Snag Frame Design", "Rubberized Ergonomic Grip"],
  },
  {
    id: "sfa-3",
    name: "12-Gauge Tactical Pump-Action Shotgun",
    category: "Shotguns & Sporting Arms",
    caliber: "12 Gauge (3 inch Chamber)",
    capacity: "7 + 1 Tubular Capacity",
    origin: "USA Import",
    licenseRequirement: "Shotgun / Security Agency License",
    description: "Heavy-duty 12-gauge pump-action shotgun favored by licensed security agencies and sporting shooters.",
    features: ["Dual Action Bars to Prevent Binding", "Synthetic All-Weather Stock & Forend", "Dual Bead Sights for Rapid Target Acquisition"],
  },
  {
    id: "sfa-4",
    name: ".22 LR Precision Target Sporting Rifle",
    category: "Sporting & Competition",
    caliber: ".22 Long Rifle (.22 LR)",
    capacity: "10-Round Detachable Mag",
    origin: "Czech Republic Import",
    licenseRequirement: "Sports Shooting Association License",
    description: "Match-grade bolt-action rifle designed for competition target shooting and National Rifle Association practice.",
    features: ["Adjustable Match Trigger Pull", "Heavy Bull Barrel with Threaded Muzzle", "Integrated Picatinny Optic Rail"],
  },
  {
    id: "sfa-5",
    name: "Factory Certified 9mm & .32 ACP Ammunition",
    category: "Certified Ammunition",
    caliber: "9mm / .32 / 12G / .22LR",
    capacity: "Boxes of 50 / 25 Rounds",
    origin: "EU / USA Ballistics Lot",
    licenseRequirement: "Valid Ammo Purchase Quota Entry",
    description: "Factory sealed ballistics ammunition rounds tested for primer consistency, clean burning powder, and zero residue.",
    features: ["Full Metal Jacket (FMJ) & Target Loads", "Strict CIP Ballistics Quality Control", "Logged Under Annual License Allotment"],
  },
];

const accreditations = [
  {
    agency: "Ministry of Home Affairs (MOBA)",
    accreditationTitle: "Government Firearms Importer & Dealer License",
    referenceNo: "MOBA/DEF/ARM-2024/0912",
    scope: "Authorized to import, stock, sell, and service civilian firearms, sporting rifles, and non-military security gear.",
    status: "Active & Enlisted",
  },
  {
    agency: "Directorate General of Defence Purchase (DGDP)",
    accreditationTitle: "Enlisted Defense Supplier Accreditation",
    referenceNo: "DGDP/ENL/SUP-8891/2025",
    scope: "Certified supplier for non-lethal tactical gear, armory accessories, and security equipment.",
    status: "Enlisted Supplier",
  },
  {
    agency: "Bangladesh Police Headquarters",
    accreditationTitle: "Armory Audit & Storage Facility Clearance",
    referenceNo: "BPHQ/ARM-STORE/DH-441",
    scope: "Class-A reinforced vault storage clearance with 24/7 armed escort and biometric audit logging.",
    status: "100% Compliant",
  },
];

const showrooms = [
  {
    name: "Sampan Fire Arms Co. Central Armory",
    address: "Armed Forces & Commercial Armory Belt, Gulshan-1 Corridor, Dhaka, Bangladesh.",
    phone: "+880 1929 918408 / +880 2 9884512",
    hours: "Sat – Thu: 10:00 AM – 06:00 PM (Fri Closed)",
    securityProtocol: "Physical Arms License & NID Must Be Presented at Gate Entry.",
    gpsCoordinates: "23.7812° N, 90.4154° E",
  },
];

export default function SampanFireArmsCoPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#b91c1c] selection:text-white">
      
      {/* 1. Hero Overview — Crimson Red (#b91c1c) Accent from Logo */}
      <DefenseHero
        title="Sampan Fire Arms Co."
        subtitle="Government Licensed Firearms & Defense Importer"
        divisionName="Defense & Security Division"
        statusBadge="Ministry Enlisted License #MOBA-0912"
        description="Premier government-certified firearms importer and defense contractor in Bangladesh. Supplying civilian personal protection arms, sporting rifles, target shotguns, and ammunition under strict Arms Act 1878 compliance."
        image="/images/brand/firearmsco.png"
        facts={heroFacts}
        accentColor="#b91c1c"
        badgeColor="#dc2626"
      />

      {/* 2. Section 1: Licensing & Compliance Statement */}
      <ComplianceLicensingSection
        title="Licensing & Regulatory Compliance Statement"
        subtitle="All sales, storage, and import operations are strictly governed by Bangladesh Ministry of Home Affairs directives and the Arms Act 1878."
        licenseNumber="MOBA/DEF/ARM-2024/0912"
        issuingAuthority="Ministry of Home Affairs & Bangladesh Police HQ"
        complianceStatement="Sampan Fire Arms Co. operates strictly under government issued arms importer licenses. We do not engage in unlicensed transactions. Every firearm and round of ammunition sold is recorded in government ballistics ledgers."
        keyDirectives={complianceDirectives}
        bgTheme="divisions-green"
        accentColor="#b91c1c"
      />

      {/* 3. Section 2: Product Categories Showcase */}
      <DefenseProductCategories
        title="Authorized Firearms & Ammunition Categories"
        subtitle="Explore certified handguns, sporting rifles, hunting shotguns, and target ammunition."
        products={productItems}
        bgTheme="about-ivory"
        accentColor="#b91c1c"
      />

      {/* 4. Section 3: Regulatory Accreditation Display */}
      <RegulatoryAccreditationDisplay
        title="Government Accreditations & Certifications"
        subtitle="Certified and audited by premier defense and security regulatory bodies in Bangladesh."
        accreditations={accreditations}
        bgTheme="divisions-green"
        accentColor="#b91c1c"
      />

      {/* 5. Section 4: Contact for Licensed Enquiries Only */}
      <LicensedEnquiryForm
        title="Contact for Licensed Enquiries Only"
        subtitle="Restricted inquiry portal for verified Arms License holders, Law Enforcement, and Security Agencies."
        concernName="Sampan Fire Arms Co."
        bgTheme="about-ivory"
        accentColor="#b91c1c"
      />

      {/* 6. Section 5: Dealer / Showroom Location(s) */}
      <DealerShowroomLocations
        title="Central Armory Showroom Location"
        subtitle="Visit our high-security armory showroom. Presentation of valid original Arms License is mandatory at entry."
        projectName="Sampan Fire Arms Co."
        showrooms={showrooms}
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.6!2d90.4154!3d23.7812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ6JzUyLjMiTiA5MMKwMjQnNTUuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        bgTheme="divisions-green"
        accentColor="#b91c1c"
      />

    </main>
  );
}
