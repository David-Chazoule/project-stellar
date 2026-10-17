export type SpeechStep = "preparation" | "choice" | "result";

export type SpeechApproach = "professional" | "casual" | "drunk";

export type SpeechChoices = {
  id: string;
  text: string;
  result: {
    text: string;
    cohesion?: number;
    moral?: number;
    image:string;
  };
};

export type SpeechApproachData = {
  label: string;
  prepText: string;
  choiceIntro: string;
  choices: SpeechChoices[];
};
