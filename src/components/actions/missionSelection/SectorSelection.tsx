import React from "react";

function SectorSelection() {
  return (
    <div className="sectorSelection-container">
      <div className="header">
        <p>NAVIGATION INTERSECTORIELLE</p>
      </div>
      <div className="sector-box">
        <div className="sector-name-box">
          <span>
            ICON
            <span>
              <h4>SECTEUR 0</h4>
              <p>planète interieur</p>
            </span>
          </span>
        </div>

        <div className="select-sector-box">
          <span>
            <button>icon</button>
            <p>0/0</p>
            <button>icon</button>
          </span>
        </div>
      </div>
      <div className="footer-action">
        <div>
          <p>VOUS ÊTES DANS CE SECTEUR</p>
        </div>

        <div className="footer-travel-direction">
          <div className="transfert-box">
            <span>
              <p>SECTEUR 0</p>
              <p>SECTEUR 0</p>
            </span>
            <span>Point d'entrée :</span>
          </div>

          <div className="button-travel">
            <button>REJOINDE LE SECTEUR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectorSelection;
