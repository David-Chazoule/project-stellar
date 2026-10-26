import { resolveAutoMission } from "@/logic/automission/resolveAutoMission";

import type {
  AutoMission,
  AutoMissionResultType,
  AutoMissionStep,
  SelectedCrewMember,
} from "../../types/autoMissions";

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
      <button
        onClick={() => {
          const result = resolveAutoMission(missionCrew);

          setMissionResult(result);
          setStep("conclusion");
        }}
      >
        Suivant
      </button>
    </div>
  );
}

export default AutoMissionProgression;
