export type GameState = {
  credits: number;
  cohesion: number;
  reputation: number;
  captainId: number | null;
  elapsedDays: number;
  completedMissions: string[];
};

export type View = "startGame" | "crew" | "missions" | "event" | null;
