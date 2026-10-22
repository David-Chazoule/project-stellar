"use client";

import { useState, useEffect } from "react";

import Dashboard from "./Dashboard";
import Crew from "../actions/crew/Crew";
import MissionsSelection from "../actions/missionSelection/MissionsSelection";
import AutoMissionFlow from "../autoMissions/AutoMissionFlow";
import StartGameFlow from "../starGame/StartGameFlow";
import { initialShip } from "@/data/ship";
import { initialGameState } from "@/data/gameState";
import { GameState, type View } from "@/types/gameState";
import type { AutoMission } from "@/types/autoMissions";
import type { Character } from "@/types/character";
import type { Ship } from "@/types/Ship";
import Header from "../header/Header";
import EventsFlow from "../events/EventsFlow";

function GameLayout() {
  const [view, setView] = useState<View>("startGame");
  const [selectedMission, setSelectedMission] = useState<AutoMission | null>(
    null,
  );
  const [captainId, setCaptainId] = useState<number | null>(null);
  const [crew, setCrew] = useState<Character[]>([]);
  const [ship, setShip] = useState<Ship>(initialShip);
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [view]);

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
          {view === "crew" && <Crew crew={crew} setCrew={setCrew} />}
          {view === "missions" && !selectedMission && (
            <MissionsSelection
              setSelectedMission={setSelectedMission}
              crew={crew}
              setCrew={setCrew}
              gameState={gameState}
            />
          )}
          {view === "missions" && selectedMission && (
            <AutoMissionFlow
              mission={selectedMission}
              setSelectedMission={setSelectedMission}
              crew={crew}
              setCrew={setCrew}
              setGameState={setGameState}
            />
          )}
          {view === "event" && <EventsFlow crew={crew} />}
        </section>
      </main>
    </div>
  );
}

export default GameLayout;
