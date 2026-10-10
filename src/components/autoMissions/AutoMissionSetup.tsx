import { Character } from "@/types/character";
import { characters } from "@/data/character";
import { SpecialtyName } from "@/types/character";
import { AutoMissionStep, SelectedCrewMember } from "../../types/autoMissions";
import type { AutoMission } from "../../types/autoMissions";
import { specialtyLabels } from "@/data/labels/specialtyLabels";
import { getAptitudeLevel } from "../../logic/characters/getAptitudeLevel";

type Props = {
  mission: AutoMission;
  setStep: (autoMissionsStep: AutoMissionStep) => void;
  selectedCrew: SelectedCrewMember[];
  setSelectedCrew: React.Dispatch<React.SetStateAction<SelectedCrewMember[]>>;
};

function AutoMissionSetup({
  mission,
  setStep,
  selectedCrew,
  setSelectedCrew,
}: Props) {
  function handleCrewSelect(
    character: Character,
    aptitude: SpecialtyName,
    maxCount: number,
  ) {
    const selectedForAptitude = selectedCrew.filter(
      (member) => member.aptitude === aptitude,
    );

    const alreadySelected = selectedCrew.some(
      (member) =>
        member.character.id === character.id && member.aptitude === aptitude,
    );

    if (alreadySelected) {
      setSelectedCrew((prev) =>
        prev.filter(
          (member) =>
            !(
              member.character.id === character.id &&
              member.aptitude === aptitude
            ),
        ),
      );

      return;
    }

    if (selectedForAptitude.length >= maxCount) {
      return;
    }

    setSelectedCrew((prev) => [
      ...prev,
      {
        character,
        aptitude,
      },
    ]);
  }

  const canStartMission = mission.setup.requiredCrew.every((required) => {
    const selectedCount = selectedCrew.filter(
      (member) => member.aptitude === required.aptitude,
    ).length;

    return selectedCount >= required.count;
  });

  return (
    <div className="autoMissionSetup-container">
      <div className="mission-bref">
        <h2>{mission.card.title}</h2>
        <p>location : {mission.card.location}</p>
        <div className="required-box">
          <p>Requis : </p>
          {mission.setup.requiredCrew.map((required, key) => (
            <p key={key}>
              {required.count} {specialtyLabels[required.aptitude]}
            </p>
          ))}
        </div>
        <h4>{mission.setup.briefing}</h4>
      </div>
      <div className="selectedTeam-container">
        <h3>selectionner équipe</h3>

        {mission.setup.requiredCrew.map((required) => {
          const candidates = characters.filter(
            (character) => getAptitudeLevel(character, required.aptitude) > 0,
          );

          return (
            <div key={required.aptitude} className="aptitude-selected-box">
              <h3>{specialtyLabels[required.aptitude]} </h3>
              <div className="crew-card-box">
                {candidates.map((character) => {
                  const isSelected = selectedCrew.some(
                    (member) =>
                      member.character.id === character.id &&
                      member.aptitude === required.aptitude,
                  );

                  return (
                    <div
                      key={character.id}
                      className={
                        isSelected ? "crew-card selected" : "crew-card"
                      }
                      onClick={() =>
                        handleCrewSelect(
                          character,
                          required.aptitude,
                          required.count,
                        )
                      }
                    >
                      <p>
                        {character.name} -{" "}
                        {getAptitudeLevel(character, required.aptitude)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <button
        disabled={!canStartMission}
        onClick={() => setStep("progression")}
      >
        Lancer la mission
      </button>
    </div>
  );
}

export default AutoMissionSetup;
