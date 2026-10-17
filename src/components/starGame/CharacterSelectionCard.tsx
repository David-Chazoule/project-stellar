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
        <img src={character.image} alt={character.name} />

        <div
          className={
            isSelected
              ? "characterSelectionCard-level selectedSpecial"
              : "characterSelectionCard-level"
          }
        >
          <p className="labelLevel">NIV.GEN</p>
          <p>{getGeneralLevel(character)}</p>
        </div>

        <div
          className={
            isSelected
              ? "characterSelectionCard-name selectedSpecial"
              : "characterSelectionCard-name"
          }
        >
          <h4>{character.name}</h4>
        </div>
      </div>

      <div
        className={
          isSelected
            ? "characterSelectionCard-specialties selectedSpecial"
            : "characterSelectionCard-specialties"
        }
      >
        <div
          className={
            isSelected ? "mainSpecialty selectedSpecial" : "mainSpecialty"
          }
        >
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
