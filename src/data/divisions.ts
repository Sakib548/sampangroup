const divisionLinks: Record<string, string> = {
  "Sampan Highway Inn":
    "/our_divisions/hospitality-highway-travel/sampan-highway-inn",
  "Sampan Highway Motel & White Hall":
    "/our_divisions/hospitality-highway-travel/sampan-highway-motel-white-house",
  "Sampan Agro & Golf Resort":
    "/our_divisions/hospitality-highway-travel/sampan-agro-golf-resort",
  "Sampan Eco & Agro":
    "/our_divisions/hospitality-highway-travel/sampan-eco-agro",
  "Sampan Eco & Agro Resort":
    "/our_divisions/hospitality-highway-travel/sampan-eco-agro",
};

export const divisionGroups = [
  {
    id: "real-estate",
    title: "Real Estate & Land Investment",
    items: [
      "Sampan Development Ltd",
      "Sampan Metro Square",
      "Sampan Cafe Metro",
      "Sampan Tower 1 & 2",
      "Sampan Trade Emporium",
      "Sampan Motalib Skyline",
      "Sampan Nexus",

      "Sampan 21st Century",

      "Sampan Taj",
      "Sampan Niketon",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality, Resort & Highway Travel",
    items: [
      "Sampan Highway Inn",
      "Sampan White House",
      "Sampan Highway Inn Restaurant & Party Center",
      "Sampan Eco & Agro Resort",
      "Express Highway Inn",
      "Express Highway Inn Club & Lounge",
      // "Sampan Highway Motel & White Hall",
      "Sampan Agro & Golf Resort",
      "Sampan Agro & Golf Club & Lounge",
      "Sampan Floating Pearl",
    ],
  },
  {
    id: "golf zone",
    title: "Golf Zone.",
    items: ["Sampan Golf Academy", "Sampan Golf Short Drive Range"],
  },
  {
    id: "education",
    title: "Professional Education",
    items: ["London School of Higher Studies (LSHS)"],
  },

  {
    id: "agro",
    title: "Agro & Fresh Produce",
    items: ["Sampan Eco & Agro", "Sampan Fish & Meat"],
  },
  {
    id: "retail",
    title: "Retail & Super Shops",
    items: ["Sampan Sweet Box", "Sampan Mart", "Mini Sampan Super Shop"],
  },

  {
    id: "mobility",
    title: "Automotive, Fuel & Mobility",
    items: [
      "Sampan Auto",

      "Sampan Filling Station",
      "Sampan LPG Filling Station",
      "Sampan EV Car Charging Station",
      "Sampan Towing Service",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    items: [
      "Sampan Industrial Park",
      "Sampan Hollow Bricks & Tile",
      "Sampan Pet & Beverage",
    ],
  },
  {
    id: "security",
    title: "Defense & Security",
    items: ["Sampan Fire Arms Co.", "Nagar Arms & Ammunition"],
  },
  {
    id: "maritime",
    title: "Maritime / Alternative Assets",
    items: ["Sampan Floating Pearl"],
  },
].map((group) => ({
  ...group,
  items: group.items.map((label) => ({
    id: label.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    label,
    href:
      divisionLinks[label] ??
      `/concerns#${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    external: false,
  })),
}));
