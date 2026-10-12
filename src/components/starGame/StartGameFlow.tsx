import { useState } from "react";
import CaptainSelection from "./CaptainSelection";
import CrewSelection from "./CrewSelection";
import Welcome from "./Welcome";

export type StartGameStep = "captain" | "crew" | "welcome";

function StartGameFlow() {
  const [startStep, setStartStep] = useState<StartGameStep>("captain");

  return (
    <div>
      {startStep === "captain" && (
        <CaptainSelection startStep={startStep} setStartStep={setStartStep} />
      )}

      {startStep === "crew" && (
        <CrewSelection startStep={startStep} setStartStep={setStartStep} />
      )}

      {startStep === "welcome" && (
        <Welcome startStep={startStep} setStartStep={setStartStep} />
      )}
    </div>
  );
}

export default StartGameFlow;
