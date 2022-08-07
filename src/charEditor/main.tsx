import { useState } from 'react';
import CharTraits from "charEditor/traits";
import GameLibrary from "gameData/library";
import Character from "gameData/character";
import Attributes from './attributes';

interface CharEditorProps {
  library: GameLibrary;
}

function CharacterEditor( { ...props }: CharEditorProps ): JSX.Element {
  const [ character, setState ] = useState<Character>( props.library.NewCharacter() )

  function setProperty( newValue: any ) {
    setState( { ...character, ...newValue } )
  }

  return (
    <>
    <div>
      <CharTraits 
        name={character.name} 
        race={character.race} 
        level={character.level} 
        minLevel={props.library.minLevel} 
        maxLevel={props.library.maxLevel} 
        propertyHandler={setProperty} 
      />
    </div>
    <div>
      <Attributes 
        remaining={ props.library.getAttribTotal( character ) } 
        min={ props.library.minRanks } 
        max={ props.library.maxRanks } 
        values={ character.attributes } 
        library={ props.library } 
        propertyHandler={ setProperty } 
      />
    </div>
    </>
  )
}

export default CharacterEditor;