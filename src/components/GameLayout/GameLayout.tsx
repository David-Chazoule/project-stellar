"use client";

import { useState, useEffect } from "react";

import Dashboard from "./Dashboard";
import Crew from "../actions/crew/Crew";
import Header from "../header/Header";
import EventsFlow from "../events/EventsFlow";
import MissionsSelection from "../actions/missionSelection/MissionsSelection";
import AutoMissionFlow from "../missions/autoMissions/AutoMissionFlow";
import StartGameFlow from "../starGame/StartGameFlow";
import { initialShip } from "@/data/ship";
import { initialGameState } from "@/data/gameState";

import type { GameState, View } from "@/types/gameState";
import type { AutoMission } from "@/types/autoMissions";
import type { Character } from "@/types/character";
import type { Ship } from "@/types/Ship";
import type { LocationId } from "@/data/locations";
import TravelFlow from "../actions/travel/TravelFlow";

function GameLayout() {
  const [view, setView] = useState<View>("startGame");
  const [selectedMission, setSelectedMission] = useState<AutoMission | null>(
    null,
  );
  const [travelDestinationId, setTravelDestinationId] =
    useState<LocationId | null>(null);
  const [captainId, setCaptainId] = useState<number | null>(null);
  const [crew, setCrew] = useState<Character[]>([]);
  const [ship, setShip] = useState<Ship>(initialShip);
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [view]);

  const handleSelectMission = (mission: AutoMission) => {
    setSelectedMission(mission);

    if (gameState.currentLocationId !== mission.locationId) {
      setTravelDestinationId(mission.locationId);
    }
  };

  return (
    <div className="gameLayout-container">
      <header className="game-header">
        <Header />
      </header>
      <main className="game-main">
        {view === "startGame" ? (
          <StartGameFlow
            setView={setView}
            captainId={captainId}
            setCaptainId={setCaptainId}
            crew={crew}
            setCrew={setCrew}
            ship={ship}
            setShip={setShip}
          />
        ) : (
          <>
            <Dashboard
              view={view}
              setView={setView}
              crew={crew}
              gameState={gameState}
            />
          </>
        )}

        <section className="action-area">
          {view === "missions" && travelDestinationId && (
            <TravelFlow
              destinationId={travelDestinationId}
              gameState={gameState}
              setGameState={setGameState}
              onComplete={() => {
                setTravelDestinationId(null);
              }}
            />
          )}

          {view === "crew" && <Crew crew={crew} setCrew={setCrew} />}
          {view === "missions" && !selectedMission && !travelDestinationId && (
            <MissionsSelection
              setSelectedMission={handleSelectMission}
              crew={crew}
              setCrew={setCrew}
              gameState={gameState}
              onTravel={setTravelDestinationId}
            />
          )}
          {view === "missions" && selectedMission && !travelDestinationId && (
            <AutoMissionFlow
              mission={selectedMission}
              setSelectedMission={setSelectedMission}
              crew={crew}
              setCrew={setCrew}
              gameState={gameState}
              setGameState={setGameState}
              setView={setView}
            />
          )}
          {view === "event" && (
            <EventsFlow
              crew={crew}
              setCrew={setCrew}
              captainId={captainId}
              setView={setView}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default GameLayout;
