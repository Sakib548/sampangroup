import type { Metadata } from "next";
import AgroHero from "../components/AgroHero";
import FarmToTableStorytelling from "../components/FarmToTableStorytelling";
import AgroProductsCatalog from "../components/AgroProductsCatalog";
import AgroHowToBuy from "../components/AgroHowToBuy";
import AgroSeasonalAvailability from "../components/AgroSeasonalAvailability";
import AgroLocationAndMap from "../components/AgroLocationAndMap";
import AgroPhotosGallery from "../components/AgroPhotosGallery";
import AgroNearbyModule from "../components/AgroNearbyModule";
import AgroWholesaleOrderForm from "../components/AgroWholesaleOrderForm"; // wait, let's verify exact file name

export const metadata: Metadata = {
  title: "Sampan Eco & Agro | Organic Cultivation & Bulk Farm Produce",
  description: "Sampan Eco & Agro offers organic farm crops, seasonal fruits, bio-secure vegetables, and wholesale farmgate supply across Bangladesh.",
};

const storyParagraphs = [
  "Founded with a vision to revitalize Bangladesh's agriculture, Sampan Eco & Agro operates expansive organic crop estates and greenhouse complexes. We combine traditional soil care with precision drip irrigation and bio-pesticides.",
  "Our farm-to-table promise guarantees that produce harvested at dawn reaches wholesale markets, processing hubs, and supermarket shelves within hours, preserving peak nutritional value and natural taste.",
];

const storyPillars = [
  {
    title: "Zero Chemical Pesticides",
    description: "100% organic neem oil sprays, bio-fertilizers, and natural pest barrier crops.",
    icon: "seed" as const,
  },
  {
    title: "Solar-Powered Irrigation",
    description: "Eco-friendly solar water pumping and automated drip irrigation for water conservation.",
    icon: "sun" as const,
  },
  {
    title: "Pure Soil Reclamation",
    description: "Organic composting and crop rotation to enrich soil minerals naturally.",
    icon: "water" as const,
  },
  {
    title: "Direct Cold Transport",
    description: "Temperature-controlled farmgate logistics for zero post-harvest spoilage.",
    icon: "truck" as const,
  },
];

const ecoAgroProducts = [
  {
    id: "organic-tomato",
    name: "Red Vine Organic Tomatoes",
    category: "Fresh Vegetables",
    priceBDT: "45 BDT / kg",
    packSize: "20 kg Crate",
    image: "/images/brand/sampanechoagro.png",
    tag: "Fresh Harvest",
    description: "Juicy, firm red vine tomatoes cultivated in greenhouse conditions without synthetic ripening agents.",
    highlights: ["100% Vine Ripened", "Zero Ripening Chemicals", "20kg Standard Agro Crate"],
  },
  {
    id: "mango-haribhanga",
    name: "Rangpur Haribhanga Mangoes",
    category: "Seasonal Fruits",
    priceBDT: "120 BDT / kg",
    packSize: "10 kg Box",
    image: "/images/brand/sampanechoagro.png",
    tag: "Summer Special",
    description: "Fibreless, sweet, highly aromatic Haribhanga mangoes harvested direct from our Rangpur orchard estate.",
    highlights: ["Fibreless Sweet Pulp", "Naturally Tree Ripened", "Export Grade Quality"],
  },
  {
    id: "potatoes-diamond",
    name: "Organic Diamond Potatoes",
    category: "Fresh Vegetables",
    priceBDT: "28 BDT / kg",
    packSize: "50 kg Jute Bag",
    image: "/images/brand/sampanechoagro.png",
    description: "High-density starch diamond potatoes ideal for household cooking and commercial chip manufacturing.",
    highlights: ["Low Moisture Starch", "Cleaned & Sorted", "Long Cold-Storage Life"],
  },
  {
    id: "guava-kazipara",
    name: "Thai Kazi Guava",
    category: "Seasonal Fruits",
    priceBDT: "75 BDT / kg",
    packSize: "15 kg Crate",
    image: "/images/brand/sampanechoagro.png",
    tag: "Year-Round",
    description: "Crisp, sweet, seed-light Thai Guava rich in Vitamin C, harvested weekly year-round.",
    highlights: ["Crisp Flesh & Light Seed", "High Vitamin C", "Foam Net Wrapped"],
  },
  {
    id: "mustard-seed",
    name: "Organic Yellow Mustard Seed",
    category: "Grains & Oilseeds",
    priceBDT: "110 BDT / kg",
    packSize: "25 kg Sack",
    image: "/images/brand/sampanechoagro.png",
    description: "High oil-content organic yellow mustard seeds for cold-pressed mustard oil production.",
    highlights: ["42% Oil Content", "Sun Dried & De-dusted"],
  },
];

const buyingChannels = [
  {
    id: "1",
    title: "Farmgate Bulk Pickup",
    subtitle: "Direct From Estate",
    description: "Wholesale merchants and truck operators can load freshly harvested crates direct from our farmgate packing centers.",
    features: ["Lowest Wholesale Rate", "Live Weighbridge Scale", "Instant Quality Inspection"],
    icon: "farmgate" as const,
    recommendedFor: "Aratdars & Regional Wholesalers",
  },
  {
    id: "2",
    title: "Reefer Truck B2B Supply",
    subtitle: "Doorstep Warehouse Dispatch",
    description: "Insulated temperature-controlled truckloads dispatched directly to city distribution centers and supermarket hubs.",
    features: ["Temperature Monitored", "Zero Transport Loss", "Scheduled Daily Delivery"],
    icon: "truck" as const,
    recommendedFor: "Supermarket Chains & Processing Factories",
  },
  {
    id: "3",
    title: "Contract Farming Supply",
    subtitle: "Guaranteed Annual Volume",
    description: "Pre-arranged annual or seasonal crop acreage contracts tailored for exporters and food processing corporations.",
    features: ["Fixed Price Contract", "Custom Seed Selection", "Phytosanitary Certification"],
    icon: "b2b" as const,
    recommendedFor: "Food Exporters & Processing Plants",
  },
  {
    id: "4",
    title: "Sampan Mart Outlet Supply",
    subtitle: "Direct Retail Outlets",
    description: "Walk-in retail purchases available at all Sampan Mart and Mini Sampan neighborhood super shops.",
    features: ["Consumer Small Packs", "Barcode Scanned", "Sanitized Consumer Bags"],
    icon: "store" as const,
    recommendedFor: "Household Consumers & Small Kitchens",
  },
];

const seasonalCalendar = [
  {
    seasonName: "Summer (Baishakh - Jaistha)" as const,
    seasonCode: "summer" as const,
    description: "Peak harvest for tropical sweet fruits, gourds, cucumbers, and summer spices.",
    icon: "sun" as const,
    items: [
      { name: "Haribhanga Mangoes", category: "Fruits", peakMonths: "May - July", status: "Peak Harvest" as const, notes: "Direct Rangpur orchard harvest" },
      { name: "Organic Cucumber", category: "Vegetables", peakMonths: "April - June", status: "Peak Harvest" as const, notes: "Greenhouse drip irrigated" },
      { name: "Watermelon", category: "Fruits", peakMonths: "March - May", status: "Available" as const, notes: "High sugar brix level" },
    ],
  },
  {
    seasonName: "Monsoon (Ashar - Shravan)" as const,
    seasonCode: "monsoon" as const,
    description: "Heavy rain season yield for leafy greens, papayas, and root crops.",
    icon: "rain" as const,
    items: [
      { name: "Green Papaya", category: "Vegetables", peakMonths: "July - Sept", status: "Peak Harvest" as const, notes: "High papain enzyme content" },
      { name: "Jute Leaves (Pat Shak)", category: "Leafy Greens", peakMonths: "June - Aug", status: "Peak Harvest" as const, notes: "Organic soil grown" },
    ],
  },
  {
    seasonName: "Winter (Kartik - Falgun)" as const,
    seasonCode: "winter" as const,
    description: "Bumper harvest for cauliflower, cabbage, carrots, tomatoes, and winter potatoes.",
    icon: "winter" as const,
    items: [
      { name: "Snowball Cauliflower", category: "Vegetables", peakMonths: "Nov - Feb", status: "Peak Harvest" as const, notes: "Pest-free net enclosure" },
      { name: "Red Vine Tomatoes", category: "Vegetables", peakMonths: "Dec - March", status: "Peak Harvest" as const, notes: "Vine ripened sweet tomatoes" },
      { name: "Diamond Potatoes", category: "Root Crops", peakMonths: "Jan - April", status: "Peak Harvest" as const, notes: "Cold-storage ready" },
    ],
  },
];

const ecoAgroFacilities = [
  {
    name: "Sampan Eco & Agro Central Farm Estate",
    type: "Organic Crop Farm & Packing Center",
    address: "Sreemangal Agro Zone, Moulvibazar, Sylhet Division",
    phone: "+880 1700-888999",
    operatingHours: "06:00 AM - 06:00 PM Daily",
    gpsCoordinates: "24.3000° N, 91.7000° E",
    keyAssets: ["150 Acres Organic Fields", "Solar Drip Irrigation", "Cold Storage Warehouse", "Agro Weighbridge"],
  },
];

const photos = [
  { id: "photo-1", title: "Organic Crop Fields", category: "Cultivation", image: "/images/brand/sampanechoagro.png", caption: "Expansive solar-drip irrigated organic crop fields in Sreemangal." },
  { id: "photo-2", title: "Harvesting & Sorting", category: "Farmgate Operations", image: "/images/brand/sampanechoagro.png", caption: "Hygienic sorting and washing of vine tomatoes before crate packaging." },
  { id: "photo-3", title: "Cold Storage Warehouse", category: "Logistics", image: "/images/brand/sampanechoagro.png", caption: "Temperature-controlled holding room maintaining produce freshness." },
];

const nearbyConcerns = [
  {
    name: "Sampan Agro & Golf Resort",
    category: "Hospitality & Leisure",
    distance: "Adjacent (500 meters)",
    tagline: "Integrated agro-resort, golf academy, and family leisure destination.",
    href: "/our_divisions/hospitality-highway-travel/sampan-agro-golf-resort",
    logo: "/images/brand/agroandgolf.png",
    icon: "resort" as const,
  },
  {
    name: "Sampan Fish & Meat",
    category: "Agro & Fresh Produce",
    distance: "2 km",
    tagline: "Bio-secure aquaculture & fresh meat processing hub.",
    href: "/our_divisions/agro-fresh-produce/sampan-fish-and-meat",
    logo: "/images/brand/fishandmeat.png",
    icon: "superstore" as const,
  },
];

export default function SampanEcoAgroPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950">
      
      {/* 1. Hero Banner */}
      <AgroHero
        title="Sampan Eco & Agro"
        subtitle="Organic Crop Estates, Seasonal Fruits & Bulk Farmgate Supply"
        concernName="Sampan Eco & Agro"
        logo="/images/brand/sampanechoagro.png"
        statusBadge="Organic Cultivation & Bulk B2B Supply"
        statusType="operating"
        description="Operating over 150 acres of certified organic crop fields, fruit orchards, and solar-drip greenhouse complexes. Supplying fresh, chemical-free vegetables and seasonal fruits to supermarket chains, hotel groups, and wholesale market distributors."
        bannerImage="/images/brand/sampanechoagro.png"
        facts={[
          { value: "150+", label: "Acres Organic Estates" },
          { value: "100%", label: "Chemical-Free Produce" },
          { value: "500+ Tons", label: "Annual Crop Yield" },
        ]}
        accentColor="#15803d"
        badgeColor="#16a34a"
      />

      {/* 2. Farm-to-Table Storytelling */}
      <FarmToTableStorytelling
        title="Farm-to-Table Storytelling & Our Philosophy"
        subtitle="Nurturing Bangladesh's soil with organic cultivation, solar irrigation, and zero harmful synthetic pesticides."
        concernName="Sampan Eco & Agro"
        storyParagraphs={storyParagraphs}
        pillars={storyPillars}
        farmImage="/images/brand/sampanechoagro.png"
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 3. What's Sold */}
      <AgroProductsCatalog
        title="What's Sold — Fresh Harvest & Produce Catalog"
        subtitle="Explore our organic farm vegetables, seasonal orchard fruits, grains, and oilseeds available for bulk purchase."
        products={ecoAgroProducts}
        bgTheme="about-ivory"
        accentColor="#15803d"
        badgeColor="#16a34a"
      />

      {/* 4. How to Buy */}
      <AgroHowToBuy
        title="How to Buy — Procurement Channels"
        subtitle="Choose your preferred channel — direct farmgate pickup, reefer truck B2B delivery, or contract farming agreements."
        concernName="Sampan Eco & Agro"
        channels={buyingChannels}
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 5. Seasonal Availability */}
      <AgroSeasonalAvailability
        title="Seasonal Harvest Availability Matrix"
        subtitle="Check harvest schedules across Summer, Monsoon, and Winter agricultural cycles."
        concernName="Sampan Eco & Agro"
        seasons={seasonalCalendar}
        bgTheme="about-ivory"
        accentColor="#15803d"
      />

      {/* 6. Location + Map */}
      <AgroLocationAndMap
        title="Farm Estate Locations & Facilities"
        subtitle="Visit our primary organic crop estate and central packing hub in Moulvibazar."
        concernName="Sampan Eco & Agro"
        facilities={ecoAgroFacilities}
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.482025178652!2d91.7000!3d24.3000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDE4JzAwLjAiTiA5McKwNDInMDAuMCJF!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd"
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 7. Photo Gallery */}
      <AgroPhotosGallery
        title="Farm Field Operations & Harvest Gallery"
        subtitle="Take a look inside our organic farm fields, solar drip setups, and sorting hubs."
        photos={photos}
        bgTheme="about-ivory"
        accentColor="#15803d"
      />

      {/* 8. Nearby at this location */}
      <AgroNearbyModule
        title="Nearby Facilities at Sampan Agro Complex"
        subtitle="Discover our sister agro-resort, golf academy, and fisheries processing centers."
        currentStoreName="Sampan Eco & Agro"
        locationHubName="Sampan Agro Complex, Moulvibazar"
        nearbyConcerns={nearbyConcerns}
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* 9. Wholesale / B2B Ordering Form & Contact CTA */}
      <AgroWholesaleOrderForm
        title="Wholesale & B2B Bulk Order Inquiry"
        subtitle="Direct farmgate contract supply for supermarket chains, hotel groups, and wholesale market distributors."
        concernName="Sampan Eco & Agro"
        bgTheme="white"
        accentColor="#15803d"
      />

    </main>
  );
}
