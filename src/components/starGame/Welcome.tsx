import type { View } from "../../types/gameState";
import type { Character } from "../../types/character";
import type { Ship } from "@/types/Ship";
import Button from "../Ui/Button";

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>;
  captainId: number | null;
  crew: Character[];
  ship: Ship;
};

function Welcome({ setView, captainId, crew, ship }: Props) {
  const captain = crew.find((character) => character.id === captainId);
  return (
    <div className="start-panel">
      <div className="img-welcome">
        <img src="/startimg/welcome-image.webp" alt="welcome-img" />
      </div>
      <div className="welcome-txt">
        <p>
          Capitaine <span>{captain?.name}</span>, votre équipage est désormais
          au complet. Sept membres vous accompagneront à bord du{" "}
          <span>{ship.name}</span>, chacun avec ses compétences, son caractère
          et ses propres attentes.
        </p>
        <p>
          Devant vous s’étend tout le système solaire : colonies, stations
          orbitales, villes souterraines, avant-postes isolés et routes
          commerciales. Dans le cockpit, l’écran principal affiche déjà les
          premiers contrats disponibles.{" "}
        </p>
        <p>
          Transport, escorte, assistance, opérations techniques… rien de
          prestigieux pour l’instant, mais il faut bien commencer quelque part.
          Votre équipage est prêt. Le vaisseau aussi. Il est temps de décrocher
          votre premier contrat.
        </p>
      </div>

      <div>
        <Button onClick={() => setView("missions")}>
          Consulter les contrats
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
