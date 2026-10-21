import type { Skills } from "@/types/character";
import type { Specialty } from "@/types/character";

export const specialtySkillMap: Record<Specialty["name"], (keyof Skills)[]> = {
  pilot: ["agility", "perception", "composure", "instinct", "intelligence"],

  engineer: ["intelligence", "perception", "composure", "instinct"],

  medic: ["intelligence", "perception", "composure", "instinct", "social"],

  scientist: ["intelligence", "perception", "composure", "instinct"],

  operative: [
    "physical",
    "agility",
    "perception",
    "composure",
    "instinct",
    "stealth",
  ],

  liaisonOfficer: [
    "leadership",
    "charisma",
    "social",
    "composure",
    "instinct",
    "seduction",
  ],
};
