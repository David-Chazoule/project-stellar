import type { AutoMission } from "@/types/autoMissions";

export const moonContracts01: AutoMission[] = [
  {
    id: "auto-moon-tunnel-inspection",
    locationId: "moon",
    sectorId: 1,
    repeatable: true,
    duration: 2,
    minReputation: 0,
    resolver: { type: "aptitudeAverage" },

    card: {
      title: "Inspection d'une galerie souterraine",
      shortDescription:
        "Inspection des installations techniques d'une colonie lunaire.",
      location: "Lune - Colonie Méliès",
      reward: 4000,
    },

    setup: {
      briefing: `Une colonie lunaire signale plusieurs anomalies dans
        les systèmes de ventilation d'une galerie souterraine.
        Les autorités locales recherchent une équipe capable d'inspecter
        les installations, d'identifier les risques et de sécuriser
        les zones concernées.`,
      requiredCrew: [
        { aptitude: "engineer", count: 1 },
        { aptitude: "operative", count: 1 },
      ],
    },

    progression: {
      text: `Votre équipe rejoint les niveaux techniques de la colonie.
        Les couloirs sont étroits, les équipements vieillissants et
        plusieurs secteurs ont été temporairement évacués.
        L'inspection commence sous la supervision du personnel local.`,
    },

    results: {
      criticalFailure: {
        title: "Inspection catastrophique",
        text: `Une mauvaise manipulation provoque une nouvelle panne.
          Les techniciens locaux doivent intervenir en urgence.
          Votre équipe quitte les installations sous les critiques
          des responsables de la colonie.`,
        effects: {
          credits: 4000,
          reputation: -5,
          moral: -5,
          fatigue: 12,
        },
      },

      failure: {
        title: "Inspection peu concluante",
        text: `Votre équipe termine son inspection sans parvenir
          à identifier précisément l'origine des anomalies.
          Les autorités devront poursuivre les recherches.`,
        effects: {
          credits: 4000,
          reputation: -2,
          moral: -2,
          fatigue: 8,
        },
      },

      success: {
        title: "Inspection réussie",
        text: `Les anomalies sont identifiées et les installations
          peuvent être remises en service. Les responsables
          de la colonie remercient votre équipage.`,
        effects: {
          credits: 4000,
          reputation: 2,
          moral: 2,
          fatigue: 6,
        },
      },

      criticalSuccess: {
        title: "Intervention exemplaire",
        text: `Votre équipe identifie rapidement l'origine du problème
          et découvre également une défaillance jusque-là passée
          inaperçue. Les responsables saluent votre efficacité.`,
        effects: {
          credits: 4000,
          reputation: 4,
          moral: 4,
          fatigue: 4,
        },
      },
    },
  },
  {
    id: "auto-moon-medical-delivery",
    locationId: "moon",
    sectorId: 1,
    repeatable: true,
    duration: 2,
    minReputation: 0,
    resolver: { type: "aptitudeAverage" },

    card: {
      title: "Livraison de matériel médical",
      shortDescription:
        "Transport urgent d'équipements médicaux vers une colonie lunaire isolée.",
      location: "Lune - Colonie Shackleton",
      reward: 2800,
    },

    setup: {
      briefing: `Une petite colonie située près du pôle Sud lunaire
      attend une livraison de matériel médical.
      Le transporteur initial a annulé son intervention et
      les responsables recherchent un équipage disponible.
      La cargaison comprend des équipements fragiles qui
      nécessitent une manipulation soigneuse.`,
      requiredCrew: [
        { aptitude: "pilot", count: 1 },
        { aptitude: "medic", count: 1 },
      ],
    },

    progression: {
      text: `Votre équipe prend en charge plusieurs caisses de
      matériel médical avant de rejoindre la colonie.
      Les équipements doivent être transportés avec précaution.
      À l'arrivée, le personnel médical procède aux vérifications
      pendant que votre équipage supervise le déchargement.`,
    },

    results: {
      criticalFailure: {
        title: "Livraison catastrophique",
        text: `Plusieurs équipements sont endommagés pendant
        le transport. Le personnel médical exprime son
        mécontentement et demande un rapport d'incident.
        Le contrat est payé, mais votre réputation en souffre.`,
        effects: {
          credits: 2800,
          reputation: -5,
          moral: -4,
          fatigue: 9,
        },
      },

      failure: {
        title: "Livraison compliquée",
        text: `La cargaison arrive avec du retard et certains
        équipements nécessitent des vérifications supplémentaires.
        Les responsables acceptent la livraison, sans être
        entièrement satisfaits du service.`,
        effects: {
          credits: 2800,
          reputation: -2,
          moral: -2,
          fatigue: 7,
        },
      },

      success: {
        title: "Livraison effectuée",
        text: `Le matériel arrive en bon état et dans les délais.
        Le personnel médical remercie votre équipage pour
        son professionnalisme.`,
        effects: {
          credits: 2800,
          reputation: 2,
          moral: 2,
          fatigue: 5,
        },
      },

      criticalSuccess: {
        title: "Livraison exemplaire",
        text: `Votre équipe assure un transport particulièrement
        efficace et facilite également l'installation
        des équipements. Les responsables de la colonie
        saluent votre intervention.`,
        effects: {
          credits: 2800,
          reputation: 4,
          moral: 4,
          fatigue: 4,
        },
      },
    },
  },
];
