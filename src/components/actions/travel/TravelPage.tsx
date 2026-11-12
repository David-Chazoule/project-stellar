import {
  locations,
  sectorNames,
  type LocationId,
} from "../../../data/locations";
import Button from "../../Ui/Button";
import { getTravelDuration } from "@/logic/travel/getTravelDuration";
import { START_DATE, addDays, formatDate } from "@/utils/gameDate";
import { GameState } from "../../../types/gameState";
import {
  MoveRight,
  CircleCheck,
  CalendarClock,
  Satellite,
  Earth,
  Orbit,
} from "lucide-react";

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
      "La configuration orbitale actuelle permet un transfert favorable pour rejoindre";
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

      <div className="title-travelPage">
        <h1>PLAN DE VOL</h1>
        <h3>CALCUL DE TRAJECTOIRE INTERPLANÉTAIRE</h3>
      </div>

      <div className="travel-screen-container">
        <div className="screen">
          <div className="location-box">
            <p className="title">POINT DE DÉPART </p>
            {departure.name === "Terre" ? (
              <Earth size={28} color="#4fc3ff" />
            ) : (
              <Orbit size={28} color="#4fc3ff" />
            )}
            <p className="planet-name">{departure.name.toUpperCase()}</p>
            <p className="sector-name">Secteur 0{departure.sectorId}</p>
            <span className="confirm-box">
              <CircleCheck size={12} color="#69c8a6" />
              <p>POSITION CONFIRMÉE</p>
            </span>
          </div>

          <span>
            <MoveRight size={24} color="#4fc3ff" />
            <p>TRANSIT</p>
          </span>

          <div className="destination-box">
            <p className="title">DESTINATION</p>
            {destination.name === "Terre" ? (
              <Earth size={28} color="#4fc3ff" />
            ) : (
              <Orbit size={28} color="#4fc3ff" />
            )}
            <p className="planet-name">{destination.name.toUpperCase()}</p>
            <p className="sector-name">Secteur 0{destination.sectorId} </p>
            <span className="confirm-box">
              <CircleCheck size={12} color="#69c8a6" />
              <p>POSITION VALIDÉE</p>
            </span>
          </div>
        </div>

        <div className="orbit-txt-box">
          <div className="orbit-header">
            <span className="header-title">
              <Satellite size={18} color="#4fc3ff" />
              <p>ANALYSE ORBITALE</p>
            </span>
            <p>CALCUL TERMINÉ</p>
          </div>

          <p>
            {orbitalText} {pronom} {destination.name}. La fenêtre de transfert
            disponible permet un voyage estimé à {travelDuration} jours.
          </p>
          <div className="line"></div>
          <div className="information-box">
            <span className="delay">
              <p className="title">DURÉE MINIMALE </p>
              <p>{baseDuration} JOURS</p>
            </span>

            <span className="delay">
              <p className="title">DURÉE ESTIMÉE</p>
              <p className="duration">{travelDuration} JOURS</p>
            </span>
          </div>
        </div>
      </div>

      <div className="date-estimation-box">
        <span>
          <CalendarClock size={18} color="#4fc3ff" />
          <p>ARRIVÉE ESTIMÉE</p>
        </span>
        <p>{estimatedArrivalDate}</p>
      </div>

      <div className="button-box">
        <button onClick={onContinue}>
          <p>CONFIRMER LE DÉPART</p>
          <MoveRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
}

export default TravelPage;
