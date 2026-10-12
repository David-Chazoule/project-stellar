import CharacterSelectionCard from "./CharacterSelectionCard";
import { characters } from "@/data/character";
import type { StartGameStep } from "./StartGameFlow";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
};

function CrewSelection({ startStep, setStartStep }: Props) {
  return (
    <div>
      CrewSelection
      {characters.map((character) => (
        <CharacterSelectionCard key={character.id} character={character} />
      ))}
      <div>
        <button onClick={() => setStartStep("welcome")}>Continuer</button>
      </div>
    </div>
  );
}

export default CrewSelection;
