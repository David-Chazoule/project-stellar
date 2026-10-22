import { Character } from "@/types/character"
import EventsLife from "./EventsLife";

type Props = {
crew: Character[];

}

function EventsFlow({crew}:Props) {



  return (
    <div>
   <EventsLife crew={crew}/>



    </div>
  )
}

export default EventsFlow