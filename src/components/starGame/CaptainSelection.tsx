import CharacterSelectionCard from "./CharacterSelectionCard";
import GetShipName from "./GetShipName";
import { StartGameStep } from "./StartGameFlow";
import { characters } from "@/data/character";

import type { Character } from "@/types/character";
import type { Ship } from "@/types/ship";

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
    <div className="captainSelect-container">
      <div className="text-intro">
        {" "}
        <h1>Identification du commandant requise.</h1>
        <p>
          Qui êtes-vous, Capitaine ? Sélectionnez votre profil avant de prendre
          le contrôle de l’Infini.
        </p>
      </div>

      <div className="card-captain-box">
        {characters.map((character) => {
          const isSelected = captainId === character.id;
          return (
            <CharacterSelectionCard
              key={character.id}
              character={character}
              onClick={() => setCaptainId(character.id)}
              isSelected={isSelected}
            />
          );
        })}
      </div>

      <div className="nameShip-box">
        <p>Comment s'appelle votre vaisseaux ?</p>

        <GetShipName ship={ship} setShip={setShip} />
      </div>

      <div>
        <button
          className="button-box"
          disabled={captainId === null}
          onClick={handleContinue}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}

export default CaptainSelection;
