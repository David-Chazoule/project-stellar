import { specialtyLabels } from "@/data/labels/specialtyLabels";
import { getAptitudeLevel } from "../../logic/characters/getAptitudeLevel";

import type { SpecialtyName } from "@/types/character";
import type {
  AutoMissionStep,
  SelectedCrewMember,
} from "../../types/autoMissions";
import type { AutoMission } from "../../types/autoMissions";
import type { Character } from "@/types/character";
import Button from "../Ui/Button";

type Props = {
  mission: AutoMission;
  setStep: (autoMissionsStep: AutoMissionStep) => void;
  missionCrew: SelectedCrewMember[];
  setMissionCrew: React.Dispatch<React.SetStateAction<SelectedCrewMember[]>>;
  crew: Character[];
};

function AutoMissionSetup({
  mission,
  setStep,
  missionCrew,
  setMissionCrew,
  crew,
}: Props) {
  function handleCrewSelect(
    character: Character,
    aptitude: SpecialtyName,
    maxCount: number,
  ) {
    const selectedForAptitude = missionCrew.filter(
      (member) => member.aptitude === aptitude,
    );

    const alreadySelected = missionCrew.some(
      (member) =>
        member.character.id === character.id && member.aptitude === aptitude,
    );

    if (alreadySelected) {
      setMissionCrew((prev) =>
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
    const assignedElsewhere = missionCrew.some(
      (member) => member.character.id === character.id,
    );

    if (assignedElsewhere) {
      return;
    }

    if (selectedForAptitude.length >= maxCount) {
      return;
    }

    setMissionCrew((prev) => [
      ...prev,
      {
        character,
        aptitude,
      },
    ]);
  }

  const canStartMission = mission.setup.requiredCrew.every((required) => {
    const selectedCount = missionCrew.filter(
      (member) => member.aptitude === required.aptitude,
    ).length;

    return selectedCount >= required.count;
  });

  return (
    <div className="start-panel">
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
          const candidates = [...crew];
          candidates.sort(
            (a, b) =>
              getAptitudeLevel(b, required.aptitude) -
              getAptitudeLevel(a, required.aptitude),
          );

          return (
            <div key={required.aptitude} className="aptitude-selected-box">
              <h3>{specialtyLabels[required.aptitude]} </h3>
              <div className="crew-card-box">
                {candidates.map((character) => {
                  const isQualified =
                    character.specialty.name === required.aptitude ||
                    character.secondarySpecialties.some(
                      (specialty) => specialty.name === required.aptitude,
                    );
                  const isSelected = missionCrew.some(
                    (member) =>
                      member.character.id === character.id &&
                      member.aptitude === required.aptitude,
                  );

                  return (
                    <div
                      key={character.id}
                      className={`crew-card ${
                        isQualified ? "qualified" : "unqualified"
                      } ${isSelected ? "selected" : ""}`}
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
      <Button
        disabled={!canStartMission}
        onClick={() => setStep("progression")}
      >
        Lancer la mission
      </Button>
    </div>
  );
}

export default AutoMissionSetup;
