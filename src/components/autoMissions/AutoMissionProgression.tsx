import { resolveAutoMission } from "@/logic/automission/resolveAutoMission";
import { AutoMissionStep, SelectedCrewMember } from "../../types/autoMissions";
import type {
  AutoMission,
  AutoMissionResultType,
} from "../../types/autoMissions";

type Props = {
  mission: AutoMission;
  setStep: (autoMissionsStep: AutoMissionStep) => void;
  missionResult: AutoMissionResultType | null;
  setMissionResult: React.Dispatch<
    React.SetStateAction<AutoMissionResultType | null>
  >;
  selectedCrew: SelectedCrewMember[];
  setSelectedCrew: React.Dispatch<React.SetStateAction<SelectedCrewMember[]>>;
};

function AutoMissionProgression({
  mission,
  setStep,
  missionResult,
  setMissionResult,
  selectedCrew,
  setSelectedCrew,
}: Props) {
  return (
    <div>
      <p>{mission.progression.text}</p>{" "}
      <button
        onClick={() => {
          const result = resolveAutoMission(selectedCrew);

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
