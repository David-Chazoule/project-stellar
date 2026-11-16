export type TravelEventType = "captain" | "life" | "both";

export const getTravelEventType = (
  cycleCount: number,
  currentCycle: number,
): TravelEventType => {
  const distributions: Record<number, TravelEventType[]> = {
    1: ["both"],
    2: ["captain", "life"],
    3: ["captain", "life", "both"],
    4: ["captain", "life", "both", "life"],
    5: ["captain", "life", "both", "captain", "life"],
  };

  return distributions[cycleCount]?.[currentCycle] ?? "both";
};
