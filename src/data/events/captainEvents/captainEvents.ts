import type { captainEvents } from "@/types/captainEvent";

export const soloCaptainEvents: captainEvents[] = [
  {
    id: "solo-captain-001",
    intro:
      "Vous tournez dans votre lit depuis plusieurs heures. Impossible de trouver le sommeil. Le vaisseau est silencieux, et la plupart des membres de l'équipage dorment.",
    choices: [
      {
        id: "choice-1",
        label: "Faire du sport",
        text: "Vous décidez d'aller vous fatiguer dans la salle de musculation.",
        result: {
          text: "Vous terminez une séance intensive et retournez dormir.",
          effects: { fatigue: 5 },
        },
      },
      {
        id: "choice-2",
        label: "Se détendre",
        text: "Vous rejoignez la salle commune pour regarder un film.",
        result: {
          text: "Vous finissez par vous endormir devant l'écran.",
          effects: { moral: 5 },
        },
      },
      {
        id: "choice-3",
        label: "Travailler",
        text: "",
        result: {
          text: "Vous retournez dans votre bureau pour consulter les prochains contrats.",
          effects: { fatigue: 10 },
        },
      },
    ],
  },
  {
    id: "solo-captain-002",
    intro: "...",
    choices: [
      {
        id: "choice-1",
        label: "sport",
        text: "",
        result: {
          text: "Vous terminez une séance intensive et retournez dormir.",
          effects: { fatigue: 5 },
        },
      },
      {
        id: "choice-2",
        label: "Film",
        text: "",
        result: {
          text: "Vous finissez par vous endormir devant l'écran.",
          effects: { moral: 5 },
        },
      },
      {
        id: "choice-3",
        label: "Travail",
        text: "",
        result: {
          text: "Vous passez la nuit sur les dossiers.",
          effects: { fatigue: 10 },
        },
      },
    ],
  },
  {
    id: "solo-captain-003",
    intro: "...",
    choices: [
      {
        id: "choice-1",
        label: "sport",
        text: "",
        result: {
          text: "Vous terminez une séance intensive et retournez dormir.",
          effects: { fatigue: 5 },
        },
      },
      {
        id: "choice-2",
        label: "Film",
        text: "",
        result: {
          text: "Vous finissez par vous endormir devant l'écran.",
          effects: { moral: 5 },
        },
      },
      {
        id: "choice-3",
        label: "Travail",
        text: "",
        result: {
          text: "Vous passez la nuit sur les dossiers.",
          effects: { fatigue: 10 },
        },
      },
    ],
  },
];

export const crewCaptainEvents = [
  {
    id: "crew-captain-001",
    intro: "...",
    choices: [
      {
        id: "choice-1",
        label: "Faire du sport",
        text: "",
        result: {
          text: "...",
          effects: { fatigue: 5 },
        },
      },
      {
        id: "choice-2",
        label: "Faire du sport",
        text: "",
        result: {
          text: "...",
          effects: { fatigue: 5 },
        },
      },
      {
        id: "choice-3",
        label: "Faire du sport",
        text: "",
        result: {
          text: "...",
          effects: { fatigue: 5 },
        },
      },
    ],
  },
];

export const CaptainEvents = [...crewCaptainEvents, ...soloCaptainEvents];
