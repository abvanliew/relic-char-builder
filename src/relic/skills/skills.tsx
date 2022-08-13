import { NamedRuleGroup } from "relic/rules";

export interface Skill {
  tier: number
  cost: TrainingCost
  details: NamedRuleGroup
}
type Skills = Map<string, Skill>

export const enum TrainingCost {
  Inherent = 0, 
  Half, 
  Full, 
  Cantrip, 
  Spell, 
}

export function DefaultSkills():Skills {
  let skills: Skills = new Map<string, Skill>()
  
  // some logic here
  
  return skills
}

export default Skills;