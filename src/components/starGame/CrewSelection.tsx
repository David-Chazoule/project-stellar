import CharacterSelectionCard from "./CharacterSelectionCard";
import type { StartGameStep } from "./StartGameFlow";
import { characters } from "@/data/character";

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
    </div>
  );
}

export default CrewSelection;
