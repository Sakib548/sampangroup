export type CarouselPauseState = {
  manuallyPaused: boolean;
  hovered: boolean;
  focused: boolean;
  touching: boolean;
};

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

export function getProgressAnimationKey(
  slideId: string,
  activeIndex: number,
  progressRun: number,
) {
  return `${slideId}-${activeIndex}-${progressRun}`;
}

export function getNextSlideIndex(activeIndex: number, slideCount: number) {
  return (activeIndex + 1) % slideCount;
}

export function shouldAutoplay({
  manuallyPaused,
  hovered,
  focused,
  touching,
}: CarouselPauseState) {
  return !manuallyPaused && !hovered && !focused && !touching;
}
