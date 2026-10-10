import type { Character, SpecialtyName } from "@/types/character";

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

  return secondary?.level ?? 0;
}
