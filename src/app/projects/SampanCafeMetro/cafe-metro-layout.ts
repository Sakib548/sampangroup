export function getCafeMetroLayout() {
  return {
    contentMaxWidth: 1400,
    outerPaddingClass: "px-5 sm:px-10 lg:px-16",
    shellClass: "mx-auto flex w-full flex-1 flex-col",
    contentFlowClass: "my-auto",
    mobileHeightClass: "min-h-[70svh]",
    desktopHeightClass: "lg:min-h-[720px]",
  } as const;
}
