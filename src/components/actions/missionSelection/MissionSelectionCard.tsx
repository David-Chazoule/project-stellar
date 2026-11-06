import type { AutoMission } from "@/types/autoMissions";

type Props = {
  mission: AutoMission;
  onSelect: (mission: AutoMission) => void;
};

function MissionSelectionCard({ mission, onSelect }: Props) {


 
  return (
    <div className="missionSelectionCard" onClick={() => onSelect(mission)}>
      <img className="img-select"src={`${mission.imageMission}`} alt={mission.id}/>

      <div className="info-mission">
        <p>{mission.card.title}</p>
        <span>
          <p>{mission.card.type}</p>
          </span>
      </div>
    </div>
  );
}

export default MissionSelectionCard;
