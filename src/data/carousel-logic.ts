export const TRANSITION_MODES = [
  "crossfade",
  "parallax",
  "mask",
  "split",
  "blur",
  "pan",
] as const;

export type TransitionMode = (typeof TRANSITION_MODES)[number];

export function resolveTransitionMode(
  mode: string | undefined,
): TransitionMode {
  return TRANSITION_MODES.includes(mode as TransitionMode)
    ? (mode as TransitionMode)
    : "crossfade";
}

export function getAnimationPreview(
  activeIndex: number,
  slideCount: number,
  mode: string,
) {
  return {
    activeIndex: getNextSlideIndex(activeIndex, slideCount),
    transitionMode: resolveTransitionMode(mode),
  };
}

export function getCarouselLayers(
  activeIndex: number,
  previousIndex: number,
  mode: string,
) {
  return {
    baseIndex: activeIndex,
    panelIndex: resolveTransitionMode(mode) === "split" ? previousIndex : null,
  };
}

export function getNextSlideIndex(activeIndex: number, slideCount: number) {
  return (activeIndex + 1) % slideCount;
}

export function getPreviousSlideIndex(activeIndex: number, slideCount: number) {
  return (activeIndex - 1 + slideCount) % slideCount;
}

export type SwipeDirection = "previous" | "next" | null;

export function getSwipeDirection(
  deltaX: number,
  deltaY: number,
  threshold = 50,
): SwipeDirection {
  const horizontalDistance = Math.abs(deltaX);
  const verticalDistance = Math.abs(deltaY);

  if (
    horizontalDistance < threshold ||
    horizontalDistance <= verticalDistance
  ) {
    return null;
  }

  return deltaX < 0 ? "next" : "previous";
}
