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

export function getTravelOrbit(duration: number) {
  const orbitalCoefficients = [1, 1.1, 1.2, 1.3, 1.4, 1.5];

  const randomIndex = Math.floor(Math.random() * orbitalCoefficients.length);

  const coefficient = orbitalCoefficients[randomIndex];

  return Math.ceil(duration * coefficient);
}
