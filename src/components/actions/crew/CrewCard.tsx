import { Character } from "@/types/character";

type Props = {
  character: Character;
};

function CrewCard({ character }: Props) {
  return (
    <div>
      <div className="crew-card">
        <p>Nom : {character.name} </p>
        <p>
          {character.specialty.name} :{character.specialty.level}{" "}
        </p>
        <div className="otherSpecialities-box">
          <p>Spécialité secondaire</p>
          {character.secondarySpecialties.map((specialtie) => (
            <p key={specialtie.name}>
              {specialtie.name}:{specialtie.level}
            </p>
          ))}
        </div>
        <div className="skills-box">
          <div>
            <p>Leadership : {character.skills.leadership}</p>
            <p>physique : {character.skills.physical}</p>
            <p>agilité :{character.skills.agility}</p>
            <p>perception :{character.skills.perception}</p>
            <p>intelligence :{character.skills.intelligence}</p>
            <p>charisme : {character.skills.charisma}</p>
            <p>séduction : {character.skills.seduction}</p>
            <p>sang-froid :{character.skills.composure}</p>
            <p>social :{character.skills.social}</p>
            <p>discrétion :{character.skills.stealth} </p>
            <p>instinct :{character.skills.instinct}</p>
          </div>
        </div>
        <div className="states-box">
          <p> moral :{character.states.moral}</p>
          <p> forme :{character.states.fatigue}</p>
        </div>
      </div>
    </div>
  );
}

export default CrewCard;
