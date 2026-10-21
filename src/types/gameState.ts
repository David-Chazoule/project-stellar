export type GameState = {
  credits: number,
  cohesion: number,
  reputation: number,
  captainId: number | null,
  elapsedDays: number,
};

export type View = "startGame" | "crew" | "missions" | null;
