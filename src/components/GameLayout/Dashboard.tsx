import React from "react";

import type { GameState, View } from "@/types/gameState";
import type { Character } from "@/types/character";

type Props = {
  view: View;
  crew: Character[];
  setView: React.Dispatch<React.SetStateAction<View>>;
  gameState: GameState;
};

function Dashboard({ view, setView, crew, gameState }: Props) {
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
      <div className="dashboard-screen">
        <div className="dashboard-header">
          <p className="dashboard-kicker">SYSTÈME DE BORD // STELLAR</p>
        </div>
        <button onClick={handleMissionSelection}>Missions</button>
        < button onClick={()=>{setView("event")}}>XXX</button>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <p className="dashBoard-label">CREDITS</p>
            <p className="dashboard-value">{gameState.credits}</p>
          </div>

          <div className="dashboard-card">
            <p className="dashBoard-label">COHESION</p>
            <p className="dashboard-value">{gameState.cohesion} %</p>
          </div>

          <div className="dashboard-card">
            <p className="dashBoard-label">REPUTATION</p>
            <p className="dashboard-value">{gameState.reputation}</p>
          </div>

          <div className="dashboard-card">
            <p className="dashBoard-label">DATE</p>
            <p className="dashboard-value">{gameState.elapsedDays}</p>
          </div>

          <div className="dashboard-card">
            <p className="dashBoard-label">EQUIPAGE</p>
            <button className="dashboard-crew" onClick={handleCrew}>
              {" "}
              <strong className="dashboard-value">{crew.length}/8</strong>
            </button>
          </div>

          <div className="dashboard-card">
            <p className="dashBoard-label">LOCALISATION</p>
            <p className="dashboard-value">TERRE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
