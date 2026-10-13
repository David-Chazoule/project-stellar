import { useState } from "react";

import AutoMissionSetup from "./AutoMissionSetup";
import AutoMissionProgression from "./AutoMissionProgression";
import AutoMissionConclusion from "./AutoMissionConclusion";
import type { AutoMission } from "@/types/autoMissions";
import type { AutoMissionResultType } from "@/types/autoMissions";
import type { SelectedCrewMember } from "@/types/autoMissions";
import type { AutoMissionStep } from "@/types/autoMissions";
import type { Character } from "@/types/character";

type Props = {
  mission: AutoMission;
  setSelectedMission: React.Dispatch<React.SetStateAction<AutoMission | null>>;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};

function AutoMissionFlow({
  setSelectedMission,
  mission,
  crew,
  setCrew,
}: Props) {
  const [step, setStep] = useState<AutoMissionStep>("setup");
  const [missionCrew, setMissionCrew] = useState<SelectedCrewMember[]>([]);
  const [missionResult, setMissionResult] =
    useState<AutoMissionResultType | null>(null);

  return (
    <div className="autoMissionFlow-container">
      {step === "setup" && (
        <AutoMissionSetup
          mission={mission}
          setStep={setStep}
          missionCrew={missionCrew}
          setMissionCrew={setMissionCrew}
          crew={crew}
          setCrew={setCrew}
        />
      )}
      {step === "progression" && (
        <AutoMissionProgression
          mission={mission}
          setStep={setStep}
          missionResult={missionResult}
          setMissionResult={setMissionResult}
          missionCrew={missionCrew}
          setMissionCrew={setMissionCrew}
        />
      )}
      {step === "conclusion" && missionResult && (
        <AutoMissionConclusion
          mission={mission}
          setSelectedMission={setSelectedMission}
          result={missionResult}
        />
      )}
    </div>
  );
}

export default AutoMissionFlow;
