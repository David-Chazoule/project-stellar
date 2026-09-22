"use client";

import { useState } from "react";
import Dashboard from "./Dashboard";
import Crew from "../actions/crew/Crew";

function GameLayout() {
  const [view, setView] = useState<string>("");
  return (
    <div>
      <header>Header</header>
      <main>
        <section>
          <Dashboard view={view} setView={setView} />
        </section>
        <section>
          <p>Zone d&apos;action</p>
          {view === "crew" && <Crew />}
        </section>
      </main>
    </div>
  );
}

export default GameLayout;
