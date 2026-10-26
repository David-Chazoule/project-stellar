import React from "react";

import type { Character } from "@/types/character";
import type { captainEvents, CaptainEventsChoices } from "@/types/captainEvent";
import type { CaptainEventStep } from "./CaptainEventsFlow";

type Props = {
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  captainId: number | null;
  selectedEvent: captainEvents;
  participants: Character[];
  captainEventStep: CaptainEventStep;
  setCaptainEventStep: React.Dispatch<React.SetStateAction<CaptainEventStep>>;
  selectedChoice: CaptainEventsChoices | null;
  setSelectedChoice: React.Dispatch<
    React.SetStateAction<CaptainEventsChoices | null>
  >;
};

function CaptainEventsResult({
  crew,
  setCrew,
  captainId,
  selectedEvent,
  participants,
  captainEventStep,
  setCaptainEventStep,
  selectedChoice,
  setSelectedChoice,
}: Props) {
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
      <p>
        {selectedChoice && naming(participants, selectedChoice.result.text)}
      </p>
    </div>
  );
}

export default CaptainEventsResult;
