import { useState } from "react";
import CaptainEventsIntro from "./CaptainEventsIntro";
import CaptainEventsResult from "./CaptainEventsResult";
import { CaptainEvents } from "@/data/events/captainEvents/captainEvents";
import type { Character } from "@/types/character";
import type { captainEvents } from "@/types/captainEvent";

type Props = {
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  captainId: number | null;
};

export type CaptainEventStep = "intro" | "result";

function CaptainEventsFlow({ crew, setCrew, captainId }: Props) {
  const [captainEventStep, setCaptainEventStep] =
    useState<CaptainEventStep>("intro");
  const [selectedChoice, setSelectedChoice] = useState<
    captainEvents["choices"][number] | null
  >(null);

  function shuffleCaptainEvent(events: captainEvents[]) {
    const copyCaptainEvent = [...events];
    for (let i = copyCaptainEvent.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copyCaptainEvent[i];
      copyCaptainEvent[i] = copyCaptainEvent[j];
      copyCaptainEvent[j] = temp;
    }
    return copyCaptainEvent;
  }

  const [selectedEvent] = useState(() => shuffleCaptainEvent(CaptainEvents)[0]);

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

  const [participants] = useState(() =>
    shuffleCrew(availableCrew).slice(0, selectedEvent.participantCount),
  );

  return (
    <div>
      <div>
        <CaptainEventsIntro
          crew={crew}
          setCrew={setCrew}
          captainId={captainId}
          selectedEvent={selectedEvent}
          participants={participants}
          captainEventStep={captainEventStep}
          setCaptainEventStep={setCaptainEventStep}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
        />
      </div>

      <div>
        <CaptainEventsResult
          crew={crew}
          setCrew={setCrew}
          captainId={captainId}
          selectedEvent={selectedEvent}
          participants={participants}
          captainEventStep={captainEventStep}
          setCaptainEventStep={setCaptainEventStep}
          selectedChoice={selectedChoice}
          setSelectedChoice={setSelectedChoice}
        />
      </div>
    </div>
  );
}

export default CaptainEventsFlow;
