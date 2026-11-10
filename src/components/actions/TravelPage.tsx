import React from "react";

function TravelPage() {
  return (
    <div>
      <div className="header"></div>

      <div className="travel-screen">
        <div>
          <div className="location-box">
            <p>ORIGINE</p>
            <p>TERRE</p>
            <p>Secteur </p>
            <p>PLanètes intérieures</p>
          </div>

          <span>TRANSIT</span>

          <div className="destination-box">
            <p>DESTINATION</p>
            <p>TERRE</p>
            <p>Secteur </p>
            <p>PLanètes intérieures</p>
          </div>
        </div>

        <div className="information-box">
          <p>DURÉE ESTIMÉE</p>
          <p>65 JOURS</p>
        </div>
      </div>

      <div className="travel-txt"></div>

      <div className="button-box"></div>
    </div>
  );
}

export default TravelPage;
