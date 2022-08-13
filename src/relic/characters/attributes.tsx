import { nanoid } from 'nanoid';
import RuleDetail from 'relic/rules';

export const enum AttribType {
  Abilities = 0,
  Defenses
}

export interface AttribDef {
  detail: RuleDetail
  type: AttribType
}

export function AttribDefs(): Map<string, AttribDef> {
  return new Map<string, AttribDef> ( [
    [ nanoid(), { detail: { shortName: "Physique" }, type: AttribType.Abilities } ],
    [ nanoid(), { detail: { shortName: "Warfare" }, type: AttribType.Abilities } ],
    [ nanoid(), { detail: { shortName: "Willpower" }, type: AttribType.Abilities } ],
    [ nanoid(), { detail: { shortName: "Manipulation" }, type: AttribType.Abilities } ],
    [ nanoid(), { detail: { shortName: "Dodge" }, type: AttribType.Defenses } ],
    [ nanoid(), { detail: { shortName: "Tenacity" }, type: AttribType.Defenses } ],
    [ nanoid(), { detail: { shortName: "Fortitude" }, type: AttribType.Defenses } ],
    [ nanoid(), { detail: { shortName: "Resolve" }, type: AttribType.Defenses } ],
    [ nanoid(), { detail: { shortName: "Insight" }, type: AttribType.Defenses } ],
  ] )
}

export function AttribGrowth(): Array<number> {
  return [ 
    19, 20, 22, 23, 25, 27, 28, 29, 31, 32, 34, 36, 37, 38, 40, 41, 43, 45 
  ]
}