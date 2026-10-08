import type {
  AutoMission,
  AutoMissionResultType,
} from "../../types/autoMissions";

type Props = {
  mission: AutoMission;
  setSelectedMission: (mission: AutoMission | null) => void;
  result: AutoMissionResultType;
};

function AutoMissionConclusion({ setSelectedMission, result, mission }: Props) {
  const conclusion = mission.results[result];

  return (
    <div>
      <h2>{conclusion.title}</h2>
      <p>{conclusion.text}</p>

      <p>Crédits : {conclusion.effects.credits}</p>
      <p>Réputation : {conclusion.effects.reputation}</p>
      <button onClick={() => setSelectedMission(null)}>Terminer</button>
    </div>
  );
}

export default AutoMissionConclusion;
