import type { Character } from "@/types/character";
import type { Skills } from "@/types/character";
import type { Specialty } from "@/types/character";

const specialtySkillMap: Record<Specialty["name"], (keyof Skills)[]> = {
  pilot: ["agility", "perception", "composure", "instinct", "intelligence"],
  engineer: ["intelligence", "perception", "composure", "instinct"],
  medic: ["intelligence", "perception", "composure", "instinct", "social"],
  scientist: ["intelligence", "perception", "composure", "instinct"],
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
  const relevantSkills = specialtySkillMap[character.specialty.name];

  const skillValues = relevantSkills.map((skill) => character.skills[skill]);

  const mainProfileAverage =
    [...skillValues, character.specialty.level].reduce(
      (acc, value) => acc + value,
      0,
    ) /
    (skillValues.length + 1);

  const secondaryAverage =
    character.secondarySpecialties
      .map((specialty) => specialty.level)
      .reduce((acc, value) => acc + value, 0) /
    character.secondarySpecialties.length;

  let secondaryBonus = 0;

  if (secondaryAverage >= 80) {
    secondaryBonus = 2;
  } else if (secondaryAverage >= 60) {
    secondaryBonus = 1;
  }

  const generalLevel = Math.round(mainProfileAverage + secondaryBonus);

  return generalLevel;
}
