import { ElementType, ElementValueType, GroupValueType } from "relic/skills/catagorization"

interface RuleDetail {
  shortName: string
  fullName?: string | undefined
  shortDescription?: string | undefined
  fullDescription?: string | undefined
  refUrl?: string | undefined
}

export interface NamedRuleGroup extends RuleGroup {
  details: RuleDetail
  activations?: Array<ElementType> | undefined
  keywords?: Array<ElementType> | undefined
}

export interface RuleGroup {
  values: Array<GroupValueType>
}

export interface RuleOperator extends RuleGroup {
  type: RuleOperatorType
}

export const enum RuleOperatorType {
  Identity = 0,
  Not,
  Or,
  And
}

export interface RuleElement {
  id: string
  value?: ElementValueType | undefined
}

export default RuleDetail;