import React from "react";

import type { Ship } from "@/types/Ship";

type Props = {
  ship: Ship;
  setShip: React.Dispatch<React.SetStateAction<Ship>>;
};

function GetShipName({ ship, setShip }: Props) {
  const shipNames = [
    "Infini",
    "Horizon",
    "Asterion",
    "Odyssey",
    "Ricardo",
    "Nomad",
  ];
  return (
    <div className="shipName_Container">
      <div className="shipNameSelection-list">
        {shipNames.map((name) => {
          const isSelected = ship.name === name;

          return (
            <div
              key={name}
              className={
                isSelected ? "shipName-card selected" : "shipName-card"
              }
              onClick={() =>
                setShip((prev) => ({
                  ...prev,
                  name,
                }))
              }
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetShipName;
