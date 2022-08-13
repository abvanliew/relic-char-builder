import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import GameLibrary from "relic/library";
import Character from "relic/characters/character";

import CharTraits from "charEditor/traits";
import Attributes from 'charEditor/attributes';

interface CharEditorProps {
  library: GameLibrary
}

function CharacterEditor( { ...props }: CharEditorProps ): JSX.Element {
  const [ character, setState ] = useState<Character>( props.library.NewCharacter() )

  function setProperty( newValue: any ) {
    setState( { ...character, ...newValue } )
  }

  function setAttribute( key: string, value: number ) {
    let attributes: Map<string, number> = new Map<string, number>( character.attributes )
    attributes.set( key, value )
    setState( { ...character, attributes: attributes } )
  }

  function Description():JSX.Element {
    return (
      <>
        <CharTraits 
          name={character.name} 
          race={character.race} 
          level={character.level} 
          minLevel={props.library.minLevel} 
          maxLevel={props.library.maxLevel} 
          propertyHandler={setProperty} 
        />
        <Attributes 
          total={ props.library.getAttribTotal( character ) } 
          min={ props.library.minRanks } 
          max={ props.library.maxRanks } 
          attributes={ character.attributes } 
          library={ props.library } 
          attribHandler={ setAttribute } 
        />
      </>
    )
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<EditorLayout />} >
        <Route index element={ <Description/> }/>
        <Route path="description" element={ <Description/> } />
      </Route>
    </Routes>
    </>
  )
}

function EditorLayout():JSX.Element {
  return (
    <>
    <div>
      <Link className="plain" to="description">Description</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default CharacterEditor;