import type { Skills } from "./character";

export type LifeEventEffect = {
  forme?: number;
  moral?: number;
  skills?: Partial<Skills>;
};

export type LifeEventResult ={
   participants?: Record<number, LifeEventEffect>;
  allCrew?: LifeEventEffect;
  credits?: number;
  
}

export type LifeEvent = {
  id: string;
  participantCount: number;
  text: string;
  result?: LifeEventResult;
};
