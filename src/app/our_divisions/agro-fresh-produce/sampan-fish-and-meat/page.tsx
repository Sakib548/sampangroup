import type { Metadata } from "next";
import AgroHero from "../components/AgroHero";
import FarmToTableStorytelling from "../components/FarmToTableStorytelling";
import AgroProductsCatalog from "../components/AgroProductsCatalog";
import AgroHowToBuy from "../components/AgroHowToBuy";
import AgroSeasonalAvailability from "../components/AgroSeasonalAvailability";
import AgroLocationAndMap from "../components/AgroLocationAndMap";
import AgroPhotosGallery from "../components/AgroPhotosGallery";
import AgroNearbyModule from "../components/AgroNearbyModule";
import AgroWholesaleOrderForm from "../components/AgroWholesaleOrderForm";

export const metadata: Metadata = {
  title: "Sampan Fish & Meat | Fresh, Responsibly Sourced Food for Every Table",
  description: "Sampan Fish & Meat provides bio-secure freshwater fish, wild river catch, premium halal grass-fed beef, mutton, and poultry with 100% cold-chain hygiene.",
};

const storyParagraphs = [
  "Sampan Fish & Meat was established to bring absolute hygiene, bio-security, and chemical-free assurance to Bangladesh's fresh fish and meat markets. We operate bio-secure freshwater aquaculture ponds, wild river fish collection hubs, and modern humane livestock processing units.",
  "Every fish and meat cut undergoes strict veterinary health screening, formalin-free chemical testing, and zero-temperature fluctuation cold-chain transport. From our bio-hatcheries and pastures directly to your table.",
];

const storyPillars = [
  {
    title: "100% Formalin & Chemical Free",
    description: "Zero chemical preservatives or artificial colorants, certified by independent lab testing.",
    icon: "seed" as const,
  },
  {
    title: "Bio-Secure Aquaculture Ponds",
    description: "Monitored water aeration, natural grain feed, and zero antibiotic growth promoters.",
    icon: "water" as const,
  },
  {
    title: "Grass-Fed Halal Livestock",
    description: "Ethically raised cattle and goats fed on natural pastures and clean well water.",
    icon: "sun" as const,
  },
  {
    title: "Continuous 0°C - 4°C Cold Chain",
    description: "Insulated refrigerated transport keeping meat and fish fresh without freezing texture damage.",
    icon: "truck" as const,
  },
];

const fishAndMeatProducts = [
  {
    id: "padma-hilsa",
    name: "Padma River Wild Hilsa (Ilish)",
    category: "Wild River Fish",
    priceBDT: "1,850 BDT / kg",
    packSize: "1.2 kg - 1.5 kg Whole Fish",
    image: "/images/brand/fishandmeat.png",
    tag: "Premium Catch",
    description: "Authentic wild Padma river Hilsa with natural silver sheen, rich fish-oil aroma, and soft melting texture.",
    highlights: ["100% Authentic Padma Catch", "Chemical & Formalin Free", "Cleaned & Scale Free Available"],
  },
  {
    id: "ruhi-telapia-farmed",
    name: "Bio-Farm Fresh Ruhi Fish",
    category: "Freshwater Fish",
    priceBDT: "380 BDT / kg",
    packSize: "2 kg - 3 kg Whole Fish",
    image: "/images/brand/fishandmeat.png",
    tag: "Daily Fresh",
    description: "Cultivated in bio-secure freshwater ponds fed with organic floating feed. Firm sweet flesh with no muddy odor.",
    highlights: ["Bio-Secure Pond Harvested", "No Muddy Odor", "Gutted & Cleaned Option"],
  },
  {
    id: "grassfed-beef-curry",
    name: "Grass-Fed Premium Beef Curry Cut",
    category: "Fresh Meat",
    priceBDT: "820 BDT / kg",
    packSize: "1 kg Vacuum Pack",
    image: "/images/brand/fishandmeat.png",
    tag: "100% Halal",
    description: "Tender, fresh grass-fed beef curry cuts from healthy young pasture cattle. Hygienically slaughtered and vacuum packed.",
    highlights: ["100% Certified Halal Slaughter", "Pasture Raised Cattle", "Bone-In Curry Cut"],
  },
  {
    id: "deshi-chicken",
    name: "Free-Range Deshi Poultry",
    category: "Fresh Poultry",
    priceBDT: "550 BDT / kg",
    packSize: "800g - 1.2 kg Whole Dressed",
    image: "/images/brand/fishandmeat.png",
    tag: "Free Range",
    description: "Authentic village free-range Deshi chicken raised on natural grains, high in lean protein and rich traditional broth flavor.",
    highlights: ["Free-Range Scavenged", "Zero Antibiotics", "Skin-On Dressed"],
  },
  {
    id: "mutton-leg",
    name: "Fresh Mutton Leg & Rib Cut",
    category: "Fresh Meat",
    priceBDT: "1,150 BDT / kg",
    packSize: "1 kg Pack",
    image: "/images/brand/fishandmeat.png",
    description: "Tender Bengal Black Goat mutton cuts, known nationally for rich flavor, lean muscle texture, and quick cooking.",
    highlights: ["Bengal Black Goat Breed", "Hygienically Processed", "Tender Muscle Cut"],
  },
  {
    id: "prawn-king",
    name: "Fresh Bay King Tiger Prawns (Bagda)",
    category: "Crustaceans & Marine",
    priceBDT: "1,450 BDT / kg",
    packSize: "500g Pack (15-20 Pcs)",
    image: "/images/brand/fishandmeat.png",
    tag: "Seafood Special",
    description: "Large sea-caught tiger prawns ice-chilled immediately after harvest for firm juicy crunch.",
    highlights: ["Head-On Shell-On", "Flash Ice Chilled", "Zero Preservative Chemical"],
  },
];

const buyingChannels = [
  {
    id: "1",
    title: "Reefer Truck Wholesale Dispatch",
    subtitle: "Bulk Fish & Meat Supply",
    description: "Insulated refrigerated trucks carrying iced crates dispatched daily to wholesale fish markets, hotel kitchens, and catering centers.",
    features: ["Formalin Lab Tested", "Continuous 0°C Cold Storage", "Invoice & Health Certificate"],
    icon: "truck" as const,
    recommendedFor: "Hotels, Caterers & Wholesale Markets",
  },
  {
    id: "2",
    title: "Direct Processing Hub Pickup",
    subtitle: "Wholesale Processing Center",
    description: "Caterers and commercial buyers can pick up custom-cut, portion-controlled vacuum-sealed fish and meat directly from our processing center.",
    features: ["Custom Portioning & De-Boning", "Vacuum Sealed Packs", "Live Weighing"],
    icon: "farmgate" as const,
    recommendedFor: "Commercial Kitchens & Restaurants",
  },
  {
    id: "3",
    title: "Sampan Mart Retail Counters",
    subtitle: "In-Store Meat & Fish Bar",
    description: "Walk-in fresh fish and meat counters operating inside all Sampan Mart flagship superstores and Mini Sampan outlets.",
    features: ["Custom Butchery & Fish Dressing", "Ice Bed Display", "Vacuum Sealed Takeaway"],
    icon: "store" as const,
    recommendedFor: "Household Daily Shoppers",
  },
  {
    id: "4",
    title: "Institutional Supply Contracts",
    subtitle: "Corporate & Defense Supply",
    description: "Scheduled weekly supply contracts for hospital dining halls, corporate cafeterias, university mess, and institutional buyers.",
    features: ["Fixed Contractual Rates", "Strict Weight & Veterinary Compliance", "Credit Billing Terms"],
    icon: "b2b" as const,
    recommendedFor: "Institutional Mess & Corporate Canteens",
  },
];

const seasonalCalendar = [
  {
    seasonName: "Monsoon & Autumn (Ashar - Ashwin)" as const,
    seasonCode: "monsoon" as const,
    description: "Peak season for Padma & Meghna wild Hilsa (Ilish) catch, river prawns, and freshwater fish.",
    icon: "rain" as const,
    items: [
      { name: "Padma River Wild Hilsa", category: "Wild Fish", peakMonths: "July - October", status: "Peak Harvest" as const, notes: "Highest fish-oil content & silver sheen" },
      { name: "Giant River Prawn (Golda)", category: "Seafood", peakMonths: "Aug - Nov", status: "Peak Harvest" as const, notes: "Freshwater river catch" },
    ],
  },
  {
    seasonName: "Winter (Kartik - Falgun)" as const,
    seasonCode: "winter" as const,
    description: "Peak season for pond harvested Ruhi, Katla, Chital fish, and grass-fed winter livestock.",
    icon: "winter" as const,
    items: [
      { name: "Bio-Farm Ruhi & Katla", category: "Freshwater Fish", peakMonths: "Nov - March", status: "Peak Harvest" as const, notes: "Bio-secure pond harvesting" },
      { name: "Grass-Fed Winter Beef", category: "Fresh Meat", peakMonths: "Dec - Feb", status: "Available" as const, notes: "Pasture grazed cattle" },
    ],
  },
  {
    seasonName: "Summer (Baishakh - Jaistha)" as const,
    seasonCode: "summer" as const,
    description: "Year-round availability for poultry, mutton, cultivated pangas, and sea fish.",
    icon: "sun" as const,
    items: [
      { name: "Free-Range Deshi Chicken", category: "Poultry", peakMonths: "Year-Round", status: "Available" as const, notes: "Daily farm harvest" },
      { name: "Bengal Black Goat Mutton", category: "Fresh Meat", peakMonths: "Year-Round", status: "Available" as const, notes: "Hygienic halal abattoir" },
    ],
  },
];

const fishAndMeatFacilities = [
  {
    name: "Sampan Fish & Meat Central Processing Hub & Abattoir",
    type: "Aquaculture Fisheries & Halal Processing Facility",
    address: "Sampan Complex, Dhaka-Chittagong Highway Hub, Bangladesh",
    phone: "+880 1700-777666",
    operatingHours: "04:00 AM - 08:00 PM Daily",
    gpsCoordinates: "23.7500° N, 90.4500° E",
    keyAssets: ["50 Bio-Secure Fish Ponds", "Halal Abattoir Unit", "Blast Freezer & Cold Room", "Formalin Testing Lab"],
  },
];

const photos = [
  { id: "photo-1", title: "Padma Hilsa Catch", category: "Wild River Fisheries", image: "/images/brand/fishandmeat.png", caption: "Freshly arrived Padma river wild Hilsa iced crates at central processing hub." },
  { id: "photo-2", title: "Hygienic Meat Butchery", category: "Processing", image: "/images/brand/fishandmeat.png", caption: "Stainless-steel temperature-controlled butchery line for vacuum packaging." },
  { id: "photo-3", title: "Reefer Transport Fleet", category: "Cold Chain Logistics", image: "/images/brand/fishandmeat.png", caption: "Refrigerated transport fleet delivering zero-temperature fluctuation produce." },
];

const nearbyConcerns = [
  {
    name: "Sampan Sweet Box",
    category: "Retail Shop & Super Shop",
    distance: "Adjacent (100 meters)",
    tagline: "Artisanal sweet box and highway refreshment lounge.",
    href: "/our_divisions/retail-super-shops/sampan-sweet-box",
    logo: "/images/brand/sweetbox.png",
    icon: "hotel" as const,
  },
  {
    name: "Sampan Mart",
    category: "Retail Shop & Super Shop",
    distance: "500 meters",
    tagline: "Flagship superstore with fresh fish & meat counter.",
    href: "/our_divisions/retail-super-shops/sampan-mart",
    logo: "/images/brand/sampanmart.png",
    icon: "superstore" as const,
  },
];

export default function SampanFishAndMeatPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950">
      
      {/* 1. Hero Banner */}
      <AgroHero
        title="Sampan Fish & Meat"
        subtitle="Fresh, Responsibly Sourced Bio-Secure Fish & Halal Meat for Every Table"
        concernName="Sampan Fish & Meat"
        logo="/images/brand/fishandmeat.png"
        statusBadge="Formalin-Free Certified & Cold-Chain Logistics"
        statusType="operating"
        description="Operating bio-secure freshwater aquaculture ponds, wild river fish collection hubs, and modern halal livestock processing units. Delivering 100% formalin-free, lab-tested fresh fish, beef, mutton, and poultry across Bangladesh."
        bannerImage="/images/brand/fishandmeat.png"
        facts={[
          { value: "100%", label: "Formalin & Chemical Free" },
          { value: "0°C - 4°C", label: "Cold-Chain Fleet" },
          { value: "50+", label: "Bio-Secure Ponds" },
        ]}
        accentColor="#047857"
        badgeColor="#059669"
      />

      {/* 2. Farm-to-Table Storytelling */}
      <FarmToTableStorytelling
        title="Bio-Secure Fisheries & Halal Hygiene Philosophy"
        subtitle="Bringing 100% formalin-free, bio-secure freshwater fish, wild Padma river catch, and pasture-raised halal meats directly to your kitchen."
        concernName="Sampan Fish & Meat"
        storyParagraphs={storyParagraphs}
        pillars={storyPillars}
        farmImage="/images/brand/fishandmeat.png"
        bgTheme="divisions-green"
        accentColor="#047857"
      />

      {/* 3. What's Sold */}
      <AgroProductsCatalog
        title="What's Sold — Fresh Fish, Seafood & Meat Catalog"
        subtitle="Explore our selection of wild Padma Hilsa, bio-secure Ruhi fish, grass-fed beef cuts, free-range Deshi chicken, and mutton."
        products={fishAndMeatProducts}
        bgTheme="about-ivory"
        accentColor="#047857"
        badgeColor="#059669"
      />

      {/* 4. How to Buy */}
      <AgroHowToBuy
        title="How to Buy — Wholesale & Retail Channels"
        subtitle="Choose your preferred channel — reefer truck wholesale delivery, processing hub pickup, institutional supply contracts, or Sampan Mart counters."
        concernName="Sampan Fish & Meat"
        channels={buyingChannels}
        bgTheme="divisions-green"
        accentColor="#047857"
      />

      {/* 5. Seasonal Availability */}
      <AgroSeasonalAvailability
        title="Fisheries & Livestock Seasonal Harvest Calendar"
        subtitle="Track peak Padma Hilsa river catch seasons, pond fish harvesting cycles, and winter beef availability."
        concernName="Sampan Fish & Meat"
        seasons={seasonalCalendar}
        bgTheme="about-ivory"
        accentColor="#047857"
      />

      {/* 6. Location + Map */}
      <AgroLocationAndMap
        title="Central Processing Hub & Abattoir Facility"
        subtitle="Visit our central fish collection hub, lab testing facility, and cold-storage abattoir."
        concernName="Sampan Fish & Meat"
        facilities={fishAndMeatFacilities}
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430137!2d90.4500!3d23.7500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAwLjAiTiA5MMKwMjcnMDA.MCJF!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd"
        bgTheme="divisions-green"
        accentColor="#047857"
      />

      {/* 7. Photo Gallery */}
      <AgroPhotosGallery
        title="Fisheries & Processing Operations Gallery"
        subtitle="Take a look inside our cold-chain reefer fleet, lab testing room, and fresh fish displays."
        photos={photos}
        bgTheme="about-ivory"
        accentColor="#047857"
      />

      {/* 8. Nearby at this location */}
      <AgroNearbyModule
        title="Nearby Sister Outlets at Highway Hub"
        subtitle="Explore our nearby Sampan Sweet Box lounge and flagship Sampan Mart superstore."
        currentStoreName="Sampan Fish & Meat"
        locationHubName="Sampan Highway Complex, Dhaka-Chittagong Highway"
        nearbyConcerns={nearbyConcerns}
        bgTheme="divisions-green"
        accentColor="#047857"
      />

      {/* 9. Wholesale / B2B Ordering Form & Contact CTA */}
      <AgroWholesaleOrderForm
        title="Wholesale & Commercial Bulk Supply Request"
        subtitle="Direct cold-chain supply for hotels, catering houses, exporters, hospital messes, and supermarket fish counters."
        concernName="Sampan Fish & Meat"
        bgTheme="white"
        accentColor="#047857"
      />

    </main>
  );
}
