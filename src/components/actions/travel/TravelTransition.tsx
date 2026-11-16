import { LocationId } from "@/data/locations";
import { travelDurations } from "../../../data/locations";

type Props = {
  destinationId: LocationId;
  elapsedTravelDays: number;
  travelDuration: number;
  onContinue: () => void;
};

function TravelTransition({
  destinationId,
  elapsedTravelDays,
  travelDuration,
  onContinue,
}: Props) {
  const progress = Math.round((elapsedTravelDays / travelDuration) * 100);
  return (
    <div className="start-panel">
      <div className="header"></div>
      <div className="text-intro-transition"></div>

      <div className="resume-situation">
        <p>Destination:{destinationId}</p>
        <p>Temps écoulés:{elapsedTravelDays}</p>
        <p>Progression du voyage: {progress}</p>
      </div>

      <button onClick={onContinue}>Poursuivre le voyage</button>
    </div>
  );
}

export default TravelTransition;
