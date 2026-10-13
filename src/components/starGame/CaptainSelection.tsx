import CharacterSelectionCard from "./CharacterSelectionCard";
import { StartGameStep } from "./StartGameFlow";
import { characters } from "@/data/character";

import type { Character } from "@/types/character";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
  captainId: number | null;
  setCaptainId: React.Dispatch<React.SetStateAction<number | null>>;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};

function CaptainSelection({
  startStep,
  setStartStep,
  captainId,
  setCaptainId,
  crew,
  setCrew,
}: Props) {
  function handleContinue() {
    const captain = characters.find((character) => character.id === captainId);

    if (!captain) return;

    setCrew([captain]);
    setStartStep("crew");
  }

  return (
    <div>
      <h1>Selectionner votre capitaine</h1>

      <div className="captainSelect-container">
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

      <div>
        <button disabled={captainId === null} onClick={handleContinue}>
          Continuer
        </button>
      </div>
    </div>
  );
}

export default CaptainSelection;
