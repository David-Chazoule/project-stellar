import CharacterSelectionCard from "./CharacterSelectionCard";
import { StartGameStep } from "./StartGameFlow";
import { characters } from "@/data/character";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
};

function CaptainSelection({ startStep, setStartStep }: Props) {
  return (
    <div>
      <h1>Selectionner votre capitaine</h1>

      <div className="captainSelect-container">
        {characters.map((character) => (
          <CharacterSelectionCard key={character.id} character={character} />
        ))}
      </div>

      <div>
        <button onClick={() => setStartStep("crew")}>Continuer</button>
      </div>
    </div>
  );
}

export default CaptainSelection;
