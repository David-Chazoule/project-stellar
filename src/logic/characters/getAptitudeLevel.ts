import type { Character, SpecialtyName } from "@/types/character";
import { specialtySkillMap } from "./specialtySkillMap";

export function getAptitudeLevel(
  character: Character,
  aptitude: SpecialtyName,
) {
  if (character.specialty.name === aptitude) {
    return character.specialty.level;
  }

  const secondary = character.secondarySpecialties.find(
    (specialty) => specialty.name === aptitude,
  );

  if (secondary) {
  return secondary.level;
}

const relevantSkills = specialtySkillMap[aptitude];
const skillValues = relevantSkills.map(
  (skill) => character.skills[skill]
);

const skillAverage =
  skillValues.reduce((acc, value) => acc + value, 0) /
  skillValues.length;

  const improvisedLevel = Math.round(10 + skillAverage / 10);

return improvisedLevel;

}
