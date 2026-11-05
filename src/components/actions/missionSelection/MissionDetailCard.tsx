import { AutoMission } from "@/types/autoMissions";

type Props = {
  previewMission: AutoMission;
  setSelectedMission: (mission: AutoMission) => void;
};

function MissionDetailCard({ previewMission, setSelectedMission }: Props) {
  return (
    <div className="mission-detail-container">
      <div>IMG</div>
      <div className="info-mission-detail">
        <h3>{previewMission.card.title}</h3>
        <div className="info-container">
          <div className="info-detail">
            <span>{previewMission.card.location}</span>
            <span>{previewMission.duration} jours</span>
            <span>{previewMission.card.reward} crédits</span>
          </div>

          <p>{previewMission.card.shortDescription}</p>
        </div>

        <div className="line"></div>
        <div className="start-container">
          <div className="crewRequest">
            <span>ICON</span>
            <div className="request">
              <h3>Equipage requis</h3>
              {previewMission.setup.requiredCrew.map((requirement) => (
                <p key={requirement.aptitude}>
                  {requirement.aptitude} : {requirement.count}
                </p>
              ))}
            </div>
          </div>

          <div className="btn-container">
            <button onClick={() => setSelectedMission(previewMission)}>
              Commancer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionDetailCard;
