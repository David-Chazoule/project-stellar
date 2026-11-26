import React from "react";

type Props = {
  onContinue: () => void;
};

function PubEvents({ onContinue }: Props) {
  return (
    <div className="start-panel">
      PubEvents
      <div className="button-box">
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
}

export default PubEvents;
