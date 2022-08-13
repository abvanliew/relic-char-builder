import { nanoid } from 'nanoid';

class Character {
  id: string
  level: number
  name: string
  race: string
  paths: Array<string>
  attributes: Map<string, number>
  features: any
  skills: any;

  constructor() {
    this.id = nanoid()
    this.level = 1
    this.name = ""
    this.race = ""
    this.paths = []
    this.attributes = new Map<string, number>()
    this.features = {}
    this.skills = {}
  }
}

export default Character;