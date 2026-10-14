import { useState } from "react";
import type {
  SpeechApproach,
  SpeechChoices,
  SpeechStep,
} from "@/types/CaptainSpeech";

import SpeechPrep from "./SpeechPrep";
import SpeechChoice from "./SpeechChoice";
import SpeechResult from "./SpeechResult";

function CaptainSpeechFlow() {
  const [speechStep, setSpeechStep] = useState<SpeechStep>("preparation");
  const [speechApproach, setSpeechApproach] = useState<SpeechApproach | null>(
    null,
  );
  const [selectedSpeech, setSelectedSpeech] = useState<SpeechChoices | null>(
    null,
  );

  return (
    <section className="captainSpeechFlow">
      {speechStep === "preparation" && (
        <SpeechPrep
          setSpeechApproach={setSpeechApproach}
          setSpeechStep={setSpeechStep}
        />
      )}

      {speechStep === "choice" && (
        <SpeechChoice
          speechApproach={speechApproach}
          setSelectedSpeech={setSelectedSpeech}
          setSpeechStep={setSpeechStep}
        />
      )}

      {speechStep === "result" && (
        <SpeechResult selectedSpeech={selectedSpeech} />
      )}
    </section>
  );
}

export default CaptainSpeechFlow;
