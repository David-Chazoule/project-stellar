import { useState } from "react";
import CaptainSelection from "./CaptainSelection";
import CrewSelection from "./CrewSelection";
import Welcome from "./Welcome";
import type { View } from "@/types/gameState";

export type StartGameStep = "captain" | "crew" | "welcome";

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>;
};

function StartGameFlow({ setView }: Props) {
  const [startStep, setStartStep] = useState<StartGameStep>("captain");

  return (
    <div>
      {startStep === "captain" && (
        <CaptainSelection startStep={startStep} setStartStep={setStartStep} />
      )}

      {startStep === "crew" && (
        <CrewSelection startStep={startStep} setStartStep={setStartStep} />
      )}

      {startStep === "welcome" && <Welcome setView={setView} />}
    </div>
  );
}

export default StartGameFlow;
