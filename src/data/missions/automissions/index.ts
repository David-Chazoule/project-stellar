import { earthContracts01 } from "./earth/contracts01";
import { marsContracts01 } from "./mars/contracts01";
import { ceresContracts01 } from "./ceres/contracts01";
import { moonContracts01 } from "./moon/contracts01";
import { AutoMission } from "@/types/autoMissions";


export const autoMissions: AutoMission[]=[
  ...earthContracts01,
  ...marsContracts01,
  ...ceresContracts01,
  ...moonContracts01
]