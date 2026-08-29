export function getSampanAutoLayout() {
  return {
    contentMaxWidth: 1400,
    outerPaddingClass: "px-5 sm:px-10 lg:px-16",
    shellClass: "mx-auto flex w-full flex-1 flex-col",
  } as const;
}
