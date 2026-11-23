import { locations, LocationId } from "@/data/locations";
import { travelDurations } from "../../../data/locations";
import { Orbit, MoveRight, Clock, MapPin } from "lucide-react";

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

  const departure = locations[destinationId];

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
          <p>NAV_CORE / FLIGHT_SEQUENCE</p>
          <p>ASTRO-NAV // SYS v2.3.0</p>
        </div>
      </div>
      <div className="img-box">
        <img src="/travel/holo.webp" alt="travel-transition" />
      </div>
      <div className="text-intro-transition">
        <h2>Le voyage se poursuit…</h2>
        <p>Le vaisseau poursuit sa route vers sa destination.</p>
      </div>

      <div className="resume-situation">
        <div className="resume-travel">
          <div className="transit-info">
            <span className="transit-label">
              <MapPin size={20} color="#4fc3ff" />
              <p>DESTINATION</p>
            </span>
            <strong>{departure.name.toUpperCase()}</strong>
          </div>
          <div className="transit-info">
            <span className="transit-label">
              <Clock size={20} color="#4fc3ff" />
              <p>TEMPS ÉCOULÉ</p>
            </span>
            <strong>
              {elapsedTravelDays} <span className="transit-days">jours</span>
            </strong>
          </div>
        </div>
        <div className="progression">
          <div className="progress-info">
            <span>
              <p>PROGRESSION DU VOYAGE:</p>
            </span>
            <span>
              <p className="progress">{progress} %</p>
            </span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
      <div className="button-box">
        <button onClick={onContinue}>
          <p>Poursuivre le voyage </p> <MoveRight size={20} color="white" />
        </button>
      </div>
    </div>
  );
}

export default TravelTransition;
