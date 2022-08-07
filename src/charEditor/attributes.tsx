import { useRef } from 'react'
import GameLibrary from 'gameData/library'
import { AttribType, AttribDef, AttribValues } from 'gameData/attributes'

interface AttributeProps {
  remaining: number;
  min: number;
  max: number;
  values: AttribValues;
  library: GameLibrary;
  propertyHandler: ( newValue: any ) => void;
}

function Attributes( { ...props }: AttributeProps ): JSX.Element {
  console.log( props )

  let abilities: Array<AttribLineProps> = []
  let defenses: Array<AttribLineProps> = []

  props.library.attribDefs.forEach( ( def: AttribDef ) => { 
    let attribProps: AttribLineProps = { 
      id: def.id,
      name: def.name,
      ranks: props.values[def.id],
      min: props.min, max: props.max,
      type: def.type,
      propertyHandler: props.propertyHandler,
    }

    if( def.type === AttribType.Abilities ) {
      abilities.push( attribProps )
    } else 
    if ( def.type === AttribType.Defenses ) {
      defenses.push( attribProps )
    }
  } )

  return (
    <>
    <div>Remaining Ranks: {props.remaining}</div>
    <div>Abilities</div>
    <div>
      { abilities.map( ( props: AttribLineProps ) => {
        return (
          <AttribLine 
            key = { props.id } 
            id = { props.id } 
            name = { props.name } 
            ranks = { props.ranks } 
            min = { props.min } 
            max = { props.max } 
            type = { props.type } 
            propertyHandler = { props.propertyHandler } 
          />
        );
      } ) }
    </div>
    <div>Defenses</div>
    <div>
      { defenses.map( ( props: AttribLineProps ) => {
        return (
          <AttribLine 
            key = { props.id } 
            id = { props.id } 
            name = { props.name } 
            ranks = { props.ranks } 
            min = { props.min } 
            max = { props.max } 
            type = { props.type } 
            propertyHandler = { props.propertyHandler } 
          />
        );
      } ) }
    </div>
    </>
  )
}

interface AttribLineProps {
  id: string;
  name: string;
  ranks: number;
  min: number;
  max: number;
  type: AttribType;
  propertyHandler: ( newValue: any ) => void;
}

function AttribLine( { ...props }:AttribLineProps ): JSX.Element {
  const inputValue = useRef<HTMLInputElement>(null!);
  function change() {
    let inputRanks: number = parseInt( inputValue.current.value );
    inputRanks = inputRanks < props.min ? props.min : inputRanks > props.max ? props.max : inputRanks
    props.propertyHandler( { attributes: { [props.id]: inputRanks } } ) 
  }

  return (
    <>
    <div>
      <div>
        <label>{props.name}</label>
        <input 
          ref={inputValue} 
          type="text" 
          inputMode="numeric" 
          pattern="[0-9]+" 
          value={props.ranks} 
          onChange={change} 
        />
      </div>
    </div>
    </>
  )
}

export default Attributes;