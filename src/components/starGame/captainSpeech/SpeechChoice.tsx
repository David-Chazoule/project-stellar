import React from "react";
import { captainSpeechData } from "@/data/missions/captainspeech";
import type {
  SpeechApproach,
  SpeechStep,
  SpeechChoices,
} from "@/types/CaptainSpeech";

type Props = {
  speechApproach: SpeechApproach | null;
  setSpeechStep: React.Dispatch<React.SetStateAction<SpeechStep>>;
  setSelectedSpeech: React.Dispatch<React.SetStateAction<SpeechChoices | null>>;
};

function SpeechChoice({
  speechApproach,
  setSpeechStep,
  setSelectedSpeech,
}: Props) {
  if (!speechApproach) return null;

  const currentSpeechData = captainSpeechData[speechApproach];

  return (
    <div className="start-panel">
      <p>{currentSpeechData.choiceIntro}</p>

      <div className="choice-box">
        {currentSpeechData.choices.map((choice) => (
          <span
            className="choice-card"
            key={choice.id}
            onClick={() => {
              setSpeechStep("result");
              setSelectedSpeech(choice);
            }}
          >
            <p>💬 {choice.text}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SpeechChoice;
