export type CaptainEventsChoices = {
  id: string;
  label: string;
  text: string;
  result: {
    text: string;
    effects: {
      moral?: number;
      fatigue?: number;
    };
  };
};

export type captainEvents = {
  id: string;
  intro: string;
  participantCount: number;
  choices: CaptainEventsChoices[];
};
