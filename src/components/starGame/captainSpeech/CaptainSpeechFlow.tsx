import { useState } from "react";
import type {
  SpeechApproach,
  SpeechChoices,
  SpeechStep,
} from "@/types/CaptainSpeech";
import { StartGameStep } from "../StartGameFlow";
import { Character } from "@/types/character";

import SpeechPrep from "./SpeechPrep";
import SpeechChoice from "./SpeechChoice";
import SpeechResult from "./SpeechResult";

type Props = {
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
  crew: Character[];
  captainId: number | null;
};

function CaptainSpeechFlow({ setStartStep, crew, captainId }: Props) {
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
        <SpeechResult
          selectedSpeech={selectedSpeech}
          setStartStep={setStartStep}
          crew={crew}
          captainId={captainId}
        />
      )}
    </section>
  );
}

export default CaptainSpeechFlow;
