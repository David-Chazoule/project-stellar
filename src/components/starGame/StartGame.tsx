import React from "react";

import { StartGameStep } from "./StartGameFlow";

type Props = {
  startStep: StartGameStep;
  setStartStep: React.Dispatch<React.SetStateAction<StartGameStep>>;
};

function StartGame({ startStep, setStartStep }: Props) {
  return (
    <div>
      <button onClick={() => setStartStep("introduction")}>
        Commencer partie
      </button>
    </div>
  );
}

export default StartGame;
