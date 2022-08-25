import RelicCharacter from "relic/character";
import { RelicLibraryProps } from "relic/library";

export interface RelicDataProps extends RelicLibraryProps {
  data: RelicData
}

class RelicData {
  characters: Map<string, RelicCharacter> = new Map<string, RelicCharacter>()
}

export default RelicData;