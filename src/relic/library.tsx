import Character from 'relic/characters/character';
import { AttribDef, AttribDefs, AttribGrowth } from 'relic/characters/attributes';
import { PathDef, PathDefs, PathGrowth } from 'relic/paths/paths';

class GameLibrary {
  minLevel: number
  maxLevel: number
  minRanks: number
  maxRanks: number
  attributes: Map<string, AttribDef>
  attribGrowth: Array<number>
  paths: Map<string, PathDef>
  pathGrowth: Map<number, Array<number>>

  constructor() {
    this.minLevel = 1
    this.maxLevel = 18
    this.minRanks = 0
    this.maxRanks = 5
    this.attributes = AttribDefs()
    this.attribGrowth = AttribGrowth()
    this.paths = PathDefs()
    this.pathGrowth = PathGrowth()
  }

  NewCharacter(): Character {
    let character: Character = new Character()
    character.attributes = this.DefaultAttributes()
    return character
  }

  DefaultAttributes(): Map<string, number> {
    let attributes: Map<string, number> = new Map<string, number>()
    for( let key of this.attributes.keys() ) {
      attributes.set( key, this.minRanks )
    }
    return attributes
  }

  getAttribTotal( character: Character ): number {
    return this.attribGrowth[ this.levelCap( character.level ) - 1 ]
  }

  levelCap( value: number ): number {
    return value < this.minLevel ? this.minLevel : value > this.maxLevel ? this.maxLevel : value
  }
}

export default GameLibrary