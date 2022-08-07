import { nanoid } from 'nanoid';
import { AttribValues } from 'gameData/attributes';

class Character {
  id: string
  level: number
  name: string
  race: string
  paths: any
  attributes: AttribValues
  features: any
  skills: any;

  constructor() {
    this.id = nanoid()
    this.level = 1
    this.name = ""
    this.race = ""
    this.paths = {}
    this.attributes = {}
    this.features = {}
    this.skills = {}
  }
}

export default Character;