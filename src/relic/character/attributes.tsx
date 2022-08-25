export const enum AttributeType {
  Abilities = 0,
  Defenses
}

export interface Attribute {
  id: string
  type: AttributeType
}

export type Attributes = Array<Attribute>

export function AttribGrowth(): Array<number> {
  return [ 
    19, 20, 22, 23, 25, 27, 28, 29, 31, 32, 34, 36, 37, 38, 40, 41, 43, 45 
  ]
}