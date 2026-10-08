import type { AutoMission } from "@/types/autoMissions";

type Props = {
  mission: AutoMission;
  onSelect: (mission: AutoMission) => void;
};

function MissionSelectionCard({ mission, onSelect }: Props) {
  return (
    <div className="missionSelectionCard" onClick={() => onSelect(mission)}>
      <h3>{mission.card.title}</h3>
      <p>localisation:{mission.card.location}</p>
      <p>{mission.card.shortDescription}</p>
      <p>crédit : {mission.card.reward}</p>
      <p>durée : {mission.duration} jours</p>
    </div>
  );
}

export default MissionSelectionCard;
