import { useState } from "react";

import AutoMissionSetup from "./AutoMissionSetup";
import AutoMissionProgression from "./AutoMissionProgression";
import AutoMissionConclusion from "./AutoMissionConclusion";
import type { AutoMission } from "@/types/autoMissions";
import type { AutoMissionResultType } from "@/types/autoMissions";
import type { SelectedCrewMember } from "@/types/autoMissions";
import type { AutoMissionStep } from "@/types/autoMissions";
import type { Character } from "@/types/character";
import type { GameState } from "@/types/gameState";
import type { View } from "@/types/gameState";

type Props = {
  mission: AutoMission;
  setSelectedMission: React.Dispatch<React.SetStateAction<AutoMission | null>>;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  setView: React.Dispatch<React.SetStateAction<View>>;
};

function AutoMissionFlow({
  setSelectedMission,
  mission,
  crew,
  setCrew,
  setGameState,
  setView,
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
        />
      )}
      {step === "progression" && (
        <AutoMissionProgression
          mission={mission}
          setStep={setStep}
          setMissionResult={setMissionResult}
          missionCrew={missionCrew}
        />
      )}
      {step === "conclusion" && missionResult && (
        <AutoMissionConclusion
          mission={mission}
          setSelectedMission={setSelectedMission}
          result={missionResult}
          setGameState={setGameState}
          missionCrew={missionCrew}
          setMissionCrew={setMissionCrew}
          crew={crew}
          setCrew={setCrew}
          setView={setView}
        />
      )}
    </div>
  );
}

export default AutoMissionFlow;
