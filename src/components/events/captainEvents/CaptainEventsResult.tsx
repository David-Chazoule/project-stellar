import React from "react";

import type { Character } from "@/types/character";
import type { captainEvents, CaptainEventsChoices } from "@/types/captainEvent";
import { CaptainEventStep } from "../EventsFlow";

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
  const effects = selectedChoice?.result.effects;
  function handleStateCaptain() {
    setCrew((prev) =>
      prev.map((character) => {
        if (character.id === captainId) {
          return {
            ...character,
            states: {
              ...character.states,
              moral: character.states.moral + (effects?.moral ?? 0),
              fatigue: character.states.fatigue + (effects?.fatigue ?? 0),
            },
          };
        }

        return character;
      }),
    );
    setCaptainEventStep("life");
  }

  return (
    <div className="start-panel">
      <p>
        {selectedChoice && naming(participants, selectedChoice.result.text)}
      </p>
      <div className="effect">
        {selectedChoice &&
          Object.entries(selectedChoice.result.effects).map(([stat, value]) => (
            <p key={stat}>
              {stat} : {value > 0 ? "+" : ""}
              {value}
            </p>
          ))}
      </div>

      <button onClick={handleStateCaptain}>continuer</button>
    </div>
  );
}

export default CaptainEventsResult;
