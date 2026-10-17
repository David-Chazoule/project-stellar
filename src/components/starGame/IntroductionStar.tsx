import React from "react";

import type { StartGameStep } from "./StartGameFlow";
import Button from "../Ui/Button";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
};

function IntroductionStar({ startStep, setStartStep }: Props) {
  const txtIntro = "C'est parti";
  return (
    <div className="start-panel">
      <h1>Bienvenue dans Stellar</h1>

      <img src="/startimg/introImg.webp" alt="intro-img" />

      <div className="intro-txt">
        <p>
          Des contrats douteux, des voyages interminables, des rencontres
          improbables, quelques bonnes décisions… et sûrement beaucoup de
          mauvaises.
        </p>
        <p>
          Vous allez constituer votre équipage, prendre les commandes de votre
          vaisseau et parcourir le système solaire à la recherche de travail,
          d’argent, de réputation et surtout d’histoires à raconter.
        </p>
        <p> Prêt à embarquer ?</p>
      </div>

      <Button onClick={() => setStartStep("captain")}>{txtIntro}</Button>
    </div>
  );
}

export default IntroductionStar;
