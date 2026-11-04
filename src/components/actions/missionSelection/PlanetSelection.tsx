"use client";
import { locations } from "@/data/locations"
import { useState } from "react";
import type { LocationId } from "@/data/locations";

type Props = {
  onShowMissions: (locationId: LocationId | null) => void;
}



function PlanetSelection({onShowMissions}:Props) {
  const [selectedPlanetId, setSelectedPlanetId] =
  useState<LocationId | null>(null);

  const currentSectorId = 1;

 const sectorPlanets = Object.entries(locations).filter(
    ([, location]) => location.sectorId === currentSectorId
  );

  return (
    <div className="planet-selection">
    {sectorPlanets.map(([id, location]) => (
  <div key={id} className="planet-item">
    <button
      type="button"
      onClick={() =>{setSelectedPlanetId(id as LocationId);onShowMissions(null)} }
    >
      {location.name}
    </button>

    {selectedPlanetId === id && (
      <div className="planet-actions">
        <button type="button" onClick={() =>{onShowMissions(id as LocationId)}}>Missions</button>
        <button type="button"  onClick={() => onShowMissions(null)}>Services</button>
      </div>
    )}
  </div>
))}
    </div>
  );
  
}

export default PlanetSelection