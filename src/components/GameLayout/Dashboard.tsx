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
      <div className="dashboard-card">
        <button onClick={handleMissionSelection}>Missions</button>
        <div className="dashboard-row">
          <div className="dashboard-item">
            <p>CREDITS</p>
            <p>{gameState.credits}</p>
          </div>

          <div className="dashboard-item">
            <p>COHESION</p>
            <p>{gameState.cohesion} %</p>
          </div>

          <div className="dashboard-item">
            <p>REPUTATION</p>
            <p>{gameState.reputation}</p>
          </div>
        </div>

        <div className="dashboard-row">
          <div className="dashboard-item">
            <p>DATE</p>
            <p>2187</p>
          </div>

          <div className="dashboard-item">
            <p>EQUIPAGE</p>
            <button onClick={handleCrew}>{crew.length}/8</button>
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
