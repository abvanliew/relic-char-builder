import { useRef } from 'react';

type CharTraitProps = {
  name: string;
  race: string;
  level: number;
  minLevel: number;
  maxLevel: number;
  propertyHandler: ( newValue: any ) => void;
}

function CharTraits( props: CharTraitProps ): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null!);
  const raceRef = useRef<HTMLInputElement>(null!);
  const levelRef = useRef<HTMLInputElement>(null!);

  function nameChange() {
    props.propertyHandler( { name: nameRef.current.value } );
  }

  function raceChange() {
    props.propertyHandler( { race: raceRef.current.value } );
  }

  function levelChange() {
    let inputLevel: number = parseInt( levelRef.current.value );
    inputLevel = inputLevel < props.minLevel ? props.minLevel : inputLevel > props.maxLevel ? props.maxLevel : inputLevel
    props.propertyHandler( { level: inputLevel } );
  }

  return (
    <>
    <div>
      <label>Name</label>
      <input ref={nameRef} onChange={nameChange} value={props.name}/>
    </div>
    <div>
      <label>Race</label>
      <input ref={raceRef} onChange={raceChange} value={props.race}/>
    </div>
    <div>
      <label>Level</label>
      <input 
        ref={levelRef} 
        onChange={levelChange} 
        value={props.level} 
        type="text" 
        inputMode="numeric" 
        pattern="[0-9]+" 
      />
    </div>
    </>
  )
}

export default CharTraits;



// const inputRef = useRef<HTMLInputElement>(null!);
// function setText()
// {
//   let trimed = inputRef.current.value.trim();
//   if( !!trimed ) { setAppData( { ...curAppData, test: trimed } ) }
// }
// return (
//   <>
//     <input ref={inputRef} type="text"/>
//     <button onClick={setText}>set</button>
//     <div>{ curAppData.test }</div>
//   </>
// )