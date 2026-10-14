import type { SpeechApproach, SpeechStep } from "@/types/CaptainSpeech";

type Props ={
  setSpeechApproach : React.Dispatch<React.SetStateAction<SpeechApproach | null>>;
  setSpeechStep : React.Dispatch<React.SetStateAction<SpeechStep>>

}

function SpeechPrep({setSpeechApproach, setSpeechStep}:Props) {
  return (
    <div>
      <p>
        Vous êtes assis seul dans le cockpit, les doigts glissant nerveusement
        sur le cuir de votre fauteuil. Autour de vous, le vaisseau vit déjà :
        léger bourdonnement des modules, souffle continu de la ventilation,
        petits crépitements électroniques derrière les consoles. Dans quelques
        instants, vous devrez quitter ce calme relatif pour rejoindre la salle
        de briefing et rencontrer votre toute nouvelle équipe. Faire bonne
        impression dès le départ peut jouer un rôle important dans la cohésion
        de l’équipage. Vous êtes désormais le capitaine. À vous d’assumer ce
        rôle. Malgré tout, vous sentez monter un peu de stress. Il est temps de
        choisir l’approche qui vous semble la plus adaptée pour cette première
        rencontre.
      </p>

<div className="">
<span>
<h3></h3>
<p></p>

</span>



</div>




    </div>
  );
}

export default SpeechPrep;
