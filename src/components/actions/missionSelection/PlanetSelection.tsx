"use client";

import { locations, sectorNames, type LocationId } from "@/data/locations";
import type { GameState } from "@/types/gameState";
import SystemLogs from "@/components/Ui/SystemLogs";
import { Rocket, MapPin } from "lucide-react";

type Props = {
  onShowMissions: (locationId: LocationId | null) => void;
  selectedPlanetId: LocationId | null;
  setSelectedPlanetId: React.Dispatch<React.SetStateAction<LocationId | null>>;
  gameState: GameState;
  onTravel: (destinationId: LocationId) => void;
};

function PlanetSelection({
  onShowMissions,
  selectedPlanetId,
  setSelectedPlanetId,
  gameState,
  onTravel,
}: Props) {
  const currentSectorId = 1;

  const sectorPlanets = Object.entries(locations).filter(
    ([, location]) => location.sectorId === currentSectorId,
  );

  return (
    <div className="planet-selection">
      <div className="sector-info">
        <div className="sector-heading">
          <h2>SECTEUR {currentSectorId}</h2>
          <p>{sectorNames[currentSectorId].toUpperCase()}</p>
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
              ) : selectedPlanetId === id ? (
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
                onClick={() => {
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
