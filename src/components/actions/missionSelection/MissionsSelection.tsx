import { autoMissions } from "../../../data/missions/automissions/index";
import { useState } from "react";
import PlanetSelection from "./PlanetSelection";
import MissionSelectionCard from "./MissionSelectionCard";

import { getAvailableMissions } from "@/logic/missionSelection/getAvailableMissions";

import type { Character } from "@/types/character";
import type { AutoMission } from "@/types/autoMissions";
import type { GameState } from "@/types/gameState";
import type { LocationId } from "@/data/locations";

type Props = {
  setSelectedMission: (mission: AutoMission) => void;
  gameState: GameState;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};

function MissionsSelection({ setSelectedMission, gameState }: Props) {
  const [missionsLocationId, setMissionsLocationId] =
    useState<LocationId | null>(null);

  const handleSelectMission = (mission: AutoMission) => {
    setSelectedMission(mission);
  };

  const availableMissions = getAvailableMissions(
    autoMissions,
    gameState.completedMissions,
  ).filter((mission) => mission.locationId === missionsLocationId);

  console.log("Planète demandée :", missionsLocationId);
console.log("Missions trouvées :", availableMissions);
  return (
    <div className="start-panel">
      <div className="planetSelection-container">
        <PlanetSelection onShowMissions={setMissionsLocationId} />
      </div>
      {missionsLocationId !== null && (
        <div className="missionsSelection-fiche">
          {availableMissions.map((mission) => (
            <MissionSelectionCard
              key={mission.id}
              mission={mission}
              onSelect={handleSelectMission}
            />
          ))}{" "}
        </div>
      )}
    </div>
  );
}

export default MissionsSelection;
