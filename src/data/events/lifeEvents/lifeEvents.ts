import type { LifeEvent } from "@/types/lifeEvent";

export const gameLifeEvent: LifeEvent[] = [
  {
    id: "life-game-001",
    participantCount: 3,
    text: "{0} a fait une partie de billard avec {1} et {2}. Il a gagné la partie et s'est vanté toute la journée.",
    result: {
      participants: {
        0: { moral: 3 },
        1: { moral: -1 },
        2: { moral: -1 },
      },
    },
  },
];

export const foodLifeEvent: LifeEvent[] = [
  {
    id: "life-food-001",
    participantCount: 1,
    text: "{0} a préparé à manger pour toute l'équipe le soir dernier.",
  },
];

export const socialLifeEvent: LifeEvent[] = [
  {
    id: "life-social-001",
    participantCount: 1,
    text: "{0} a écrit un long message à sa famille. Il en avait besoin.",
    result: {
      participants: {
        0: { moral: 3 },
      },
    },
  },
];

export const sportLifeEvent: LifeEvent[] = [
  {
    id: "life-sport-001",
    participantCount: 2,
    text: "{0} a fait une longue séance de musculation avec {1}. Ils se sentent tous les deux courbaturés.",
    result: {
      participants: {
        0: { moral: 2, fatigue: 2 },
        1: { moral: 2, fatigue: 2 },
      },
    },
  },
];

export const entertainmentLifeEvent: LifeEvent[] = [
  {
    id: "life-entertainment-001",
    participantCount: 1,
    text: "{0} a joué à un jeu vidéo pour se détendre.",
    result: {
      participants: {
        0: { moral: 2 },
      },
    },
  },
];

export const restLifeEvent: LifeEvent[] = [
  {
    id: "life-rest-001",
    participantCount: 1,
    text: "{0} aime passer ses soirées seul dans sa chambre à écouter des livres audio.",
  },
];

export const unusualLifeEvent: LifeEvent[] = [
  {
    id: "life-unusual-001",
    participantCount: 1,
    text: "Des bruits étranges ont été entendus dans la chambre de {0}. Tout le monde le soupçonne d'avoir regardé un porno avec le son un peu trop fort.",
  },
];

export const workEvent: LifeEvent[] = [
  {
    id: "life-work-001",
    participantCount: 1,
    text: "{0} a fait du rangement dans l’armurerie.",
  },
];

export const lifeEvents: LifeEvent[] = [
  ...gameLifeEvent,
  ...foodLifeEvent,
  ...socialLifeEvent,
  ...sportLifeEvent,
  ...entertainmentLifeEvent,
  ...restLifeEvent,
  ...unusualLifeEvent,
  ...workEvent,
];
