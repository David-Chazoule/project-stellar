export type GameState = {
  credits: number,
  cohesion: number,
  reputation: number,
  captainId: number | null,
};

export type View = "startGame" | "crew" | "missions" | null;
