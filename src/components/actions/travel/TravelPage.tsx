import {
  locations,
  sectorNames,
  type LocationId,
} from "../../../data/locations";
import Button from "../../Ui/Button";

type Props = {
  departureId: LocationId;
  destinationId: LocationId;
 onContinue: () => void;
  travelDuration: number;
};

function TravelPage({
  departureId,
  destinationId,
  onContinue,
  travelDuration,
}: Props) {
  const departure = locations[departureId];
  const destination = locations[destinationId];

  return (
    <div className="start-panel">
      <div className="header"></div>

      <div className="travel-screen">
        <div>
          <div className="location-box">
            <p>ORIGINE</p>
            <p>{departure.name.toUpperCase()}</p>
            <p>Secteur {departure.sectorId}</p>
            <p>{sectorNames[departure.sectorId].toUpperCase()}</p>
          </div>

          <span>TRANSIT</span>

          <div className="destination-box">
            <p>DESTINATION</p>
            <p>{destination.name.toUpperCase()}</p>
            <p>Secteur {destination.sectorId} </p>
            <p>{sectorNames[destination.sectorId].toUpperCase()}</p>
          </div>
        </div>

        <div className="information-box">
          <p>DURÉE ESTIMÉE</p>
          <p>{travelDuration} JOURS</p>
        </div>
      </div>

      <div className="travel-txt"></div>

      <div className="button-box">
        <Button onClick={onContinue}>Continuer</Button>
      </div>
    </div>
  );
}

export default TravelPage;
