import { SpeechChoices } from "@/types/CaptainSpeech";
import React from "react";

type Props = {
  selectedSpeech: SpeechChoices | null;
};
function SpeechResult({ selectedSpeech }: Props) {
  return <div>SpeechResult</div>;
}

export default SpeechResult;
