import { useState } from "react";
import CaptainSelection from "./CaptainSelection";
import CrewSelection from "./CrewSelection";
import Welcome from "./Welcome";
import type { View } from "@/types/gameState";
import { Character } from "@/types/character";
import StartGame from "./StartGame";
import IntroductionStar from "./IntroductionStar";

export type StartGameStep =
  | "start"
  | "introduction"
  | "captain"
  | "crew"
  | "welcome";

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>;
  captainId: number | null;
  setCaptainId: React.Dispatch<React.SetStateAction<number | null>>;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
};

function StartGameFlow({
  setView,
  captainId,
  setCaptainId,
  crew,
  setCrew,
}: Props) {
  const [startStep, setStartStep] = useState<StartGameStep>("start");

  return (
    <div>
      {startStep === "start" && (
        <StartGame startStep={startStep} setStartStep={setStartStep} />
      )}

      {startStep === "introduction" && (
        <IntroductionStar startStep={startStep} setStartStep={setStartStep} />
      )}

      {startStep === "captain" && (
        <CaptainSelection
          startStep={startStep}
          setStartStep={setStartStep}
          captainId={captainId}
          setCaptainId={setCaptainId}
          crew={crew}
          setCrew={setCrew}
        />
      )}

      {startStep === "crew" && (
        <CrewSelection
          startStep={startStep}
          setStartStep={setStartStep}
          crew={crew}
          setCrew={setCrew}
          captainId={captainId}
        />
      )}

      {startStep === "welcome" && <Welcome setView={setView} />}
    </div>
  );
}

export default StartGameFlow;
