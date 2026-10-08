import { autoMissions } from "@/data/missions/autoMission";
import { AutoMission } from "@/types/autoMissions";
import MissionSelectionCard from "./MissionSelectionCard";

type Props = { setSelectedMission: (mission: AutoMission) => void };

function MissionsSelection({ setSelectedMission }: Props) {
  const handleSelectMission = (mission: AutoMission) => {
    setSelectedMission(mission);
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
