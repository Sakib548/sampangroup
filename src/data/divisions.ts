export const divisionGroups = [
  {
    id: "real-estate",
    title: "Real Estate & Land Investment",
    items: [1, 2, 13, 6, 5, 3, 4, 7, 8, 9],
  },
  {
    id: "hospitality",
    title: "Hospitality, Resort & Highway Travel",
    items: [14, 15, 16, 21, 17, 18, 19, 20],
  },
  {
    id: "golf-zone",
    title: "Golf Zone",
    items: [20, 22],
  },
  {
    id: "education",
    title: "Professional Education",
    items: [34],
  },
  {
    id: "agro",
    title: "Agro & Fresh Produce",
    items: [19, 20, 23],
  },
  {
    id: "retail",
    title: "Retail & Super Shops",
    items: [24, 25, 26],
  },
  {
    id: "mobility",
    title: "Automotive, Fuel & Mobility",
    items: [27, 28, 29, 30, 31],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    items: [10, 11, 12],
  },
  {
    id: "security",
    title: "Defense & Security",
    items: [32, 33],
  },
  {
    id: "maritime",
    title: "Maritime / Alternative Assets",
    items: [35],
  },
].map((group) => ({
  ...group,
  items: group.items.map((concernId) => ({
    id: `concern-${concernId}`,
    concernId: concernId,
    href: `/concerns#${concernId}`,
    external: false,
  })),
}));