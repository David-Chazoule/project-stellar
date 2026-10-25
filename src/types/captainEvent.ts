export type CaptainEventsChoices = {
  id: string;
  label: string;
  text: string;
  result: {
    img: string;
    text: string;
    effects: {
      moral?: number;
      fatigue?: number;
    };
  };
};

export type captainEvents = {
  id: string;
  image: string;
  intro: string;
  participantCount: number;
  choices: CaptainEventsChoices[];
};
