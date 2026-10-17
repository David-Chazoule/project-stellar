import React from "react";
import { captainSpeechData } from "@/data/missions/captainspeech";
import type {
  SpeechApproach,
  SpeechStep,
  SpeechChoices,
} from "@/types/CaptainSpeech";

import { MessageSquareText } from "lucide-react";

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
      <div className="speech-img-choice">
        <img src="/captainSpeech/speech-Choice.webp" alt="speechIntro" />
      </div>
      <div className="txt-choice">
        <p>{currentSpeechData.choiceIntro}</p>
      </div>

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
            <p>
              <MessageSquareText size={16} color="#4fc3ff" /> "{choice.text}"
            </p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SpeechChoice;
