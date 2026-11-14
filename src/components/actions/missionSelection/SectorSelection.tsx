import React from "react";
import { SectorId, type LocationId } from "@/data/locations";
import { sectorNames } from "@/data/locations";
import { sectorEntryPoints } from "@/data/locations";
import { locations } from "@/data/locations";

type Props = {
  selectedSectorId: SectorId;
  setSelectedSectorId: React.Dispatch<React.SetStateAction<SectorId>>;
  currentSectorId: SectorId;
  onTravel: (destinationId: LocationId) => void;
};

function SectorSelection({
  selectedSectorId,
  setSelectedSectorId,
  currentSectorId,
  onTravel,
}: Props) {
  const entryLocationId = sectorEntryPoints[selectedSectorId];

  return (
    <div className="sectorSelection-container">
      <div className="header">
        <p>NAVIGATION INTERSECTORIELLE</p>
      </div>
      <div className="sector-box">
        <div className="sector-name-box">
          <span>
            ICON
            <span>
              <h4>SECTEUR {String(selectedSectorId).padStart(2, "0")}</h4>
              <p>{sectorNames[selectedSectorId]}</p>
            </span>
          </span>
        </div>

        <div className="select-sector-box">
          <span>
            <button
              onClick={() =>
                setSelectedSectorId((prev) =>
                  prev > 1 ? ((prev - 1) as SectorId) : prev,
                )
              }
            >
              icon
            </button>
            <p>{selectedSectorId} /5</p>
            <button
              onClick={() =>
                setSelectedSectorId((prev) =>
                  prev < 5 ? ((prev + 1) as SectorId) : prev,
                )
              }
            >
              icon
            </button>
          </span>
        </div>
      </div>
      <div className="footer-action">
        {selectedSectorId === currentSectorId ? (
          <div>
            <p>VOUS ÊTES DANS CE SECTEUR</p>
          </div>
        ) : (
          <div className="footer-travel-direction">
            <div className="transfert-box">
              <span>
                <p>SECTEUR {String(currentSectorId).padStart(2, "0")}</p>
                <p>SECTEUR {String(selectedSectorId).padStart(2, "0")}</p>
              </span>
              <span>
                Point d'entrée :{" "}
                {entryLocationId
                  ? locations[entryLocationId].name
                  : "Non défini"}
              </span>
            </div>

            <div className="button-travel">
              <button
                type="button"
                disabled={!entryLocationId}
                onClick={() => {
                  if (entryLocationId) {
                    onTravel(entryLocationId);
                  }
                }}
              >
                REJOINDE LE SECTEUR{" "}
                {String(selectedSectorId).padStart(2, "0")}{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SectorSelection;
