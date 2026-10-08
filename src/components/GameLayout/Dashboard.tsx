import React from "react";
import { characters } from "@/data/character";

type View = "crew" | "missions" | null;

type Props = {
  view: View;
  setView: React.Dispatch<React.SetStateAction<View>>;
};

function Dashboard({ view, setView }: Props) {
  const handleCrew = () => {
    if (view === "crew") {
      setView(null);
    } else {
      setView("crew");
    }
  };

  const handleMissionSelection = () => {
    if (view === "missions") {
      setView(null);
    } else {
      setView("missions");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <button onClick={handleMissionSelection}>Missions</button>
        <div className="dashboard-row">
          <div className="dashboard-item">
            <p>CREDITS</p>
            <p>12 500</p>
          </div>

          <div className="dashboard-item">
            <p>COHESION</p>
            <p>50%</p>
          </div>

          <div className="dashboard-item">
            <p>REPUTATION</p>
            <p>10</p>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="dashboard-item">
            <p>DATE</p>
            <p>2187</p>
          </div>

          <div className="dashboard-item">
            <p>EQUIPAGE</p>
            <button onClick={handleCrew}>{characters.length}/8</button>
          </div>

          <div className="dashboard-item">
            <p>LOCALISATION</p>
            <p>TERRE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
