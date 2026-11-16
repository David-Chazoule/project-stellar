import { useState } from "react";

import TravelPage from "./TravelPage";
import TravelArrival from "./TravelArrival";

import {
  getTravelDuration,
  getTravelOrbit,
} from "@/logic/travel/getTravelDuration";
import type { LocationId } from "@/data/locations";
import type { GameState } from "@/types/gameState";
import TravelTransition from "./TravelTransition";
import { getTravelCycleCount } from "../../../logic/getTravelCount/getTravelCount";
import type { Character } from "@/types/character";
import EventsFlow from "@/components/events/EventsFlow";
import { getTravelEventType } from "../../../logic/getTravelEventType/getTravelEventType";

type Props = {
  destinationId: LocationId;
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  isMissionTravel: boolean | null;
  onComplete: () => void;
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  captainId: number | null;
};

function TravelFlow({
  destinationId,
  gameState,
  setGameState,
  isMissionTravel,
  onComplete,
  crew,
  setCrew,
  captainId,
}: Props) {
  const [step, setStep] = useState<
    "departure" | "events" | "transition" | "arrival"
  >("departure");

  const [currentCycle, setCurrentCycle] = useState(0);

  const [departureId] = useState<LocationId>(gameState.currentLocationId);

  const [travelDuration] = useState(() =>
    getTravelOrbit(
      getTravelDuration(gameState.currentLocationId, destinationId),
    ),
  );

  const cycleCount = getTravelCycleCount(travelDuration);

  const elapsedTravelDays = Math.round(
    (travelDuration / (cycleCount + 1)) * currentCycle,
  );

  const eventType = getTravelEventType(cycleCount, currentCycle);

  const handleCycleComplete = () => {
    const nextCycle = currentCycle + 1;

    const daysReached = Math.round(
      (travelDuration / (cycleCount + 1)) * nextCycle,
    );

    const previousDays = Math.round(
      (travelDuration / (cycleCount + 1)) * currentCycle,
    );

    setGameState((prev) => ({
      ...prev,
      elapsedDays: prev.elapsedDays + (daysReached - previousDays),
    }));

    setCurrentCycle(nextCycle);

    if (nextCycle < cycleCount) {
      setStep("transition");
    } else {
      setGameState((prev) => ({
        ...prev,
        elapsedDays: prev.elapsedDays + (travelDuration - daysReached),
        currentLocationId: destinationId,
      }));

      setStep("arrival");
    }
  };

  const handleTravelStart = () => {
    if (cycleCount === 0) {
      setGameState((prev) => ({
        ...prev,
        elapsedDays: prev.elapsedDays + travelDuration,
        currentLocationId: destinationId,
      }));

      setStep("arrival");
    } else {
      setStep("events");
    }
  };

  const handleTravelComplete = () => {
    onComplete();
  };
  return (
    <div className="travelFlow-container">
      {step === "departure" && (
        <TravelPage
          departureId={departureId}
          destinationId={destinationId}
          travelDuration={travelDuration}
          gameState={gameState}
          onContinue={handleTravelStart}
        />
      )}

      {step === "transition" && (
        <TravelTransition
          destinationId={destinationId}
          elapsedTravelDays={elapsedTravelDays}
          travelDuration={travelDuration}
          onContinue={() => {
            setStep("events");
          }}
        />
      )}

      {step === "arrival" && (
        <TravelArrival
          destinationId={destinationId}
          travelDuration={travelDuration}
          gameState={gameState}
          onContinue={handleTravelComplete}
          isMissionTravel={isMissionTravel}
        />
      )}

      {step === "events" && (
        <EventsFlow
          key={currentCycle}
          crew={crew}
          setCrew={setCrew}
          captainId={captainId}
          eventType={eventType}
          onComplete={handleCycleComplete}
        />
      )}
    </div>
  );
}

export default TravelFlow;
