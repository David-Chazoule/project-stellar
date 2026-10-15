import { SpeechApproach } from "@/types/CaptainSpeech";
import { SpeechApproachData } from "@/types/CaptainSpeech";

export const captainSpeechData: Record<SpeechApproach, SpeechApproachData> = {
  professional: {
    label: "Rester professionnel",

    prepText:
      "J’opte pour une approche professionnelle. Le travail à bord d’un vaisseau n’est pas quelque chose à prendre à la légère.",

    choiceIntro:
      "Vous pénétrez dans la salle de briefing. Tous les regards se tournent vers vous. Vous avancez jusqu’à la tête de table avec une assurance maîtrisée. Votre posture est droite, votre attitude ferme. Vous prenez quelques secondes pour observer votre équipage, puis vous vous apprêtez à prendre la parole.",

    choices: [
      {
        id: "professional-reassuring",
        text: "Je ne vais pas vous faire un grand discours. Vous avez tous été choisis pour une raison. Je compte sur vos compétences, et vous pouvez compter sur moi pour faire mon travail.",
        result: {
          text: "L’équipe accueille votre présentation de manière positive. {0} semble rassuré par l’image professionnelle que vous dégagez. {1} et {2} échangent un regard confiant, comme convaincus par la route qu’ils s’apprêtent à prendre avec vous. {3}, lui, semble déjà prêt à se mettre au travail. Vous invitez ensuite chacun à rejoindre son poste respectif.",
          cohesion: 1,
        },
      },

      {
        id: "professional-authoritarian",
        text: "À partir d’aujourd’hui, nous fonctionnons comme un seul équipage. Chacun connaît son rôle, chacun assume ses responsabilités. À bord, la discipline et la communication ne sont pas négociables.",
        result: {
          text: "Dans l’ensemble, l’équipe réagit plutôt positivement à votre approche, même si certains membres, moins à l’aise avec l’autorité, semblent légèrement agacés. {0} fait une petite moue, tandis que {1} paraît franchement contrarié. {2} vient vous saluer personnellement, comme s’il cherchait déjà à gagner vos faveurs. {3} se lève, prêt à se mettre immédiatement au travail. Vous invitez ensuite chacun à rejoindre son poste respectif.",
          cohesion: 1,
        },
      },

      {
        id: "professional-ambitious",
        text: "Nous avons un bon vaisseau, un équipage solide et beaucoup de travail devant nous. Si chacun donne le meilleur de lui-même, je suis convaincu que nous pouvons aller loin. Très loin.",
        result: {
          text: "Votre discours est plutôt bien accueilli par l’équipe. Des sourires apparaissent sur presque tous les visages. {0} et {1} approuvent vos paroles et commencent déjà à en discuter avec enthousiasme. {2} se lève pour venir vous saluer personnellement. {3}, visiblement séduit par votre discours, en rajoute une couche et adresse quelques mots enthousiastes au reste de l’équipage. Vous invitez ensuite chacun à rejoindre son poste respectif.",
          cohesion: 2,
        },
      },
    ],
  },

  casual: {
    label: "Rester décontracté",

    prepText:
      "J’opte pour une approche plus légère et détendue. Je sais qui je suis, ce que je vaux, inutile d’en faire trop.",

    choiceIntro:
      "Vous entrez dans la salle de briefing. Tous les regards sont rivés sur vous. Vous sentez déjà que certains membres de l’équipage essaient de vous analyser. Vous restez pourtant détendu, souriant, sans laisser paraître la moindre pression. Vous vous installez avec naturel et vous vous apprêtez à prendre la parole.",

    choices: [
      {
        id: "casual-pro",
        text: "Je ne vais pas parler trop longtemps, ce n’est pas mon genre. Je sais déjà que je suis entouré de grands professionnels, et je suis certain que nous allons avancer tous ensemble dans la bonne direction.",
        result: {
          text: "Votre approche est plutôt bien accueillie par l’ensemble de l’équipage. {0} et {1}, flattés dans leur ego, semblent déjà prêts à se mettre au travail. {2}, visiblement enthousiaste, frappe deux fois dans ses mains avant de se lever avec énergie. {3} échange quelques mots en riant avec son voisin, puis se lève pour venir vous accueillir chaleureusement. Vous invitez ensuite chacun à rejoindre son poste respectif.",
          cohesion: 1,
        },
      },

      {
        id: "casual-humor",
        text: "Je vois une belle brochette de professionnels dans cette pièce, et je sais déjà qu’ensemble, nous allons trouver les bonnes épices pour goûter à la saveur de la richesse et avoir les narines enivrées par l’odeur du succès. Je suis prêt à cuisiner notre réussite avec vous.",
        result: {
          text: "Quelques rires étouffés s’échappent dans la salle. Les visages se détendent. {0} se demande encore ce que vous avez réellement voulu dire. Il comprend bien qu’il s’agissait d’humour, mais cette longue métaphore le laisse franchement perplexe. {1} et {2} échangent un regard avant d’éclater de rire. {3}, rassuré de découvrir un capitaine capable d’un peu d’autodérision, se dit que les futurs voyages seront peut-être moins pesants qu’il ne l’imaginait. Il vient vous saluer avec le sourire. Vous invitez ensuite chacun à rejoindre son poste respectif.",
          cohesion: 2,
        },
      },

      {
        id: "casual-crazy",
        text: "Je pense que personne n’a envie de m’entendre faire un grand discours pompeux, ennuyeux et pseudo-professionnel. Je préfère apprendre à vous connaître autour d’un verre. Alors allons chercher des bières, et montrez-moi que j’ai fait le bon choix en vous choisissant.",
        result: {
          text: "Votre petit discours fait mouche auprès de l’équipage. {0} lève les bras et lance : « Très bonne idée, allons boire un coup ! » {1} et {2} approuvent avec enthousiasme l’idée de commencer l’aventure autour d’une bière bien fraîche et se lèvent aussitôt. {3} apprécie l’ambiance, mais ressent malgré tout une légère appréhension : il espère que le travail à bord ne se transformera pas en fête permanente. Vous invitez finalement l’équipage à rejoindre la salle de vie afin de partager un verre et de faire plus ample connaissance.",
          cohesion: 2,
          moral: 1,
        },
      },
    ],
  },

  drunk: {
    label: "Boire un verre pour se détendre",

    prepText:
      "Prendre un petit verre pour me détendre avant d’aller à leur rencontre… ou deux. Peut-être trois.",

    choiceIntro:
      "Vous entrez dans la salle de briefing. Malgré votre poker face digne des meilleurs habitués de tables de casino, vous ne savez pas vraiment si vous êtes plus détendu… ou encore plus stressé. Impossible de déterminer si votre langage corporel exprime de l’assurance ou, au contraire, une légère panique. Boire était peut-être une bonne idée. Ou une très mauvaise. Quoi qu’il en soit, tous les regards sont désormais tournés vers vous. Il est temps de prendre la parole.",

    choices: [
      {
        id: "drunk-stressed",
        text: "Bon… bah… bonjour à tous. Je suis le capitaine… enfin, je pense que vous le saviez déjà. On ne sait jamais, peut-être que vous aviez oublié… enfin bref. J’espère qu’on fera du bon boulot ensemble. Enfin, moi, je suis sûr de mes compétences… je compte sur vous pour me montrer les vôtres.",
        result: {
          text: "L’accueil est mitigé. Certains prennent votre discours à la légère, tandis que d’autres semblent un peu plus irrités. {0} comprend rapidement que vous avez bu. Il l’accepte, mais s’inquiète à l’idée que ce genre de situation puisse se reproduire. {1}, lui, prend la scène à la rigolade. Il n’y voit rien de dramatique et se dit que le voyage risque au moins d’être haut en couleur. {2} n’est pas particulièrement choqué non plus : il connaît les clichés sur les capitaines amateurs d’alcool. Après tout, dans la Marine, ce n’est pas vraiment nouveau… alors pourquoi pas dans l’espace ? {3}, en revanche, n’est pas totalement convaincu. Il a bien perçu le stress que vous tentiez de dissimuler derrière quelques verres. Vous invitez timidement l’équipage à rejoindre son poste respectif.",
          cohesion: -1,
        },
      },

      {
        id: "drunk-confident",
        text: "Faire un long discours m’emmerde fortement… et je suis sûr que vous aussi. Alors sautons cette étape chiante pour tout le monde. On va se mettre au boulot ensemble et aller caresser les sommets. L’Everest, Olympus Mons… aucune montagne, aucun système, aucun astéroïde ne nous résistera.",
        result: {
          text: "Votre manière de communiquer, directe et sans détour, est plutôt bien accueillie par l’ensemble de l’équipage. {0} n’aime pas s’embarrasser d’une autorité trop rigide ou pince-sans-rire. {1}, de son côté, déteste tout le cinéma et la fausse politesse qui accompagnent parfois les figures d’autorité. Il apprécie les gens francs et directs, et semble plutôt séduit par votre discours. {2} approuve également, même s’il fait discrètement remarquer à {3} qu’il semblerait que vous ayez un peu bu. Vous invitez ensuite tout l’équipage à rejoindre son poste respectif.",
          cohesion: 1,
        },
      },

      {
        id: "drunk-wasted",
        text: "Bonjour à tous… Oula. Je pensais avoir recruté seulement sept membres, j’en vois quatorze. On réglera ça plus tard. Je n’ai pas grand-chose à vous raconter, à part que j’espère qu’on finira tous riches sur Vénus, entourés de jolies Vénusiennes, à s’enivrer d’hydromel et de vin… ahah. Bref… je crois que tout grand équipage a une devise. Voilà la mienne : « Vers l’infini et l’au-delà. »",
        result: {
          text: "Un silence étrange plane dans la pièce. Certains regards deviennent fuyants, tandis que d’autres membres se retiennent difficilement de rire. {0} comprend immédiatement que vous êtes bourré comme un coin. Il se dit que le voyage risque d’être particulièrement tumultueux. {1} tente de retenir son rire, puis se rappelle que l’idée de s’envoyer en l’air avec des Vénusiennes lui a déjà traversé l’esprit plus d’une fois. Il se dit finalement qu’il risque de bien se marrer avec vous. {2} sourit, malgré un léger malaise, et semble avoir apprécié cette référence aussi ridicule qu’inattendue à un vieux film d’animation du XXe siècle. {3}, en revanche, n’est franchement pas enthousiaste à l’idée de travailler avec vous. Il espère que cette présentation est seulement une exception due au stress et que la suite du voyage sera nettement plus professionnelle. Vous invitez finalement, en bégayant légèrement, votre équipage à rejoindre son poste respectif.",
          cohesion: -2,
          moral: 1,
        },
      },
    ],
  },
};
