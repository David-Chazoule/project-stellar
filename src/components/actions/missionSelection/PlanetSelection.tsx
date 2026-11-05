"use client";
import { locations } from "@/data/locations";

import type { LocationId } from "@/data/locations";

import { sectorNames } from "../../../data/locations";

type Props = {
  onShowMissions: (locationId: LocationId | null) => void;
  selectedPlanetId: LocationId | null;
  setSelectedPlanetId: React.Dispatch<React.SetStateAction<LocationId | null>>;
};

function PlanetSelection({
  onShowMissions,
  selectedPlanetId,
  setSelectedPlanetId,
}: Props) {
  const currentSectorId = 1;

  const sectorPlanets = Object.entries(locations).filter(
    ([, location]) => location.sectorId === currentSectorId,
  );

  return (
    <div className="planet-selection">
      <div className="sector-info">
        <h2>Secteur {currentSectorId} </h2>
        <p>{sectorNames[currentSectorId].toUpperCase()}</p>
      </div>
      <div className="planet-list">
        {sectorPlanets.map(([id, location]) => (
          <div key={id} className="planet-item">
            <img
              src={location.image}
              alt={location.name}
              onClick={() => {
                setSelectedPlanetId(id as LocationId);
                onShowMissions(id as LocationId);
              }}
            />

            <p>{location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanetSelection;
