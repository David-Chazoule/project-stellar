import { AutoMissionStep } from "../../types/autoMissions";
import type { AutoMission } from "../../types/autoMissions";
import { specialtyLabels } from "@/data/labels/specialtyLabels";

type Props = {
  mission: AutoMission;
  setStep: (autoMissionsStep: AutoMissionStep) => void;
};

function AutoMissionSetup({ mission, setStep }: Props) {
  return (
    <div>
      <h2>{mission.card.title}</h2>
      <p>location : {mission.card.location}</p>
      {mission.setup.requiredCrew.map((required, key) => (
        <p key={key}>
          Requis : {required.count} {specialtyLabels[required.aptitude]}.
        </p>
      ))}

      <h3>{mission.setup.briefing}</h3>

      <button onClick={() => setStep("progression")}>Lancer la mission</button>
    </div>
  );
}

export default AutoMissionSetup;
