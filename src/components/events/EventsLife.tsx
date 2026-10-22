import type { Character } from "@/types/character";
import { lifeEvents } from "@/data/events/lifeEvents/lifeEvents";
import type { LifeEvent } from "@/types/lifeEvent";
import { useState } from "react";
type Props = {
  crew: Character[];
};

function EventsLife({ crew }: Props) {
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
    return events.map((event) => {
      const participants = shuffleCrew(crew).slice(0, event.participantCount);

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
    <div>
      <div className="life-event-header"></div>

      <div className="life-event-card-box">
        {preparedEvents.map(({ event, participants }) => (
          <div key={event.id}>
            <p>{naming(participants, event.text)}</p>
          </div>
        ))}
      </div>
      <button>Suivant</button>
    </div>
  );
}

export default EventsLife;
