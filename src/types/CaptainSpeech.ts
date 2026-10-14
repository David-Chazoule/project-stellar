export type SpeechApproach =
  | "professional"
  | "casual"
  | "drunk";

export type SpeechChoice = {
  id: string;
  text: string;
  result: {
    text: string;
    cohesion?: number;
    moral?: number;
  };
};

export type SpeechApproachData = {
  label: string;
  prepText: string;
  choiceIntro: string;
  choices: SpeechChoice[];
};

