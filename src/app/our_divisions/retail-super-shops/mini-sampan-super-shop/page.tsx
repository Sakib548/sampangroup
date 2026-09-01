import type { Metadata } from "next";
import RetailHero from "../components/RetailHero";
import RetailProductCatalog from "../components/RetailProductCatalog";
import RetailOmnichannelNote from "../components/RetailOmnichannelNote";
import RetailOffersFeed from "../components/RetailOffersFeed";
import RetailStoreLocationAndMap from "../components/RetailStoreLocationAndMap";
import RetailPhotosGallery from "../components/RetailPhotosGallery";
import RetailNearbyModule from "../components/RetailNearbyModule";
import RetailLoyaltyProgram from "../components/RetailLoyaltyProgram";
import RetailOrderInquiryForm from "../components/RetailOrderInquiryForm";

export const metadata: Metadata = {
  title: "Mini Sampan Super Shop | Express Neighborhood Convenience Outlets",
  description: "Mini Sampan Super Shop provides 15-minute neighborhood express grocery shopping, fresh bakery items, daily essentials, and 24/7 highway convenience.",
};

const miniShopProducts = [
  {
    id: "fresh-bread-milk",
    name: "Daily Morning Bakery & Milk Pack",
    category: "Breakfast Essentials",
    priceBDT: "165 BDT",
    packSize: "Sliced Bread + 1L Milk",
    image: "/images/brand/happyshopping.png",
    tag: "Daily Essential",
    description: "Freshly baked morning sandwich bread paired with 1 liter pasteurized pure milk.",
    highlights: ["Delivered Fresh Every Morning", "No Chemical Preservatives"],
  },
  {
    id: "snack-pack-express",
    name: "Express Travel Snack & Juice Combo",
    category: "Snacks & Drinks",
    priceBDT: "220 BDT",
    packSize: "Juice Pack + Chips + Biscuit",
    image: "/images/brand/happyshopping.png",
    tag: "Grab & Go",
    description: "Convenient travel snack pack for highway commuters and quick neighborhood breaks.",
    highlights: ["Ready Grab & Go", "Popular Brand Selection"],
  },
  {
    id: "fresh-eggs",
    name: "Farm Fresh Brown Eggs",
    category: "Breakfast Essentials",
    priceBDT: "155 BDT",
    packSize: "12 Eggs Tray",
    image: "/images/brand/happyshopping.png",
    description: "Antibiotic-free fresh farm brown eggs, rich in protein and omega-3.",
    highlights: ["Grade A Cleaned Eggs", "Shock-Proof Tray Pack"],
  },
  {
    id: "mineral-water-case",
    name: "Sampan Pure Mineral Water Case",
    category: "Beverages",
    priceBDT: "240 BDT",
    packSize: "500ml x 12 Bottles",
    image: "/images/brand/happyshopping.png",
    tag: "Best Value",
    description: "Ultra-purified bottled mineral water with balanced essential minerals.",
    highlights: ["Ozone Purified", "BPA Free PET Bottles"],
  },
  {
    id: "instant-noodes-pack",
    name: "Quick Masala Instant Noodles Family Pack",
    category: "Quick Meals",
    priceBDT: "180 BDT",
    packSize: "8 Packs Box",
    image: "/images/brand/happyshopping.png",
    description: "Delicious spicy masala instant wheat noodles for 2-minute quick meals.",
    highlights: ["2-Minute Easy Cooking", "Includes Real Vegetable Sachets"],
  },
  {
    id: "sanitizer-wipes",
    name: "Pocket Hand Sanitizer & Hygiene Wipes",
    category: "Personal Care",
    priceBDT: "135 BDT",
    packSize: "Combo Pack",
    image: "/images/brand/happyshopping.png",
    description: "70% alcohol antibacterial hand sanitizer gel paired with 20-pack wet wipes.",
    highlights: ["Kills 99.9% Germs", "Aloe Vera Skin Moisturizer"],
  },
];

const miniShopOffers = [
  {
    id: "mini-offer-1",
    title: "Daily Morning Breakfast Saver",
    category: "Morning Special",
    discountBadge: "SAVE 25 BDT",
    validUntil: "Daily 07:00 AM - 10:00 AM",
    description: "Buy 1L Milk + Bread + Eggs tray and save 25 BDT instantly at checkout.",
    promoCode: "MORNING25",
    inclusions: ["Available at All Neighborhood Outlets", "Instant Counter Discount"],
  },
  {
    id: "mini-offer-2",
    title: "Express Travel Combo Deal",
    category: "Highway Quick Deal",
    discountBadge: "BUY 2 GET 1 FREE",
    validUntil: "Ongoing Highway Offer",
    description: "Buy any 2 chilled juice bottles and get 1 Mineral Water bottle free.",
    promoCode: "EXPRESSTRAVEL",
    inclusions: ["Valid at 24/7 Highway Express Outlets"],
  },
];

const miniShopLocations = [
  {
    name: "Mini Sampan Super Shop — Ashulia Residency Outlet",
    address: "Ground Floor, Sampan Metro Square, Ashulia, Dhaka",
    phone: "+880 1700-333444",
    hours: "07:00 AM - 11:00 PM Daily",
    gpsCoordinates: "23.9000° N, 90.4000° E",
    parkingInfo: "Short-stay Express Pickup Parking Zone",
  },
  {
    name: "Mini Sampan Express — Highway Inn Branch",
    address: "Sampan Highway Complex, N1 Highway Rest Plaza",
    phone: "+880 1800-333444",
    hours: "24/7 Open",
    gpsCoordinates: "23.0000° N, 90.0000° E",
    parkingInfo: "Highway Drive-Thru & Express Rest Bay",
  },
];

const miniShopLoyaltyTiers = [
  {
    tierName: "Express Shopper",
    spendThreshold: "1,500 BDT",
    pointsRate: "5 Points / 100 BDT",
    badgeColor: "#16a34a",
    perks: ["5% Reward Points", "Free Coffee Token on 500 BDT Spend", "Digital Punch Card"],
  },
  {
    tierName: "Neighborhood VIP",
    spendThreshold: "8,000 BDT",
    pointsRate: "10 Points / 100 BDT",
    badgeColor: "#d97706",
    perks: ["10% Reward Points", "15-Minute Free Neighborhood Delivery", "Priority Morning Milk Reservation"],
  },
];

const nearbyConcerns = [
  {
    name: "Sampan Sweet Box",
    category: "Retail Shop & Super Shop",
    distance: "Adjacent",
    tagline: "Premium sweets, confectionery & artisanal mishti.",
    href: "/our_divisions/retail-super-shops/sampan-sweet-box",
    logo: "/images/brand/sweetbox.png",
    icon: "cafe" as const,
  },
  {
    name: "Sampan Filling Station",
    category: "Automotive & Fuel",
    distance: "100 meters",
    tagline: "24/7 Octane 95, Diesel & lubricants station.",
    href: "/our_divisions/automotive-fuel-mobility/sampan-filling-station",
    logo: "/images/brand/sampanfillingstation.png",
    icon: "fuel" as const,
  },
];

const photos = [
  { id: "photo-1", title: "Neighborhood Outlet", category: "Store Outlet", image: "/images/brand/happyshopping.png", caption: "Mini Sampan Super Shop Neighborhood Outlet" },
  { id: "photo-2", title: "Express Counter", category: "24/7 Convenience", image: "/images/brand/happyshopping.png", caption: "24/7 Grab & Go Express Counter" },
  { id: "photo-3", title: "Refrigerated Aisle", category: "Dairy & Fresh", image: "/images/brand/happyshopping.png", caption: "Fresh Breakfast & Dairy Refrigerated Aisle" },
];

export default function MiniSampanSuperShopPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950">
      
      {/* 1. Hero Banner */}
      <RetailHero
        title="Mini Sampan Super Shop"
        subtitle="Express Neighborhood Outlets & Daily Quick Essentials"
        concernName="Mini Sampan Super Shop"
        logo="/images/brand/happyshopping.png"
        statusBadge="Neighborhood Outlets Operational"
        statusType="operating"
        description="Compact 15-minute neighborhood super shops designed for residential communities, highway rest stops, and high-density apartment complexes. Offering daily fresh milk, bread, eggs, snacks, beverages, and emergency household supplies 24/7."
        bannerImage="/images/brand/happyshopping.png"
        facts={[
          { value: "15 Mins", label: "Walk-in & Quick Pickup" },
          { value: "24/7", label: "Select Highway Outlets" },
          { value: "1,000+", label: "Essential Items" },
        ]}
        accentColor="#16a34a"
        badgeColor="#22c55e"
        openingHours="07:00 AM - 11:00 PM (24/7 at Highway Outlets)"
      />

      {/* 2. Product Catalog */}
      <RetailProductCatalog
        title="Daily Essentials & Quick Snacks"
        subtitle="Explore our selection of morning fresh dairy, bakery items, grab-and-go snacks, and household quick items."
        products={miniShopProducts}
        bgTheme="about-ivory"
        accentColor="#16a34a"
        badgeColor="#22c55e"
      />

      {/* 3. Omnichannel Experience Note */}
      <RetailOmnichannelNote
        title="Walk-in Quick Pickup or Express Delivery"
        subtitle="Step into your nearby Mini Sampan outlet for instant 2-minute checkout or call for 15-minute neighborhood delivery."
        concernName="Mini Sampan Super Shop"
        bgTheme="divisions-green"
        accentColor="#16a34a"
      />

      {/* 4. Weekly Offers & Discounts */}
      <RetailOffersFeed
        title="Daily Morning & Travel Deals"
        subtitle="Enjoy morning breakfast combo savings and highway travel quick discounts."
        offers={miniShopOffers}
        bgTheme="about-ivory"
        accentColor="#16a34a"
      />

      {/* 5. Loyalty Program */}
      <RetailLoyaltyProgram
        title="Mini Sampan Express Club"
        subtitle="Earn punch points on daily milk and bread purchases for free coffee and grocery vouchers."
        programName="Mini Sampan Express Club"
        tiers={miniShopLoyaltyTiers}
        bgTheme="white"
        accentColor="#16a34a"
      />

      {/* 6. Physical Store Locations */}
      <RetailStoreLocationAndMap
        title="Neighborhood Express Outlets"
        subtitle="Find your nearest Mini Sampan Super Shop location."
        projectName="Mini Sampan Express Outlets"
        locations={miniShopLocations}
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430137!2d90.4000!3d23.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd"
        bgTheme="divisions-green"
        accentColor="#16a34a"
      />

      {/* 7. Photo Gallery */}
      <RetailPhotosGallery
        title="Express Outlet Gallery"
        subtitle="A quick look inside our neighborhood convenience stores."
        photos={photos}
        bgTheme="about-ivory"
        accentColor="#16a34a"
      />

      {/* 8. Nearby Sister Concerns */}
      <RetailNearbyModule
        title="Nearby Sister Outlets"
        subtitle="Discover our sweet box and filling station facilities right next door."
        currentStoreName="Mini Sampan Super Shop"
        locationHubName="Sampan Community Outlet Plaza"
        nearbyConcerns={nearbyConcerns}
        bgTheme="divisions-green"
        accentColor="#16a34a"
      />

      {/* 9. Order & Inquiry Form */}
      <RetailOrderInquiryForm
        title="Neighborhood Order & Franchise Inquiry"
        subtitle="Submit a quick grocery request or inquire about opening a Mini Sampan outlet in your residential area."
        concernName="Mini Sampan Super Shop"
        bgTheme="white"
        accentColor="#16a34a"
      />

    </main>
  );
}
