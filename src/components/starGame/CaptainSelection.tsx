

import CharacterSelectionCard from "./CharacterSelectionCard";
import GetShipName from "./GetShipName";
import { StartGameStep } from "./StartGameFlow";
import { characters } from "@/data/character";

import type { Character } from "@/types/character";
import type { Ship } from "@/types/Ship";

import { FingerprintPattern, Loader, Radar, CircleCheck } from "lucide-react";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
  captainId: number | null;
  setCaptainId: React.Dispatch<React.SetStateAction<number | null>>;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  ship: Ship;
  setShip: React.Dispatch<React.SetStateAction<Ship>>;
};

function CaptainSelection({
  startStep,
  setStartStep,
  captainId,
  setCaptainId,
  crew,
  setCrew,
  ship,
  setShip,
}: Props) {
  function handleContinue() {
    const captain = characters.find((character) => character.id === captainId);

    if (!captain) return;

    setCrew([captain]);
    setStartStep("crew");
  }

  return (
    <div className="start-panel ">
      <div className="nameShip-box">
        <div className="shipNameIntro-header">
          <span>
            <Radar size={16} color="#4fc3ff" />
            <p>SYSTÈME DE BORD — ENREGISTREMENT</p>
          </span>
          <p>REG.PROTOCOL_01</p>
        </div>
        <div className="shipNameIntro-content">
          <h3>Identification du vaisseau requise.</h3>
          <p>Comment s'appelle votre vaisseau ?</p>
          <span>
            {" "}
            <Loader size={16} color="#4fc3ff" />
            <p>MODULE DE DÉSIGNATION SHIP.REGISTRY_01</p>
          </span>
        </div>

        <>
          <GetShipName ship={ship} setShip={setShip} />
        </>

        <div className="shipSelect">
          {" "}
          <span className="lineOne">
            <CircleCheck size={16} color="#4fc3ff" />
            <p>Vaisseau identifié</p>
          </span>
          <span className="lineTwo">
            <p className="shipName">{ship.name}</p>
            <p>ENREGISTRÉ</p>
          </span>
          <span className="modelName">
            <p>Modèle : {ship.model}</p>
          </span>
        </div>
      </div>

      <div className="captain-intro-header">
        <span>
          <FingerprintPattern size={16} color="#4fc3ff" />
          <p>SYSTÈME DE BORD — IDENTIFICATION</p>
        </span>
        <p>AUTH.PROTOCOL_02</p>
      </div>
      <div className="captain-intro-txt">
        {" "}
        <h3>Identification du commandant requise.</h3>
        <p className="asking-txt">Qui êtes-vous, Capitaine ?</p>
        <p>
          Sélectionnez votre profil avant de prendre le contrôle de votre
          vaisseau.
        </p>
        <span>
          <Loader size={16} color="#4fc3ff" />
          <p>MODULE D'IDENTIFICATION CAPTAIN.REGISTRY_02</p>
        </span>
      </div>

      <div className="card-captain-box">
        <div className="card-wrap">
          {characters.map((character) => {
            const isSelected = captainId === character.id;
            return (
              <CharacterSelectionCard
                key={character.id}
                character={character}
                onClick={() => setCaptainId(character.id)}
                isSelected={isSelected}
                handleContinue={handleContinue}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CaptainSelection;
