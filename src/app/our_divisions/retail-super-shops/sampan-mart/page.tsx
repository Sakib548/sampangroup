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
  title: "Sampan Mart | Flagship Online & Offline Super Shop",
  description: "Sampan Mart is Sampan Group's upcoming flagship omnichannel super shop offering fresh groceries, imported gourmet items, and 30-minute doorstep delivery.",
};

const sampanMartProducts = [
  {
    id: "organic-produce",
    name: "Sampan Agro Organic Produce Basket",
    category: "Fresh Farm Produce",
    priceBDT: "850 BDT",
    packSize: "5 kg Assorted Vegetables",
    image: "/images/brand/sampanmart.png",
    tag: "100% Organic",
    description: "Daily fresh harvested seasonal vegetables direct from Sampan Eco & Agro farms without synthetic pesticides.",
    highlights: ["Direct Farm Harvest", "Zero Chemical Pesticides", "Washed & Hygienic Pack"],
  },
  {
    id: "olive-oil-extra",
    name: "Imported Cold Pressed Extra Virgin Olive Oil",
    category: "Gourmet Imports",
    priceBDT: "1,850 BDT",
    packSize: "1 Liter Bottle",
    image: "/images/brand/sampanmart.png",
    tag: "Imported",
    description: "Single-estate cold pressed Spanish Extra Virgin Olive Oil rich in antioxidants and polyphenols.",
    highlights: ["First Cold Press", "Glass Bottle Packaging", "Heart Healthy"],
  },
  {
    id: "basmati-rice",
    name: "Premium Shahi Aged Basmati Rice",
    category: "Daily Staples",
    priceBDT: "1,250 BDT",
    packSize: "5 kg Bag",
    image: "/images/brand/sampanmart.png",
    tag: "Super Saver",
    description: "Extra long grain 2-year aged aromatic Basmati rice for biryani and fine dining.",
    highlights: ["2 Years Aged", "Aromatic Long Grain", "Non-Sticky Cook"],
  },
  {
    id: "dairy-milk",
    name: "Sampan Fresh Pasteurized Whole Milk",
    category: "Dairy & Eggs",
    priceBDT: "110 BDT",
    packSize: "1 Liter Pouch",
    image: "/images/brand/sampanmart.png",
    description: "Pure farm fresh pasteurized milk with full cream content, rich in calcium and vitamin D.",
    highlights: ["100% Pure Cow Milk", "Hygienically Pasteurized", "No Water Addition"],
  },
  {
    id: "salmon-fillet",
    name: "Frozen Norwegian Atlantic Salmon Fillet",
    category: "Frozen & Meats",
    priceBDT: "3,200 BDT / kg",
    packSize: "500g Vacuum Pack",
    image: "/images/brand/sampanmart.png",
    tag: "Gourmet",
    description: "Premium sashimi-grade Norwegian salmon vacuum sealed and blast frozen to preserve omega-3 freshness.",
    highlights: ["Air-Flown Fresh", "High Omega-3", "Skin-On Boneless"],
  },
  {
    id: "cleaning-combo",
    name: "Sampan Home Hygiene Master Bundle",
    category: "Household & Cleaning",
    priceBDT: "1,450 BDT",
    packSize: "6-in-1 Box",
    image: "/images/brand/sampanmart.png",
    description: "Complete home sanitization kit including floor cleaner, dishwashing liquid, laundry detergent, and disinfectant spray.",
    highlights: ["Antibacterial Formula", "Eco-Friendly Ingredients", "Value Combo Pack"],
  },
];

const sampanMartOffers = [
  {
    id: "mart-offer-1",
    title: "App Grand Opening Early Bird Coupon",
    category: "New App Offer",
    discountBadge: "25% OFF",
    validUntil: "Grand Launch Promotion",
    description: "Download the Sampan Mart app and apply coupon code FIRSTMART25 to get 25% flat discount on your first order above 2,000 BDT.",
    promoCode: "FIRSTMART25",
    inclusions: ["Valid on All Grocery Categories", "Free First Delivery", "Express 30-Min Dispatch"],
  },
  {
    id: "mart-offer-2",
    title: "Weekly Grocery Super Savers Combo",
    category: "Weekly Specials",
    discountBadge: "SAVE 400 BDT",
    validUntil: "Valid Every Friday & Saturday",
    description: "Order 5kg Rice + 2L Cooking Oil + 2kg Pulses and save 400 BDT instantly at checkout.",
    promoCode: "SUPERSAVER400",
    inclusions: ["Bundle Discount Applied Automatically", "In-Store & App Eligible"],
  },
];

const sampanMartLocations = [
  {
    name: "Sampan Mart Flagship Superstore & Fulfillment Hub",
    address: "Sampan Complex, Ashulia Expressway, Dhaka",
    phone: "+880 1700-111222",
    hours: "08:00 AM - 11:30 PM Daily",
    gpsCoordinates: "23.9000° N, 90.4000° E",
    parkingInfo: "200+ Basement Car Parking & EV Fast Chargers Available",
  },
];

const sampanMartLoyaltyTiers = [
  {
    tierName: "Mart Silver Shopper",
    spendThreshold: "3,000 BDT",
    pointsRate: "5 Points / 100 BDT",
    badgeColor: "#64748b",
    perks: ["5% Reward Points", "Free Monthly Delivery Voucher", "Digital Receipt Tracking"],
  },
  {
    tierName: "Mart Gold VIP",
    spendThreshold: "15,000 BDT",
    pointsRate: "10 Points / 100 BDT",
    badgeColor: "#d97706",
    perks: ["10% Reward Points", "Free Express 30-Min Delivery", "Priority Checkout Counter"],
  },
  {
    tierName: "Mart Platinum Elite",
    spendThreshold: "40,000 BDT",
    pointsRate: "15 Points / 100 BDT",
    badgeColor: "#0284c7",
    perks: ["15% Reward Points", "Personal Shopper Concierge", "Exclusive Imported Gourmet Preview Access"],
  },
];

const nearbyConcerns = [
  {
    name: "Sampan Metro Square",
    category: "Real Estate & Condominiums",
    distance: "Adjacent (100 meters)",
    tagline: "Modern residential condominium project in Ashulia.",
    href: "/our_divisions/real-state-and-land-investment/sampan-metro-square",
    logo: "/images/brand/sampanmetrosquare.png",
    icon: "hotel" as const,
  },
  {
    name: "Sampan EV Car Charging Station",
    category: "Automotive & Fuel",
    distance: "On Premises",
    tagline: "Ultra-fast 120kW DC fast charging station.",
    href: "/our_divisions/automotive-fuel-mobility/sampan-ev-car-charging-station",
    logo: "/images/brand/evc.png",
    icon: "fuel" as const,
  },
];

const photos = [
  { id: "photo-1", title: "Superstore Interior", category: "Store Outlet", image: "/images/brand/sampanmart.png", caption: "Sampan Mart Flagship Superstore Interior" },
  { id: "photo-2", title: "Organic Produce Aisle", category: "Fresh Produce", image: "/images/brand/sampanmart.png", caption: "Fresh Farm Organic Produce & Gourmet Aisle" },
  { id: "photo-3", title: "Express Fleet Hub", category: "Logistics", image: "/images/brand/happyshopping.png", caption: "30-Minute Express Delivery Fleet Hub" },
];

export default function SampanMartPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950">
      
      {/* 1. Hero Banner */}
      <RetailHero
        title="Sampan Mart"
        subtitle="Flagship Omnichannel Super Shop & Gourmet Grocery Hub"
        concernName="Sampan Mart"
        logo="/images/brand/sampanmart.png"
        statusBadge="Grand Opening & App Launch Coming Soon"
        statusType="coming-soon"
        description="Combining high-tech automated fulfillment centers with luxury physical walk-in retail lounges. Offering premium imported gourmet delicacies, fresh farm-to-table organic produce, household electronics, and express 30-minute doorstep delivery."
        bannerImage="/images/brand/sampanmart.png"
        facts={[
          { value: "15,000+", label: "SKUs & Products" },
          { value: "30 Mins", label: "Express Doorstep Delivery" },
          { value: "100%", label: "Organic Farm Fresh" },
        ]}
        accentColor="#2563eb"
        badgeColor="#3b82f6"
        openingHours="08:00 AM - 11:30 PM Daily"
      />

      {/* 2. Product Catalog */}
      <RetailProductCatalog
        title="Featured Groceries & Gourmet Offerings"
        subtitle="Discover our wide range of organic farm produce, daily kitchen staples, imported gourmet items, and household essentials."
        products={sampanMartProducts}
        bgTheme="about-ivory"
        accentColor="#2563eb"
        badgeColor="#3b82f6"
      />

      {/* 3. Omnichannel Experience Note */}
      <RetailOmnichannelNote
        title="Seamless Online & Walk-in Shopping"
        subtitle="Order via app for 30-minute doorstep delivery or visit our flagship walk-in superstore experience lounge."
        concernName="Sampan Mart"
        bgTheme="divisions-green"
        accentColor="#2563eb"
      />

      {/* 4. Weekly Offers & Discounts */}
      <RetailOffersFeed
        title="Weekly Savers & App Exclusive Deals"
        subtitle="Save big with weekend grocery bundles, launch coupons, and daily basket discounts."
        offers={sampanMartOffers}
        bgTheme="about-ivory"
        accentColor="#2563eb"
      />

      {/* 5. Loyalty Program */}
      <RetailLoyaltyProgram
        title="Sampan Mart Club Rewards"
        subtitle="Earn cashback points on every grocery item and unlock free express delivery tier benefits."
        programName="Sampan Mart Club Rewards"
        tiers={sampanMartLoyaltyTiers}
        bgTheme="white"
        accentColor="#2563eb"
      />

      {/* 6. Physical Store Locations */}
      <RetailStoreLocationAndMap
        title="Flagship Store & Fulfillment Location"
        subtitle="Visit our physical superstore in Ashulia or track your local express fulfillment hub."
        projectName="Sampan Mart Flagship Superstore"
        locations={sampanMartLocations}
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430137!2d90.4000!3d23.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU0JzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd"
        bgTheme="divisions-green"
        accentColor="#2563eb"
      />

      {/* 7. Photo Gallery */}
      <RetailPhotosGallery
        title="Superstore & Logistics Gallery"
        subtitle="Take a look inside our modern superstore aisles, cold-chain fulfillment, and express delivery fleet."
        photos={photos}
        bgTheme="about-ivory"
        accentColor="#2563eb"
      />

      {/* 8. Nearby Sister Concerns */}
      <RetailNearbyModule
        title="Nearby Sister Concerns"
        subtitle="Explore our nearby residential developments and EV fast charging hubs."
        currentStoreName="Sampan Mart"
        locationHubName="Sampan Ashulia Hub"
        nearbyConcerns={nearbyConcerns}
        bgTheme="divisions-green"
        accentColor="#2563eb"
      />

      {/* 9. Order & Inquiry Form */}
      <RetailOrderInquiryForm
        title="Store Delivery & Vendor Inquiry"
        subtitle="Looking to supply your products or place a large corporate grocery order? Contact our store manager."
        concernName="Sampan Mart"
        bgTheme="white"
        accentColor="#2563eb"
      />

    </main>
  );
}
