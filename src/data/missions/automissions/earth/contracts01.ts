import type { AutoMission } from "@/types/autoMissions";

export const earthContracts01: AutoMission[] = [
  {
    id: "auto-paris-conference",
    locationId: "earth",
    sectorId: 1,
    repeatable: true,
    duration: 1,
    minReputation: 0,
    resolver: { type: "aptitudeAverage" },

    card: {
      title: "Conférence scientifique à Paris",
      shortDescription: "Invitation pour une conférence scientifique à Paris",
      location: "Terre - France - Paris",
      reward: 2500,
    },

    setup: {
      briefing: `L’équipage est invité à participer à une conférence à Paris consacrée aux effets psychologiques de la vie prolongée dans l’espace,
        notamment la gestion de l’isolement, de la promiscuité et du confinement à bord des vaisseaux ou des stations spatiales.
        Les membres envoyés représentent l’équipage et interviennent devant le public pour partager leur expérience de la vie dans l’espace.`,
      requiredCrew: [
        { aptitude: "scientist", count: 1 },
        { aptitude: "liaisonOfficer", count: 1 },
      ],
    },

    progression: {
      text: "deroulement de la mission",
    },

    results: {
      criticalFailure: {
        title: "Échec critique",
        text: "",
        effects: {
          credits: 2500,
          reputation: -5,
          moral: -4,
          fatigue: 4,
        },
      },
      failure: {
        title: "Échec",
        text: "",
        effects: {
          credits: 2500,
          reputation: -3,
          moral: -2,
          fatigue: 4,
        },
      },
      success: {
        title: "Réussite",
        text: "",
        effects: {
          credits: 2500,
          reputation: 3,
          moral: 2,
          fatigue: 2,
        },
      },
      criticalSuccess: {
        title: "Réussite critique",
        text: "",
        effects: {
          credits: 2500,
          reputation: 5,
          moral: 3,
          fatigue: 2,
        },
      },
    },
  },
  {
    id: "auto-houston-test",
    locationId: "earth",
    sectorId: 1,
    repeatable: true,
    duration: 2,
    minReputation: 0,
    resolver: { type: "aptitudeAverage" },

    card: {
      title: "Essai de combinaison spatiale",
      shortDescription: "Invitation pour une conférence scientifique à Paris",
      location: "Terre - France - Paris",
      reward: 3500,
    },

    setup: {
      briefing: `Houston, États-Unis. Un fabricant recherche des professionnels pour tester une nouvelle combinaison en conditions simulées.`,
      requiredCrew: [
        { aptitude: "pilot", count: 1 },
        { aptitude: "engineer", count: 1 },
      ],
    },

    progression: {
      text: "deroulement de la mission",
    },

    results: {
      criticalFailure: {
        title: "Échec critique",
        text: "",
        effects: {
          credits: 3500,
          reputation: -5,
          moral: -4,
          fatigue: 4,
        },
      },
      failure: {
        title: "Échec",
        text: "",
        effects: {
          credits: 3500,
          reputation: -3,
          moral: -2,
          fatigue: 4,
        },
      },
      success: {
        title: "Réussite",
        text: "",
        effects: {
          credits: 3500,
          reputation: 3,
          moral: 2,
          fatigue: 2,
        },
      },
      criticalSuccess: {
        title: "Réussite critique",
        text: "",
        effects: {
          credits: 3500,
          reputation: 5,
          moral: 3,
          fatigue: 2,
        },
      },
    },
  },
];
