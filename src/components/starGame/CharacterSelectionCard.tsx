import { getGeneralLevel } from "@/logic/characters/getGeneralLevel";
import { specialtyLabels } from "@/data/labels/specialtyLabels";
import type { Character } from "@/types/character";

type Props = {
  character: Character;
};

function CharacterSelectionCard({ character }: Props) {
  return (
    <div className="characterSelectionCard">
      <div className="characterSelectionCard-header">
        <h3>{character.name}</h3>
        <h2>{getGeneralLevel(character)}</h2>
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
