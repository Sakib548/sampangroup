export type WheelPanelTarget = {
  capture: boolean;
  direction: -1 | 0 | 1;
  targetIndex: number;
};

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

export function getWheelPanelTarget(
  currentIndex: number,
  deltaY: number,
  panelCount: number,
): WheelPanelTarget {
  const direction: -1 | 0 | 1 = Math.abs(deltaY) < 1 ? 0 : deltaY > 0 ? 1 : -1;
  const lastIndex = Math.max(0, panelCount - 1);

  if (direction === 0 || panelCount <= 0) {
    return { capture: true, direction: 0, targetIndex: currentIndex };
  }

  const targetIndex = clamp(currentIndex + direction, 0, lastIndex);
  const reachedOuterEdge = targetIndex === currentIndex;

  return {
    capture: !reachedOuterEdge,
    direction,
    targetIndex,
  };
}

export function getPanelXOffset(
  panelIndex: number,
  viewportWidth: number,
  panelCount: number,
) {
  if (panelCount <= 1) return 0;

  const lastIndex = panelCount - 1;
  const safeIndex = clamp(panelIndex, 0, lastIndex);

  return safeIndex === 0 ? 0 : -(safeIndex * viewportWidth);
}

export function getStoryExitScroll(
  scrollStart: number,
  scrollEnd: number,
  direction: number,
) {
  return direction > 0 ? scrollEnd + 2 : scrollStart - 2;
}

export function getProtectedPinDistance(
  viewportHeight: number,
  panelCount: number,
) {
  return Math.max(viewportHeight, 720) * Math.max(panelCount, 3);
}

export function getPinGuardScroll(scrollStart: number, scrollEnd: number) {
  return scrollStart + (scrollEnd - scrollStart) / 2;
}

export function getPinGuardCorrection(
  guardActive: boolean,
  triggerActive: boolean,
  currentScroll: number,
  guardScroll: number,
  tolerance = 2,
) {
  if (
    !guardActive ||
    !triggerActive ||
    Math.abs(currentScroll - guardScroll) <= tolerance
  ) {
    return null;
  }

  return guardScroll;
}

export function isScrollInsidePin(
  triggerActive: boolean,
  currentScroll: number,
  scrollStart: number,
  scrollEnd: number,
) {
  return (
    triggerActive ||
    (currentScroll >= scrollStart && currentScroll <= scrollEnd)
  );
}
