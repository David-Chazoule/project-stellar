import { useState, useEffect } from "react";

import EventsLife from "./EventsLife";
import CaptainEventsFlow from "./captainEvents/CaptainEventsFlow";

import type { View } from "@/types/gameState";
import type { Character } from "@/types/character";

type EventType = "captain" | "life" | "both";

type Props = {
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  captainId: number | null;

  eventType: EventType;
  onComplete: () => void;
};

export type CaptainEventStep = "intro" | "result" | "life";

function EventsFlow({
  crew,
  setCrew,
  captainId,
  eventType,
  onComplete,
}: Props) {
  const [captainEventStep, setCaptainEventStep] =
    useState<CaptainEventStep>("intro");

  useEffect(() => {
    if (eventType === "captain" && captainEventStep === "life") {
      onComplete();
    }
  }, [captainEventStep, eventType, onComplete]);

  return (
    <div>
      <div>
        {eventType !== "life" && captainEventStep !== "life" && (
          <CaptainEventsFlow
            crew={crew}
            setCrew={setCrew}
            captainId={captainId}
            captainEventStep={captainEventStep}
            setCaptainEventStep={setCaptainEventStep}
          />
        )}
      </div>
      <div>
        {(eventType === "life" ||
          (eventType === "both" && captainEventStep === "life")) && (
          <EventsLife crew={crew} setCrew={setCrew} onComplete={onComplete} />
        )}
      </div>
    </div>
  );
}

export default EventsFlow;
