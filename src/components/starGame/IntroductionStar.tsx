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
      <h2>blablalbalbalbalbalbalbalbalbalbalbalbalbal</h2>

      <button onClick={() => setStartStep("captain")}>{txtIntro}</button>
    </div>
  );
}

export default IntroductionStar;
