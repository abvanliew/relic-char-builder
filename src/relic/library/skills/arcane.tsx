import { nanoid } from "nanoid"
import { Skill } from "relic/skills"
import { GroupValueType, RuleElement } from "relic/library/rules"

export default function ArcaneSpells( skills: Map<string, Skill>, keyIds: any ): Map<string, Skill> {
  skills.set( nanoid(), {
    tier: 0, 
    cost: { id: keyIds.LearnSpell }, 
    details: { 
      name: "Teleport Sigil", 
      shortDescription: "Create an invisible sigil that you can teleport back to.", 
    }, 
    activations: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Action } ],
    ] ), 
    keywords: new Map<string, RuleElement> ( [ 
      [ nanoid(), { id: keyIds.Martial  } ],
      [ nanoid(), { id: keyIds.Weapon } ], 
    ] ), 
    rules: new Map<string, GroupValueType> ( [
      [ nanoid(), "Make two attacks with light weapon(s)." ],
      [ nanoid(), "*Note: You can either make one attack with two different weapons or two attacks with one weapon." ],
    ] ),
  } )

  return skills
}