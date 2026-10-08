import { AutoMissionStep } from "../../types/autoMissions";
import type { AutoMission } from "../../types/autoMissions";

type Props = {
  mission: AutoMission;
  setStep: (autoMissionsStep: AutoMissionStep) => void;
};

function AutoMissionProgression({ mission, setStep }: Props) {
  return (
    <div>
      <p>{mission.progression.text}</p>{" "}
      <button onClick={() => setStep("conclusion")}>Suivant</button>
    </div>
  );
}

export default AutoMissionProgression;
