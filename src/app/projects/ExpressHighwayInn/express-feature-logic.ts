export type ExpressFacilitySource = {
  id: string;
  title: string;
  eyebrow: string;
};

export type ExpressFeatureItem = {
  id: string;
  title: string;
  copy: string;
};

export function buildExpressFeatureItems(
  facilities: readonly ExpressFacilitySource[],
  selectedIds: readonly string[],
): ExpressFeatureItem[] {
  return selectedIds.flatMap((id) => {
    const facility = facilities.find((item) => item.id === id);

    if (!facility) return [];

    return [
      {
        id: facility.id,
        title:
          facility.id === "billiards"
            ? "Billiards & Card Room"
            : facility.title,
        copy: facility.eyebrow,
      },
    ];
  });
}
