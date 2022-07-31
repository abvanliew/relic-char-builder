import { nanoid } from 'nanoid';

export const enum AttribType {
  Abilities = 0,
  Defenses
}

export interface Character {
  id: string;
  name: string;
  race: string;
  attributes: Array<number>;
}

export function NewCharacter( attribCount: number ): Character {
  return {
    id: nanoid(),
    name: "",
    race: "",
    attributes: Array(attribCount).fill(0)
  };
}