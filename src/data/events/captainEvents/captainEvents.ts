import type { captainEvents } from "@/types/captainEvent";

export const soloCaptainEvents: captainEvents[] = [
  {
    id: "solo-captain-001",
    intro:
      "Vous tournez dans votre lit depuis plusieurs heures. Impossible de trouver le sommeil. Le vaisseau est silencieux, et la plupart des membres de l'équipage dorment.",
    participantCount: 0,
    choices: [
      {
        id: "choice-1",
        label: "Faire du sport",
        text: "Vous décidez d'aller vous fatiguer dans la salle de musculation.",
        result: {
          text: "Vous terminez une séance intensive et retournez dormir.",
          effects: { fatigue: 5 },
        },
      },
      {
        id: "choice-2",
        label: "Se détendre",
        text: "Vous rejoignez la salle commune pour regarder un film.",
        result: {
          text: "Vous finissez par vous endormir devant l'écran.",
          effects: { moral: 5 },
        },
      },
      {
        id: "choice-3",
        label: "Travailler",
        text: "",
        result: {
          text: "Vous retournez dans votre bureau pour consulter les prochains contrats.",
          effects: { fatigue: 10 },
        },
      },
    ],
  },
  {
    id: "solo-captain-002",
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
          text: `Vous publiez une photo de vous enfant, accompagnée d'une légende évoquant le bonheur de la vie d'avant. 
          Vous espérez attirer un peu d'attention et apaiser ce sentiment de nostalgie.`,
          effects: { moral: -1, fatigue: 1 },
        },
      },
    ],
  },
  {
    id: "solo-captain-003",
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
    intro: ``,
    participantCount: 1,
    choices: [
      {
        id: "choice-1",
        label: "",
        text: "",
        result: {
          text: ``,
          effects: { moral: 0, fatigue: 0 },
        },
      },
      {
        id: "choice-2",
        label: "",
        text: "",
        result: {
          text: ``,
          effects: { moral: 0, fatigue: 0 },
        },
      },
      {
        id: "choice-3",
        label: "",
        text: "",
        result: {
          text: ``,
          effects: { moral: 0, fatigue: 0 },
        },
      },
    ],
  },
  {
    id: "crew-captain-003",
    intro: ``,
    participantCount: 1,
    choices: [
      {
        id: "choice-1",
        label: "",
        text: "",
        result: {
          text: ``,
          effects: { moral: 0, fatigue: 0 },
        },
      },
      {
        id: "choice-2",
        label: "",
        text: "",
        result: {
          text: ``,
          effects: { moral: 0, fatigue: 0 },
        },
      },
      {
        id: "choice-3",
        label: "",
        text: "",
        result: {
          text: ``,
          effects: { moral: 0, fatigue: 0 },
        },
      },
    ],
  },
];

export const CaptainEvents = [...crewCaptainEvents, ...soloCaptainEvents];
