import {
  locations,
  sectorNames,
  type LocationId,
} from "../../../data/locations";
import Button from "../../Ui/Button";
import { getTravelDuration } from "@/logic/travel/getTravelDuration";
import { START_DATE, addDays, formatDate } from "@/utils/gameDate";
import { GameState } from "../../../types/gameState";

type Props = {
  departureId: LocationId;
  destinationId: LocationId;
  gameState: GameState;
  onContinue: () => void;
  travelDuration: number;
};

function TravelPage({
  departureId,
  destinationId,
  gameState,
  onContinue,
  travelDuration,
}: Props) {
  const departure = locations[departureId];
  const destination = locations[destinationId];

  const baseDuration = getTravelDuration(departureId, destinationId);

  const orbitalVariation = travelDuration / baseDuration;

  let orbitalText = "";

  if (orbitalVariation === 1) {
    orbitalText = "Les conditions orbitales sont optimales pour rejoindre";
  } else if (orbitalVariation <= 1.2) {
    orbitalText =
      "« La configuration orbitale actuelle permet un transfert favorable pour rejoindre»";
  } else if (orbitalVariation <= 1.4) {
    orbitalText =
      "Le trajet nécessite une trajectoire prolongée pour rejoindre";
  } else {
    orbitalText = "La fenêtre orbitale est défavorable pour rejoindre";
  }

  const pronom =
    destinationId === "earth" || destinationId === "moon" ? "la " : "";
  const totalDaysAtArrival = gameState.elapsedDays + travelDuration;

  const estimatedArrivalDate = formatDate(
    addDays(START_DATE, totalDaysAtArrival),
  );

  return (
    <div className="start-panel">
      <div className="header"></div>

      <div className="travel-screen">
        <div>
          <div className="location-box">
            <p>POINT DE DÉPART </p>
            <p>{departure.name.toUpperCase()}</p>
            <p>Secteur {departure.sectorId}</p>
          </div>

          <span>TRANSIT</span>

          <div className="destination-box">
            <p>DESTINATION</p>
            <p>{destination.name.toUpperCase()}</p>
            <p>Secteur {destination.sectorId} </p>
          </div>
        </div>

        <div className="orbit-txt-box">
          <div className="orbit-header">
            <span>
              <p>ANALYSE ORBITALE</p>
            </span>
            <p>CALCUL TERMINÉ</p>
          </div>

          <p>
            {orbitalText} {pronom} {destination.name}. La fenêtre de transfert
            disponible permet un voyage estimé à {travelDuration} jours.
          </p>

          <div className="information-box">
            <span>
              <p>DURÉE MINIMALE </p>
              <p>{baseDuration} JOURS</p>
            </span>

            <span>
              <p>DURÉE ESTIMÉE</p>
              <p>{travelDuration} JOURS</p>
            </span>
          </div>
        </div>
      </div>

      <div className="date-estimation-box">
        <span>
          <p>ARRIVÉE ESTIMÉE</p>
        </span>
        <p>{estimatedArrivalDate}</p>
      </div>

      <div className="button-box">
        <Button onClick={onContinue}>CONFIRMER LE DÉPART</Button>
      </div>
    </div>
  );
}

export default TravelPage;
