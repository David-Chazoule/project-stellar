import CharacterSelectionCard from "./CharacterSelectionCard";
import { characters } from "@/data/character";
import type { StartGameStep } from "./StartGameFlow";
import type { Character } from "@/types/character";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  captainId: number | null;
};

function CrewSelection({
  startStep,
  setStartStep,
  crew,
  setCrew,
  captainId,
}: Props) {
  function handleCrewSelect(character: Character) {
    const alreadySelected = crew.some((member) => member.id === character.id);

    if (alreadySelected) {
      setCrew((prev) => prev.filter((member) => member.id !== character.id));
      return;
    }

    if (crew.length >= 8) {
      return;
    }

    setCrew((prev) => [...prev, character]);
  }

  return (
    <div>
      CrewSelection
      {characters
        .filter((character) => character.id !== captainId)
        .map((character) => {
          const isSelected = crew.some((member) => member.id === character.id);
          return (
            <CharacterSelectionCard
              key={character.id}
              character={character}
              isSelected={isSelected}
              onClick={() => handleCrewSelect(character)}
            />
          );
        })}
      <div>
        <button
          disabled={crew.length !== 8}
          onClick={() => setStartStep("welcome")}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}

export default CrewSelection;
