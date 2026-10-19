import { initialGameState } from "@/data/gameState";
import type {
  AutoMission,
  AutoMissionResultType,
} from "../../types/autoMissions";

import type { GameState } from "@/types/gameState";

type Props = {
  mission: AutoMission;
  setSelectedMission: (mission: AutoMission | null) => void;
  result: AutoMissionResultType;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
};

function AutoMissionConclusion({
  setSelectedMission,
  result,
  mission,
  setGameState,
}: Props) {
  const conclusion = mission.results[result];

  function handleFinishMission() {
    setGameState((prev) => ({
      ...prev,
      credits: prev.credits + (conclusion.effects.credits ?? 0),
      reputation: prev.reputation + (conclusion.effects.reputation ?? 0),
    }));
    setSelectedMission(null);
  }

  return (
    <div>
      <h2>{conclusion.title}</h2>
      <p>{conclusion.text}</p>

      <p>Crédits : {conclusion.effects.credits}</p>
      <p>Réputation : {conclusion.effects.reputation}</p>
      <button onClick={handleFinishMission}>Terminer</button>
    </div>
  );
}

export default AutoMissionConclusion;
