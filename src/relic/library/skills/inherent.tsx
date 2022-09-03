import { nanoid } from "nanoid"
import { Skill } from "relic/skills"
import { GroupValueType, RuleLayout, RuleElement } from "relic/library/rules"

export default function InherentSkills( skills: Map<string, Skill>, keyIds: any ): Map<string, Skill> {
  skills.set( nanoid(), {
    tier: 0, 
    cost: { id: keyIds.Inherent }, 
    details: { 
      name: "Dash", 
      shortDescription: "Gain 3 extra movement this turn.", 
    }, 
    activations: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Reaction } ],
    ] ), 
    keywords: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Movement } ],
    ] ), 
    rules: new Map<string, GroupValueType> ( [
      [ nanoid(), { id: keyIds.Duration, value: "Until the start of your next turn" } ],
      [ nanoid(), "Gain 3 extra movement." ],
    ] ),
  } )

  skills.set( nanoid(), {
    tier: 0, 
    cost: { id: keyIds.Inherent }, 
    details: { 
      name: "Defend", 
      shortDescription: "Improve your defense vs an attack or check", 
    }, 
    activations: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Reaction } ],
    ] ), 
    keywords: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Defense } ],
    ] ), 
    rules: new Map<string, GroupValueType> ( [
      [ nanoid(), { id: keyIds.Condition, value: "When you are targeted by an attack or check that you are aware of." } ],
      [ nanoid(), "Gain +4 Defense against the attack or check." ],
    ] ),
  } )

  skills.set( nanoid(), {
    tier: 0, 
    cost: { id: keyIds.Inherent }, 
    details: { 
      name: "Help", 
      shortDescription: "Help adjacent ally by giving them advantage or defense bonus", 
    }, 
    activations: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Complex } ],
      [ nanoid(), { id: keyIds.Action } ],
    ] ), 
    keywords: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Advantage } ],
      [ nanoid(), { id: keyIds.Defense } ],
    ] ), 
    rules: new Map<string, GroupValueType> ( [
      [ nanoid(), { id: keyIds.Duration, value: "Until the start of your next turn or until expended" } ],
      [ nanoid(), { id: keyIds.Target, value: "Adjacent ally" } ],
      [ nanoid(), "Target can choose to gain advantage on one roll or Defend once for free." ],
    ] ),
  } )

  skills.set( nanoid(), {
    tier: 0, 
    cost: { id: keyIds.Inherent }, 
    details: { 
      name: "Strike", 
      shortDescription: "Make one attack with a weapon", 
    }, 
    activations: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Action } ],
    ] ), 
    keywords: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Martial } ],
      [ nanoid(), { id: keyIds.Weapon } ],
    ] ), 
    rules: new Map<string, GroupValueType> ( [
      [ nanoid(), { id: keyIds.Target, value: "Single creature within weapon reach/range" } ],
      [ nanoid(), { ability: { id: keyIds.Warfare }, defense: { id: keyIds.Dodge } } ],
      [ nanoid(), { indent: true, rules: new Map<string, GroupValueType> ( [
        [ nanoid(), { id: keyIds.Hit, value: "Deal Weapon damage to target." } ],
        [ nanoid(), { id: keyIds.Critical, value: "Deal an extra die of damage." } ],
      ] ) } ],
    ] ),
  } )

  skills.set( nanoid(), {
    tier: 0, 
    cost: { id: keyIds.Inherent }, 
    details: { 
      name: "Two Weapon Fighting", 
      shortDescription: "Attack with two weapons or attack and block", 
    }, 
    activations: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Initial } ],
      [ nanoid(), { id: keyIds.Free } ],
      [ nanoid(), { id: keyIds.Action } ],
    ] ), 
    keywords: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Martial } ],
      [ nanoid(), { id: keyIds.Weapon } ],
      [ nanoid(), { id: keyIds.Light } ],
      [ nanoid(), { id: keyIds.OneHanded } ],
      [ nanoid(), { id: keyIds.Block } ],
    ] ), 
    rules: new Map<string, GroupValueType> ( [
      [ nanoid(), { id: keyIds.Condition, value: "When you make an attack with a non-heavy weapon." } ],
      [ nanoid(), { id: keyIds.Target, value: "Single creature within weapon reach/range" } ],
      [ nanoid(), { ability: { id: keyIds.Warfare }, defense: { id: keyIds.Dodge } } ],
      [ nanoid(), "Make an attack with another non-heavy weapon or ready an action to Block with another non-heavy weapon/shield" ],
    ] ),
  } )

  skills.set( nanoid(), {
    tier: 0, 
    cost: { id: keyIds.Inherent }, 
    details: { 
      name: "Hide", 
      shortDescription: "Hide from other creatures", 
    }, 
    activations: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Complex } ],
      [ nanoid(), { id: keyIds.Action } ],
    ] ), 
    keywords: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Stealth } ],
    ] ), 
    rules: new Map<string, GroupValueType> ( [
      [ nanoid(), { id: keyIds.Target, value: "Any creature that has Obscured vision of you, no light of sight to you or that you have full cover against." } ],
      [ nanoid(), { layout: RuleLayout.Inline, rules: new Map<string, GroupValueType> ( [
        [ nanoid(), "Make a " ],
        [ nanoid(), { ability: { id: keyIds.Manipulation }, defense: { id: keyIds.Insight } } ],
        [ nanoid(), { id: keyIds.Check } ],
        [ nanoid(), " against each " ],
        [ nanoid(), { id: keyIds.Target } ],
        [ nanoid(), ". If you moved more than half your speed this turn or are only Obscured from the target then make the check at disadvantage." ],
        [ nanoid(), { indent: true, layout: RuleLayout.Paragraph, rules: new Map<string, GroupValueType> ( [
          [ nanoid(), { id: keyIds.Success, value: "You are hidden from the target." } ],
        ] ) } ],
      ] ) } ],
    ] ),
  } )

  skills.set( nanoid(), {
    tier: 0, 
    cost: { id: keyIds.Inherent }, 
    details: { 
      name: "Push", 
      shortDescription: "Knock a creature prone or ", 
    }, 
    activations: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Action } ],
    ] ), 
    keywords: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Martial } ],
      [ nanoid(), { id: keyIds.Melee } ],
    ] ), 
    rules: new Map<string, GroupValueType> ( [
      [ nanoid(), { id: keyIds.Target, value: "One creature within melee reach." } ],
      [ nanoid(), { layout: RuleLayout.Inline, rules: new Map<string, GroupValueType> ( [
        [ nanoid(), "Make a " ],
        [ nanoid(), { ability: { id: keyIds.Physique }, defense: { id: keyIds.Tenacity } } ],
        [ nanoid(), { id: keyIds.Attack } ],
        [ nanoid(), " against the " ],
        [ nanoid(), { id: keyIds.Target } ],
        [ nanoid(), "." ],
        [ nanoid(), { indent: true, layout: RuleLayout.Paragraph, rules: new Map<string, GroupValueType> ( [
          [ nanoid(), { id: keyIds.Hit, value: "Choose to either push target 1 space or knock target prone." } ],
          [ nanoid(), { id: keyIds.Critical, value: "You can choose to do both or push the target 2 spaces." } ],
        ] ) } ],
      ] ) } ],
    ] ),
  } )

  return skills
}