import { characters } from "@/data/character";

import CharacterSelectionCard from "./CharacterSelectionCard";

import type { StartGameStep } from "./StartGameFlow";
import type { Character } from "@/types/character";

import { FingerprintPattern, UserGroup } from "lucide-react";
import Button from "../Ui/Button";

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
  const captain = crew.find((character) => character.id === captainId);
  return (
    <div className="start-panel">
      <div className="crewSelection-header">
        <span>
          <FingerprintPattern size={16} color="#4fc3ff" />
          <p>SYSTÈME DE BORD — ENREGISTREMENT</p>
        </span>{" "}
        <p>REG.PROTOCOL_03</p>
      </div>
      <div className="crewSelection-txt">
        <h3>Enregistrement de votre équipage requise.</h3>
        <p>
          Sélectionnez les membres de votre équipage, Capitaine{" "}
          <span>{captain?.name}</span>.{" "}
        </p>

        <span className="numberCrew">
          <UserGroup size={16} color="#4fc3ff" />
          <p>Membres: {crew.length} / 8 </p>
        </span>
      </div>

      <div className="crewSelect-container">
        {characters
          .filter((character) => character.id !== captainId)
          .map((character) => {
            const isSelected = crew.some(
              (member) => member.id === character.id,
            );
            return (
              <CharacterSelectionCard
                key={character.id}
                character={character}
                isSelected={isSelected}
                onClick={() => handleCrewSelect(character)}
              />
            );
          })}
      </div>
      <div>
        <Button
          disabled={crew.length !== 8}
          onClick={() => setStartStep("speech")}
        >
          Continuer
        </Button>
      </div>
    </div>
  );
}

export default CrewSelection;
