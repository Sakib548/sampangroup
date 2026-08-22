export function nextOpenDivision(
  currentDivision: string | null,
  selectedDivision: string,
): string | null {
  return currentDivision === selectedDivision ? null : selectedDivision;
}
