import { AutoMission } from "@/types/autoMissions";

export const autoMissions: AutoMission[] = [
  {
    id: "auto-paris-conference",
    repeatable: true,
    duration: 1,
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
        },
      },
      failure: {
        title: "Échec",
        text: "",
        effects: {
          credits: 2500,
          reputation: -3,
          moral: -2,
        },
      },
      success: {
        title: "Réussite",
        text: "",
        effects: {
          credits: 2500,
          reputation: 3,
          moral: 2,
        },
      },
      criticalSuccess: {
        title: "Réussite critique",
        text: "",
        effects: {
          credits: 2500,
          reputation: 5,
          moral: 3,
        },
      },
    },
  },

  {
    id: "auto-mars-formation",
    repeatable: false,
    duration: 28,
    resolver: { type: "aptitudeAverage" },

    card: {
      title: "Formation à la sécurité dans l'espace",
      shortDescription:
        "Former les nouvelles recrues d'une société privée martienne à la sécurité dans des environnements spatiaux",
      location: "Mars - secteur X",
      reward: 10000,
    },

    setup: {
      briefing: `Une société privée de sécurité martienne, qui cherche à développer ses activités dans les colonies, 
      stations et vaisseaux du système solaire, engage temporairement des membres expérimentés de l’équipage.
      Leur rôle est de former ses nouvelles recrues aux situations de sécurité propres aux environnements spatiaux : combat rapproché, 
      intervention dans des espaces confinés, protection de personnel, gestion d’incidents à bord et procédures d’urgence.
`,
      requiredCrew: [{ aptitude: "operative", count: 3 }],
    },

    progression: {
      text: "deroulement de la mission",
    },

    results: {
      criticalFailure: {
        title: "Échec critique",
        text: "",
        effects: {
          credits: 4000,
          reputation: -5,
          moral: -4,
          fatigue: 5,
        },
      },
      failure: {
        title: "Échec",
        text: "",
        effects: {
          credits: 5000,
          reputation: -3,
          fatigue: 5,
        },
      },
      success: {
        title: "Réussite",
        text: "",
        effects: {
          credits: 10000,
          reputation: 3,
          moral: 2,
          fatigue: 5,
        },
      },
      criticalSuccess: {
        title: "Réussite critique",
        text: "",
        effects: {
          credits: 10000,
          reputation: 5,
          moral: 3,
          fatigue: 5,
        },
      },
    },
  },

  {
    id: "auto-mars-escort",
    repeatable: false,
    duration: 200,
    resolver: { type: "aptitudeAverage" },

    card: {
      title: "Escorter un groupe de voyageurs",
      shortDescription:
        "Escorter un groupe de voyageurs fortunés depuis Mars pour rejoindre Cérès",
      location: "Mars - station orbitale",
      reward: 11000,
    },

    setup: {
      briefing: `Un groupe de voyageurs fortunés quitte Mars pour rejoindre Cérès. 
                 Le trajet les inquiète, notamment à cause de la réputation de certaines zones proches de la Ceinture et du risque de piraterie.
                 Ils engagent donc l’équipage pour assurer leur protection durant le voyage.
                Cependant, ils ne veulent pas voyager avec un bâtiment de sécurité constamment collé à leur vaisseau. 
                Ils souhaitent profiter du trajet tranquillement et conserver une certaine intimité.
                Le vaisseau du joueur doit donc les escorter à distance, rester suffisamment loin pour ne pas les gêner, 
                tout en étant capable d’intervenir rapidement en cas de problème.

`,
      requiredCrew: [
        { aptitude: "pilot", count: 1 },
        { aptitude: "operative", count: 1 },
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
          credits: 0,
          reputation: -6,
          moral: -5,
          fatigue: 6,
        },
      },
      failure: {
        title: "Échec",
        text: "",
        effects: {
          credits: 5000,
          reputation: -4,
          fatigue: 6,
        },
      },
      success: {
        title: "Réussite",
        text: "",
        effects: {
          credits: 11000,
          reputation: 3,
          moral: 2,
          fatigue: 6,
        },
      },
      criticalSuccess: {
        title: "Réussite critique",
        text: "",
        effects: {
          credits: 11000,
          reputation: 5,
          moral: 3,
          fatigue: 6,
        },
      },
    },
  },
];
