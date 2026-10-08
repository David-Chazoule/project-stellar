"use client";

import { useState } from "react";
import Dashboard from "./Dashboard";
import Crew from "../actions/crew/Crew";
import MissionsSelection from "../actions/missionSelection/MissionsSelection";
import type { AutoMission } from "@/types/autoMissions";
import AutoMissionFlow from "../autoMissions/AutoMissionFlow";
function GameLayout() {
  const [view, setView] = useState<"crew" | "missions" | null>(null);
  const [selectedMission, setSelectedMission] = useState<AutoMission | null>(
    null,
  );
  return (
    <div>
      <header>Header</header>
      <main>
        <section>
          <Dashboard view={view} setView={setView} />
        </section>
        <section className="action-area">
          <p>Zone d&apos;action</p>
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
