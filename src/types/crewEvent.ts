export type CrewEvent = {
  id: string;
  participantCount: number;
  text: string;
  image?: string;
  effects: {
    moral?: number;
    fatigue?: number;
  };
};
