import { useRef } from 'react';
import { AttribType, AttribDef } from 'GameLibrary'

{/*<Attributes 
  remaining={15} 
  min={0} max={5} 
  values={curAppData.character.attributes} 
  defs={curAppData.library.attributes} 
  changeHandler={setAttribute} 
/> */}

interface AttributeProps {
  remaining: number;
  min: number;
  max: number;
  values: Array<number>;
  defs: Array<AttribDef>;
  changeHandler: (index: number, value: number) => number;
}

function Attributes( { remaining, min, max, values, defs, changeHandler }: AttributeProps ): JSX.Element {
  return (
    <>
    <div>Remaining Ranks: {remaining}</div>
    <div>Abilities</div>
    {/* <div>
      { defs.map( ( def ) => {
        if( def.type !== AttribType.Abilities ) { return (<></>); }
        return ( <AttribLine key={index.toString()} id={def.id} def={def} ranks={values[index]} min={min} max={max} changeHandler={changeHandler} /> );
      } ) }
    </div>
    <div>Defenses</div>
    <div>
      { defs.map( ( def, index ) => {
        if( def.type !== AttribType.Defenses ) { return (<></>); }
        return ( <AttribLine key={index.toString()} id={def.id} def={def} ranks={values[index]} min={min} max={max} changeHandler={changeHandler} /> );
      } ) }
    </div> */}
    </>
  )
}

interface AttribLineProps {
  id: number;
  name: string;
  ranks: number;
  min: number;
  max: number;
  type: AttribType;
  changeHandler: (index: number, value: number) => number;
}

function AttribLine( { id, name, ranks, min, max, type, changeHandler }:AttribLineProps ): JSX.Element {
  const inputValue = useRef<HTMLInputElement>(null!);
  function inc() { set( 1 ) }
  function dec() { set( -1 ) }
  function set( delta: number ) { changeHandler( id, delta + ranks ) }
  function change() {}

  console.log( name );

  return (
    <>
    <div>
      <div>
        <label>{name}</label>
        <input 
          ref={inputValue} 
          type="text" 
          inputMode="numeric" 
          pattern="[0-9]+"
          value={ranks}
          onChange={change}
        />
      </div>
      <div>
        <div onClick={dec}>-</div>
        <div onClick={inc}>+</div>
      </div>
      <div></div>
    </div>
    </>
  )
}

export default Attributes;