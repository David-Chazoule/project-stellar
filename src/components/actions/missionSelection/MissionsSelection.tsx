import { autoMissions } from "../../../data/missions/automissions/index";
import { useState } from "react";
import PlanetSelection from "./PlanetSelection";
import MissionSelectionCard from "./MissionSelectionCard";

import { getAvailableMissions } from "@/logic/missionSelection/getAvailableMissions";

import type { Character } from "@/types/character";
import type { AutoMission } from "@/types/autoMissions";
import type { GameState } from "@/types/gameState";
import type { LocationId } from "@/data/locations";
import MissionDetailCard from "./MissionDetailCard";

type Props = {
  setSelectedMission: (mission: AutoMission) => void;
  gameState: GameState;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};

function MissionsSelection({ setSelectedMission, gameState }: Props) {
  const [missionsLocationId, setMissionsLocationId] =
    useState<LocationId | null>(null);
  const [previewMission, setPreviewMission] = useState<AutoMission | null>(
    null,
  );

  const handleSelectMission = (mission: AutoMission) => {
    setPreviewMission(mission);
  };

  const handleShowMissions = (locationId: LocationId | null) => {
    setMissionsLocationId(locationId);
    setPreviewMission(null);
  };

  const availableMissions = getAvailableMissions(
    autoMissions,
    gameState.completedMissions,
  ).filter((mission) => mission.locationId === missionsLocationId);

  
  return (
    <div className="start-panel">
      <div className="planetSelection-container">
        <PlanetSelection   onShowMissions={handleShowMissions} />
      </div>
      <div className="mission-container">
        <div className="mission-list-detail">
          <h2>MISSIONS DISPONIBLE</h2>
          <div className="mission-list-info">
            <p>{missionsLocationId}</p>
            <p>{availableMissions.length} Contrats</p>
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
        <div className="mission-detail">
          <h2>Détails de la mission</h2>
          {previewMission && (
            <MissionDetailCard
              previewMission={previewMission}
              setSelectedMission={setSelectedMission}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MissionsSelection;
