import { SelectedCrewMember } from "@/types/autoMissions";
import { aptitudeAverage } from "../resolvers/aptitudeAverage";
import { AutoMissionResultType } from "@/types/autoMissions";

export const resolveAutoMission = (selectedCrew: SelectedCrewMember[]) => {
  const score = aptitudeAverage(selectedCrew);

  const result = getResultFromScore(score);
  console.log("Score mission :", score);

  return result;
};

function getResultFromScore(score: number): AutoMissionResultType {
  if (score < 30) {
    return "criticalFailure";
  }

  if (score < 50) {
    return "failure";
  }

  if (score < 85) {
    return "success";
  }

  return "criticalSuccess";
}
