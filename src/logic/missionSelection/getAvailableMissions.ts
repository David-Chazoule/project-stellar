import { AutoMission } from "@/types/autoMissions";

export function getAvailableMissions(
  missions: AutoMission[],
  completedMissions: string[],
) {
  return missions.filter((mission) => {
    if (mission.repeatable) {
      return true;
    }
    if (completedMissions.includes(mission.id)) {
      return false;
    }

     return true;
  });
}
