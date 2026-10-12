export type GameState = {
  credits: number;
  cohesion: number;
  reputation: number;
};

export type View = "startGame" | "crew" | "missions" | null;
