import { useState } from "react";
import CaptainSelection from "./CaptainSelection";
import CrewSelection from "./CrewSelection";
import Welcome from "./Welcome";
import type { View } from "@/types/gameState";
import { Character } from "@/types/character";

export type StartGameStep = "captain" | "crew" | "welcome";

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
  const [startStep, setStartStep] = useState<StartGameStep>("captain");

  return (
    <div>
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
