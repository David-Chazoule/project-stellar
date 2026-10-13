"use client";

import { useState } from "react";

import Dashboard from "./Dashboard";
import Crew from "../actions/crew/Crew";
import MissionsSelection from "../actions/missionSelection/MissionsSelection";
import AutoMissionFlow from "../autoMissions/AutoMissionFlow";
import StartGameFlow from "../starGame/StartGameFlow";
import { initialShip } from "@/data/ship";

import type { View } from "@/types/gameState";
import type { AutoMission } from "@/types/autoMissions";
import type { Character } from "@/types/character";
import type { Ship } from "@/types/ship";

function GameLayout() {
  const [view, setView] = useState<View>("startGame");
  const [selectedMission, setSelectedMission] = useState<AutoMission | null>(
    null,
  );
  const [captainId, setCaptainId] = useState<number | null>(null);
  const [crew, setCrew] = useState<Character[]>([]);
  const [ship, setShip] = useState<Ship>(initialShip);

  return (
    <div>
      <header>
        <p>Header-Stellar</p>
      </header>
      <main>
        <section>
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
            <section>
              <Dashboard view={view} setView={setView} crew={crew} />
            </section>
          )}
        </section>

        <section className="action-area">
          {view === "crew" && <Crew crew={crew} setCrew={setCrew} />}
          {view === "missions" && !selectedMission && (
            <MissionsSelection
              setSelectedMission={setSelectedMission}
              crew={crew}
              setCrew={setCrew}
            />
          )}
          {view === "missions" && selectedMission && (
            <AutoMissionFlow
              mission={selectedMission}
              setSelectedMission={setSelectedMission}
              crew={crew}
              setCrew={setCrew}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default GameLayout;
