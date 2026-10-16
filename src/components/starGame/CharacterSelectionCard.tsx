import { getGeneralLevel } from "@/logic/characters/getGeneralLevel";
import { specialtyLabels } from "@/data/labels/specialtyLabels";

import type { Character } from "@/types/character";

type Props = {
  character: Character;
  onClick: () => void;
  isSelected: boolean;
};

function CharacterSelectionCard({ character, onClick, isSelected }: Props) {
  return (
    <div
      className={
        isSelected
          ? "characterSelectionCard selected"
          : "characterSelectionCard"
      }
      onClick={onClick}
    >
      <div className="characterSelectionCard-portrait">
        <img></img>
      </div>

      <div className="characterSelectionCard-level">
        <p>NIV. GLOBAL</p>
        <p>{getGeneralLevel(character)}</p>
      </div>

      <div className="characterSelectionCard-name">
        <h4>{character.name}</h4>
      </div>

      <div className="characterSelectionCard-specialties">
        <div className="mainSpecialty">
          <p>{specialtyLabels[character.specialty.name]}</p>
          <p>{character.specialty.level}</p>
        </div>

        <div className="secondarySpecialties">
          {character.secondarySpecialties.map((specialty) => (
            <div key={specialty.name}>
              <p>{specialtyLabels[specialty.name]}</p>
              <p>{specialty.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterSelectionCard;
