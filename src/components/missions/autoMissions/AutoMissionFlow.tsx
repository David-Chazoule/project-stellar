import { useState } from "react";

import TravelPage from "@/components/actions/travel/TravelPage";
import AutoMissionSetup from "./AutoMissionSetup";
import AutoMissionProgression from "./AutoMissionProgression";
import AutoMissionConclusion from "./AutoMissionConclusion";
import { getTravelDuration } from "@/logic/travel/getTravelDuration";
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
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  setView: React.Dispatch<React.SetStateAction<View>>;
};

function AutoMissionFlow({
  setSelectedMission,
  mission,
  crew,
  setCrew,
  gameState,
  setGameState,
  setView,
}: Props) {
  const [step, setStep] = useState<AutoMissionStep>("setup");
  const [missionCrew, setMissionCrew] = useState<SelectedCrewMember[]>([]);
  const [missionResult, setMissionResult] =
    useState<AutoMissionResultType | null>(null);
  const [showTravel, setShowTravel] = useState(
    gameState.currentLocationId !== mission.locationId,
  );

  const [travelDuration] = useState(() =>
    getTravelDuration(gameState.currentLocationId, mission.locationId),
  );

  return (
    <div className="autoMissionFlow-container">
      {showTravel && (
        <TravelPage
          departureId={gameState.currentLocationId}
          destinationId={mission.locationId}
          travelDuration={travelDuration}
          onContinue={() => {
            setGameState((prev) => ({
              ...prev,
              currentLocationId: mission.locationId,
              elapsedDays: prev.elapsedDays + travelDuration,
            }));

            setShowTravel(false);
          }}
        />
      )}

      {!showTravel && step === "setup" && (
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
