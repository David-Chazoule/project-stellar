import React from "react";

type Props = {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
};

function Dashboard({ view, setView }: Props) {
  const handleCrew = () => {
    if (view === "crew") {
      setView("");
    } else {
      setView("crew");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
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
            <button onClick={handleCrew}>X</button>
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
