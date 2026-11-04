"use client";
import { locations } from "@/data/locations";
import { useState } from "react";
import type { LocationId } from "@/data/locations";
import { ClipboardList, Wrench } from "lucide-react";

type Props = {
  onShowMissions: (locationId: LocationId | null) => void;
};

function PlanetSelection({ onShowMissions }: Props) {
  const [selectedPlanetId, setSelectedPlanetId] = useState<LocationId | null>(
    null,
  );

  const currentSectorId = 1;

  const sectorPlanets = Object.entries(locations).filter(
    ([, location]) => location.sectorId === currentSectorId,
  );

  return (
    <div className="planet-selection">
      <div className="sector-info">
        <h2>Secteur 1 </h2>
        <p>PLANÈTES INTÉRIEURES</p>
      </div>
      <div className="planet-list">
        {sectorPlanets.map(([id, location]) => (
          <div key={id} className="planet-item">
            <img
              src={location.image}
              alt={location.name}
              onClick={() => {
                setSelectedPlanetId(id as LocationId);
                onShowMissions(null);
              }}
            />

            <p>{location.name}</p>

            {selectedPlanetId === id && (
              <div className="planet-actions">
                <button
                  className="mission-button"
                  type="button"
                  onClick={() => {
                    onShowMissions(id as LocationId);
                  }}
                >
                  <ClipboardList size={16} /> Missions
                </button>
                <button
                  className="service-button"
                  type="button"
                  onClick={() => onShowMissions(null)}
                >
                  <Wrench size={16} /> Services
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanetSelection;
