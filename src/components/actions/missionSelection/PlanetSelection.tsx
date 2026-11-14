"use client";

import { locations, sectorNames, type LocationId } from "@/data/locations";
import type { GameState } from "@/types/gameState";
import SystemLogs from "@/components/Ui/SystemLogs";
import { Rocket, MapPin } from "lucide-react";
import type { SectorId } from "@/data/locations";

type Props = {
  onShowMissions: (locationId: LocationId | null) => void;
  selectedPlanetId: LocationId | null;
  setSelectedPlanetId: React.Dispatch<React.SetStateAction<LocationId | null>>;
  gameState: GameState;
  onTravel: (destinationId: LocationId) => void;
  selectedSectorId: SectorId;
  currentSectorId: SectorId;
};

function PlanetSelection({
  onShowMissions,
  selectedPlanetId,
  setSelectedPlanetId,
  gameState,
  onTravel,
  selectedSectorId,
  currentSectorId,
}: Props) {
  const sectorPlanets = Object.entries(locations).filter(
    ([, location]) => location.sectorId === selectedSectorId,
  );

  return (
    <div className="planet-selection">
      <div className="sector-info">
        <div className="sector-heading">
          <h2>SECTEUR {selectedSectorId}</h2>
          <p>{sectorNames[selectedSectorId].toUpperCase()}</p>
        </div>
        <div className="system-logs-box">
          <SystemLogs />
        </div>
        <div className="planet-legend">
          <span className="legend-title">LÉGENDE</span>

          <div>
            <MapPin size={16} color="#69c8a6" />
            <span>Position actuelle</span>
          </div>

          <div>
            <Rocket size={16} color="#4fc3ff" />
            <span>Voyage possible</span>
          </div>
        </div>
      </div>

      <div className="planet-list">
        {sectorPlanets.map(([id, location]) => (
          <div key={id} className="planet-item">
            <div className="localisation-box">
              {id === gameState.currentLocationId ? (
                <MapPin className="current-location-icon" size={19} />
              ) : selectedPlanetId === id &&
                selectedSectorId === currentSectorId ? (
                <button
                  type="button"
                  className="travel-icon"
                  title={`Voyager vers ${location.name}`}
                  onClick={() => onTravel(id as LocationId)}
                >
                  <Rocket size={21} />
                </button>
              ) : null}
            </div>

            <div
              className={`planet ${
                selectedPlanetId === id ? "planet-selected" : ""
              }`}
            >
              <img
                src={location.image}
                alt={location.name}
                style={{
                  cursor:
                    selectedSectorId === currentSectorId
                      ? "pointer"
                      : "default",
                }}
                onClick={() => {
                  if (selectedSectorId !== currentSectorId) return;

                  setSelectedPlanetId(id as LocationId);
                  onShowMissions(id as LocationId);
                }}
              />
            </div>

            <p className="planet-name">{location.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanetSelection;
