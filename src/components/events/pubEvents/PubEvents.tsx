import { useState } from "react";

import { allPubs } from "@/data/pubs/pubs";
import { RadioTower } from "lucide-react";

type Props = {
  onContinue: () => void;
};

function PubEvents({ onContinue }: Props) {
  const [selectedPub] = useState(() => {
    const randomIndex = Math.floor(Math.random() * allPubs.length);

    return allPubs[randomIndex];
  });

  return (
    <div className="start-panel">
      <div className="header">
        <div className="network">
          <img className="logo-network" src="/pubs/GN.webp" alt="GN" />
          <div className="network-title">
            <h2>GALACTIC NETWORK</h2>
            <p>RÉSEAU DE DIFFUSION INTERPLANÉTAIRE</p>
          </div>
        </div>
        <RadioTower size={30} color="#4fc3ff" />
      </div>
      <div className="img-pub">
        <img src={`/pubs/${selectedPub}.webp`} alt="pubs" />
      </div>

      <div className="button-box">
        <button onClick={onContinue}>CONTINUER</button>
      </div>
    </div>
  );
}

export default PubEvents;
