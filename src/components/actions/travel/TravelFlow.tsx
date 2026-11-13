import { useState } from "react"

import TravelPage from "./TravelPage"
import TravelArrival from "./TravelArrival"

import { getTravelDuration, getTravelOrbit } from "@/logic/travel/getTravelDuration"
import type { LocationId } from "@/data/locations"
import type { GameState } from "@/types/gameState"


type Props = {
  destinationId: LocationId;
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  onComplete: () => void;
};

function TravelFlow({
  destinationId,
  gameState,
  setGameState,
  onComplete,
}: Props) {

 const [step, setStep] = useState<"departure" | "arrival">("departure");

   const [departureId] = useState<LocationId>(
    gameState.currentLocationId
  );

  const [travelDuration] = useState(() =>
    getTravelOrbit(
      getTravelDuration(gameState.currentLocationId, destinationId)
    )
  );


  return (
    <div className="travelFlow-container">
      {step === "departure" && (
        <TravelPage
          departureId={departureId}
          destinationId={destinationId}
          travelDuration={travelDuration}
          gameState={gameState}
          onContinue={() => {
            setGameState((prev) => ({
              ...prev,
              currentLocationId: destinationId,
              elapsedDays: prev.elapsedDays + travelDuration,
            }));

            setStep("arrival");
          }}
        />
      )}

      {step === "arrival" && (
        <TravelArrival
          destinationId={destinationId}
          travelDuration={travelDuration}
          gameState={gameState}
          onContinue={onComplete}
        />
      )}
    </div>
  );
  
}

export default TravelFlow