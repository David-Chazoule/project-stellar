import { autoMissions } from "@/data/missions/autoMission";
import { AutoMission } from "@/types/autoMissions";
import MissionSelectionCard from "./MissionSelectionCard";

function MissionsSelection() {
  const handleSelectMission = (mission: AutoMission) => {
    console.log(mission);
  };
  return (
    <div className="missionsSelection-container">
      {autoMissions.map((mission) => (
        <MissionSelectionCard
          key={mission.id}
          mission={mission}
          onSelect={handleSelectMission}
        />
      ))}{" "}
    </div>
  );
}

export default MissionsSelection;
