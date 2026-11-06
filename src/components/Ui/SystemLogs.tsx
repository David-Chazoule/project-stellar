"use client";

import { useEffect, useState } from "react";

const messages = [
  "> SYS_NAV_INIT_0xA72",
  "> SCANNING_SECTOR_01...",
  "> ORBITAL_SYNC::ACTIVE",
  "> LOC_EARTH_001",
  "> NAV_BUFFER_011010",
  "> COORD_VERIFY::OK",
  "> SYSTEM_READY_",
];

function SystemLogs() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let pause = 0;

    const interval = setInterval(() => {
      if (pause > 0) {
        pause--;
        return;
      }

      const message = messages[lineIndex];

      if (charIndex < message.length) {
        charIndex++;

        setLines((prev) => [...prev.slice(0, -1), message.slice(0, charIndex)]);
      } else {
        pause = 10;
        charIndex = 0;
        lineIndex = (lineIndex + 1) % messages.length;

        setLines((prev) => [...prev.slice(-4), ""]);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="system-logs">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default SystemLogs;
