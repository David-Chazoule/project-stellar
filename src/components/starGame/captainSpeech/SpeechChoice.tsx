import React from "react";
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
  return <div>SpeechChoice</div>;
}

export default SpeechChoice;
