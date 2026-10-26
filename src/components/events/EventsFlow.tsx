import { Character } from "@/types/character";
import EventsLife from "./EventsLife";
import CaptainEventsFlow from "./captainEvents/CaptainEventsFlow";

type Props = {
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  captainId: number | null;
};

function EventsFlow({ crew, setCrew, captainId }: Props) {
  return (
    <div>
      <div>
        <CaptainEventsFlow
          crew={crew}
          setCrew={setCrew}
          captainId={captainId}
        />
      </div>
      <div>
        {" "}
        <EventsLife crew={crew} />
      </div>
    </div>
  );
}

export default EventsFlow;
