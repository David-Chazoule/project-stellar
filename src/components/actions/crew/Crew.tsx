import { characters } from "@/data/character";
import CrewCard from "./CrewCard";

function Crew() {
  return (
    <div className="crew-container">
      {characters.map((character) => (
        <CrewCard key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Crew;
