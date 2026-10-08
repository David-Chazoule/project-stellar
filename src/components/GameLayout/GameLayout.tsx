"use client";

import { useState } from "react";
import Dashboard from "./Dashboard";
import Crew from "../actions/crew/Crew";
import MissionsSelection from "../actions/missionSelection/MissionsSelection";

function GameLayout() {
  const [view, setView] = useState<"crew" | "missions" | null>(null);
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
          {view==="missions" && <MissionsSelection/>}
        </section>
      </main>
    </div>
  );
}

export default GameLayout;
