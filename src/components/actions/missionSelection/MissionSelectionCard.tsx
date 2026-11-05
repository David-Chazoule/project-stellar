import type { AutoMission } from "@/types/autoMissions";

type Props = {
  mission: AutoMission;
  onSelect: (mission: AutoMission) => void;
};

function MissionSelectionCard({ mission, onSelect }: Props) {
  return (
    <div className="missionSelectionCard" onClick={() => onSelect(mission)}>
      <div>image</div>

      <div className="info-mission">
        <h4>{mission.card.title}</h4>
        <span>
          <p>{mission.card.location}</p>
          <p>{mission.card.reward} crédits</p>
        </span>
      </div>
    </div>
  );
}

export default MissionSelectionCard;
