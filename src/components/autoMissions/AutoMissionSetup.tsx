import { Character } from "@/types/character";
import { characters } from "@/data/character";
import { SpecialtyName } from "@/types/character";
import { AutoMissionStep } from "../../types/autoMissions";
import type { AutoMission } from "../../types/autoMissions";
import { specialtyLabels } from "@/data/labels/specialtyLabels";

type Props = {
  mission: AutoMission;
  setStep: (autoMissionsStep: AutoMissionStep) => void;
  selectedCrew: Character[];
  setSelectedCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};

function AutoMissionSetup({
  mission,
  setStep,
  selectedCrew,
  setSelectedCrew,
}: Props) {
  function getAptitudeLevel(character: Character, aptitude: SpecialtyName) {
    if (character.specialty.name === aptitude) {
      return character.specialty.level;
    }

    const secondary = character.secondarySpecialties.find(
      (specialty) => specialty.name === aptitude,
    );

    return secondary?.level ?? 0;
  }

  return (
    <div>
      <h2>{mission.card.title}</h2>
      <p>location : {mission.card.location}</p>
      {mission.setup.requiredCrew.map((required, key) => (
        <p key={key}>
          Requis : {required.count} {specialtyLabels[required.aptitude]}.
        </p>
      ))}

      <h3>{mission.setup.briefing}</h3>

      <div>
        <h3>selectionner équipe</h3>

        {mission.setup.requiredCrew.map((required) => {
          const candidates = characters.filter(
            (character) => getAptitudeLevel(character, required.aptitude) > 0,
          );

          return (
            <div key={required.aptitude}>
              <h3>{specialtyLabels[required.aptitude]} </h3>

              {candidates.map((character) => (
                <p key={character.id}>
                  {character.name} -{" "}
                  {getAptitudeLevel(character, required.aptitude)}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      <button onClick={() => setStep("progression")}>Lancer la mission</button>
    </div>
  );
}

export default AutoMissionSetup;
