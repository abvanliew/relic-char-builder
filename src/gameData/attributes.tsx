import { nanoid } from 'nanoid';
import GameLibrary from 'gameData/library';

export const enum AttribType {
  Abilities = 0,
  Defenses
}

export interface AttribDef {
  id: string;
  name: string;
  type: AttribType;
}

export interface AttribValues {
  [key: string]: number;
}

export function AttribDefs(): Array<AttribDef> {
  return [
    { id: nanoid(), name: "Physique", type: AttribType.Abilities },
    { id: nanoid(), name: "Warfare", type: AttribType.Abilities },
    { id: nanoid(), name: "Willpower", type: AttribType.Abilities },
    { id: nanoid(), name: "Manipulation", type: AttribType.Abilities },
    { id: nanoid(), name: "Dodge", type: AttribType.Defenses },
    { id: nanoid(), name: "Tenacity", type: AttribType.Defenses },
    { id: nanoid(), name: "Fortitude", type: AttribType.Defenses },
    { id: nanoid(), name: "Resolve", type: AttribType.Defenses },
    { id: nanoid(), name: "Insight", type: AttribType.Defenses },
  ]
}

export function AttribGrowth(): Array<number> {
  return [ 
    19, 20, 22, 23, 25, 27, 28, 29, 31, 32, 34, 36, 37, 38, 40, 41, 43, 45 
  ]
}