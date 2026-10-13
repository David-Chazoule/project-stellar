"use client";

import { useState } from "react";
import Dashboard from "./Dashboard";
import Crew from "../actions/crew/Crew";
import MissionsSelection from "../actions/missionSelection/MissionsSelection";
import AutoMissionFlow from "../autoMissions/AutoMissionFlow";
import type { View } from "@/types/gameState";
import type { AutoMission } from "@/types/autoMissions";

import StartGameFlow from "../starGame/StartGameFlow";
import type { Character } from "@/types/character";
function GameLayout() {
  const [view, setView] = useState<View>("startGame");
  const [selectedMission, setSelectedMission] = useState<AutoMission | null>(
    null,
  );
  const [captainId, setCaptainId] = useState<number | null>(null);
  const [crew, setCrew] = useState<Character[]>([]);

  return (
    <div>
      <header>Header</header>
      <main>
        <section>
          <Dashboard view={view} setView={setView} />
        </section>

        <section className="action-area">
          {view === "startGame" && (
            <StartGameFlow
              setView={setView}
              captainId={captainId}
              setCaptainId={setCaptainId}
              crew={crew}
              setCrew={setCrew}
            />
          )}

          {view === "crew" && <Crew />}
          {view === "missions" && !selectedMission && (
            <MissionsSelection setSelectedMission={setSelectedMission} />
          )}
          {view === "missions" && selectedMission && (
            <AutoMissionFlow
              mission={selectedMission}
              setSelectedMission={setSelectedMission}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default GameLayout;
