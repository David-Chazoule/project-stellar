
export const locations = {
  // SECTEUR 1 — SYSTÈME INTÉRIEUR

  mercury: {
    name: "Mercure",
    sectorId: 1,
    image: "/planets/Mercury.webp",
    imageArrival: "",
    type: "Planète tellurique",
    population: 30_000,
    gravity: 0.38,
    temperature: 167,
    atmosphere: "Quasi inexistante (exosphère)",
    politics:
      "Colonie scientifique sous administration internationale terrestre",
    activity: "Recherche solaire, énergie et technologies expérimentales",
    description:
      "Colonie scientifique internationale installée dans un environnement extrême. Mercure accueille principalement des centres de recherche solaire et des installations technologiques expérimentales.",
  },

  venus: {
    name: "Vénus",
    sectorId: 1,
    image: "/planets/Venus.webp",
    imageArrival: "",
    type: "Planète tellurique",
    population: 1_000_000,
    gravity: 0.90,
    temperature: 464,
    atmosphere: "CO₂ (96,5 %), azote",
    politics:
      "République indépendante, gouverneur et Conseil des Huit",
    activity: "Tourisme, divertissement, recherche et services",
    description:
      "Ancienne colonie internationale devenue indépendante. Vénus possède huit grandes cités atmosphériques et de nombreuses stations privées, touristiques et industrielles.",
  },

  earth: {
    name: "Terre",
    sectorId: 1,
    image: "/planets/Hearth.webp",
    imageArrival: "",
    type: "Planète tellurique",
    population: 9_000_000_000,
    gravity: 1,
    temperature: 15,
    atmosphere: "Azote (78 %), oxygène (21 %)",
    politics:
      "États souverains, organisations et alliances internationales",
    activity: "Industrie, commerce, finance et recherche",
    description:
      "Berceau de l'humanité et principal centre démographique du système solaire. La Terre conserve ses nations et ses organisations internationales, tandis que plusieurs coalitions exercent leur influence sur les colonies spatiales.",
  },

  moon: {
    name: "Lune",
    sectorId: 1,
    image: "/planets/Moon.webp",
    imageArrival: "",
    type: "Satellite naturel",
    population: 5_000_000,
    gravity: 0.165,
    temperature: -20,
    atmosphere: "Quasi inexistante (exosphère)",
    politics:
      "Territoire autonome sous influence internationale terrestre",
    activity: "Industrie, commerce, tourisme et recherche",
    description:
      "La population lunaire vit principalement dans de vastes cités souterraines aménagées sur plusieurs niveaux. La Lune dispose d'un gouvernement local, mais conserve des liens politiques étroits avec la Terre.",
  },

  mars: {
    name: "Mars",
    sectorId: 1,
    image: "/planets/Mars.webp",
    imageArrival: "",
    type: "Planète tellurique",
    population: 9_000_000,
    gravity: 0.38,
    temperature: -63,
    atmosphere: "CO₂ (environ 95 %)",
    politics:
      "Deux États indépendants, d'influences occidentale et sino-russe",
    activity: "Métallurgie, exploitation minière et industrie",
    description:
      "Mars est divisée en deux États souverains, organisés autour de deux mégapoles souterraines reliées par La Jonction. Une station orbitale commune assure les contrôles frontaliers et comprend une zone neutre.",
  },

  // SECTEUR 2 — CEINTURE D'ASTÉROÏDES

  ceres: {
    name: "Cérès",
    sectorId: 2,
    image: "",
    imageArrival: "",
    type: "Planète naine",
    population: 1_200_000,
    gravity: 0.029,
    temperature: -105,
    atmosphere: "Très ténue, traces de vapeur d'eau",
    politics:
      "État indépendant, sous fortes influences terrestres et martiennes",
    activity: "Transport, logistique, stockage et industrie minière",
    description:
      "Grand carrefour commercial entre les régions intérieures et extérieures du système solaire. Cérès possède une immense zone portuaire et industrielle, ainsi qu'une population fortement marquée par sa culture ouvrière.",
  },

  beltInner: {
    name: "Ceinture interne",
    sectorId: 2,
    image: "",
    imageArrival: "",
    type: "Région d'astéroïdes",
    population: "Indéfinie",
    gravity: "Aucune",
    temperature: "Indéfinie",
    atmosphere: "Quasi inexistante",
    politics:
      "Diverses juridictions, concessions et colonies indépendantes",
    activity: "Extraction minière, prospection et industrie",
    description:
      "Région de la ceinture la plus proche de Mars. Elle accueille des exploitations minières, des installations industrielles et des avant-postes spécialisés.",
  },

  beltMiddle: {
    name: "Ceinture médiane",
    sectorId: 2,
    image: "",
    imageArrival: "",
    type: "Région d'astéroïdes",
    population: "Indéfinie",
    gravity: "Aucune",
    temperature: "Indéfinie",
    atmosphere: "Quasi inexistante",
    politics:
      "Diverses juridictions, concessions et colonies indépendantes",
    activity: "Extraction minière, industrie et logistique",
    description:
      "Région centrale de la ceinture, où se trouve Cérès. Elle regroupe des installations minières, des plateformes industrielles et des stations de transit.",
  },

  beltOuter: {
    name: "Ceinture externe",
    sectorId: 2,
    image: "",
    imageArrival: "",
    type: "Région d'astéroïdes",
    population: "Indéfinie",
    gravity: "Aucune",
    temperature: "Indéfinie",
    atmosphere: "Quasi inexistante",
    politics:
      "Diverses juridictions, concessions et colonies indépendantes",
    activity: "Extraction minière, prospection et avant-postes",
    description:
      "Région extérieure de la ceinture, en direction de Jupiter. Elle abrite des exploitations isolées, des installations scientifiques et des colonies indépendantes.",
  },
} as const;





export const travelDurations = {
  mercury: {
    venus: 35,
    earth: 65,
    moon: 67,
    mars: 95,
    ceres: 145,
    beltInner: 120,
    beltMiddle: 145,
    beltOuter: 170,
  },

  venus: {
    mercury: 35,
    earth: 45,
    moon: 47,
    mars: 85,
    ceres: 125,
    beltInner: 100,
    beltMiddle: 125,
    beltOuter: 150,
  },

  earth: {
    mercury: 65,
    venus: 45,
    moon: 2,
    mars: 60,
    ceres: 110,
    beltInner: 85,
    beltMiddle: 110,
    beltOuter: 135,
  },

  moon: {
    mercury: 67,
    venus: 47,
    earth: 2,
    mars: 62,
    ceres: 112,
    beltInner: 87,
    beltMiddle: 112,
    beltOuter: 137,
  },

  mars: {
    mercury: 95,
    venus: 85,
    earth: 60,
    moon: 62,
    ceres: 65,
    beltInner: 40,
    beltMiddle: 65,
    beltOuter: 90,
  },

  ceres: {
    mercury: 145,
    venus: 125,
    earth: 110,
    moon: 112,
    mars: 65,
    beltInner: 30,
    beltMiddle: 15,
    beltOuter: 30,
  },

  beltInner: {
    mercury: 120,
    venus: 100,
    earth: 85,
    moon: 87,
    mars: 40,
    ceres: 30,
    beltMiddle: 25,
    beltOuter: 50,
  },

  beltMiddle: {
    mercury: 145,
    venus: 125,
    earth: 110,
    moon: 112,
    mars: 65,
    ceres: 15,
    beltInner: 25,
    beltOuter: 25,
  },

  beltOuter: {
    mercury: 170,
    venus: 150,
    earth: 135,
    moon: 137,
    mars: 90,
    ceres: 30,
    beltInner: 50,
    beltMiddle: 25,
  },
} as const;


export type LocationId = keyof typeof locations;

export const sectorNames: Record<number, string> = {
  1: "Planètes intérieures",
  2: "Ceinture d'astéroïdes",
  3: "Jupiter et Saturne",
  4: "Système solaire externe",
};
