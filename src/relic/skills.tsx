import { NamedRuleGroup, RuleElement } from "relic/library/rules";

export interface Skill extends NamedRuleGroup {
  tier: number
  cost: RuleElement
  requirements?: Array<string>
}
type Skills = Map<string, Skill>

export default Skills;