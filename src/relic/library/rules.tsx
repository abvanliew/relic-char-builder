interface RuleDetail {
  name: string
  shortDescription?: string | undefined
  fullDescription?: string | undefined
  refUrl?: string | undefined
}

export interface RuleGroup {
  rules: Map<string, GroupValueType>
  indent?: boolean
  layout?: RuleLayout
}

export const enum RuleLayout {
  Inline = 0,
  Delimited,
  Paragraph
}

export interface NamedRuleGroup extends RuleGroup {
  details: RuleDetail
  activations?: Map<string, RuleElement> | undefined
  keywords?: Map<string, RuleElement> | undefined
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

export type Keywords = Map<string, RuleDetail>

export interface KeywordSelector {
  options: Array<string>
}

export interface VsElement {
  ability: RuleElement
  defense: RuleElement
}

export type GroupType = 
| RuleGroup
| NamedRuleGroup
| RuleOperator
| VsElement;

export type GroupValueType =
| GroupType
| RuleElement
| string;

export type ElementValueType = 
| GroupType
| string
| number;

export default RuleDetail;