import { SpeechChoices } from "@/types/CaptainSpeech";
import { StartGameStep } from "../StartGameFlow";

import React from "react";

type Props = {
  selectedSpeech: SpeechChoices | null;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
};
function SpeechResult({ setStartStep, selectedSpeech }: Props) {
  return (
    <div>
      <p>{selectedSpeech?.result.text}</p>

      <button
        onClick={() => {
          setStartStep("welcome");
        }}
      >
        Suivant
      </button>
    </div>
  );
}

export default SpeechResult;
