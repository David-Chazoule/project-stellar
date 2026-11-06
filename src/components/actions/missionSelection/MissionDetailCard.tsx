import { AutoMission } from "@/types/autoMissions";
import { UserGroup } from "lucide-react";

type Props = {
  previewMission: AutoMission;
  setSelectedMission: (mission: AutoMission) => void;
};

function MissionDetailCard({ previewMission, setSelectedMission }: Props) {
  return (
    <div
      className="mission-detail-container"
      style={{
        backgroundImage: `
      linear-gradient(
        to bottom,
        #0b1520 0%,
        rgba(11, 21, 32, 0.95) 25%,
        rgba(11, 21, 32, 0.6) 60%,
        transparent 100%
      ),
      url("${previewMission.imageMission}")
    `,
      }}
    >
      <div className="info-mission-detail">
        <div className="info-container">
          <div className="title-info">
            <h3>{previewMission.card.title}</h3>
          </div>
          <div className="info-detail">
            <span>{previewMission.card.location}</span>
            <span>{previewMission.duration} jours</span>
            <span>{previewMission.card.reward} crédits</span>
          </div>

          <p>{previewMission.card.shortDescription}</p>
        </div>

        <div className="start-container">
          <div className="line"></div>
          <div className="request">
            <p>
              <span>
                <UserGroup size={16} />
              </span>
              Equipage requis
            </p>
            {previewMission.setup.requiredCrew.map((requirement) => (
              <p key={requirement.aptitude}>
                {requirement.aptitude} X {requirement.count}
              </p>
            ))}
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
