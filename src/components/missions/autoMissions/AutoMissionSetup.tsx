import { specialtyLabels } from "@/data/labels/specialtyLabels";
import { getAptitudeLevel } from "../../../logic/characters/getAptitudeLevel";

import type { SpecialtyName } from "@/types/character";
import type {
  AutoMissionStep,
  SelectedCrewMember,
} from "../../../types/autoMissions";
import type { AutoMission } from "../../../types/autoMissions";
import type { Character } from "@/types/character";

import Button from "../../Ui/Button";
import MissionCrewSelectionCard from "../missionCrewSelection/MissionCrewSelectionCard";

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

    if (character.states.moral < 25 || character.states.fatigue > 85) {
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
        <p>{mission.setup.briefing}</p>
      </div>
      <div className="selectedTeam-container">
        <h3>selectionner équipe</h3>

        {mission.setup.requiredCrew.map((required) => {
          const selectedCount = missionCrew.filter(
            (member) => member.aptitude === required.aptitude,
          ).length;
          const candidates = [...crew];
          candidates.sort(
            (a, b) =>
              getAptitudeLevel(b, required.aptitude) -
              getAptitudeLevel(a, required.aptitude),
          );

          return (
            <div key={required.aptitude} className="aptitude-selected-box">
             <div className="crewSelect-category"> 
              <span>SYS.CREW_{required.aptitude.toUpperCase()}</span>
              <h3>{specialtyLabels[required.aptitude].toUpperCase()} </h3>
              <span className="selected-crew-head">
                {selectedCount}/{required.count}
              </span></div>
             
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

                  const isAssignedElsewhere = missionCrew.some(
                    (member) =>
                      member.character.id === character.id &&
                      member.aptitude !== required.aptitude,
                  );
                  const isLowMoral = character.states.moral < 25;
                  const isHighFatigue = character.states.fatigue > 85;
                  return (
                    <MissionCrewSelectionCard
                      key={character.id}
                      character={character}
                      score={getAptitudeLevel(character, required.aptitude)}
                      isQualified={isQualified}
                      isSelected={isSelected}
                      isAssignedElsewhere={isAssignedElsewhere}
                      isLowMoral={isLowMoral}
                      isHighFatigue={isHighFatigue}
                      onClick={() =>
                        handleCrewSelect(
                          character,
                          required.aptitude,
                          required.count,
                        )
                      }
                    />
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
