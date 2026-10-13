
import CrewCard from "./CrewCard";
import type { Character } from "@/types/character";

type Props = {
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};
function Crew({ crew }: Props) {
  return (
    <div className="crew-container">
      {crew.map((character) => (
        <CrewCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Crew;
