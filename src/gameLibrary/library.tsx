export const enum AttribType {
  Abilities = 0,
  Defenses
}

export interface AttribDef {
  id: string;
  name: string;
  type: AttribType;
}

interface GameLibrary {
  minRanks: number;
  maxRanks: number;
  startingAttributes: number;
  attributes: Array<AttribDef>;
}

export default GameLibrary;