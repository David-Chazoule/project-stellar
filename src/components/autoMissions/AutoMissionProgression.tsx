import { resolveAutoMission } from "@/logic/automission/resolveAutoMission";

import type {
  AutoMission,
  AutoMissionResultType,
  AutoMissionStep,
  SelectedCrewMember,
} from "../../types/autoMissions";
import Button from "../Ui/Button";

type Props = {
  mission: AutoMission;
  setStep: (autoMissionsStep: AutoMissionStep) => void;

  setMissionResult: React.Dispatch<
    React.SetStateAction<AutoMissionResultType | null>
  >;
  missionCrew: SelectedCrewMember[];
};

function AutoMissionProgression({
  mission,
  setStep,

  setMissionResult,
  missionCrew,
}: Props) {
  return (
    <div>
      <p>{mission.progression.text}</p>{" "}
      <Button
        onClick={() => {
          const result = resolveAutoMission(missionCrew);

          setMissionResult(result);
          setStep("conclusion");
        }}
      >
        Suivant
      </Button>
    </div>
  );
}

export default AutoMissionProgression;
