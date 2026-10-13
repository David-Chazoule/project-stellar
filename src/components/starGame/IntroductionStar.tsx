import React from "react";

import type { StartGameStep } from "./StartGameFlow";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
};

function IntroductionStar({ startStep, setStartStep }: Props) {
  const txtIntro = "C'est parti";
  return (
    <div>
      <h2>Bienvenue dans Stellar.</h2>
      <p>
        Des contrats douteux, des voyages interminables, des rencontres
        improbables, quelques bonnes décisions… et sûrement beaucoup de
        mauvaises. Vous allez constituer votre équipage, prendre les commandes
        de votre vaisseau et parcourir le système solaire à la recherche de
        travail, d’argent, de réputation et surtout d’histoires à raconter. Prêt
        à embarquer ?
      </p>

      <button onClick={() => setStartStep("captain")}>{txtIntro}</button>
    </div>
  );
}

export default IntroductionStar;
