import Button from "@/components/Ui/Button";
import { locations, sectorNames, type LocationId } from "@/data/locations";
import type { GameState } from "@/types/gameState";
import { START_DATE, addDays, formatDate } from "@/utils/gameDate";

type Props = {
  destinationId: LocationId;
  onContinue: () => void;
  travelDuration: number;
  gameState: GameState;
};

function TravelArrival({
  destinationId,
  onContinue,
  travelDuration,
  gameState,
}: Props) {
  const destination = locations[destinationId];

  const currentDate = formatDate(addDays(START_DATE, gameState.elapsedDays));

  return (
    <div className="start-panel">
      <div className="arrival-container">
        <h2>DESTINATION ATTEINTE</h2>
        <p>{destination.name}</p>
        <p>SECTEUR {destination.sectorId} </p>
        <p>{sectorNames[destination.sectorId]}</p>
      </div>

      <div className="arrival-info">
        <span>
          <p>STATUT DU TRANSIT</p> <p>TERMINÉ</p>
        </span>
        <span>
          <p>DURÉE DU VOYAGE</p>
          <p>{travelDuration}JOURS</p>
        </span>
        <span>
          DATE D'ARRIVÉE<p></p>
          <p>{currentDate}</p>
        </span>
      </div>

      <div className="button-box">
        <Button onClick={onContinue}>ACCÉDER AU BRIEFING</Button>
      </div>
    </div>
  );
}

export default TravelArrival;
