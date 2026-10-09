export type SpecialtyName =
  | "pilot"
  | "engineer"
  | "medic"
  | "scientist"
  | "operative"
  | "liaisonOfficer";

export type Specialty = {
  name: SpecialtyName;
  level: number;
};

export type Skills = {
  leadership: number;
  physical: number;
  agility: number;
  perception: number;
  intelligence: number;
  charisma: number;
  seduction: number;
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
