import { useState } from "react";

import { lifeEvents } from "@/data/events/lifeEvents/lifeEvents";



import type { LifeEvent } from "@/types/lifeEvent";
import type { Character } from "@/types/character";
import type { View } from "@/types/gameState";
import Button from "../Ui/Button";

type Props = {
  crew: Character[];
  setView: React.Dispatch<React.SetStateAction<View>>;
};

function EventsLife({ crew, setView }: Props) {
  function shuffleLifeEvent(lifeEvents: LifeEvent[]) {
    const copyLifeEvent = [...lifeEvents];
    for (let i = copyLifeEvent.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copyLifeEvent[i];
      copyLifeEvent[i] = copyLifeEvent[j];
      copyLifeEvent[j] = temp;
    }
    return copyLifeEvent;
  }

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

 function assignParticipants(events: LifeEvent[], crew: Character[]) {
  const appearanceCounts = new Map<Character["id"], number>();

  return events.map((event) => {
    const availableCrew = shuffleCrew(crew)
      .filter((member) => {
        return (appearanceCounts.get(member.id) ?? 0) < 2;
      })
      .sort((a, b) => {
        return (
          (appearanceCounts.get(a.id) ?? 0) -
          (appearanceCounts.get(b.id) ?? 0)
        );
      });

    const participants = availableCrew.slice(0, event.participantCount);

    participants.forEach((member) => {
      const count = appearanceCounts.get(member.id) ?? 0;
      appearanceCounts.set(member.id, count + 1);
    });

    return {
      event,
      participants,
    };
  });
}

  const [preparedEvents] = useState(() =>
    assignParticipants(shuffleLifeEvent(lifeEvents).slice(0, 4), crew),
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
      <div className="life-event-header"></div>
      <div className="life-event-card-box">
        {preparedEvents.map(({ event, participants }) => (
          <div className="life-event-card" key={event.id}>
            <p className="lifeEvent-text">{naming(participants, event.text)}</p>
          </div>
        ))}
      </div>
      <Button onClick={() => setView("missions")}>Continuer</Button>
    </div>
  );
}

export default EventsLife;
