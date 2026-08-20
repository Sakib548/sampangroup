export type CarouselPauseState = {
  manuallyPaused: boolean;
  hovered: boolean;
  focused: boolean;
  touching: boolean;
};

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
