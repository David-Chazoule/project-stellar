import Button from "@/components/Ui/Button";
import { locations, sectorNames, type LocationId } from "@/data/locations";
import type { GameState } from "@/types/gameState";
import { START_DATE, addDays, formatDate } from "@/utils/gameDate";
import { Database, Orbit } from "lucide-react";

type Props = {
  destinationId: LocationId;
  onContinue: () => void;
  travelDuration: number;
  gameState: GameState;
  isMissionTravel: boolean | null;
};

function TravelArrival({
  destinationId,
  onContinue,
  travelDuration,
  gameState,
  isMissionTravel,
}: Props) {
  const destination = locations[destinationId];

  const currentDate = formatDate(addDays(START_DATE, gameState.elapsedDays));

  return (
    <div className="start-panel">
      <div className="arrival-container">
        <div className="arrival-header">
          <div className="navigate-up">
            {" "}
            <span className="icon">
              <Orbit size={20} color="#4fc3ff" />
              <h2>SYSTÈME DE NAVIGATION</h2>
            </span>{" "}
            <p className="online">ONLINE</p>{" "}
          </div>

          <div className="navigate-down">
            <p>NAV_CORE / SECTOR_0{destination.sectorId}</p>
            <p>ASTRO-NAV // SYS v2.3.0</p>
          </div>
        </div>
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

                <p>
                  Population: {destination.population.toLocaleString("fr-FR")}{" "}
                  habitants
                </p>

                <p>Politique: {destination.politics}</p>

                <p>Activité: {destination.activity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fact-box">
        <div className="fact-header">
          <Database size={14} color="#4fc3ff" />
          <p>ARCHIVES LOCALES — {destination.name}</p>
        </div>
        <div className="fact-text"></div>
        <div className="fact-footer">
          <p>CIVILISATION · 2300</p>
        </div>
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
        <Button onClick={onContinue}>
          {isMissionTravel ? "ACCÉDER AU BRIEFING" : "RETOUR AU TERMINAL"}
        </Button>
      </div>
    </div>
  );
}

export default TravelArrival;
