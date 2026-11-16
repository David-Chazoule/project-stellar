export const getTravelCycleCount = (travelDays: number): number => {
  if (travelDays <= 10) return 0;

  return Math.min(5, Math.ceil(travelDays / 90));
};