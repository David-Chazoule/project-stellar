import { travelDurations, type LocationId } from "@/data/locations";

export function getTravelDuration(
  departureId: LocationId,
  destinationId: LocationId,
): number {
  if (departureId === destinationId) return 0;

  const durations = travelDurations[departureId] as Partial<
    Record<LocationId, number>
  >;

  const duration = durations[destinationId];

  if (duration === undefined) {
    throw new Error(`Trajet inconnu : ${departureId} → ${destinationId}`);
  }

  return duration;
}
