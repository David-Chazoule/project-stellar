import { useState } from "react";
import type {
  SpeechApproach,
  SpeechChoices,
  SpeechStep,
} from "@/types/CaptainSpeech";
import type { Ship } from "@/types/Ship";
import type { Character } from "@/types/character";

import { StartGameStep } from "../StartGameFlow";
import SpeechPrep from "./SpeechPrep";
import SpeechChoice from "./SpeechChoice";
import SpeechResult from "./SpeechResult";

type Props = {
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
  crew: Character[];
  captainId: number | null;
  ship: Ship;
};

function CaptainSpeechFlow({ setStartStep, crew, captainId, ship }: Props) {
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
          ship={ship}
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
