export type SpecialtyName =
  | "piloting"
  | "engineering"
  | "medicine"
  | "science"
  | "security"
  | "diplomacy";

export type Specialty = {
  name: SpecialtyName;
  level: number;
};

export type Skills = {
  physical: number;
  agility: number;
  perception: number;
  intelligence: number;
  composure: number;
  social: number;
  stealth: number;
  instinct: number;
};

export type States = {
  moral: number;
  fatigue: number;
};

export type Character = {
  id: number;
  name: string;
  specialty: Specialty;
  secondarySpecialties: Specialty[];
  skills: Skills;
  states: States;
};
