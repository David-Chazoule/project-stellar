import React from "react";
import { SectorId, type LocationId } from "@/data/locations";
import { sectorNames } from "@/data/locations";
import { sectorEntryPoints } from "@/data/locations";
import { locations } from "@/data/locations";
import {
  Orbit,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
} from "lucide-react";

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
          <Orbit size={42} color="#4fc3ff" />
          <span>
            <h4>SECTEUR {String(selectedSectorId).padStart(2, "0")}</h4>
            <p>{sectorNames[selectedSectorId]}</p>
          </span>
        </div>

        <div className="select-sector-box">
          <div className="button-box">
            <button
              onClick={() =>
                setSelectedSectorId((prev) =>
                  prev > 1 ? ((prev - 1) as SectorId) : prev,
                )
              }
            >
              <ChevronLeft color="white" />
            </button>
            <p>{selectedSectorId}/5</p>
            <button
              onClick={() =>
                setSelectedSectorId((prev) =>
                  prev < 5 ? ((prev + 1) as SectorId) : prev,
                )
              }
            >
              <ChevronRight color="white" />
            </button>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-action">
        {selectedSectorId === currentSectorId ? (
          <div className="location-box">
            <MapPin size={22} color="#69c8a6" />{" "}
            <p>VOUS ÊTES DANS CE SECTEUR</p>
          </div>
        ) : (
          <div className="footer-travel-direction">
            <p>TRANSFERT INTERSECTORIEL DISPONIBLE</p>
            <div className="transfert-box">
              <div className="transfert">
                <span>
                  <p>SECTEUR {String(currentSectorId).padStart(2, "0")}</p>
                  <ArrowRight size={20} color="#4fc3ff" />
                  <p>SECTEUR {String(selectedSectorId).padStart(2, "0")}</p>
                </span>
                <span className="entry-point">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default SectorSelection;
