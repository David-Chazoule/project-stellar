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
  selectedChoice: CaptainEventsChoices |null ,
    setSelectedChoice: React.Dispatch<React.SetStateAction<CaptainEventsChoices | null>>
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
  setSelectedChoice
}: Props) {
  return <div className="start-panel">CaptainEventsResult</div>;
}

export default CaptainEventsResult;
