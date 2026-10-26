import { initialGameState } from "@/data/gameState";
import type {
  AutoMission,
  AutoMissionResultType,
} from "../../types/autoMissions";

import type { GameState } from "@/types/gameState";
import type { SelectedCrewMember } from "../../types/autoMissions";
import type { Character } from "@/types/character";
import type { View } from "@/types/gameState";
import { characters } from "../../data/character";

type Props = {
  mission: AutoMission;
  setSelectedMission: (mission: AutoMission | null) => void;
  result: AutoMissionResultType;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  missionCrew: SelectedCrewMember[];
  setMissionCrew: React.Dispatch<React.SetStateAction<SelectedCrewMember[]>>;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  setView: React.Dispatch<React.SetStateAction<View>>;
};

function AutoMissionConclusion({
  setSelectedMission,
  result,
  mission,
  setGameState,
  missionCrew,
  setMissionCrew,
  crew,
  setCrew,
  setView,
}: Props) {
  const conclusion = mission.results[result];

  function handleFinishMission() {
    setGameState((prev) => ({
      ...prev,
      credits: prev.credits + (conclusion.effects.credits ?? 0),
      reputation: prev.reputation + (conclusion.effects.reputation ?? 0),
      elapsedDays: prev.elapsedDays + mission.duration,
      completedMissions: [...prev.completedMissions, mission.id],
    }));

    handleStateCrew();
    setSelectedMission(null);
    setView("event");
  }

  function handleStateCrew() {
    setCrew((prev) =>
      prev.map((character) => {
        const participated = missionCrew.some(
          (member) => member.character.id === character.id,
        );

        if (participated) {
          return {
            ...character,
            states: {
              ...character.states,
              fatigue:
                character.states.fatigue + (conclusion.effects.fatigue ?? 0),
              moral: character.states.moral + (conclusion.effects.moral ?? 0),
            },
          };
        }

        return character;
      }),
    );
  }

  return (
    <div className="start-panel">
      <h2>{conclusion.title}</h2>
      <p>{conclusion.text}</p>

      <p>Crédits : {conclusion.effects.credits}</p>
      <p>Réputation : {conclusion.effects.reputation}</p>
      <button onClick={handleFinishMission}>Terminer</button>
    </div>
  );
}

export default AutoMissionConclusion;
