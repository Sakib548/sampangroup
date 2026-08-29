export type EditorialImageLayer = {
  index: number;
  offset: -1 | 0 | 1;
};

export function getHighwayInnEditorialLayout() {
  return {
    accentColor: "#f5c84c",
    desktopGridAlignment: "lg:items-center",
    desktopImageAlignment: "lg:self-center",
    desktopCopyAlignment: "lg:self-center",
    desktopControlsSpacing: "lg:mt-10",
  } as const;
}

export function getWrappedGalleryIndex(
  currentIndex: number,
  amount: number,
  imageCount: number,
) {
  if (imageCount <= 0) return 0;

  return (((currentIndex + amount) % imageCount) + imageCount) % imageCount;
}

export function getEditorialImageLayers(
  activeIndex: number,
  imageCount: number,
): EditorialImageLayer[] {
  if (imageCount <= 0) return [];

  return ([-1, 0, 1] as const).map((offset) => ({
    index: getWrappedGalleryIndex(activeIndex, offset, imageCount),
    offset,
  }));
}

export function getSwipeGalleryAmount(
  touchStartX: number,
  touchEndX: number,
  minimumDistance = 50,
): -1 | 0 | 1 {
  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) < minimumDistance) return 0;

  return distance < 0 ? 1 : -1;
}
