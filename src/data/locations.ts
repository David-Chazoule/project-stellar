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

export type LocationId = keyof typeof locations;
