import { GameState } from "@/types/gameState";

export const initialGameState: GameState = {
  credits: 10000,
  cohesion: 50,
  reputation: 50,
  captainId: null,
  elapsedDays: 0,
  currentLocationId: "earth",
  completedMissions: [],
};
