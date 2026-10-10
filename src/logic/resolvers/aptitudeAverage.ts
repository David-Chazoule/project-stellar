import { getAptitudeLevel } from "../characters/getAptitudeLevel";
import type { SelectedCrewMember } from "@/types/autoMissions";

export const aptitudeAverage = (selectedCrew: SelectedCrewMember[]) => {
  const levels = selectedCrew.map((member) => {
    return getAptitudeLevel(member.character, member.aptitude);
  });

  return (
    levels.reduce((acc, currentValue) => acc + currentValue, 0) / levels.length
  );
};
