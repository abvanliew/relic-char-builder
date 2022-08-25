import RelicCharacter from 'relic/character';
import { AttribGrowth, Attributes } from 'relic/character/attributes';
import { PathDef, PathDefs, PathGrowth } from 'relic/paths';
import Skills, { Skill } from 'relic/skills';
import RuleDetail, { Keywords } from 'relic/library/rules';
import DefaultKeyAttribSkills from 'relic/library/defaults';

export interface RelicLibraryProps {
  library: RelicLibrary
}

class RelicLibrary {
  minLevel: number
  maxLevel: number
  minRanks: number
  maxRanks: number
  attributes: Attributes
  attribGrowth: Array<number>
  paths: Map<string, PathDef>
  pathGrowth: Map<number, Array<number>>
  skills: Skills
  keywords: Keywords
  
  constructor() {
    let [ keys, attributes, skills ] = DefaultKeyAttribSkills()
    this.minLevel = 1
    this.maxLevel = 18
    this.minRanks = 0
    this.maxRanks = 5
    this.attributes = attributes
    this.attribGrowth = AttribGrowth()
    this.paths = PathDefs()
    this.pathGrowth = PathGrowth()
    this.keywords = keys
    this.skills = skills
  }

  NewCharacter(): RelicCharacter {
    let character: RelicCharacter = new RelicCharacter()
    character.attributes = this.DefaultAttributes()
    return character
  }

  DefaultAttributes(): Map<string, number> {
    let attributes: Map<string, number> = new Map<string, number>()
    for( let attrib of this.attributes.values() ) {
      attributes.set( attrib.id, this.minRanks )
    }
    return attributes
  }

  getAttribTotal( character: RelicCharacter ): number {
    return this.attribGrowth[ this.levelClamp( character.level ) - 1 ]
  }

  levelClamp( value: number ): number {
    return value < this.minLevel ? this.minLevel : value > this.maxLevel ? this.maxLevel : value
  }
  
  getKeywordDetail( id: string ): RuleDetail | undefined {
    return this.keywords.get( id )
  }

  checkSkillId( id: string | undefined ): boolean {
    if( !id || !this.skills.has( id ) ) return false
    return true
  }

  getSkillDetail( id: string | undefined ): [ RuleDetail | undefined, boolean ] {
    if( !id ) return [ undefined,  false ]
    let skill: Skill | undefined = this.skills.get( id )
    if( !skill ) return [ undefined,  false ]
    return [ skill.details, true ]
  }

  getTierName( tier: number ): string {
    if( tier === 0 ) return "Initiate"
    if( tier === 1 ) return "Journeyman"
    if( tier === 2 ) return "Master"
    return ""
  }
}

export default RelicLibrary