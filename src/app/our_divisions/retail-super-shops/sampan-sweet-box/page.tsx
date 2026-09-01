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
  title: "Sampan Sweet Box | Premium Sweets, Confectionery & Artisanal Mishti",
  description: "Sampan Sweet Box offers artisanal Bangladeshi sweets, premium gift box hampers, traditional mishti, and bakery products beside Sampan Highway Inn.",
};

const sweetBoxProducts = [
  {
    id: "rosogolla",
    name: "Classic Spongy Rosogolla",
    category: "Traditional Sweets",
    priceBDT: "550 BDT / kg",
    packSize: "1 kg / 500g Box",
    image: "/images/brand/sweetbox.png",
    tag: "Bestseller",
    description: "Soft, spongy curd-cheese balls soaked in light cardamom-infused sugar syrup. Prepared fresh daily using pure milk chhana.",
    highlights: ["100% Pure Cow Milk Chhana", "No Artificial Preservatives", "Handcrafted Daily"],
  },
  {
    id: "kalojam",
    name: "Royal Shahi Kalojam",
    category: "Traditional Sweets",
    priceBDT: "650 BDT / kg",
    packSize: "1 kg Box",
    image: "/images/brand/sweetbox.png",
    tag: "Chef Special",
    description: "Rich dark caramelized sweet infused with mawa, roasted ghee, and saffron syrup for a luxurious melting texture.",
    highlights: ["Pure Deshi Ghee Fried", "Infused with Iranian Saffron", "Rich Mawa Core"],
  },
  {
    id: "chamcham",
    name: "Porabari Style Chamcham",
    category: "Traditional Sweets",
    priceBDT: "600 BDT / kg",
    packSize: "1 kg Box",
    image: "/images/brand/sweetbox.png",
    description: "Golden oblong mishti garnished with fresh mawa shavings and crushed pistachios.",
    highlights: ["Authentic Regional Recipe", "Garnished with Mawa & Pistachio"],
  },
  {
    id: "gift-hamper-luxury",
    name: "Sampan Signature Royal Hamper Box",
    category: "Gift Hampers",
    priceBDT: "2,450 BDT",
    packSize: "2.5 kg Assorted Box",
    image: "/images/brand/sweetbox.png",
    tag: "Luxury Gift",
    description: "Exclusive hardbound velvet gift hamper box containing Sandesh, Kaju Barfi, Mawa Laddoo, and Dry Fruit Mishti.",
    highlights: ["Premium Hardbound Packaging", "9 Premium Varieties", "Custom Greeting Card Included"],
  },
  {
    id: "kaju-barfi",
    name: "Gold Leaf Kaju Barfi",
    category: "Dry & Mawa Sweets",
    priceBDT: "1,400 BDT / kg",
    packSize: "500g / 1kg Box",
    image: "/images/brand/sweetbox.png",
    tag: "Premium",
    description: "Smooth cashew nut fudge topped with edible silver-gold leaf vark, made with 100% imported cashews.",
    highlights: ["Pure Whole Cashew Paste", "Edible Silver Foil", "Long Shelf Life"],
  },
  {
    id: "mihidana-laddoo",
    name: "Shahi Ghee Mihidana Laddoo",
    category: "Dry & Mawa Sweets",
    priceBDT: "700 BDT / kg",
    packSize: "1 kg Box",
    image: "/images/brand/sweetbox.png",
    description: "Tiny gram flour pearls bound with pure deshi ghee, saffron, and melon seeds.",
    highlights: ["Pure Organic Ghee", "Crisp & Melt-in-mouth"],
  },
];

const sweetBoxOffers = [
  {
    id: "offer-1",
    title: "Festival Gift Box Bundle Saver",
    category: "Gift Hampers",
    discountBadge: "20% OFF",
    validUntil: "Valid till end of month",
    description: "Buy any 3 Royal Sweet Hampers and receive 20% flat discount + complimentary express delivery across Dhaka.",
    promoCode: "SWEETROYAL20",
    inclusions: ["3x Luxury Hampers", "Free Customized Card", "Priority Highway Delivery"],
  },
  {
    id: "offer-2",
    title: "Highway Traveler Mishti Refill",
    category: "Highway Special",
    discountBadge: "BUY 1KG GET 250G",
    validUntil: "Daily Offer at Highway Outlets",
    description: "Stop at Sampan Highway Inn outlet, buy 1kg Rosogolla or Kalojam and get 250g Mihidana Laddoo free!",
    promoCode: "HIGHWAYSWEET",
    inclusions: ["Applicable at Highway Outlets", "Instant In-Store Claim"],
  },
];

const sweetBoxLocations = [
  {
    name: "Sampan Sweet Box Flagship Outlet",
    address: "Sampan Highway Complex, Dhaka–Khulna Highway, Bangladesh",
    phone: "+880 1700-000000",
    hours: "07:00 AM - 11:00 PM Daily",
    gpsCoordinates: "23.0000° N, 90.0000° E",
    parkingInfo: "Complimentary Valet & Highway Rest Parking Available",
  },
  {
    name: "Express Highway Inn Sweet Corner",
    address: "Express Highway Inn Premises, Dhaka Express Highway",
    phone: "+880 1800-000000",
    hours: "24/7 Open",
    gpsCoordinates: "23.8100° N, 90.4100° E",
    parkingInfo: "Covered Parking Lot & Drive-Thru Window",
  },
];

const sweetBoxLoyaltyTiers = [
  {
    tierName: "Gold Sweets Member",
    spendThreshold: "5,000 BDT",
    pointsRate: "5 Points / 100 BDT",
    badgeColor: "#d97706",
    perks: ["5% Cashback Points", "Free Birthday Mishti Box", "Priority Holiday Hamper Booking"],
  },
  {
    tierName: "Platinum Royal Member",
    spendThreshold: "20,000 BDT",
    pointsRate: "10 Points / 100 BDT",
    badgeColor: "#475569",
    perks: ["10% Cashback Points", "Complimentary In-Store Tea & Tasting", "Free Nationwide Courier Delivery"],
  },
  {
    tierName: "Diamond Shahi Patron",
    spendThreshold: "50,000 BDT",
    pointsRate: "15 Points / 100 BDT",
    badgeColor: "#0284c7",
    perks: ["15% Cashback Points", "Customized Gift Packaging", "Dedicated VIP Store Concierge"],
  },
];

const nearbyConcerns = [
  {
    name: "Sampan Highway Inn",
    category: "Hospitality & Leisure",
    distance: "Adjacent (50 meters)",
    tagline: "Flagship highway hotel, dining lounge, and travel center.",
    href: "/our_divisions/hospitality-highway-travel/sampan-highway-inn",
    logo: "/images/brand/sampanhighwayinn.png",
    icon: "hotel" as const,
  },
  {
    name: "Sampan Filling Station",
    category: "Automotive & Fuel",
    distance: "Adjacent (100 meters)",
    tagline: "24/7 Octane 95, Diesel, and quick vehicle maintenance.",
    href: "/our_divisions/automotive-fuel-mobility/sampan-filling-station",
    logo: "/images/brand/sampanfillingstation.png",
    icon: "fuel" as const,
  },
  {
    name: "Express Highway Inn Club & Lounge",
    category: "Club & Membership",
    distance: "200 meters",
    tagline: "Exclusive dining lounge and highway club facilities.",
    href: "/our_divisions/hospitality-highway-travel/express-highway-inn-club-lounge",
    logo: "/images/brand/ecl.png",
    icon: "club" as const,
  },
];

const photos = [
  { id: "photo-1", title: "Sweet Display", category: "Craftsmanship", image: "/images/brand/sweetbox.png", caption: "Handcrafted Artisanal Sweet Display" },
  { id: "photo-2", title: "Walk-In Lounge", category: "Store Outlet", image: "/images/brand/sampanhighwayinn.png", caption: "Sampan Highway Outlet Walk-In Lounge" },
  { id: "photo-3", title: "Royal Gift Hamper", category: "Gift Packaging", image: "/images/brand/sweetbox.png", caption: "Signature Festival Royal Gift Hamper Packaging" },
];

export default function SampanSweetBoxPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950">
      
      {/* 1. Hero Banner */}
      <RetailHero
        title="Sampan Sweet Box"
        subtitle="Artisanal Bangladeshi Sweets, Gourmet Hampers & Highway Refreshment"
        concernName="Sampan Sweet Box"
        logo="/images/brand/sweetbox.png"
        statusBadge="Operational Outlets & Express Highway Delivery"
        statusType="operating"
        description="Crafted using 100% pure milk chhana, organic deshi ghee, and traditional copper-cauldron recipes. Tied directly to Sampan Highway Inn for highway travelers, event catering, and gourmet gift hamper deliveries nationwide."
        bannerImage="/images/brand/sweetbox.png"
        facts={[
          { value: "30+", label: "Handcrafted Sweet Varieties" },
          { value: "100%", label: "Pure Organic Ghee & Chhana" },
          { value: "50,000+", label: "Gift Hampers Delivered" },
        ]}
        accentColor="#d97706"
        badgeColor="#f59e0b"
        openingHours="07:00 AM - 11:00 PM Daily"
      />

      {/* 2. Product Catalog */}
      <RetailProductCatalog
        title="Artisanal Mishti & Gift Box Catalog"
        subtitle="Explore our handcrafted traditional Bangladeshi sweets, dry mawa delicacies, and luxury gift hampers."
        products={sweetBoxProducts}
        bgTheme="about-ivory"
        accentColor="#d97706"
        badgeColor="#f59e0b"
      />

      {/* 3. Omnichannel Experience Note */}
      <RetailOmnichannelNote
        title="Order Online or Visit Highway Outlet"
        subtitle="Enjoy instant 30-minute doorstep delivery or sample fresh sweets at our Highway Inn tasting lounge."
        concernName="Sampan Sweet Box"
        bgTheme="divisions-green"
        accentColor="#d97706"
      />

      {/* 4. Weekly Offers & Discounts */}
      <RetailOffersFeed
        title="Current Promotions & Gift Deals"
        subtitle="Claim exclusive discounts on festival hampers and highway traveler sweet boxes."
        offers={sweetBoxOffers}
        bgTheme="about-ivory"
        accentColor="#d97706"
      />

      {/* 5. Loyalty Program */}
      <RetailLoyaltyProgram
        title="Sampan Sweet Rewards Program"
        subtitle="Earn points on every sweet box purchase and redeem across Sampan Group hotels and cafes."
        programName="Sampan Sweet Rewards"
        tiers={sweetBoxLoyaltyTiers}
        bgTheme="white"
        accentColor="#d97706"
      />

      {/* 6. Physical Store Locations */}
      <RetailStoreLocationAndMap
        title="Store Locations & Highway Pickup"
        subtitle="Visit our outlets along the Dhaka highway network for fresh sweet tastings and quick pickup."
        projectName="Sampan Sweet Box Outlets"
        locations={sweetBoxLocations}
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902442430137!2d90.39158!3d23.75088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad33910b%3A0x24248888!2sDhaka!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd"
        bgTheme="divisions-green"
        accentColor="#d97706"
      />

      {/* 7. Photo Gallery */}
      <RetailPhotosGallery
        title="Store Experience & Craftsmanship Gallery"
        subtitle="Take a visual tour of our sweet-making process, hygienic packaging, and outlet lounges."
        photos={photos}
        bgTheme="about-ivory"
        accentColor="#d97706"
      />

      {/* 8. Nearby Sister Concerns */}
      <RetailNearbyModule
        title="Explore Nearby at Sampan Highway Hub"
        subtitle="Discover our sister hotel, filling station, and club facilities located right next door."
        currentStoreName="Sampan Sweet Box"
        locationHubName="Sampan Highway Complex, Dhaka-Khulna Highway"
        nearbyConcerns={nearbyConcerns}
        bgTheme="divisions-green"
        accentColor="#d97706"
      />

      {/* 9. Order & Inquiry Form */}
      <RetailOrderInquiryForm
        title="Bulk Order & Event Inquiry Form"
        subtitle="Planning a wedding, corporate event, or holiday gifting? Send us your requirement for custom sweet boxes."
        concernName="Sampan Sweet Box"
        bgTheme="white"
        accentColor="#d97706"
      />

    </main>
  );
}
