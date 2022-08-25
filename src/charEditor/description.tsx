import CharTraits from "charEditor/traits";
import Attributes from 'charEditor/attributes';
import { CharacterEditorProps } from "views/character";

function Description( { ...props }: CharacterEditorProps ):JSX.Element {
  return (
    <>
      <CharTraits 
        name={ props.character.name } 
        race={ props.character.race } 
        level={ props.character.level } 
        minLevel={ props.library.minLevel } 
        maxLevel={ props.library.maxLevel } 
        propertyHandler={ props.propertyHandler } 
      />
      <Attributes 
        total={ props.library.getAttribTotal( props.character ) } 
        min={ props.library.minRanks } 
        max={ props.library.maxRanks } 
        attributes={ props.character.attributes } 
        library={ props.library } 
        attribHandler={ props.attribHandler } 
      />
    </>
  )
}

export default Description;