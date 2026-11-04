import type { ReactNode } from "react";
import Image from "next/image";
import type { Character } from "@/types/character";
import { CircleCheck, TriangleAlert, BadgeMinus, Lock } from "lucide-react";

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
  let status: {
    text: string;
    className: string;
    icon: ReactNode;
  } | null = null;

  if (isLowMoral && isHighFatigue) {
    status = {
      text: "Épuisé",
      className: "critical",
      icon: <TriangleAlert size={14} />,
    };
  } else if (isLowMoral) {
    status = {
      text: "Moral faible",
      className: "badMoral",
      icon: <TriangleAlert size={14} />,
    };
  } else if (isHighFatigue) {
    status = {
      text: "Fatigué",
      className: "badFatigue",
      icon: <TriangleAlert size={14} />,
    };
  } else if (isAssignedElsewhere) {
    status = {
      text: "Affecté",
      className: "already-selected",
      icon: <Lock size={14} />,
    };
  } else {
    status = isQualified
      ? {
          text: "Qualifié",
          className: "qualified-stat",
          icon: <CircleCheck size={14} />,
        }
      : {
          text: "Non qualifié",
          className: "not-qualified-stat",
          icon: <BadgeMinus size={14} />,
        };
  }
  return (
    <div
      className={`crew-card ${
        isQualified ? "qualified" : "unqualified"
      } ${isSelected ? "selected" : ""} ${isLowMoral || isHighFatigue ? "critical-card" : ""} ${isAssignedElsewhere ? "no-select" : ""}`}
      onClick={onClick}
    >
      <div className="crew-card-main">
        <div className="crew-card-portrait">
          <Image
            src={character.portrait}
            alt={character.name}
            fill
            sizes="42px"
          />
        </div>

        <div className="crew-card-info">
          <p>{character.name} </p>
          {status && (
            <div className="statut-box">
              <span className={` statut  ${status.className}`}>
                {status.icon}
              </span>{" "}
              <span className={` statut  ${status.className}`}>
                {status.text}
              </span>
            </div>
          )}
        </div>
        <p className="level">{score}</p>
      </div>
    </div>
  );
}

export default MissionCrewSelectionCard;
