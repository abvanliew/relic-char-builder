import { useRef } from 'react';
import GameLibrary from 'relic/library';
import { AttribType } from 'relic/characters/attributes';

interface AttributeProps {
  total: number;
  min: number;
  max: number;
  attributes: Map<string, number>;
  library: GameLibrary;
  attribHandler: ( key: string, value: number ) => void;
}

function Attributes( { ...props }: AttributeProps ): JSX.Element {
  let abilities: Array<JSX.Element> = []
  let defenses: Array<JSX.Element> = []
  let current: number = 0;

  for( let val of props.attributes.values() ) {
    current += val
  }

  for( let [ key, def ] of props.library.attributes ) {
    let attribLine: JSX.Element = (
      <AttribLine 
        key = { key } 
        id = { key } 
        name = { def.detail.shortName } 
        ranks = { props.attributes.get( key )??props.min } 
        min = { props.min } 
        max = { props.max } 
        type = { def.type } 
        attribHandler = { props.attribHandler } 
      />
    )
    if( def.type === AttribType.Abilities ) {
      abilities.push( attribLine )
    } else 
    if ( def.type === AttribType.Defenses ) {
      defenses.push( attribLine )
    }
  }

  return (
    <>
    <div>Remaining Ranks: { props.total - current }</div>
    <div>Abilities</div>
    <div>
      { abilities.map( ( line: JSX.Element ) => { return line } ) }
    </div>
    <div>Defenses</div>
    <div>
      { defenses.map( ( line: JSX.Element ) => { return line } ) }
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
  attribHandler: ( key: string, value: number ) => void;
}

function AttribLine( { ...props }:AttribLineProps ): JSX.Element {
  const inputValue = useRef<HTMLInputElement>(null!);
  function change() {
    let inputRanks: number = parseInt( inputValue.current.value ) || props.min;
    inputRanks = inputRanks < props.min ? props.min : inputRanks > props.max ? props.max : inputRanks
    props.attribHandler( props.id, inputRanks ) 
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