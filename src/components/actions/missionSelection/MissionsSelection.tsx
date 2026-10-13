import { autoMissions } from "@/data/missions/autoMission";

import MissionSelectionCard from "./MissionSelectionCard";

import type { Character } from "@/types/character";
import type { AutoMission } from "@/types/autoMissions";

type Props = {
  setSelectedMission: (mission: AutoMission) => void;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};

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
