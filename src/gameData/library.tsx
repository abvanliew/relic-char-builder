import Character from 'gameData/character';
import { AttribDef, AttribValues, AttribDefs, AttribGrowth } from 'gameData/attributes';

class GameLibrary {
  minLevel: number
  maxLevel: number
  minRanks: number
  maxRanks: number
  attribDefs: Array<AttribDef>
  attribGrowth: Array<number>

  constructor() {
    this.minLevel = 1
    this.maxLevel = 18
    this.minRanks = 0
    this.maxRanks = 5
    this.attribDefs = AttribDefs()
    this.attribGrowth = AttribGrowth()
  }

  NewCharacter(): Character {
    let character: Character = new Character()
    character.attributes = this.DefaultAttributes()
    return character
  }

  DefaultAttributes(): AttribValues {
    let attributes: AttribValues = {}
    this.attribDefs.forEach( ( def:AttribDef ) => { attributes[def.id] = this.minRanks; } )
    return attributes
  }

  getAttribTotal( character: Character ): number {
    console.log( character )
    return this.attribGrowth[ this.levelCap( character.level ) - 1 ]
  }

  levelCap( value: number ): number {
    return value < this.minLevel ? this.minLevel : value > this.maxLevel ? this.maxLevel : value
  }
}

export default GameLibrary