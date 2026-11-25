import { locations } from "@/data/locations";
import type { LocationId } from "@/data/locations";
import { getTravelDuration } from "@/logic/travel/getTravelDuration";
import { GameState } from "@/types/gameState";
import { Clock4, StepForward } from "lucide-react";
type Props = {
  destinationId: LocationId;
  currentLocationId: LocationId;
  onConfirm: () => void;
};

function TravelCard({ destinationId, currentLocationId, onConfirm }: Props) {
  const duration = getTravelDuration(currentLocationId, destinationId);

  return (
    <div
      className="mission-detail-container"
      style={{
        backgroundImage: `
      linear-gradient(
        to bottom,
        #0b1520 0%,
        rgba(11, 21, 32, 0.95) 25%,
        rgba(11, 21, 32, 0.6) 60%,
        transparent 100%
      ),
      url(${locations[destinationId].imageArrival})
    `,
      }}
    >
      <div className="info-mission-detail">
        <div className="info-container">
          <div className="title-info">
            <h1>PLAN DE VOL</h1>
          </div>

          <p>Direction: {locations[destinationId].name.toUpperCase()}</p>
          <p>Sector 0{locations[destinationId].sectorId}</p>
        </div>

        <div className="start-container">
          <div className="request">
            <p className="request-title">
              <span>
                <Clock4 size={20}/>
                
              </span>
              DURÉE MINIMAL DU TRANSIT
            </p>
          </div>

          <p>{duration} Jours</p>
          <p>* Si la fenêtre orbitale est obtimale </p>

          <div className="btn-container">
            <button onClick={onConfirm}>
              {" "}
              COMMANCER LE VOYAGE
              <span>
                {" "}
                <StepForward size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
