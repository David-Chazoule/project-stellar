import { autoMissions } from "../../../data/missions/automissions/index";

import MissionSelectionCard from "./MissionSelectionCard";

import { getAvailableMissions } from "@/logic/missionSelection/getAvailableMissions";

import type { Character } from "@/types/character";
import type { AutoMission } from "@/types/autoMissions";
import type { GameState } from "@/types/gameState";

type Props = {
  setSelectedMission: (mission: AutoMission) => void;
  gameState: GameState;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};

function MissionsSelection({ setSelectedMission, gameState }: Props) {
  const handleSelectMission = (mission: AutoMission) => {
    setSelectedMission(mission);
  };

  const availableMissions = getAvailableMissions(
    autoMissions,
    gameState.completedMissions,
  );

  return (
    <div className="missionsSelection-container">
      {availableMissions.map((mission) => (
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
