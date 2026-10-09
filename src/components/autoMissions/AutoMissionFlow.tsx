import type { AutoMissionStep } from "@/types/autoMissions";
import { useState } from "react";
import AutoMissionSetup from "./AutoMissionSetup";
import AutoMissionProgression from "./AutoMissionProgression";
import AutoMissionConclusion from "./AutoMissionConclusion";
import type { AutoMission } from "@/types/autoMissions";
import type { AutoMissionResultType } from "@/types/autoMissions";
import { Character } from "@/types/character";

type Props = {
  mission: AutoMission;
  setSelectedMission: React.Dispatch<React.SetStateAction<AutoMission | null>>;
};

function AutoMissionFlow({ setSelectedMission, mission }: Props) {
  const [step, setStep] = useState<AutoMissionStep>("setup");
  const [selectedCrew, setSelectedCrew] = useState<Character[]>([]);

  const result: AutoMissionResultType = "criticalFailure";

  return (
    <div>
      {step === "setup" && (
        <AutoMissionSetup
          mission={mission}
          setStep={setStep}
          selectedCrew={selectedCrew}
          setSelectedCrew={setSelectedCrew}
        />
      )}
      {step === "progression" && (
        <AutoMissionProgression mission={mission} setStep={setStep} />
      )}
      {step === "conclusion" && (
        <AutoMissionConclusion
          mission={mission}
          setSelectedMission={setSelectedMission}
          result={result}
        />
      )}
    </div>
  );
}

export default AutoMissionFlow;
