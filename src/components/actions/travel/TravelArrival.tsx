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

        <div className="planet-detail-container">
          <div className="planet-detail">
            {" "}
            <div className="img-detail">
              <img src={destination.imageArrival} alt={destination.name} />
            </div>
            <div className="detail">
              <div className="detail-title">
                <h3>{destination.name.toUpperCase()}</h3>

                <p>
                  SECTEUR 0{destination.sectorId} -{" "}
                  {sectorNames[destination.sectorId]}
                </p>
              </div>

              <div className="detail-info">
                <p>Type: {destination.type}</p>

                <p>Atmosphère: {destination.atmosphere}</p>

                <p>Température: {destination.temperature}°</p>

                <p>Gravité naturelle: {destination.gravity} g</p>

                <p>Population: {destination.population}</p>

                <p>Politique: {destination.politics}</p>

                <p>Activité: {destination.activity}</p>
              </div>
            </div>
          </div>
          <div className="info-container">
            {/* <span className="description-box">
          <p>Description:</p>
           <p className="description">{destination.description}</p>
        </span> */}
          </div>
        </div>
      </div>

      <div className="fact-box">
        <p>fact</p>
      </div>

      <div className="arrival-info">
        <span className="arrival-info-label">
          <p>STATUT DU TRANSIT</p> <p className="finish">TERMINÉ</p>
        </span>
        <span className="arrival-info-label">
          <p>DURÉE DU VOYAGE</p>
          <p>{travelDuration} JOURS</p>
        </span>
        <span className="arrival-info-label">
          <p>DATE D'ARRIVÉE</p>
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
