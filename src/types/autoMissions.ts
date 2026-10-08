import { SpecialtyName } from "./character";

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

export interface RequiredCrew {
  specialty: SpecialtyName;
  count: number;
}

export type AutoMissionResult = {
  title: string;
  text: string;

  effects: {
    credits?: number;
    reputation?: number;
    moral?: number;
    fatigue?:number;

  };
};


export interface AutoMission {
  id: string;
  repeatable: true,
  duration:number,

  card: {
    title: string;
    shortDescription: string;
    location: string;
    reward: number;
    recommendedSkills: SpecialtyName[];
  };

  setup: {
    summary: string;
    requiredCrew: RequiredCrew[];
  };

  progression: {
    text: string;
  };

  results:  Record<AutoMissionResultType, AutoMissionResult>;
}
