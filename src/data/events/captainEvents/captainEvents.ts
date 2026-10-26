import type { captainEvents } from "@/types/captainEvent";

export const soloCaptainEvents: captainEvents[] = [
  {
    id: "solo-captain-001",
    image: "",
    intro:
      "Vous tournez dans votre lit depuis plusieurs heures. Impossible de trouver le sommeil. Le vaisseau est silencieux, et la plupart des membres de l'équipage dorment.",
    participantCount: 0,
    choices: [
      {
        id: "choice-1",
        label: "Faire du sport",
        text: "Vous décidez d'aller vous fatiguer dans la salle de musculation.",
        result: {
          img: "",
          text: "Vous terminez une séance intensive et retournez dormir.",
          effects: { fatigue: 5 },
        },
      },
      {
        id: "choice-2",
        label: "Se détendre",
        text: "Vous rejoignez la salle commune pour regarder un film.",
        result: {
          img: "",
          text: "Vous finissez par vous endormir devant l'écran.",
          effects: { moral: 5 },
        },
      },
      {
        id: "choice-3",
        label: "Travailler",
        text: "",
        result: {
          img: "",
          text: "Vous retournez dans votre bureau pour consulter les prochains contrats.",
          effects: { fatigue: 10 },
        },
      },
    ],
  },
  {
    id: "solo-captain-002",
    image: "",
    intro: `Vous êtes dans votre chambre, à contempler l'immensité de l'espace par la fenêtre. Vous êtes soudainement envahi par un sentiment de nostalgie…

Votre enfance, votre adolescence, vos premiers pas dans la vie adulte, vos sorties entre amis, vos jeux du dimanche après-midi, votre famille… Tout vous revient subitement en mémoire.

Vous ressentez le besoin d'apaiser cette nostalgie.`,
    participantCount: 0,
    choices: [
      {
        id: "choice-1",
        label: "Regarder de vieilles photos",
        text: "Vous décidez de consulter les photos de cette merveilleuse époque, conservées sur votre cloud personnel.",
        result: {
          img: "",
          text: `Vous passez un bon moment à regarder les photos une par une, en vous remémorant d'innombrables souvenirs. 
          Certains moments de votre vie étaient incroyables, d'autres beaucoup moins. Vous oscillez entre tristesse et joie.`,
          effects: { moral: 2, fatigue: 1 },
        },
      },
      {
        id: "choice-2",
        label: "Casque d'ultra-réalité virtuelle",
        text: "Vous enfilez votre casque d'ultra-réalité virtuelle pour revivre certains de ces moments, recréés par une intelligence artificielle.",
        result: {
          img: "",
          text: `Vous revivez plusieurs moments particulièrement agréables de votre enfance : ces jeux dans la rue avec les copains, ces instants de tendresse avec vos parents… 
          Tout semble presque réel, mais certains détails échappent à l'IA, rendant ces souvenirs artificiels parfois étranges.`,
          effects: { fatigue: 5, moral: 4 },
        },
      },
      {
        id: "choice-3",
        label: "Réseaux sociaux",
        text: `Vous décidez de publier une photo de vous enfant sur les réseaux sociaux.`,
        result: {
          img: "",
          text: `Vous publiez une photo de vous enfant, accompagnée d'une légende évoquant le bonheur de la vie d'avant. 
          Vous espérez attirer un peu d'attention et apaiser ce sentiment de nostalgie.`,
          effects: { moral: -1, fatigue: 1 },
        },
      },
    ],
  },
  {
    id: "solo-captain-003",
    image: "",
    intro: `« Bulubulu !! Bululu !!! »

Ce petit son aigu est le cri de votre animal virtuel, un compagnon de route qui vit dans votre chambre et vous aide à garder le moral.
Cette drôle de créature, hybride entre le singe et le chat, est projetée sous forme d'hologramme par un petit appareil en forme de cœur.
Elle peut parfois se montrer particulièrement envahissante.
Alors que vous travaillez sur l'organisation de votre prochaine mission, votre petit compagnon se met à pousser des cris infernaux et à sauter dans tous les sens.`,
    participantCount: 0,
    choices: [
      {
        id: "choice-1",
        label: "Chercher la raison",
        text: "Ce comportement n'est pas normal. Il doit bien y avoir une raison à cette agitation soudaine.",
        result: {
          img: "",
          text: `Vous décidez d'examiner les paramètres de votre petit compagnon pendant que ce dernier saute du lit au bureau, puis se suspend au plafond en poussant des cris agaçants.
               Après plusieurs minutes de recherche, vous découvrez une notification du fabricant :
      « Félicitations ! Votre compagnon vient d'entrer dans sa phase d'adolescence virtuelle. Durant cette période, il pourra présenter des comportements imprévisibles, des sautes d'humeur et une tendance excessive à réclamer de l'attention.
Cette phase est parfaitement normale et devrait durer entre trois et six semaines. »
Vous décidez de jouer un peu avec lui dans l'espoir de le fatiguer.`,
          effects: { moral: 1, fatigue: 2 },
        },
      },
      {
        id: "choice-2",
        label: "Le nourrir",
        text: "Vous décidez de lui donner du « snoufguougnou », sa nourriture virtuelle préférée. Cela devrait le calmer.",
        result: {
          img: "",
          text: `Vous versez du « snoufguougnou » virtuel dans un bol. Votre petite créature se jette dessus, mange quelques granulés, puis finit par les jeter à travers la pièce.
Elle vous lance un regard insolent avant de recommencer à sauter partout.
Vous préférez retourner à votre travail en essayant tant bien que mal d'ignorer ses cris insupportables.`,
          effects: { moral: -1, fatigue: 4 },
        },
      },
      {
        id: "choice-3",
        label: "Le débrancher",
        text: `Vous vous approchez du modulateur qui donne vie à votre petit compagnon et décidez de l'éteindre.
Au moment où vous posez votre doigt sur le bouton OFF, le silence envahit la pièce.
Vous poussez un soupir de soulagement et retournez à votre travail.
Pourtant, vous vous sentez légèrement triste. Vous savez que votre compagnon n'est qu'une créature virtuelle, mais vous avez l'impression d'avoir été injuste envers lui.`,
        result: {
          img: "",
          text: "Vous passez la nuit sur les dossiers.",
          effects: { moral: -2, fatigue: 1 },
        },
      },
    ],
  },
];

export const crewCaptainEvents: captainEvents[] = [
  {
    id: "crew-captain-001",
    image: "",
    intro: `La journée a été éprouvante. Après avoir dégusté un repas préparé par {0}, vous vous lancez dans une partie d'échecs avec {1}.
    Bien installé dans votre fauteuil, vous êtes concentré sur la partie depuis plusieurs heures et souhaitez absolument remporter la victoire.
D'un mouvement de doigt dans le vide, vous commandez vos pièces blanches, qui se déplacent automatiquement sur l'échiquier holographique.
Vous sentez qu'il ne vous reste qu'un dernier coup à jouer pour remporter la victoire.

C'est à vous de jouer.`,
    participantCount: 2,
    choices: [
      {
        id: "choice-1",
        label: "Déplacer votre dame",
        text: "Déplacez votre dame de f6 vers f8.",
        result: {
          img: "",
          text: `Résultat du choix 1 — Victoire
D'un mouvement de votre index, votre dame se déplace automatiquement de f6 à f8.
Échec et mat ! La dame attaque le roi noir en h8, qui n'a aucune échappatoire.
Vous remportez la victoire !
Vous poussez un petit cri de joie et serrez la main de {1}, visiblement déçu d'avoir perdu.
Vous vous levez de votre fauteuil et regagnez votre chambre, satisfait de cette partie d'échecs.`,
          effects: { moral: 4, fatigue: 4 },
        },
      },
      {
        id: "choice-2",
        label: "Avancer votre pion",
        text: "Avancez votre pion de a2 vers a3.",
        result: {
          img: "",
          text: `D'un mouvement de votre index, votre pion avance automatiquement de a2 vers a3.
Mauvaise décision ! {1} déplace sa dame de b4 vers e1, vous mettant en échec. Vous tentez de vous défendre en repliant votre dame en f1, mais votre adversaire la capture. Échec et mat !
Vous posez les mains sur votre visage et lâchez un « Oh putain ! ».
{1} exulte de joie, se lève et se tapote le crâne avec son index, se vantant de son intelligence.
Vous quittez votre fauteuil et décidez de retourner dans votre chambre, satisfait de cette partie d'échecs malgré la défaite.`,
          effects: { moral: 2, fatigue: 4 },
        },
      },
      {
        id: "choice-3",
        label: "Replier votre dame",
        text: "Repliez votre dame de f6 vers f1.",
        result: {
          img: "",
          text: `D'un mouvement de votre index, votre dame se replie automatiquement de f6 vers f1.
        Vous protégez votre première rangée contre la menace de la dame adverse. La partie continue, sans vainqueur immédiat.
        {1} pousse un petit grognement.
       Vous restez concentré, bien décidé à gagner cette partie.`,
          effects: { moral: 2, fatigue: 6 },
        },
      },
    ],
  },

  {
    id: "crew-captain-002",
    image: "",
    intro: `Alors que vous marchez dans les couloirs de votre vaisseau, vous croisez {0} et {1} en plein débat devant la salle de sport, au lieu d'être à leur poste.

Vous vous arrêtez pour écouter cette conversation particulièrement animée.

« Attends, mais mec, comment tu peux penser que G-Cola, c'est dégueulasse ? C'est le cola original, putain ! » s'exclame {0} en agitant les bras.

« Mais tu racontes quoi ? Cola-Stars, c'est tellement meilleur ! Le goût est plus explosif, plus sucré, et puis cette petite pointe d'agrumes citronnés ! Mec, G-Cola, c'est pour les lopettes ! » réplique sèchement {1}.

« Capitaine ! Dites-lui que G-Cola est la meilleure boisson ! » lance {0} en se tournant vers vous.`,
    participantCount: 2,
    choices: [
      {
        id: "choice-1",
        label: "G-Cola",
        text: `Vous choisissez de prendre parti pour G-Cola.`,
        result: {
          img: "",
          text: `« Je préfère G-Cola, pour le coup. C'est moins agressif. Mais le vrai problème, ce n'est pas ce que je préfère. Le problème, c'est que vous êtes là à débattre de deux putains de sodas au lieu d'être à vos postes !

Alors tirez-vous de là ! Au boulot ! »

{0} et {1} repartent en grognant.`,
          effects: { moral: 0, fatigue: 0 },
        },
      },
      {
        id: "choice-2",
        label: "Cola-Stars",
        text: `Vous choisissez de prendre parti pour Cola-Stars.`,
        result: {
          img: "",
          text: `« Je préfère largement Cola-Stars, mais mon avis n'est pas le plus important. Le plus important, c'est que vous retourniez à vos postes tout de suite !

On a du boulot et pas de temps à perdre avec des débats futiles ! »

{0} et {1} repartent en grognant.`,
          effects: { moral: 0, fatigue: 0 },
        },
      },
      {
        id: "choice-3",
        label: "Aucun des deux",
        text: `Vous décidez de ne soutenir aucune des deux boissons.`,
        result: {
          img: "",
          text: `« Ni l'un ni l'autre ! Autant boire de l'eau de refroidissement d'un réacteur nucléaire !

Si vous aimez boire des produits chimiques, c'est votre choix, mais l'assurance de ma compagnie ne vous couvrira pas le cul pour vos futurs cancers !

Et puis allez bosser, bordel ! On a beaucoup de boulot ! »

{0} et {1} repartent, visiblement très agacés.`,
          effects: { moral: 0, fatigue: 0 },
        },
      },
    ],
  },
  {
    id: "crew-captain-003",
    image: "",
    intro: `Alors que vous vous dirigez vers la salle commune, vous entendez des claquements réguliers derrière la porte de la salle des drones.

Le bruit est fort, répétitif et particulièrement insistant. Votre esprit quelque peu tordu vous laisse imaginer que deux personnes s'adonnent à des jeux pour adultes.`,
    participantCount: 1,
    choices: [
      {
        id: "choice-1",
        label: "Continuer votre chemin",
        text: `Vous préférez ne pas savoir ce qui se passe dans cette pièce.`,
        result: {
          img: "",
          text: `Vous continuez votre chemin sans vous soucier davantage du bruit.

Mais votre imagination vous travaille. Le soir, dans la salle commune, vous observez tous les membres de votre équipage avec suspicion.

Qui sont donc les deux gros dégueulasses qui s'amusaient dans la salle des drones ?`,
          effects: { moral: -1, fatigue: 0 },
        },
      },
      {
        id: "choice-2",
        label: "Ouvrir la porte",
        text: `Vous décidez d'ouvrir la porte pour découvrir l'origine de ces bruits suspects.`,
        result: {
          img: "",
          text: `Vous ouvrez la porte, redoutant de tomber sur quelque chose de particulièrement répugnant.

Mais finalement, vous découvrez {0}, qui essaie désespérément de faire glisser une lourde caisse sur une autre, à grands coups d'épaule et de reins.

« Tu vas rentrer, bordel !!! » hurle {0}, au bord du désespoir.

Vous décidez de lui donner un coup de main pour déplacer cette caisse qui, effectivement, est particulièrement lourde.`,
          effects: { moral: 1, fatigue: 2 },
        },
      },
    ],
  },
];

export const CaptainEvents = [...crewCaptainEvents, ...soloCaptainEvents];
