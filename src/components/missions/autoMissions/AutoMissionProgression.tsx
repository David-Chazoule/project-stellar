import { resolveAutoMission } from "@/logic/automission/resolveAutoMission";
import { SquareActivity } from "lucide-react";

import type {
  AutoMission,
  AutoMissionResultType,
  AutoMissionStep,
  SelectedCrewMember,
} from "../../../types/autoMissions";
import Button from "../../Ui/Button";

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
    <div className="start-panel">
      <div className="planeteSelection-header">
        <div className="navigate-up">
          {" "}
          <span>
            <SquareActivity size={20} color="#4fc3ff" />

            <h2>SUIVI OPÉRATIONNEL</h2>
          </span>{" "}
          <p className="online">IN PROGRESS</p>{" "}
        </div>

        <div className="navigate-down">
          <p>OPS_CORE // MISSION_ACTIVE</p>
          <p>CREW_STATUS // DEPLOYED</p>
        </div>
      </div>
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
