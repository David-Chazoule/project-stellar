import { useState } from "react";

import { lifeEvents } from "@/data/events/lifeEvents/lifeEvents";

import type { LifeEvent } from "@/types/lifeEvent";
import type { Character } from "@/types/character";
import type { View } from "@/types/gameState";
import {
  Zap,
  FaceSlightlySmiling,
  FaceSlightlyFrowning,
  Dot,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Button from "../Ui/Button";

type Props = {
  crew: Character[];
  setCrew: React.Dispatch<React.SetStateAction<Character[]>>;
  setView: React.Dispatch<React.SetStateAction<View>>;
};

function EventsLife({ crew, setCrew, setView }: Props) {
  function shuffleLifeEvent(lifeEvents: LifeEvent[]) {
    const copyLifeEvent = [...lifeEvents];
    for (let i = copyLifeEvent.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copyLifeEvent[i];
      copyLifeEvent[i] = copyLifeEvent[j];
      copyLifeEvent[j] = temp;
    }
    return copyLifeEvent;
  }

  function shuffleCrew(crew: Character[]) {
    const copyCrew = [...crew];
    for (let i = copyCrew.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copyCrew[i];
      copyCrew[i] = copyCrew[j];
      copyCrew[j] = temp;
    }
    return copyCrew;
  }

  function assignParticipants(events: LifeEvent[], crew: Character[]) {
    const appearanceCounts = new Map<Character["id"], number>();

    return events.map((event) => {
      const availableCrew = shuffleCrew(crew)
        .filter((member) => {
          return (appearanceCounts.get(member.id) ?? 0) < 2;
        })
        .sort((a, b) => {
          return (
            (appearanceCounts.get(a.id) ?? 0) -
            (appearanceCounts.get(b.id) ?? 0)
          );
        });

      const participants = availableCrew.slice(0, event.participantCount);

      participants.forEach((member) => {
        const count = appearanceCounts.get(member.id) ?? 0;
        appearanceCounts.set(member.id, count + 1);
      });

      return {
        event,
        participants,
      };
    });
  }

  const [preparedEvents] = useState(() =>
    assignParticipants(shuffleLifeEvent(lifeEvents).slice(0, 4), crew),
  );

  function naming(member: Character[], text: string) {
    const parts = text.split(/(\{\d+\})/);

    return parts.map((part, i) => {
      if (/^\{\d+\}$/.test(part)) {
        const index = Number(part[1]);

        return (
          <span className="crew-name" key={i}>
            {member[index]?.name}
          </span>
        );
      }

      return part;
    });
  }

  function handleContinue() {
    preparedEvents.forEach(({ event, participants }) => {
      const allCrewEffects = event.result?.allCrew;

      if (allCrewEffects) {
        setCrew((prev) =>
          prev.map((character) => {
            return {
              ...character,
              states: {
                ...character.states,
                moral: Math.min(
                  100,
                  Math.max(
                    0,
                    character.states.moral + (allCrewEffects.moral ?? 0),
                  ),
                ),
                fatigue: Math.min(
                  100,
                  Math.max(
                    0,
                    character.states.fatigue + (allCrewEffects.fatigue ?? 0),
                  ),
                ),
              },
            };
          }),
        );
      }

      participants.forEach((member, index) => {
        const effects = event.result?.participants?.[index];

        if (!effects) return;

        setCrew((prev) =>
          prev.map((character) => {
            if (character.id === member.id) {
              const updatedSkills = { ...character.skills };
              if (effects.skills) {
                const skillEntries = Object.entries(effects.skills);
                skillEntries.forEach(([skill, variation]) => {
                  const skillKey = skill as keyof typeof updatedSkills;
                  updatedSkills[skillKey] = Math.min(
                    100,
                    Math.max(0, updatedSkills[skillKey] + (variation ?? 0)),
                  );
                });
              }
              return {
                ...character,
                skills: updatedSkills,
                states: {
                  ...character.states,
                  moral: Math.min(
                    100,
                    Math.max(0, character.states.moral + (effects?.moral ?? 0)),
                  ),
                  fatigue: Math.min(
                    100,
                    Math.max(
                      0,
                      character.states.fatigue + (effects?.fatigue ?? 0),
                    ),
                  ),
                },
              };
            }

            return character;
          }),
        );
      });
    });

    setView("missions");
  }

  function getEffectClass(type: "moral" | "fatigue" | "skill", value: number) {
    if (type === "moral") {
      if (value === 0) return "";

      return value < 0 ? "negatif" : "positif";
    }

    if (type === "fatigue") {
      if (value === 0) return "";
      return value > 0 ? "negatif" : "positif";
    }

    return value < 0 ? "negatif" : "positif";
  }

  function renderConsequences(event: LifeEvent, participants: Character[]) {
    const effects = event.result?.participants;
    const allCrewEffects = event.result?.allCrew;

    return (
      <>
        {participants.map((member, index) => {
          const effect = effects?.[index];
          if (!effect) return null;
          const skillEffects = Object.entries(effect.skills ?? {});
          return (
            <div key={member.id} className="effect-box">
              {effect.moral !== undefined && (
                <div
                  className={`effect-card ${getEffectClass("moral", effect.moral)}`}
                >
                  <span>
                    {effect.moral < 0 ? (
                      <FaceSlightlyFrowning size={14} />
                    ) : (
                      <FaceSlightlySmiling size={14} />
                    )}
                  </span>

                  <span>
                    {effect.moral > 0 ? "+" : ""}
                    {effect.moral} Moral
                  </span>
                  <span>
                    <Dot size={10} />
                  </span>
                  <span>{member.name}</span>
                </div>
              )}
              {effect.fatigue !== undefined && (
                <div
                  className={`effect-card ${getEffectClass("fatigue", effect.fatigue)}`}
                >
                  <Zap size={14} />
                  <span>
                    {effect.fatigue > 0 ? "+" : ""}
                    {effect.fatigue} Fatigue{" "}
                  </span>
                  <span>
                    <Dot size={10} />
                  </span>
                  <span>{member.name}</span>
                </div>
              )}
              {skillEffects.map(([skill, value]) => (
                <div
                  key={skill}
                  className={`effect-card skill`}
                >
                  <span>
                    {" "}
                    {value < 0 ? (
                      <TrendingDown size={14} color="#FF6464" />
                    ) : (
                      <TrendingUp size={14} color="#45D879" />
                    )}
                  </span>
                  <span>{value > 0 ? "+" : ""}{value}</span>
                  <span>
                    {skill}</span>  <span>
                  <Dot size={10} />
                </span> 
                  
                  <span>{member.name}</span>
                </div>
              ))}
            </div>
          );
        })}

        {allCrewEffects && (
          <div className="effect-box">
            {allCrewEffects.moral !== undefined && (
              <div
                className={`effect-card ${getEffectClass("moral", allCrewEffects.moral)}`}
              >
                <span>
                  {allCrewEffects.moral < 0 ? (
                    <FaceSlightlyFrowning size={14} />
                  ) : (
                    <FaceSlightlySmiling size={14} />
                  )}
                </span>
                <span>
                  {" "}
                  {allCrewEffects.moral > 0 ? "+" : ""} {allCrewEffects.moral}{" "}
                  Moral
                </span>
                <span>
                  <Dot size={10} />
                </span>
                <span>équipage</span>
              </div>
            )}

            {allCrewEffects.fatigue !== undefined && (
              <div
                className={`effect-card ${getEffectClass("moral", allCrewEffects.fatigue)}`}
              >
                <Zap size={14} />
                <span>
                  {allCrewEffects.fatigue > 0 ? "+" : ""}{" "}
                  {allCrewEffects.fatigue} Fatigue{" "}
                </span>
                <span>
                  <Dot size={10} />
                </span>
                <span>équipage</span>
              </div>
            )}
          </div>
        )}
      </>
    );
  }

  return (
    <div className="start-panel">
      <div className="life-event-header"></div>
      <div className="life-event-card-box">
        {preparedEvents.map(({ event, participants }) => (
          <div className="life-event-card" key={event.id}>
            <p className="lifeEvent-text">{naming(participants, event.text)}</p>

            {(event.result?.participants || event.result?.allCrew) && (
              <>
                <div className="line"></div>
                <div className="consequence-container">
                  <p>CONSÉQUENCES</p>
                  <div className="consequence-box">
                    {renderConsequences(event, participants)}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Button onClick={handleContinue}>Continuer</Button>
    </div>
  );
}

export default EventsLife;
