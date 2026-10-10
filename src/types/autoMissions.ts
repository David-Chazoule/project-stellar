import { SpecialtyName } from "./character";
import { Character } from "./character";

export type AutoMissionStep = "setup" | "progression" | "conclusion";

export type AutoMissionResultType =
  | "criticalFailure"
  | "failure"
  | "success"
  | "criticalSuccess";

export type AutoMissionType =
  | "representation"
  | "training"
  | "escort"
  | "exploration"
  | "transport"
  | "security"
  | "engineering"
  | "science"
  | "medical"
  | "logistics";

export type SelectedCrewMember = {
  character: Character;
  aptitude: SpecialtyName;
};

export interface RequiredCrew {
  aptitude: SpecialtyName;
  count: number;
}

export type AutoMissionResult = {
  title: string;
  text: string;

  effects: {
    credits?: number;
    reputation?: number;
    moral?: number;
    fatigue?: number;
  };
};

export type AutoMissionResolver = {
  type: "aptitudeAverage";
};

export interface AutoMission {
  id: string;
  repeatable: boolean;
  duration: number;

  resolver: AutoMissionResolver;

  card: {
    title: string;
    shortDescription: string;
    location: string;
    reward: number;
  };

  setup: {
    briefing: string;
    requiredCrew: { aptitude: SpecialtyName; count: number }[];
  };

  progression: {
    text: string;
  };

  results: Record<AutoMissionResultType, AutoMissionResult>;
}
