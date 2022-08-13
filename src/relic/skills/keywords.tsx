import { nanoid } from "nanoid"
import RuleDetail, { RuleElement } from "relic/rules"

export type Keywords = Map<string, RuleDetail>
export type KeywordElement = RuleElement

export function DefaultKeywords(): Keywords {
  return new Map<string, RuleDetail> ( [
    [ nanoid(), { shortName: "Martial" } ],
    [ nanoid(), { shortName: "Arcane" } ],
    [ nanoid(), { shortName: "Divine" } ],
    [ nanoid(), { shortName: "Nature" } ],
    [ nanoid(), { shortName: "Movement" } ],
    [ nanoid(), { shortName: "Resistances" } ],
    [ nanoid(), { shortName: "Defenses" } ],
    [ nanoid(), { shortName: "Melee" } ],
    [ nanoid(), { shortName: "Ranged" } ],
    [ nanoid(), { shortName: "Weapon" } ],
    [ nanoid(), { shortName: "Magic" } ],
    [ nanoid(), { shortName: "Supernatural" } ],
    [ nanoid(), { shortName: "Supernatural" } ],
  ] )
}