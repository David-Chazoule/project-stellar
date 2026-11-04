import type { LocationId } from "@/data/locations";

export type GameState = {
  credits: number;
  cohesion: number;
  reputation: number;
  captainId: number | null;
  elapsedDays: number;
  currentLocationId: LocationId;
  completedMissions: string[];
};

export type View = "startGame" | "crew" | "missions" | "event" | null;
