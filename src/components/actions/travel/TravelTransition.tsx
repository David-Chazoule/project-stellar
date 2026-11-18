import { LocationId } from "@/data/locations";
import { travelDurations } from "../../../data/locations";
import {Orbit} from "lucide-react"

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
            <p>NAV_CORE / SECTOR_0{destinationId}</p>
            <p>ASTRO-NAV // SYS v2.3.0</p>
          </div>
        </div>
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
