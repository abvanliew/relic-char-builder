import RuleDetail from "relic/library/rules"

export interface ImproveAttributeMaxInTier extends RuleDetail {
  attributeId: string
  amount: number
}

export interface ImproveExpertiseMaxInTier extends RuleDetail {
  expertiseId: string
  amount: number
}

export interface ImproveAttributeFromList extends RuleDetail {
  attributeIds: Array<string>
}

export interface ImporveCharacterist extends RuleDetail {
  amount: number
  characteristId: string
  max?: number
  tier?: number
  initial?: boolean
}

export interface LearnSkill extends RuleDetail {
  skillId: string
}

export interface LearnSkillFromParent extends RuleDetail {
  costIdMatch: string
}

export interface LearnSpellFromParent extends RuleDetail {
  costIdMatch: string
  learnAsId: string
  learnAll?: boolean
}

export interface SelectKeyword extends RuleDetail {
  keywordIds: Array<string>
  min?: number
  max?: number
}

export interface SetGrowthHealthGain extends RuleDetail {
  growthId: string
  amount: number
}

export interface SetGrowthConAtInterval extends RuleDetail {
  growthId: string
  amount: number
  interval: number
}

export interface SetGrowthInterval extends RuleDetail {
  growthId: string
  interval: number
}