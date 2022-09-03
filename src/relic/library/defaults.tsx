import { nanoid } from "nanoid"
import RuleDetail, { Keywords } from "relic/library/rules"
import Skills, { Skill } from "relic/skills"
import { Attribute, Attributes, AttributeType } from "relic/character/attributes"
import InherentSkills from "relic/library/skills/inherent"

function DefaultKeyAttribSkills(): [ Keywords, Attributes, Skills ] {
  let keyIds: any = KeyIds()
  let keywords: Keywords = DefaultKeywords( keyIds )
  let attributes: Attributes = DefaultAttributes( keyIds )
  let skills: Skills = DefaultSkills( keyIds )
  
  return [ keywords, attributes, skills ]
}

function KeyIds(): any {
  return {
// Attributes
    Attributes: nanoid(),

    Abilities: nanoid(), 
    Physique: nanoid(), 
    Warfare: nanoid(), 
    Willpower: nanoid(), 
    Manipulation: nanoid(), 

    Defenses: nanoid(), 
    Dodge: nanoid(), 
    Tenacity: nanoid(), 
    Fortitude: nanoid(), 
    Resolve: nanoid(), 
    Insight: nanoid(), 

// Damage Types
    Resistances: nanoid(), 

    Physical: nanoid(), 
    Bashing: nanoid(), 
    Slashing: nanoid(), 
    Piercing: nanoid(), 

    Energy: nanoid(), 
    Fire: nanoid(), 
    Cold: nanoid(), 
    Lighting: nanoid(), 
    Thunder: nanoid(), 
    Acid: nanoid(), 
    Force: nanoid(), 

    Essence: nanoid(), 
    Radiant: nanoid(), 
    Necrotic: nanoid(), 
    Psionic: nanoid(), 

// Characteristics
    Health: nanoid(),
    Constitution: nanoid(),
    Speed: nanoid(),

// Resource Flows and Pools 
    MagicFlow: nanoid(),
    StillariMana: nanoid(),
    UndaMana: nanoid(),
    AmnisMana: nanoid(),

    ResonanceFlow: nanoid(),
    ChannelPool: nanoid(),
    InspirationPool: nanoid(),
    MasteryPool: nanoid(),
    KiPool: nanoid(),

    InnateFlow: nanoid(),
    AnoitmentPool: nanoid(),
    RagePool: nanoid(),
    SanguinePool: nanoid(),

// Spell Types and Slots
    Conduit: nanoid(),

// Skill costs
    Inherent: nanoid(), 
    LearnHalf: nanoid(), 
    LearnFull: nanoid(), 
    LearnCantrip: nanoid(), 
    LearnSpell: nanoid(), 

// Activation Keywords
    Action: nanoid(), 
    Reaction: nanoid(), 
    Trigger: nanoid(), 
    Boon: nanoid(), 
    Complex: nanoid(), 
    Initial: nanoid(), 
    Free: nanoid(), 
    Extended: nanoid(), 

// Roll types
    Attack: nanoid(),
    Check: nanoid(),
    Luck: nanoid(),

// Roll Results
    Miss: nanoid(),
    Fail: nanoid(),
    Hit: nanoid(),
    Success: nanoid(),
    Critical: nanoid(),

// Common Skill Rules
    Advantage: nanoid(), 
    Disadvantage: nanoid(), 
    Duration: nanoid(), 
    Condition: nanoid(), 
    Target: nanoid(), 

// Basic Skill Catagorization
    Movement: nanoid(), 
    Stealth: nanoid(), 
    Resistance: nanoid(), 
    Defense: nanoid(), 

    Melee: nanoid(), 
    Ranged: nanoid(), 

    Martial: nanoid(), 
    Weapon: nanoid(), 
    Block: nanoid(), 
    Heavy: nanoid(), 
    OneHanded: nanoid(), 
    Light: nanoid(), 
    NaturalWeapon: nanoid(), 

    Supernatural: nanoid(), 

    Magic: nanoid(), 
    Spell: nanoid(), 
    Arcane: nanoid(), 
    Divine: nanoid(), 
    Nature: nanoid(), 
  }
}

function DefaultKeywords( keyIds: any ): Keywords {
  return new Map<string, RuleDetail>( [
    [ keyIds.Attributes, { name: "Attributes" } ],

    [ keyIds.Abilities, { name: "Abilities" } ],
    [ keyIds.Physique, { name: "Physique" } ],
    [ keyIds.Warfare, { name: "Warfare" } ],
    [ keyIds.Willpower, { name: "Willpower" } ],
    [ keyIds.Manipulation, { name: "Manipulation" } ],

    [ keyIds.Defenses, { name: "Defenses" } ],
    [ keyIds.Dodge, { name: "Dodge" } ],
    [ keyIds.Tenacity, { name: "Tenacity" } ],
    [ keyIds.Fortitude, { name: "Fortitude" } ],
    [ keyIds.Resolve, { name: "Resolve" } ],
    [ keyIds.Insight, { name: "Insight" } ],

    [ keyIds.Resistances, { name: "Resistances" } ],

    [ keyIds.Physical, { name: "Physical" } ],
    [ keyIds.Bashing, { name: "Bashing" } ],
    [ keyIds.Slashing, { name: "Slashing" } ],
    [ keyIds.Piercing, { name: "Piercing" } ],

    [ keyIds.Energy, { name: "Energy" } ],
    [ keyIds.Fire, { name: "Fire" } ],
    [ keyIds.Cold, { name: "Cold" } ],
    [ keyIds.Lighting, { name: "Lighting" } ],
    [ keyIds.Thunder, { name: "Thunder" } ],
    [ keyIds.Acid, { name: "Acid" } ],
    [ keyIds.Force, { name: "Force" } ],

    [ keyIds.Essence, { name: "Essence" } ],
    [ keyIds.Radiant, { name: "Radiant" } ],
    [ keyIds.Necrotic, { name: "Necrotic" } ],
    [ keyIds.Psionic, { name: "Psionic" } ],

    [ keyIds.Inherent, { name: "Inherent" } ],
    [ keyIds.LearnHalf, { name: "Half" } ],
    [ keyIds.LearnFull, { name: "Full" } ],
    [ keyIds.LearnCantrip, { name: "Cantrip" } ],
    [ keyIds.LearnSpell, { name: "Spell" } ],

    [ keyIds.Attack, { name: "Attack" } ],
    [ keyIds.Check, { name: "Check" } ],
    [ keyIds.Luck, { name: "Luck" } ],

    [ keyIds.Action, { name: "Action" } ],
    [ keyIds.Reaction, { name: "Reaction" } ],
    [ keyIds.Trigger, { name: "Trigger" } ],
    [ keyIds.Boon, { name: "Boon" } ],
    [ keyIds.Complex, { name: "Complex" } ],
    [ keyIds.Initial, { name: "Initial" } ],
    [ keyIds.Free, { name: "Free" } ],
    [ keyIds.Extended, { name: "Extended" } ],

    [ keyIds.Miss, { name: "Miss" } ],
    [ keyIds.Fail, { name: "Fail" } ],
    [ keyIds.Hit, { name: "Hit" } ],
    [ keyIds.Success, { name: "Success" } ],
    [ keyIds.Critical, { name: "Critical" } ],
    
    [ keyIds.Advantage, { name: "Advantage" } ],
    [ keyIds.Disadvantage, { name: "Disadvantage" } ],
    [ keyIds.Duration, { name: "Duration" } ],
    [ keyIds.Condition, { name: "Condition" } ],
    [ keyIds.Target, { name: "Target" } ],

    [ keyIds.Movement, { name: "Movement" } ],
    [ keyIds.Stealth, { name: "Stealth" } ],
    [ keyIds.Resistance, { name: "Resistance" } ],
    [ keyIds.Defense, { name: "Defense" } ],

    [ keyIds.Melee, { name: "Melee" } ],
    [ keyIds.Ranged, { name: "Ranged" } ],

    [ keyIds.Martial, { name: "Martial" } ],
    [ keyIds.Weapon, { name: "Weapon" } ],
    [ keyIds.Block, { name: "Block" } ],
    [ keyIds.Heavy, { name: "Heavy" } ],
    [ keyIds.OneHanded, { name: "One-Handed" } ],
    [ keyIds.Light, { name: "Light" } ],
    [ keyIds.NaturalWeapon, { name: "Natural Weapon" } ], 

    [ keyIds.Supernatural, { name: "Supernatural" } ],

    [ keyIds.Magic, { name: "Magic" } ],
    [ keyIds.Arcane, { name: "Arcane" } ],
    [ keyIds.Divine, { name: "Divine" } ],
    [ keyIds.Nature, { name: "Nature" } ],
  ] )
}

function DefaultAttributes( keyIds: any ): Array<Attribute> {
  return [
    { id: keyIds.Physique, type: AttributeType.Abilities },
    { id: keyIds.Warfare, type: AttributeType.Abilities },
    { id: keyIds.Willpower, type: AttributeType.Abilities },
    { id: keyIds.Manipulation, type: AttributeType.Abilities },
    { id: keyIds.Dodge, type: AttributeType.Defenses },
    { id: keyIds.Tenacity, type: AttributeType.Defenses },
    { id: keyIds.Fortitude, type: AttributeType.Defenses },
    { id: keyIds.Resolve, type: AttributeType.Defenses },
    { id: keyIds.Insight, type: AttributeType.Defenses },
  ]
}

function DefaultSkills( keyIds: any ): Map<string, Skill> {
  let skills: Skills = new Map<string, Skill>()

  InherentSkills( skills, keyIds )

  return skills
}

export default DefaultKeyAttribSkills;