import type  { SpeechChoices } from "@/types/CaptainSpeech";
import { StartGameStep } from "../StartGameFlow";
import { Character } from "@/types/character";

import React, { useEffect, useState } from "react";
import Button from "@/components/Ui/Button";

type Props = {
  selectedSpeech: SpeechChoices | null;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
  crew: Character[];
  captainId: number | null;
};
function SpeechResult({
  setStartStep,
  selectedSpeech,
  crew,
  captainId,
}: Props) {
  const availableCrew = crew.filter((member) => member.id !== captainId);

  function shuffleCrew(crew: Character[]) {
    const copyCrew = [...crew];
    for (let i = copyCrew.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copyCrew[i];
      copyCrew[i] = copyCrew[j];
      copyCrew[j] = temp;
    }
    return copyCrew;
  }

  const [memberReaction] = useState<Character[]>(() =>
    shuffleCrew(availableCrew).slice(0, 4),
  );

  function naming(member: Character[], text: string) {
    const parts = text.split(/(\{\d+\})/);

    return parts.map((part, i) => {
      if (/^\{\d+\}$/.test(part)) {
        const index = Number(part[1]);

        return (
          <span className="crew-name" key={i}>
            {member[index]?.name}
          </span>
        );
      }

      return part;
    });
  }

  return (
    <div className="start-panel">
      <div className="txt-end-speech">
        {" "}
        <p>
          {selectedSpeech
            ? naming(memberReaction, selectedSpeech?.result.text)
            : null}
        </p>
      </div>

      <div className="img-end-speech">
        <img src={selectedSpeech?.result.image} alt="speechEnd" />
      </div>

      <Button
        onClick={() => {
          setStartStep("welcome");
        }}
      >
        Suivant
      </Button>
    </div>
  );
}

export default SpeechResult;
