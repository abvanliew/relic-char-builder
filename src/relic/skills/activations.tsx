import { nanoid } from "nanoid"
import RuleDetail, { RuleElement } from "relic/rules"


export type Activations = Map<string, RuleDetail>
export type ActivationElement = RuleElement

export function DefaultActivations(): Activations {
  return new Map<string, RuleDetail> ( [
    [ nanoid(), { shortName: "Action" } ],
    [ nanoid(), { shortName: "Reaction" } ],
    [ nanoid(), { shortName: "Trigger" } ],
    [ nanoid(), { shortName: "Boon" } ],
    [ nanoid(), { shortName: "Complex" } ],
    [ nanoid(), { shortName: "Initial" } ],
    [ nanoid(), { shortName: "Free" } ],
    [ nanoid(), { shortName: "Extended" } ],
  ] )
}