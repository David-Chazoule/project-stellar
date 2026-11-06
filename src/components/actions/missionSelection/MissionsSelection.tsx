import { autoMissions } from "../../../data/missions/automissions/index";
import { useState } from "react";
import PlanetSelection from "./PlanetSelection";
import MissionSelectionCard from "./MissionSelectionCard";
import { locations } from "@/data/locations";
import { getAvailableMissions } from "@/logic/missionSelection/getAvailableMissions";

import type { Character } from "@/types/character";
import type { AutoMission } from "@/types/autoMissions";
import type { GameState } from "@/types/gameState";
import type { LocationId } from "@/data/locations";
import MissionDetailCard from "./MissionDetailCard";
import { ClipboardList, Wrench, Orbit, SatelliteDish } from "lucide-react";

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
  const [selectedPlanetId, setSelectedPlanetId] = useState<LocationId | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<"missions" | "services">(
    "missions",
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
      <div className="planeteSelection-header">
        <div className="navigate-up">
          {" "}
          <span>
            <Orbit size={20} color="#4fc3ff" />

            <h2>SYSTÈME DE NAVIGATION</h2>
          </span>{" "}
          <p className="online">ONLINE</p>{" "}
        </div>

        <div className="navigate-down">
          <p>NAV_CORE / SECTOR_01</p>
          <p>ASTRO-NAV // SYS v2.3.0</p>
        </div>
      </div>
      <div className="planetSelection-container">
        <PlanetSelection
          onShowMissions={handleShowMissions}
          selectedPlanetId={selectedPlanetId}
          setSelectedPlanetId={setSelectedPlanetId}
        />
      </div>

      <div className="missionSelect-header">
        <div className="terminal">
          <span>
            <SatelliteDish size={20} color="#4fc3ff" />

            <h2>TERMINAL DE LIAISON</h2>
          </span>{" "}
          <p className="online">SIGNAL ACTIF</p>
        </div>
        <div className="terminal-info">
          <p>COM_NETWORK // CHANNEL_7</p>
        </div>
      </div>

      <div className="mission-container">
        <div className="mission-list-detail">
          <div className="title-box">
            <span className="line-title"></span>
            <h2>MISSIONS DISPONIBLE</h2>
          </div>

          <div className="planet-actions">
            <button
              className="mission-button"
              type="button"
              onClick={() => handleShowMissions(selectedPlanetId)}
              disabled={selectedPlanetId === null}
            >
              <ClipboardList size={16} /> Missions
            </button>

            <button
              className="service-button"
              type="button"
              onClick={() => handleShowMissions(null)}
              disabled={selectedPlanetId === null}
            >
              <Wrench size={16} /> Services
            </button>
          </div>
          <div className="mission-list-info">
            <p>{missionsLocationId && locations[missionsLocationId].name}</p>
            <p>{availableMissions.length} Contrats</p>
          </div>

          {missionsLocationId !== null ? (
            <div className="missionsSelection-fiche">
              {availableMissions.map((mission) => (
                <MissionSelectionCard
                  key={mission.id}
                  mission={mission}
                  onSelect={handleSelectMission}
                />
              ))}
            </div>
          ) : (
            <div className="mission-empty">
              <p>
                {" "}
                &gt; AUCUNE PLANÈTE SÉLECTIONNÉE
                <span className="cursor">_</span>
              </p>
              <span className="waiting">EN ATTENTE DE COORDONNÉES...</span>
            </div>
          )}
        </div>
        <div className="mission-detail">
          <div className="mission-detail-header">
            <span className="line-title"></span>
            <h2>DETAILS DE LA MISSION</h2>
          </div>

          {previewMission ? (
            <MissionDetailCard
              previewMission={previewMission}
              setSelectedMission={setSelectedMission}
            />
          ) : (
            <div className="mission-empty">
              <p>
                &gt; AUCUNE MISSION SÉLECTIONNÉE
                <span className="cursor">_</span>
              </p>
              <span className="waiting">
                EN ATTENTE DES DONNÉES DE MISSION...
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MissionsSelection;
