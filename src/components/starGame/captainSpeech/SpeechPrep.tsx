import type {
  SpeechApproach,
  SpeechStep,
  SpeechApproachData,
} from "@/types/CaptainSpeech";
import { Ship } from "@/types/Ship";
import { captainSpeechData } from "@/data/missions/captainspeech";

type Props = {
  setSpeechApproach: React.Dispatch<
    React.SetStateAction<SpeechApproach | null>
  >;
  setSpeechStep: React.Dispatch<React.SetStateAction<SpeechStep>>;
  ship: Ship;
};

function SpeechPrep({ setSpeechApproach, setSpeechStep, ship }: Props) {
  const speechEntries = Object.entries(captainSpeechData) as [
    SpeechApproach,
    SpeechApproachData,
  ][];
  return (
    <div className="start-panel">
      <div className="speech-img-intro">
        <img src="/captainSpeech/captainSpeechIntro.webp" alt="speechIntro" />
      </div>
      <div className="txtSpeech">
        <p>
          Vous êtes assis seul dans la salle de controle du{" "}
          <span>{ship.name}</span>, les doigts glissant nerveusement sur le cuir
          de votre fauteuil. Autour de vous, le vaisseau vit déjà : léger
          bourdonnement des modules, souffle continu de la ventilation, petits
          crépitements électroniques derrière les consoles.
        </p>

        <p>
          Dans quelques instants, vous devrez quitter ce calme relatif pour
          rejoindre la salle de briefing et rencontrer votre toute nouvelle
          équipe. Faire bonne impression dès le départ peut jouer un rôle
          important dans la cohésion de l’équipage. Vous êtes désormais le
          capitaine. À vous d’assumer ce rôle.
        </p>

        <p>
          {" "}
          Malgré tout, vous sentez monter un peu de stress. Il est temps de
          choisir l’approche qui vous semble la plus adaptée pour cette première
          rencontre.
        </p>
      </div>
      <div className="choice-approach-box">
        {speechEntries.map(([approach, data]) => (
          <span
            className="approach-card"
            key={approach}
            onClick={() => {
              setSpeechApproach(approach);
              setSpeechStep("choice");
            }}
          >
            <h3>{data.label}</h3>
            <p>{data.prepText}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SpeechPrep;
