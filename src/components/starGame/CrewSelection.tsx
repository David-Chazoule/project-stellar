import { characters } from "@/data/character";

import CharacterSelectionCard from "./CharacterSelectionCard";
import { specialtyLabels } from "@/data/labels/specialtyLabels";

import type { StartGameStep } from "./StartGameFlow";
import type { Character } from "@/types/character";
import type { SpecialtyName } from "@/types/character";

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

  const specialties: SpecialtyName[] = [
    "pilot",
    "engineer",
    "medic",
    "scientist",
    "operative",
    "liaisonOfficer",
    "logistician",
  ];

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
        {specialties.map((specialty, index) => {
          const filteredCharacters = characters
            .filter((character) => character.id !== captainId)
            .filter((character) => character.specialty.name === specialty);

          return (
            <div className="crewSelect-category" key={specialty}>
              <div className="crewSelect-categoryHeader">
                <span>SYS.CREW_{specialty.toUpperCase()}</span>
                <h3>{specialtyLabels[specialty].toUpperCase()}</h3>
                <span>PERSONNEL DATABASE</span>
              </div>

              <div className="crewSelect-cards">
                {filteredCharacters.map((character) => {
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
            </div>
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
