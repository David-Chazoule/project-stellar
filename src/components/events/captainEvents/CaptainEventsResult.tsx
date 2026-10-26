import type { CaptainEventStep } from "../EventsFlow";
import type { Character } from "@/types/character";
import type { CaptainEventsChoices } from "@/types/captainEvent";
import Button from "@/components/Ui/Button";

type Props = {
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  captainId: number | null;

  participants: Character[];

  setCaptainEventStep: React.Dispatch<React.SetStateAction<CaptainEventStep>>;
  selectedChoice: CaptainEventsChoices | null;
};

function CaptainEventsResult({
  setCrew,
  captainId,

  participants,

  setCaptainEventStep,
  selectedChoice,
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
      <Button onClick={handleStateCaptain}>continuer</Button>
    </div>
  );
}

export default CaptainEventsResult;
