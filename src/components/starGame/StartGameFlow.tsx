import { useState } from "react";

import CaptainSelection from "./CaptainSelection";
import CrewSelection from "./CrewSelection";
import Welcome from "./Welcome";
import StartGame from "./StartGame";
import IntroductionStar from "./IntroductionStar";
import CaptainSpeechFlow from "./captainSpeech/CaptainSpeechFlow";
import type { View } from "@/types/gameState";
import type { Character } from "@/types/character";
import type { Ship } from "@/types/ship";

export type StartGameStep =
  | "start"
  | "introduction"
  | "captain"
  | "crew"
  | "speech"
  | "welcome";

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>;
  captainId: number | null;
  setCaptainId: React.Dispatch<React.SetStateAction<number | null>>;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  ship: Ship;
  setShip: React.Dispatch<React.SetStateAction<Ship>>;
};

function StartGameFlow({
  setView,
  captainId,
  setCaptainId,
  crew,
  setCrew,
  ship,
  setShip,
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
          ship={ship}
          setShip={setShip}
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

      {startStep === "speech" && (
        <CaptainSpeechFlow setStartStep={setStartStep} />
      )}

      {startStep === "welcome" && <Welcome setView={setView} />}
    </div>
  );
}

export default StartGameFlow;
