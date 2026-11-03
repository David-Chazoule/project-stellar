import type { Character } from "@/types/character";

type Props = {
  character: Character;
  score: number;
  isQualified: boolean;
  isSelected: boolean;
  isAssignedElsewhere: boolean;
  isLowMoral: boolean;
  isHighFatigue: boolean;
  onClick: () => void;
};

function MissionCrewSelectionCard({
  character,
  score,
  isQualified,
  isSelected,
  isAssignedElsewhere,
  isLowMoral,
  isHighFatigue,
  onClick,
}: Props) {
  let statusMessage: string | null = null;

  if (isLowMoral && isHighFatigue) {
    statusMessage = "Épuisement total";
  } else if (isLowMoral) {
    statusMessage = "Moral insuffisant";
  } else if (isHighFatigue) {
    statusMessage = "Fatigue excessive";
  }
  return (
    <div
      className={`crew-card ${
        isQualified ? "qualified" : "unqualified"
      } ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <p>
        {character.name} - {score}
      </p>
      <p>{isQualified ? "qualifié" : "non-qualifié"}</p>
      <p>{isAssignedElsewhere ? "déjà asigné" : ""}</p>

      {statusMessage && <span>{statusMessage}</span>}
    </div>
  );
}

export default MissionCrewSelectionCard;
