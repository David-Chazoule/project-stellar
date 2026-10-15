import type { Character } from "@/types/character";
import type { Skills } from "@/types/character";
import type { Specialty } from "@/types/character";

const specialtySkillMap: Record<
  Specialty["name"],
  (keyof Skills)[]
> = {
  pilot: [
    "agility",
    "perception",
    "composure",
    "instinct",
    "intelligence",
  ],

  engineer: [
    "intelligence",
    "perception",
    "composure",
    "instinct",
  ],

  medic: [
    "intelligence",
    "perception",
    "composure",
    "instinct",
    "social",
  ],

  scientist: [
    "intelligence",
    "perception",
    "composure",
    "instinct",
  ],

  operative: [
    "physical",
    "agility",
    "perception",
    "composure",
    "instinct",
    "stealth",
  ],

  liaisonOfficer: [
    "leadership",
    "charisma",
    "social",
    "composure",
    "instinct",
    "seduction",
  ],
};

export function getGeneralLevel(character: Character) {
  const relevantSkills =
    specialtySkillMap[character.specialty.name];

  const skillValues = relevantSkills.map(
    (skill) => character.skills[skill]
  );

  const mainProfileAverage =
    [...skillValues, character.specialty.level].reduce(
      (acc, value) => acc + value,
      0
    ) /
    (skillValues.length + 1);

  let secondaryBonus = 0;

  character.secondarySpecialties.forEach((specialty) => {
    if (specialty.level >= 80) {
      secondaryBonus += 2;
    } else if (specialty.level >= 70) {
      secondaryBonus += 1.5;
    } else if (specialty.level >= 60) {
      secondaryBonus += 1;
    } else if (specialty.level >= 50) {
      secondaryBonus += 0.5;
    }
  });

  const generalLevel = Math.round(
    mainProfileAverage + secondaryBonus
  );

  return generalLevel;
}