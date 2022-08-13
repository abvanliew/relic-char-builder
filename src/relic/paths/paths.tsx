import { nanoid } from 'nanoid';
import RuleDetail from 'relic/rules';

export interface PathDef {
  tier: number
  details: RuleDetail
  keystones?: Array<string>
  features?: Array<string>
  skills?: Array<string>
}

export function PathDefs(): Map<string, PathDef> {
  return new Map<string, PathDef>( [
    [ nanoid(), { tier: 0, details: { shortName: "Warrior", shortDescription: "Martial combatant" } } ],
    [ nanoid(), { tier: 0, details: { shortName: "Wizard", shortDescription: "Arcane spellcaster" } } ],
    [ nanoid(), { tier: 0, details: { shortName: "Cleric", shortDescription: "Divine spellcaster" } } ],
  ] )
}

export function PathGrowth(): Map<number, Array<number>> {
  return new Map<number, Array<number>> ( [
    [ 0, [ 2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4 ] ],
    [ 1, [ 0,0,0,0,0,0,1,2,3,3,3,3,3,3,3,3,3,3 ] ],
    [ 2, [ 0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2 ] ],
  ] )
}