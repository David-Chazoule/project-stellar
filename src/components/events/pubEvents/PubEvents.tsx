import { useState } from "react";

import { allPubs } from "@/data/pubs/pubs";

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
      <div className="img-pub">
        <img src={`/pubs/${selectedPub}.webp`} alt="" />
      </div>

      <div className="button-box">
        <button onClick={onContinue}>CONTINUER</button>
      </div>
    </div>
  );
}

export default PubEvents;
