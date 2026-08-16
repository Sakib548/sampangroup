const divisionLinks: Record<string, string> = {
  "Sampan Highway Inn": "/our_divisions/hospitality-highway-travel/sampan-highway-inn",
  "Sampan Highway Motel & White Hall": "/our_divisions/hospitality-highway-travel/sampan-highway-motel-white-house",
  "Sampan Agro & Golf Resort": "/our_divisions/hospitality-highway-travel/sampan-agro-golf-resort",
};

export const divisionGroups = [
  { id: "real-estate", title: "Real Estate & Land Investment", items: ["Sampan Development Ltd (SDL)", "Sampan Metro Square", "Sampan Motalib Skyline", "Sampan Nexus", "Sampan Residency Tower 1 & 2", "Sampan 21st Century", "Sampan Niketon", "Sampan Taj"] },
  { id: "hospitality", title: "Hospitality & Highway Travel", items: ["Sampan Highway Inn", "Express Highway Inn", "Express Highway Inn Club & Lounge", "Sampan Highway Motel & White Hall", "Sampan Agro & Golf Resort", "Agro and Golf Club & Lounge", "Sampan Eco & Agro Resort"] },
  { id: "agro", title: "Agro & Fresh Produce", items: ["Sampan Eco & Agro"] },
  { id: "retail", title: "Retail & Super Shops", items: ["Sampan Mart", "Mini Sampan Super Shop", "Sampan Trade Emporium"] },
  { id: "manufacturing", title: "Manufacturing & Industrial", items: ["Sampan Hollow Bricks & Tile", "Sampan Pet & Beverage", "Sampan Industrial Park"] },
  { id: "mobility", title: "Automotive, Fuel & Mobility", items: ["Sampan Auto", "Sampan Cafe Metro", "Sampan Filling Station", "Sampan LPG Filling Station", "Sampan EV Car Charging Station", "Sampan Towing Service"] },
  { id: "education", title: "Professional Education", items: ["London School of Higher Studies (LSHS)"] },
  { id: "security", title: "Defense & Security", items: ["Sampan Fire Arms Co.", "Nagar Arms & Ammunition"] },
  { id: "maritime", title: "Maritime / Alternative Assets", items: ["Sampan Floating Pearl"] },
].map((group) => ({
  ...group,
  items: group.items.map((label) => ({
    id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    label,
    href: divisionLinks[label] ?? `/concerns#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    external: false,
  })),
}));
