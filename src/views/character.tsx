import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import { RelicLibraryProps } from "relic/library";
import RelicCharacter from "relic/character";
import Description from 'charEditor/description';
import CharacterView from 'charEditor/view';

interface CharacterPanelProps extends RelicLibraryProps {}

export interface CharacterProps extends RelicLibraryProps {
  character: RelicCharacter
}

export interface CharacterEditorProps extends CharacterProps {
  propertyHandler: ( newValue: any ) => void
  attribHandler: ( key: string, value: number ) => void
}

function CharacterPanel( { ...props }: CharacterPanelProps ): JSX.Element {
  const [ character, setState ] = useState<RelicCharacter>( props.library.NewCharacter() )

  function setProperty( newValue: any ) {
    setState( { ...character, ...newValue } )
  }

  function setAttribute( key: string, value: number ) {
    let attributes: Map<string, number> = new Map<string, number>( character.attributes )
    attributes.set( key, value )
    setState( { ...character, attributes: attributes } )
  }

  let charProps: CharacterProps = {
    library: props.library, 
    character: character, 
  }

  let editorProps: CharacterEditorProps = {
    ...charProps, 
    propertyHandler: setProperty, 
    attribHandler: setAttribute, 
  }

  return (
    <>
    <Routes>
      <Route path="/" element={ <CharacterLayout/> }>
        <Route index element={ <Description { ...editorProps }/> }/>
        <Route path="description" element={ <Description { ...editorProps }/> }/>
        <Route path="features" element={ <Description { ...editorProps }/> }/>
        <Route path="view" element={ <CharacterView/> }/>
      </Route>
    </Routes>
    </>
  )
}

function CharacterLayout():JSX.Element {
  return (
    <>
    <div>
      <Link className="plain" to="description">Description</Link>
      <Link className="plain" to="features">Features</Link>
      <Link className="plain" to="view">View</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default CharacterPanel;