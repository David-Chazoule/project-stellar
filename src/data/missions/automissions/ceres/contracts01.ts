import type { AutoMission } from "@/types/autoMissions";

export const ceresContracts01: AutoMission[] = [
  {
    id: "auto-ceres-cargo-audit",
    locationId: "ceres",
    sectorId: 2,
    repeatable: true,
    duration: 2,
    minReputation: 0,
    resolver: { type: "aptitudeAverage" },

    card: {
      title: "Audit d'un cargo commercial",
      shortDescription: "Contrôle technique d'un cargo avant son départ.",
      location: "Cérès - Port commercial principal",
      reward: 3200,
    },

    setup: {
      briefing: `Un transporteur indépendant prépare le départ
        d'un cargo à destination des colonies extérieures.
        Avant d'autoriser le chargement définitif, la compagnie
        souhaite faire vérifier les systèmes de propulsion,
        de navigation et de sécurité du bâtiment.`,
      requiredCrew: [
        { aptitude: "engineer", count: 1 },
        { aptitude: "pilot", count: 1 },
      ],
    },

    progression: {
      text: `Votre équipe rejoint le cargo, amarré dans l'un
        des immenses terminaux commerciaux de Cérès.
        Pendant que les dockers poursuivent leurs opérations,
        vos spécialistes examinent les systèmes techniques
        et consultent les rapports de maintenance.`,
    },

    results: {
      criticalFailure: {
        title: "Audit désastreux",
        text: `Plusieurs anomalies importantes échappent
          à votre inspection. Une équipe portuaire découvre
          les problèmes lors d'un contrôle supplémentaire.
          Votre réputation auprès du transporteur en souffre.`,
        effects: {
          credits: 3200,
          reputation: -5,
          moral: -4,
          fatigue: 10,
        },
      },

      failure: {
        title: "Audit incomplet",
        text: `Votre équipe ne parvient pas à examiner
          correctement l'ensemble des équipements.
          Le transporteur doit prolonger ses vérifications,
          ce qui retarde légèrement le départ.`,
        effects: {
          credits: 3200,
          reputation: -2,
          moral: -2,
          fatigue: 8,
        },
      },

      success: {
        title: "Cargo prêt au départ",
        text: `L'inspection se déroule sans incident majeur.
          Quelques ajustements sont recommandés et le cargo
          reçoit l'autorisation de poursuivre ses préparatifs.`,
        effects: {
          credits: 3200,
          reputation: 2,
          moral: 2,
          fatigue: 5,
        },
      },

      criticalSuccess: {
        title: "Audit remarquable",
        text: `Votre équipe repère une anomalie discrète
          qui aurait pu compromettre le prochain voyage.
          Le transporteur apprécie particulièrement
          votre sérieux et votre efficacité.`,
        effects: {
          credits: 3200,
          reputation: 4,
          moral: 4,
          fatigue: 4,
        },
      },
    },
  },

  {
    id: "auto-ceres-warehouse-security",
    locationId: "ceres",
    sectorId: 2,
    repeatable: true,
    duration: 3,
    minReputation: 0,
    resolver: { type: "aptitudeAverage" },

    card: {
      title: "Surveillance d'un entrepôt portuaire",
      shortDescription:
        "Mission de surveillance temporaire dans une zone commerciale de Cérès.",
      location: "Cérès - Secteur portuaire 7",
      reward: 3500,
    },

    setup: {
      briefing: `Une entreprise de logistique recherche du personnel
      pour surveiller un entrepôt contenant des équipements
      électroniques de grande valeur.
      Plusieurs vols ont récemment été signalés dans le secteur.
      Votre équipe devra assurer les contrôles d'accès
      et surveiller les mouvements de marchandises.`,
      requiredCrew: [{ aptitude: "operative", count: 2 }],
    },

    progression: {
      text: `Votre équipe prend position dans l'entrepôt.
      Les journées alternent entre rondes de surveillance,
      contrôles d'identité et vérifications des cargaisons.
      Le trafic portuaire est particulièrement dense
      et de nombreux employés circulent dans les installations.`,
    },

    results: {
      criticalFailure: {
        title: "Echec critique",
        text: `Des marchandises disparaissent pendant votre service.
        L'enquête interne met en évidence plusieurs failles
        dans la surveillance. L'entreprise exprime
        son mécontentement et votre réputation est affectée.`,
        effects: {
          credits: 3500,
          reputation: -5,
          moral: -5,
          fatigue: 12,
        },
      },

      failure: {
        title: "Echec",
        text: `Plusieurs incidents mineurs perturbent la mission.
        Votre équipe parvient à terminer son contrat,
        mais les responsables estiment que les procédures
        de sécurité n'ont pas été correctement respectées.`,
        effects: {
          credits: 3500,
          reputation: -2,
          moral: -2,
          fatigue: 10,
        },
      },

      success: {
        title: "Réussite",
        text: `La surveillance se déroule correctement.
        Aucun incident important n'est signalé
        et l'entreprise remercie votre équipage
        pour son travail.`,
        effects: {
          credits: 3500,
          reputation: 2,
          moral: 2,
          fatigue: 7,
        },
      },

      criticalSuccess: {
        title: "Réussite critique",
        text: `Votre équipe repère une tentative de vol
        et intervient avant la disparition des marchandises.
        Les responsables de l'entrepôt félicitent
        votre équipage pour sa vigilance et son efficacité.`,
        effects: {
          credits: 3500,
          reputation: 5,
          moral: 4,
          fatigue: 6,
        },
      },
    },
  },
];
