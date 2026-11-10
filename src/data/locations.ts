export const locations = {
  mercury: {
    name: "Mercure",
    sectorId: 1,
    image: "/planets/Mercury.webp",
  },

  venus: {
    name: "Vénus",
    sectorId: 1,
    image: "/planets/Venus.webp",
  },

  earth: {
    name: "Terre",
    sectorId: 1,
    image: "/planets/Hearth.webp",
  },

  moon: {
    name: "Lune",
    sectorId: 1,
    image: "/planets/Moon.webp",
  },

  mars: {
    name: "Mars",
    sectorId: 1,
    image: "/planets/Mars.webp",
  },

  ceres: {
    name: "Cérès",
    sectorId: 2,
    image: "",
  },
} as const;

export const travelDurations = {
  mercury: {
    venus: 35,
    earth: 65,
    moon: 67,
    mars: 95,
    ceres: 145,
  },

  venus: {
    mercury: 35,
    earth: 45,
    moon: 47,
    mars: 85,
    ceres: 125,
  },

  earth: {
    mercury: 65,
    venus: 45,
    moon: 2,
    mars: 60,
    ceres: 110,
  },

  moon: {
    mercury: 67,
    venus: 47,
    earth: 2,
    mars: 62,
    ceres: 112,
  },

  mars: {
    mercury: 95,
    venus: 85,
    earth: 60,
    moon: 62,
    ceres: 65,
  },

  ceres: {
    mercury: 145,
    venus: 125,
    earth: 110,
    moon: 112,
    mars: 65,
  },
} as const;

export type LocationId = keyof typeof locations;

export const sectorNames: Record<number, string> = {
  1: "Planètes intérieures",
  2: "Ceinture d'astéroïdes",
  3: "Jupiter et Saturne",
  4: "Système solaire externe",
};
