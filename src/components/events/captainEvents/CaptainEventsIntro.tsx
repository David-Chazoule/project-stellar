import type { CaptainEventStep } from "../EventsFlow";
import type { Character } from "@/types/character";
import type { captainEvents, CaptainEventsChoices } from "@/types/captainEvent";

type Props = {
  selectedEvent: captainEvents;
  participants: Character[];

  setCaptainEventStep: React.Dispatch<React.SetStateAction<CaptainEventStep>>;

  setSelectedChoice: React.Dispatch<
    React.SetStateAction<CaptainEventsChoices | null>
  >;
};

function CaptainEventsIntro({
  selectedEvent,
  participants,

  setCaptainEventStep,

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
      <div className="captain-event-img"></div>
      <div className="intro-captain-text">
        <p>{naming(participants, selectedEvent.intro)}</p>
      </div>

      <div className="choice-captain-event">
        {selectedEvent.choices.map((choice) => (
          <span
            className="captain-choice-card"
            key={choice.id}
            onClick={() => {
              setSelectedChoice(choice);
              setCaptainEventStep("result");
            }}
          >
            <h3>{choice.label}</h3>
            <p>{choice.text}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default CaptainEventsIntro;
