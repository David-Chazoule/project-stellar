export const locations = {
  mercury: {
    name: "Mercure",
    sectorId: 1,
    image: "/planets/mercury.webp",
  },

  venus: {
    name: "Vénus",
    sectorId: 1,
    image: "/planets/venus.webp",
  },

  earth: {
    name: "Terre",
    sectorId: 1,
    image: "",
  },

  moon: {
    name: "Lune",
    sectorId: 1,
    image: "",
  },

  mars: {
    name: "Mars",
    sectorId: 1,
    image: "",
  },

  ceres: {
    name: "Cérès",
    sectorId: 2,
    image: "",
  },
} as const;

export type LocationId = keyof typeof locations;
