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

  console.log(currentSpeechData.choices);
  console.log(currentSpeechData.choices.length);
  return (
    <div>
      <p>{currentSpeechData.choiceIntro}</p>

      <div>
        {currentSpeechData.choices.map((choice) => (
          <span
            key={choice.id}
            onClick={() => {
              setSpeechStep("result");
              setSelectedSpeech(choice);
            }}
          >
            <p>{choice.text}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SpeechChoice;
