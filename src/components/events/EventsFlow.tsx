import { useState } from "react";

import EventsLife from "./EventsLife";
import CaptainEventsFlow from "./captainEvents/CaptainEventsFlow";

import type { View } from "@/types/gameState";
import type { Character } from "@/types/character";
type Props = {
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  captainId: number | null;
  setView: React.Dispatch<React.SetStateAction<View>>;
};

export type CaptainEventStep = "intro" | "result" | "life";

function EventsFlow({ crew, setCrew, captainId, setView }: Props) {
  const [captainEventStep, setCaptainEventStep] =
    useState<CaptainEventStep>("intro");

  return (
    <div>
      <div>
        <CaptainEventsFlow
          crew={crew}
          setCrew={setCrew}
          captainId={captainId}
          captainEventStep={captainEventStep}
          setCaptainEventStep={setCaptainEventStep}
        />
      </div>
      <div>
        {" "}
        {captainEventStep === "life" && (
          <EventsLife crew={crew} setView={setView} />
        )}
      </div>
    </div>
  );
}

export default EventsFlow;
